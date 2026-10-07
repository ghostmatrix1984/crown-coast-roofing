import { NextResponse } from "next/server";
import { validateQuoteForm, type QuoteFormValues, type QuoteSubmissionResult } from "@/lib/quote";

/**
 * Quote submission layer.
 *
 * - With QUOTE_FORM_ENDPOINT set (server-side env var, e.g. a Formspree
 *   endpoint), the validated enquiry is POSTed as JSON to that endpoint.
 * - Without it, the API runs in DEMO MODE: it responds honestly that nothing
 *   was sent so the UI can say so. It never pretends a message was delivered.
 */

export async function POST(
  request: Request
): Promise<NextResponse<QuoteSubmissionResult>> {
  let body: Partial<QuoteFormValues>;
  try {
    body = (await request.json()) as Partial<QuoteFormValues>;
  } catch {
    return NextResponse.json(
      { ok: false, mode: "error", message: "We could not read that submission. Please try again." },
      { status: 400 }
    );
  }

  const values: QuoteFormValues = {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    location: String(body.location ?? ""),
    workType: String(body.workType ?? ""),
    urgency: String(body.urgency ?? ""),
    details: String(body.details ?? ""),
    contactMethod: String(body.contactMethod ?? ""),
    consent: body.consent === true,
    website: String(body.website ?? ""),
  };

  // Honeypot: silently accept but deliver nothing.
  if (values.website.trim() !== "") {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Demo mode: no enquiry was sent.",
    });
  }

  const fieldErrors = validateQuoteForm(values);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        mode: "error",
        message: "Some details are missing or incomplete. Please check the highlighted fields.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const endpoint = process.env.QUOTE_FORM_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message:
        "Demo mode: no enquiry was sent. This preview has no delivery endpoint configured (QUOTE_FORM_ENDPOINT).",
    });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        location: values.location,
        workType: values.workType,
        urgency: values.urgency,
        details: values.details,
        contactMethod: values.contactMethod,
        submittedAt: new Date().toISOString(),
        source: "crown-coast-roofing website quote form",
      }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          mode: "error",
          message:
            "Your enquiry could not be delivered just now. Please try again, or call us and we will take the details over the phone.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      mode: "delivered",
      message:
        "Thank you — your enquiry has been sent. We will be in touch using your preferred contact method.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        mode: "error",
        message:
          "We could not reach the enquiry service. Please try again in a moment, or call us instead.",
      },
      { status: 502 }
    );
  }
}
