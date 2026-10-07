import Image from "next/image";
import Link from "next/link";
import { processSteps, services, whyUs, type Service } from "@/lib/content";
import { serviceIcons } from "./icons";
import { Container, Section, SectionHeading, ButtonLink, CheckItem } from "./ui";
import { site } from "@/lib/site";
import { IconPhone } from "./icons";

/** Services overview as a ruled editorial list — not a grid of rounded cards. */
export function ServiceList({ items = services }: { items?: readonly Service[] }) {
  return (
    <div className="border-t border-line-strong">
      {items.map((service, index) => {
        const Icon = serviceIcons[service.icon];
        return (
          <article key={service.slug} className="group border-b border-line-strong">
            <Link
              href={`/services/${service.slug}`}
              className="grid gap-5 py-8 transition-colors hover:bg-paper sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8"
            >
              <span className="flex items-center gap-4 sm:block">
                <span className="block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-slate-mid">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="mt-0 h-8 w-8 text-copper sm:mt-4" />
              </span>
              <span className="block">
                <h3 className="font-display text-2xl leading-snug sm:text-[1.75rem]">
                  {service.name}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-slate-mid">{service.summary}</p>
              </span>
              <span className="inline-flex items-center gap-2 self-center whitespace-nowrap font-semibold tracking-tight text-copper-deep">
                Details
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

/** Shared closing call-to-action. */
export function CtaBand({
  title = "Tell us about your roof",
  body = `Free written quotes across ${site.coverageNote}. Call ${site.phoneDisplay} or send the form — we will come and look before we quote.`,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section tone="dark">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="ridge-rule" aria-hidden="true" />
            <h2 className="mt-6 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-copper-mist">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/contact#quote">Get a free quote</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline-light">
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** How we work — inspect → written quote → schedule → complete. */
export function ProcessSteps({ variant = "home" }: { variant?: "home" | "service" }) {
  const serviceOverrides: Record<string, { title?: string; body?: string }> = {
    "01": {
      body: "We visit and inspect the parts of the roof your job involves — inside and out — and photograph what we find before pricing anything.",
    },
    "04": {
      body: "The work is finished and tested against the weather, the site is cleared, and we walk you through the photographs before we leave.",
    },
  };
  const steps = processSteps.map((step) => {
    const override = variant === "service" ? serviceOverrides[step.step] : undefined;
    return override ? { ...step, ...override } : step;
  });
  return (
    <ol className="grid gap-px border border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.step} className="bg-canvas px-6 py-8">
          <span className="font-display text-2xl font-semibold text-copper">{step.step}</span>
          <h3 className="mt-3 font-display text-xl">{step.title}</h3>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-slate-mid">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Why choose Crown & Coast. */
export function WhyUsList() {
  return (
    <ul className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
      {whyUs.map((point) => (
        <CheckItem key={point.title}>
          <span className="font-semibold text-ink">{point.title}</span>
          <span className="mt-1 block text-slate-mid">{point.body}</span>
        </CheckItem>
      ))}
    </ul>
  );
}

/** Service page hero band with photograph. */
export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="py-0">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-14 lg:py-24 lg:pr-14">
            <p className="kicker">
              <Link href="/services" className="link-underline">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              {service.shortName}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {service.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-mid">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#quote">Get a free quote</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline">
                <IconPhone className="h-4 w-4" />
                {site.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[520px]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Section, SectionHeading, Container };
