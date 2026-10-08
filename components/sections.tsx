import Image from "next/image";
import Link from "next/link";
import { processSteps, services, whyUs, type Service } from "@/lib/content";
import { serviceIcons } from "./icons";
import { Container, Section, SectionHeading, ButtonLink } from "./ui";
import { site } from "@/lib/site";
import { IconPhone } from "./icons";

const serviceHref = (service: Service) => `/services/${service.slug}`;

function ServiceArrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center gap-2 whitespace-nowrap font-semibold tracking-tight text-copper-deep transition-transform group-hover:translate-x-1"
    >
      Details →
    </span>
  );
}

/** Home: three leading services as alternating image/text bands. */
export function ServiceFeatured({ items }: { items: readonly Service[] }) {
  return (
    <div className="border-t border-line-strong">
      {items.map((service, index) => {
        const Icon = serviceIcons[service.icon];
        return (
          <article key={service.slug} className="group border-b border-line-strong">
            <Link
              href={serviceHref(service)}
              className="grid items-center gap-8 py-9 transition-colors hover:bg-paper lg:grid-cols-2 lg:gap-14"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="kicker">
                  {String(index + 1).padStart(2, "0")} · {service.shortName}
                </p>
                <h3 className="mt-4 font-display text-[1.9rem] leading-tight sm:text-[2.35rem]">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-slate-mid">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold tracking-tight text-copper-deep">
                  Details
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
              <figure
                className={`relative m-0 aspect-[3/2] w-full overflow-hidden border border-line bg-[#e4dccf] ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                  style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                />
                <Icon className="absolute bottom-3 left-3 h-7 w-7 bg-canvas/90 p-1 text-copper" />
              </figure>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

/** Home: the remaining services as a tight ruled index. */
export function ServiceCompact({ items }: { items: readonly Service[] }) {
  return (
    <ul className="grid gap-px border border-line-strong bg-line-strong sm:grid-cols-2">
      {items.map((service) => {
        const Icon = serviceIcons[service.icon];
        return (
          <li key={service.slug} className="bg-canvas">
            <Link
              href={serviceHref(service)}
              className="group flex h-full flex-col gap-3 px-6 py-6 transition-colors hover:bg-paper sm:flex-row sm:items-start sm:gap-4"
            >
              <span className="flex items-start gap-4">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-copper" />
                <span className="block">
                  <span className="block font-display text-xl leading-snug">{service.name}</span>
                  <span className="mt-1 block text-[0.98rem] leading-relaxed text-slate-mid">
                    {service.summary}
                  </span>
                </span>
              </span>
              <span className="ml-auto self-center sm:shrink-0">
                <ServiceArrow />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Services page: every service as a ruled row with a photographic thumbnail. */
export function ServiceList({ items = services }: { items?: readonly Service[] }) {
  return (
    <div className="border-t border-line-strong">
      {items.map((service, index) => (
        <article key={service.slug} className="group border-b border-line-strong">
          <Link
            href={serviceHref(service)}
            className="grid items-center gap-6 py-7 transition-colors hover:bg-paper sm:grid-cols-[auto_1fr_auto] sm:gap-8"
          >
            <div className="flex items-center gap-5">
              <span className="block w-6 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-slate-mid">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative block h-24 w-36 shrink-0 overflow-hidden border border-line bg-[#e4dccf]">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 144px, 144px"
                  className="object-cover"
                  style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                />
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl leading-snug sm:text-[1.7rem]">{service.name}</h3>
              <p className="mt-1.5 max-w-2xl text-[1.02rem] leading-relaxed text-slate-mid">
                {service.summary}
              </p>
            </div>
            <ServiceArrow />
          </Link>
        </article>
      ))}
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

/** Why choose Crown & Coast — scannable, one line per benefit. */
export function WhyUsList() {
  return (
    <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {whyUs.map((point) => (
        <li key={point.title} className="border-t border-line pt-5">
          <h3 className="flex items-center gap-2.5 font-display text-xl leading-snug">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-copper"
            >
              <path d="m4.5 12.5 5 5 10-11" />
            </svg>
            {point.title}
          </h3>
          <p className="mt-2 pl-[1.65rem] text-[1rem] leading-relaxed text-slate-mid">{point.body}</p>
        </li>
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
