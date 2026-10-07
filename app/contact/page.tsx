import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/quote-form";
import { FaqList } from "@/components/faq";
import { Container, DemoNote, EmailText, Section, SectionHeading } from "@/components/ui";
import { IconMail, IconPhone, IconPin, IconClock } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Contact & free quote — roofers in Folkestone & East Kent",
  description:
    "Request a free written roofing quote for Folkestone, Hythe, Dover, Deal and surrounding East Kent villages. Call the roofer directly or send the quote form — repairs, re-roofs, flat roofing and storm emergencies.",
  path: "/contact",
});

const contactFaqs = [
  {
    q: "How soon will you come back to me?",
    a: "Usually the same working day, and always within one working day. If it is an emergency with water coming in, call rather than fill in the form — it is faster.",
  },
  {
    q: "Do I need to be at the property for the inspection?",
    a: "Ideally yes for the first visit, so we can look inside as well as out and talk through what we find. For landlords we are happy to arrange access with tenants directly.",
  },
  {
    q: "What should I have ready?",
    a: "Anything useful: how long the problem has been there, when the roof was last worked on, and photographs of the stain, the leak or the roof from the ground. None of it is essential — it just speeds things up.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact / Free Quote", path: "/contact" },
        ])}
      />

      <Section tone="paper" className="border-b border-line">
        <Container>
          <p className="kicker">Contact / free quote</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            Tell us about your roof
          </h1>
          <p className="lede mt-6 max-w-3xl">
            Free, itemised written quotes across {site.coverageNote}. Fill in the form and we will
            come back to arrange a look at the job — or call{" "}
            <a href={site.phoneHref} className="link-underline font-semibold text-ink">
              {site.phoneDisplay}
            </a>{" "}
            and talk it through.
          </p>
        </Container>
      </Section>

      <Section id="quote">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <QuoteForm />

            <aside className="space-y-8">
              <div className="border border-line bg-paper px-7 py-8">
                <h2 className="font-display text-2xl">Contact details</h2>
                <ul className="mt-5 space-y-4 text-[1rem]">
                  <li className="flex items-start gap-3">
                    <IconPhone className="mt-1 h-5 w-5 shrink-0 text-copper" />
                    <span>
                      <a href={site.phoneHref} className="link-underline font-semibold">
                        {site.phoneDisplay}
                      </a>
                      <span className="mt-0.5 block text-[0.9rem] text-slate-mid">
                        Quickest route for leaks and storm damage
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconMail className="mt-1 h-5 w-5 shrink-0 text-copper" />
                    <span>
                      <a href={`mailto:${site.email}`} className="link-underline font-semibold">
                        <EmailText />
                      </a>
                      <span className="mt-0.5 block text-[0.9rem] text-slate-mid">
                        For quotes, photographs and paperwork
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconPin className="mt-1 h-5 w-5 shrink-0 text-copper" />
                    <span>
                      {site.baseLocation}
                      <span className="mt-0.5 block text-[0.9rem] text-slate-mid">
                        Covering {site.coverageNote} ({site.postcodeDistricts})
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconClock className="mt-1 h-5 w-5 shrink-0 text-copper" />
                    <span>
                      Opening hours
                      <dl className="mt-2 space-y-1.5 text-[0.95rem]">
                        {site.hours.map((hour) => (
                          <div key={hour.days} className="flex justify-between gap-4">
                            <dt className="text-slate-mid">{hour.days}</dt>
                            <dd className="font-medium">{hour.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <DemoNote>
                    Demo contact details: the telephone number is an Ofcom drama number and the
                    email and hours are illustrative placeholders for this fictional business.
                  </DemoNote>
                </div>
              </div>

              <div className="border border-line bg-paper px-7 py-8">
                <h2 className="font-display text-2xl">What happens next</h2>
                <ol className="mt-5 space-y-3 text-[0.98rem] leading-relaxed text-slate-mid">
                  <li>
                    <strong className="text-ink">1. We call or email back</strong> — usually the same
                    working day.
                  </li>
                  <li>
                    <strong className="text-ink">2. We come and look</strong> — inside and out, with a
                    camera and a torch.
                  </li>
                  <li>
                    <strong className="text-ink">3. You get a written quote</strong> — itemised, free
                    and yours to keep. No obligation, no chasing.
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading kicker="Before you get in touch" title="Questions about enquiries" />
          <div className="mt-10">
            <FaqList faqs={contactFaqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
