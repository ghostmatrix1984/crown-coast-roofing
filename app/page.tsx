import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site, mainTowns, surroundingAreas } from "@/lib/site";
import { homeFaqs, projects, services, testimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd, buildFaqPageJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { ProjectPair } from "@/components/project-pair";
import { FaqList } from "@/components/faq";
import { QuoteForm } from "@/components/quote-form";
import {
  CtaBand,
  ProcessSteps,
  ServiceCompact,
  ServiceFeatured,
  WhyUsList,
} from "@/components/sections";
import {
  ButtonLink,
  Container,
  DemoNote,
  EmailText,
  Section,
  SectionHeading,
  TileCourse,
} from "@/components/ui";
import {
  IconArrowRight,
  IconMail,
  IconPhone,
  IconPin,
  IconShield,
  IconStorm,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Roofers in Folkestone & East Kent — repairs, re-roofs and flat roofing",
  description: site.description,
  path: "/",
});

/** Legitimate, verifiable-by-experience signals — no invented accreditations. */
const trustItems = [
  {
    icon: IconShield,
    label: "In writing",
    title: "Free itemised quotes",
    body: "Work, materials and price set out line by line before anything starts.",
  },
  {
    icon: IconPhone,
    label: "One point of contact",
    title: "Clear communication",
    body: "The roofer who inspects your roof quotes it — and answers the phone.",
  },
  {
    icon: IconPin,
    label: "CT13 – CT21",
    title: "Local coverage",
    body: "Folkestone, Hythe, Dover, Deal and the surrounding villages.",
  },
  {
    icon: IconStorm,
    label: "Same-day make-safe",
    title: "Emergency response",
    body: "Water coming in? Roof made safe first, repair priced after.",
  },
] as const;

