"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  contactMethods,
  emptyQuoteForm,
  urgencyLevels,
  workTypes,
  validateQuoteForm,
  type FieldErrors,
  type QuoteFormValues,
  type QuoteSubmissionResult,
} from "@/lib/quote";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldLabel: Record<keyof FieldErrors, string> = {
  name: "Name",
  email: "Email",
  phone: "Telephone",
  location: "Postcode or town",
  workType: "Type of roofing work",
  urgency: "Urgency",
  details: "Property and job details",
  contactMethod: "Preferred contact method",
  consent: "Consent",
  website: "Website",
};

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(emptyQuoteForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [resultMode, setResultMode] = useState<"delivered" | "demo" | null>(null);

  const submittingRef = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof QuoteFormValues>(key: K, value: QuoteFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Duplicate-submit protection: one enquiry per filled form, no double posts.
    if (submittingRef.current || status === "success") return;

    const clientErrors = validateQuoteForm(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      setServerMessage("Some details are missing or incomplete. Please check the fields below.");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    setErrors({});
    setServerMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as QuoteSubmissionResult;

      if (!result.ok) {
        setErrors(result.fieldErrors ?? {});
        setServerMessage(result.message);
        setStatus("error");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }

      setResultMode(result.mode);
      setServerMessage(result.message);
      setStatus("success");
    } catch {
      setServerMessage(
        "We could not reach the enquiry service. Please try again in a moment, or call us on " +
          site.phoneDisplay +
          "."
      );
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
    } finally {
      submittingRef.current = false;
    }
  }

  function resetForm() {
    setValues(emptyQuoteForm);
    setErrors({});
    setServerMessage("");
    setResultMode(null);
    setStatus("idle");
    requestAnimationFrame(() => firstFieldRef.current?.focus());
  }

  const errorKeys = Object.keys(errors) as (keyof FieldErrors)[];
  const submitting = status === "submitting";

  return (
    <div className="border border-line bg-paper">
      <div className="border-b border-line px-6 py-5 sm:px-8">
        <h2 className="font-display text-2xl sm:text-3xl">Request your free quote</h2>
        <p className="mt-2 text-[0.98rem] text-slate-mid">
          Tell us a little about the job and we will come back with a free, itemised written quote.
          Fields marked <span aria-hidden="true">*</span>
          <span className="sr-only">with an asterisk</span> are required.
        </p>
      </div>

      {status === "success" ? (
        <div className="px-6 py-10 sm:px-8" role="status" aria-live="polite">
          <div
            className={`border-l-4 px-5 py-4 ${
              resultMode === "demo"
                ? "border-copper bg-[#f7ede4]"
                : "border-[#3f6f4a] bg-[#eef4ee]"
            }`}
          >
            <h3 className="font-display text-xl">
              {resultMode === "demo" ? "Demo mode — nothing was sent" : "Enquiry sent"}
            </h3>
            <p className="mt-2 leading-relaxed">{serverMessage}</p>
            {resultMode === "demo" ? (
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
                This is a fictional demonstration website. Because no delivery endpoint is
                configured (<code className="rounded-[2px] bg-white/70 px-1">QUOTE_FORM_ENDPOINT</code>),
                your details stayed in this browser and were not transmitted anywhere. Nothing was
                emailed, stored or delivered.
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 inline-flex min-h-12 items-center rounded-[2px] border border-ink px-6 py-3 font-semibold tracking-tight transition-colors hover:bg-ink hover:text-paper"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="px-6 py-7 sm:px-8">
          {status === "error" ? (
            <div
              ref={summaryRef}
              tabIndex={-1}
              role="alert"
              className="mb-7 border-l-4 border-[#a1281c] bg-[#fdf3f1] px-5 py-4"
            >
              <h3 className="font-display text-lg">There is a problem</h3>
              <p className="mt-1 text-[0.95rem]">{serverMessage}</p>
              {errorKeys.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-[0.95rem]">
                  {errorKeys.map((key) => (
                    <li key={key}>
                      <a href={`#field-${key}`} className="link-underline">
                        {fieldLabel[key]}: {errors[key]}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="field-name" label="Name" required error={errors.name}>
              <input
                id="field-name"
                name="name"
                type="text"
                ref={firstFieldRef}
                autoComplete="name"
                className="field"
                placeholder="e.g. Jane Wheeler"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "error-name" : undefined}
                disabled={submitting}
              />
            </Field>

            <Field id="field-email" label="Email" required error={errors.email}>
              <input
                id="field-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                className="field"
                placeholder="name@example.co.uk"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "error-email" : undefined}
                disabled={submitting}
              />
            </Field>

            <Field id="field-phone" label="Telephone" required error={errors.phone}>
              <input
                id="field-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className="field"
                placeholder="e.g. 01303 123 456"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "error-phone" : undefined}
                disabled={submitting}
              />
            </Field>

            <Field
              id="field-location"
              label="Postcode or town"
              required
              error={errors.location}
            >
              <input
                id="field-location"
                name="location"
                type="text"
                autoComplete="postal-code"
                className="field"
                placeholder="e.g. CT20 1AB or Hythe"
                value={values.location}
                onChange={(e) => update("location", e.target.value)}
                aria-invalid={errors.location ? true : undefined}
                aria-describedby={errors.location ? "error-location" : undefined}
                disabled={submitting}
              />
            </Field>

            <div className="sm:col-span-2">
              <Field id="field-workType" label="Type of roofing work" required error={errors.workType}>
                <select
                  id="field-workType"
                  name="workType"
                  className="field select-field"
                  value={values.workType}
                  onChange={(e) => update("workType", e.target.value)}
                  aria-invalid={errors.workType ? true : undefined}
                  aria-describedby={errors.workType ? "error-workType" : undefined}
                  disabled={submitting}
                >
                  <option value="">Please choose…</option>
                  {workTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset
              className="sm:col-span-2"
              aria-describedby={errors.urgency ? "error-urgency" : undefined}
              aria-invalid={errors.urgency ? true : undefined}
            >
              <legend className="mb-2 text-[0.95rem] font-semibold tracking-tight">
                How urgent is it? <span className="text-copper-deep">*</span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {urgencyLevels.map((level) => (
                  <label key={level.value} className="choice">
                    <input
                      type="radio"
                      name="urgency"
                      value={level.value}
                      checked={values.urgency === level.value}
                      onChange={(e) => update("urgency", e.target.value)}
                      disabled={submitting}
                    />
                    <span>
                      <span className="block font-medium leading-snug">{level.label}</span>
                      <span className="mt-0.5 block text-[0.85rem] leading-snug text-slate-mid">
                        {level.hint}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
              {errors.urgency ? (
                <p id="error-urgency" className="mt-2 text-[0.9rem] font-medium text-[#a1281c]">
                  {errors.urgency}
                </p>
              ) : null}
            </fieldset>

            <div className="sm:col-span-2">
              <Field id="field-details" label="Property and job details" required error={errors.details}>
                <textarea
                  id="field-details"
                  name="details"
                  className="field"
                  placeholder="What type of property, where the problem is, how long it has been happening, and anything else useful (loft access, parking, tenant details…)."
                  value={values.details}
                  onChange={(e) => update("details", e.target.value)}
                  aria-invalid={errors.details ? true : undefined}
                  aria-describedby={errors.details ? "error-details" : "details-hint"}
                  disabled={submitting}
                />
              </Field>
              <p id="details-hint" className="mt-2 text-[0.88rem] text-slate-mid">
                Photographs can follow by email — the detail here helps us bring the right materials
                to the first visit.
              </p>
            </div>

            <fieldset
              className="sm:col-span-2"
              aria-describedby={errors.contactMethod ? "error-contactMethod" : undefined}
            >
              <legend className="mb-2 text-[0.95rem] font-semibold tracking-tight">
                Preferred contact method <span className="text-copper-deep">*</span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {contactMethods.map((method) => (
                  <label key={method} className="choice">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={values.contactMethod === method}
                      onChange={(e) => update("contactMethod", e.target.value)}
                      disabled={submitting}
                    />
                    <span className="font-medium leading-snug">{method}</span>
                  </label>
                ))}
              </div>
              {errors.contactMethod ? (
                <p id="error-contactMethod" className="mt-2 text-[0.9rem] font-medium text-[#a1281c]">
                  {errors.contactMethod}
                </p>
              ) : null}
            </fieldset>

            <div className="sm:col-span-2">
              <label className="choice">
                <input
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? "error-consent" : undefined}
                  disabled={submitting}
                />
                <span className="text-[0.95rem] leading-snug">
                  I am happy for {site.name} to contact me about this enquiry using the method
                  chosen above. <span className="text-copper-deep">*</span>
                </span>
              </label>
              {errors.consent ? (
                <p id="error-consent" className="mt-2 text-[0.9rem] font-medium text-[#a1281c]">
                  {errors.consent}
                </p>
              ) : null}
            </div>

            {/* Honeypot — hidden from real visitors, catches naive spam bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="field-website">Leave this field empty</label>
              <input
                id="field-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(e) => update("website", e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[0.88rem] leading-relaxed text-slate-mid">
              Prefer to talk? Call{" "}
              <a href={site.phoneHref} className="link-underline font-semibold text-ink">
                {site.phoneDisplay}
              </a>{" "}
              and we will take the details over the phone.
            </p>
            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-[2px] bg-copper px-8 py-4 text-base font-semibold tracking-tight text-white transition-colors hover:bg-copper-deep disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Sending your enquiry…
                </>
              ) : (
                "Send my enquiry"
              )}
            </button>
          </div>

          <p className="mt-4 text-[0.85rem] leading-relaxed text-slate-mid">
            Demo preview: until a form endpoint is configured, submissions stay in your browser and
            are clearly reported as not sent.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.95rem] font-semibold tracking-tight"
      >
        {label} {required ? <span className="text-copper-deep" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`error-${id.replace("field-", "")}`}
          className="mt-2 text-[0.9rem] font-medium text-[#a1281c]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
