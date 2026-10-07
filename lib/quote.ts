/**
 * Quote-request model and validation, shared by the client form and the
 * /api/quote route handler.
 *
 * Submission layer: the form always POSTs to our own /api/quote endpoint. That
 * endpoint forwards the enquiry to a Formspree-style form endpoint when one is
 * configured through the QUOTE_FORM_ENDPOINT environment variable (server-side
 * only). When no endpoint is configured the site runs in clearly-labelled demo
 * mode and reports honestly that nothing was sent.
 */

export const workTypes = [
  "Roof repairs & leak detection",
  "New roof / complete replacement",
  "Pitched, tiled or slate roofing",
  "Flat roofing",
  "Chimney repairs or leadwork",
  "Fascias, soffits & guttering",
  "Storm or emergency repair",
  "Not sure — please advise",
] as const;

export const urgencyLevels = [
  {
    value: "emergency",
    label: "Emergency — water is coming in now",
    hint: "We prioritise make-safe visits across the coverage area.",
  },
  {
    value: "few-days",
    label: "Within a few days",
    hint: "Something is wrong and needs looking at soon.",
  },
  {
    value: "within-month",
    label: "Within a month",
    hint: "Planned repair or improvement work.",
  },
  {
    value: "planning",
    label: "Planning ahead / budgeting",
    hint: "Quotes for work later in the year or next year.",
  },
] as const;

export const contactMethods = ["Phone", "Email", "Text message"] as const;

export type QuoteFormValues = {
  name: string;
  email: string;
  phone: string;
  location: string;
  workType: string;
  urgency: string;
  details: string;
  contactMethod: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  website: string;
};

export type FieldErrors = Partial<Record<keyof QuoteFormValues, string>>;

export const emptyQuoteForm: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  location: "",
  workType: "",
  urgency: "",
  details: "",
  contactMethod: "Phone",
  consent: false,
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UK_PHONE_RE = /^(?:\+44|0)[0-9\s()-]{9,17}$/;
const UK_POSTCODE_RE = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function validateQuoteForm(values: QuoteFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address, e.g. name@example.co.uk.";
  }

  const phoneDigits = digitsOnly(values.phone);
  if (!UK_PHONE_RE.test(values.phone.trim()) || phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Please enter a UK telephone number we can reach you on.";
  }

  const location = values.location.trim();
  if (location.length < 2) {
    errors.location = "Please give your postcode or town so we know where the job is.";
  } else if (
    /^\d+$/.test(location) ||
    (UK_POSTCODE_RE.test(location.replace(/\s+/g, " ")) === false && location.length < 4)
  ) {
    errors.location = "Please enter a UK postcode (e.g. CT20 1AB) or your town.";
  }

  if (!values.workType) {
    errors.workType = "Please choose the type of roofing work.";
  }

  if (!values.urgency) {
    errors.urgency = "Please tell us how urgent the job is.";
  }

  if (values.details.trim().length < 20) {
    errors.details = "Please describe the job in a sentence or two (at least 20 characters).";
  }

  if (!contactMethods.includes(values.contactMethod as (typeof contactMethods)[number])) {
    errors.contactMethod = "Please choose how you would like us to contact you.";
  }

  if (!values.consent) {
    errors.consent = "Please confirm we may contact you about this enquiry.";
  }

  return errors;
}

export type QuoteSubmissionResult =
  | {
      ok: true;
      mode: "delivered";
      message: string;
    }
  | {
      ok: true;
      mode: "demo";
      message: string;
    }
  | {
      ok: false;
      mode: "error";
      message: string;
      fieldErrors?: FieldErrors;
    };