export default function HomePage() {
  const featured = projects.slice(0, 2);
  const [leadTestimonial, ...moreTestimonials] = testimonials;

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={buildFaqPageJsonLd(homeFaqs)} />

      {/* ---------------------------- hero ---------------------------- */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="grid w-full lg:grid-cols-[1.05fr_1fr]">
          <div className="roof-texture hero-panel flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
            <div className="min-[2560px]:max-w-[46rem]">
            <p className="kicker kicker-light">Folkestone · Hythe · Dover · Deal</p>
            <h1 className="mt-5 max-w-2xl font-display text-[2.6rem] leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Roofs built, repaired and kept right across East Kent
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-copper-mist">
              Independent roofers on homes and rentals from Folkestone to Deal — leaks traced and
              fixed, new roofs in slate and tile, flat roofing, leadwork and storm call-outs. Free
              written quotes, no sales patter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#quote" className="min-h-14 text-lg">
                Get a free quote
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline-light" className="min-h-14 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phoneDisplay}
              </ButtonLink>
            </div>
            <ul className="mt-9 grid gap-3 border-t border-white/15 pt-6 text-[0.95rem] sm:grid-cols-3">
              <li className="flex items-center gap-2.5 text-paper/85">
                <IconShield className="h-5 w-5 shrink-0 text-copper-mist" /> Free written quotes
              </li>
              <li className="flex items-center gap-2.5 text-paper/85">
                <IconPin className="h-5 w-5 shrink-0 text-copper-mist" /> Photos of the work
              </li>
              <li className="flex items-center gap-2.5 text-paper/85">
                <IconStorm className="h-5 w-5 shrink-0 text-copper-mist" /> Storm emergencies
              </li>
            </ul>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[620px]">
            <Image
              src="/images/hero-roofing-work.jpg"
              alt="A roof half-stripped back to the battens beneath scaffolding during a re-roof"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <TileCourse flip />

      {/* --------------------------- trust ---------------------------- */}
      <section className="bg-paper">
        <Container>
          <ul className="grid border-b border-line-strong sm:grid-cols-2 sm:divide-x sm:divide-line lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <li
                key={item.title}
                className={`border-t border-line-strong py-7 sm:border-t-0 sm:py-8 ${
                  index === 0 ? "sm:pr-6" : "sm:px-6"
                } ${index === trustItems.length - 1 ? "sm:pr-0" : ""}`}
              >
                <item.icon className="h-6 w-6 text-copper" />
                <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-copper-deep">
                  {item.label}
                </p>
                <h2 className="mt-1.5 font-display text-xl leading-snug">{item.title}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-mid">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="py-6">
            <DemoNote>
              Demonstration site: guarantee wording, projects and testimonials shown here are
              fictional demo content, not real customer reviews or accreditations.
            </DemoNote>
          </div>
        </Container>
      </section>

      {/* -------------------------- services -------------------------- */}
      <Section id="services">
        <Container>
          <SectionHeading
            kicker="What we do"
            title="Roofing for every kind of East Kent roof"
            lede="From a single slipped tile to a complete re-roof — Kentish peg tiles, plain tiles, natural slate, flat roof systems and traditional leadwork."
          />
          <div className="mt-9">
            <ServiceFeatured items={services.slice(0, 3)} />
          </div>
          <h3 className="mt-10 font-display text-xl">More services</h3>
          <div className="mt-4">
            <ServiceCompact items={services.slice(3)} />
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="link-underline inline-flex min-h-11 items-center gap-2 font-semibold tracking-tight text-copper-deep"
            >
              All services in detail <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* -------------------------- projects -------------------------- */}
      <Section tone="paper" id="projects">
        <Container>
          <SectionHeading
            kicker="Recent work"
            title="Before and after, from around the district"
            lede="Two photographs on every job — where the work started, and where it finished."
          />
          <div className="mt-9 space-y-14">
            {featured.map((project) => (
              <article key={project.slug}>
                <ProjectPair project={project} />
                <div className="mt-5 grid gap-4 lg:grid-cols-2 lg:gap-14">
                  <div>
                    <p className="kicker">
                      {project.location} · {project.service}
                    </p>
                    <h3 className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[1.02rem] leading-relaxed text-slate-mid">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <DemoNote>
              Illustrative demonstration pairings using licensed stock photography — not genuine
              Crown &amp; Coast projects, and the paired images may show different properties.
            </DemoNote>
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="link-underline inline-flex min-h-11 items-center gap-2 font-semibold tracking-tight text-copper-deep"
            >
              See all demonstration projects <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* --------------------------- why us --------------------------- */}
      <Section>
        <Container>
          <SectionHeading
            kicker="Why Crown & Coast"
            title="A roofer you can actually get hold of"
            lede="Small, local and careful — we would rather repair your roof than sell you a new one you do not need."
          />
          <div className="mt-8">
            <WhyUsList />
          </div>
        </Container>
      </Section>

      {/* -------------------------- process --------------------------- */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            kicker="How it works"
            title="Inspect → written quote → schedule → complete"
            lede="Four steps, no surprises — you will know what is happening on your roof before it happens."
          />
          <div className="mt-9">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      {/* ------------------------ testimonials ------------------------ */}
      <Section>
        <Container>
          <SectionHeading kicker="Testimonials" title="What customers say" />
          <div className="mt-5">
            <DemoNote>
              Demo testimonials — fictional content written for this demonstration website. They are
              not real reviews and do not reflect genuine customers.
            </DemoNote>
          </div>
          <figure className="mt-10 border-t-2 border-copper pt-8">
            <blockquote className="max-w-4xl font-display text-[1.45rem] leading-[1.4] sm:text-[1.75rem] sm:leading-[1.35]">
              <span aria-hidden="true" className="mr-1 text-copper">
                “
              </span>
              {leadTestimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-[0.95rem]">
              <span className="font-semibold tracking-tight">{leadTestimonial.name}</span>
              <span className="text-slate-mid"> · {leadTestimonial.area} (demo)</span>
            </figcaption>
          </figure>
          <ul className="mt-12 grid gap-10 border-t border-line-strong pt-8 sm:grid-cols-2 sm:gap-14">
            {moreTestimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <blockquote className="text-[1.05rem] leading-relaxed">{testimonial.quote}</blockquote>
                <p className="mt-4 text-[0.9rem]">
                  <span className="font-semibold tracking-tight">{testimonial.name}</span>
                  <span className="text-slate-mid"> · {testimonial.area} (demo)</span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* --------------------------- areas ---------------------------- */}
      <Section tone="paper" id="areas">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <SectionHeading
              kicker="Areas covered"
              title="Roofing across Folkestone, Hythe, Dover and Deal"
              lede="CT13–CT21 and the villages in between. On the edge of the patch? Ask — we will tell you honestly whether we can get to you."
            />
            <div>
              <ul className="grid gap-px border border-line-strong bg-line-strong sm:grid-cols-2">
                {mainTowns.map((town) => (
                  <li key={town.slug} className="bg-paper px-6 py-6">
                    <h3 className="font-display text-xl">{town.name}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-mid">{town.blurb}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-mid">
                Also covering: {surroundingAreas.join(", ")}.
              </p>
              <div className="mt-6">
                <ButtonLink href="/areas" variant="outline">
                  All areas covered
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------- emergencies ------------------------ */}
      <Section tone="dark" id="emergency">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div>
              <p className="ridge-rule" aria-hidden="true" />
              <p className="kicker kicker-light mt-6">Emergency roof repairs</p>
              <h2 className="mt-4 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
                Water coming in right now?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-copper-mist">
                Call us and we will make the roof safe first — sheeting or a temporary repair — then
                price the permanent repair in daylight. Everything is photographed for your insurer
                before anything is touched.
              </p>
              <ul className="mt-7 grid gap-x-8 gap-y-2 text-[0.98rem] text-paper/85 sm:grid-cols-2">
                <li>Make-safe visits across the patch</li>
                <li>Photographic record for insurance</li>
                <li>Written repair notes</li>
                <li>Follow-up check after temporary work</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href={site.phoneHref} className="min-h-16 px-10 text-2xl">
                <IconPhone className="h-6 w-6" />
                {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href="/services/storm-emergency-roof-repairs" variant="outline-light">
                Storm repairs in detail
              </ButtonLink>
              <p className="text-[0.9rem] text-paper/70">
                Weekdays and Saturday mornings, with storms handled outside those hours.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <TileCourse />

      {/* ---------------------------- FAQs ---------------------------- */}
      <Section>
        <Container>
          <SectionHeading
            kicker="Roofing FAQs"
            title="Straight answers to common questions"
            lede="Prices, timings, guarantees — and what happens when we open a roof and find more than expected."
          />
          <div className="mt-9">
            <FaqList faqs={homeFaqs} />
          </div>
        </Container>
      </Section>

      {/* --------------------------- quote ---------------------------- */}
      <Section tone="paper" id="quote">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <QuoteForm />
            <aside className="space-y-8">
              <div>
                <h2 className="font-display text-2xl">Prefer to talk?</h2>
                <p className="mt-3 leading-relaxed text-slate-mid">
                  We answer the phone ourselves — no call centre, no callback queue.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-ink px-5 py-3 font-semibold tracking-tight transition-colors hover:bg-ink hover:text-paper"
                >
                  <IconPhone className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-flex min-h-12 items-center gap-2 rounded-[2px] border border-line-strong px-5 py-3 font-semibold tracking-tight transition-colors hover:border-ink"
                >
                  <IconMail className="h-4 w-4 shrink-0" />
                  <EmailText />
                </a>
              </div>
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl">What happens next</h2>
                <ol className="mt-4 space-y-3 text-[0.98rem] leading-relaxed text-slate-mid">
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
                    and yours to keep.
                  </li>
                </ol>
              </div>
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl">Hours</h2>
                <dl className="mt-4 space-y-2 text-[0.95rem]">
                  {site.hours.map((hour) => (
                    <div key={hour.days} className="flex justify-between gap-4">
                      <dt className="text-slate-mid">{hour.days}</dt>
                      <dd className="font-medium">{hour.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-[0.85rem] text-slate-mid">
                  Demo hours — replace with the company&apos;s confirmed hours before launch.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not sure what your roof needs?"
        body="That is what the free inspection is for. We look, photograph what we find, and tell you honestly whether it needs a repair or a replacement."
      />
    </>
  );
}
