import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site, mainTowns, surroundingAreas } from "@/lib/site";
import { homeFaqs, projects, testimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd, buildFaqPageJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { ProjectPair } from "@/components/project-pair";
import { FaqList } from "@/components/faq";
import { QuoteForm } from "@/components/quote-form";
import { CtaBand, ProcessSteps, ServiceList, WhyUsList } from "@/components/sections";
import {
  ButtonLink,
  CheckItem,
  Container,
  DemoNote,
  EmailText,
  Section,
  SectionHeading,
  TileCourse,
} from "@/components/ui";
import {
  IconArrowRight,
  IconCamera,
  IconClock,
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

const trustItems = [
  {
    icon: IconShield,
    title: "Guarantee terms in writing",
    body: "What is covered, and for how long, set out with your quote.",
  },
  {
    icon: IconCamera,
    title: "Photographed work",
    body: "Before, during and after — useful for records and insurance.",
  },
  {
    icon: IconClock,
    title: "Storm call-outs",
    body: "Water coming in? We make the roof safe first, then price the repair.",
  },
  {
    icon: IconPin,
    title: "Local to East Kent",
    body: "Folkestone, Hythe, Dover, Deal and the surrounding villages.",
  },
] as const;

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={buildFaqPageJsonLd(homeFaqs)} />

      {/* ---------------------------- hero ---------------------------- */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="grid w-full lg:grid-cols-[1.05fr_1fr] min-[2560px]:mx-auto min-[2560px]:max-w-[110rem]">
          <div className="roof-texture flex flex-col justify-center px-5 py-16 sm:px-8 lg:py-28 lg:px-12 2xl:px-20">
            <p className="kicker kicker-light">Folkestone · Hythe · Dover · Deal</p>
            <h1 className="mt-6 max-w-2xl font-display text-[2.6rem] leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Roofs built, repaired and kept right across East Kent
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-copper-mist">
              Independent roofers working on homes and rentals from Folkestone to Deal. Leaks traced
              and fixed, new roofs in slate and tile, flat roofing, chimney leadwork and storm
              call-outs — with free written quotes and no sales patter.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#quote" className="min-h-14 text-lg">
                Get a free quote
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline-light" className="min-h-14 text-lg">
                <IconPhone className="h-5 w-5" />
                {site.phoneDisplay}
              </ButtonLink>
            </div>
            <ul className="mt-10 grid gap-3 border-t border-white/15 pt-7 text-[0.95rem] sm:grid-cols-3">
              <li className="flex items-center gap-2.5 text-paper/85">
                <IconShield className="h-5 w-5 shrink-0 text-copper-mist" /> Free written quotes
              </li>
              <li className="flex items-center gap-2.5 text-paper/85">
                <IconCamera className="h-5 w-5 shrink-0 text-copper-mist" /> Photos of the work
              </li>
              <li className="flex items-center gap-2.5 text-paper/85">
                <IconStorm className="h-5 w-5 shrink-0 text-copper-mist" /> Storm emergencies
              </li>
            </ul>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[640px]">
            <Image
              src="/images/hero-roofscape.jpg"
              alt="Chimneys and tiled roofs on the Kent coast at Broadstairs — the kind of roof Crown & Coast Roofing works on"
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
      <Section tone="paper" className="!py-12">
        <Container>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <li key={item.title} className="flex gap-4">
                <item.icon className="h-7 w-7 shrink-0 text-copper" />
                <div>
                  <h2 className="font-display text-lg leading-snug">{item.title}</h2>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-mid">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <DemoNote>
              Demonstration site: guarantee wording, projects and testimonials shown here are
              fictional demo content, not real customer reviews or accreditations.
            </DemoNote>
          </div>
        </Container>
      </Section>

      {/* -------------------------- services -------------------------- */}
      <Section id="services">
        <Container>
          <SectionHeading
            kicker="What we do"
            title="Roofing services for every kind of East Kent roof"
            lede="From a single slipped tile to a complete re-roof, the work is specified for your building — Kentish peg tiles, plain tiles, natural slate, flat roof systems and traditional leadwork all included."
          />
          <div className="mt-12">
            <ServiceList />
          </div>
          <div className="mt-10">
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
            lede="A look at the kind of jobs we take on — a semi re-roofed in stages, failed tiles replaced and chimney leadwork renewed. Two photographs on each job, labelled for what they show."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {featured.map((project) => (
              <article key={project.slug}>
                <ProjectPair project={project} />
                <h3 className="mt-5 font-display text-2xl leading-snug">{project.title}</h3>
                <p className="mt-1 text-[0.9rem] font-semibold uppercase tracking-[0.12em] text-copper-deep">
                  {project.location} · {project.service}
                </p>
                <p className="mt-3 leading-relaxed text-slate-mid">{project.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <DemoNote>
              These case studies are illustrative demonstration pairings using licensed stock
              photography — they are not genuine Crown &amp; Coast projects, and the paired images may
              show different properties.
            </DemoNote>
          </div>
          <div className="mt-8">
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              kicker="Why Crown & Coast"
              title="A roofer you can actually get hold of"
              lede="Small, local and careful. We would rather repair your roof properly than sell you a new one you do not need — and we show you the evidence either way."
            />
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
            lede="Four steps, no surprises. You will know what is happening on your roof before it happens."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      {/* ------------------------ testimonials ------------------------ */}
      <Section>
        <Container>
          <SectionHeading kicker="Testimonials" title="What customers say" />
          <div className="mt-6">
            <DemoNote>
              Demo testimonials — fictional content written for this demonstration website. They are
              not real reviews and do not reflect genuine customers.
            </DemoNote>
          </div>
          <ul className="mt-10 grid gap-px border border-line-strong bg-line-strong lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name} className="flex flex-col justify-between bg-canvas px-7 py-9">
                <blockquote className="text-[1.05rem] leading-relaxed">
                  <span aria-hidden="true" className="font-display text-3xl leading-none text-copper">
                    “
                  </span>
                  {testimonial.quote}
                </blockquote>
                <p className="mt-6 border-t border-line pt-4 text-[0.9rem] font-semibold tracking-tight">
                  {testimonial.name}
                  <span className="mt-0.5 block font-normal text-slate-mid">
                    {testimonial.area} (demo)
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* --------------------------- areas ---------------------------- */}
      <Section tone="dark" id="areas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              kicker="Areas covered"
              title="Roofing across Folkestone, Hythe, Dover and Deal"
              lede="Working across the CT13–CT21 postcode districts and the villages in between. If you are on the edge of the patch, ask — we will tell you honestly whether we can get to you."
              light
            />
            <div>
              <ul className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
                {mainTowns.map((town) => (
                  <li key={town.slug} className="bg-ink px-6 py-7">
                    <h3 className="font-display text-xl text-paper">{town.name}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/75">
                      {town.blurb}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.95rem] leading-relaxed text-paper/75">
                Also covering: {surroundingAreas.join(", ")}.
              </p>
              <div className="mt-7">
                <ButtonLink href="/areas" variant="outline-light">
                  All areas covered
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------- emergencies ------------------------ */}
      <Section tone="paper">
        <Container>
          <div className="grid items-center gap-10 border border-line-strong bg-canvas px-7 py-10 sm:px-10 lg:grid-cols-[1fr_auto]">
            <div className="flex gap-5">
              <IconStorm className="h-10 w-10 shrink-0 text-copper" />
              <div>
                <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                  Storm damage? We make roofs safe first
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-mid">
                  If water is getting in, call{" "}
                  <a href={site.phoneHref} className="link-underline font-semibold text-ink">
                    {site.phoneDisplay}
                  </a>
                  . We sheet up or temporarily repair the damage, photograph everything for your
                  insurer, and then price the permanent repair in daylight — never on a wet ladder at
                  midnight.
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  <CheckItem>Make-safe visits across the coverage area</CheckItem>
                  <CheckItem>Photographic record before any repair</CheckItem>
                  <CheckItem>Written repair notes for insurance claims</CheckItem>
                  <CheckItem>Follow-up inspection after temporary work</CheckItem>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href={site.phoneHref} className="min-h-14 text-lg">
                <IconPhone className="h-5 w-5" />
                Call {site.phoneDisplay}
              </ButtonLink>
              <ButtonLink href="/services/storm-emergency-roof-repairs" variant="outline">
                Emergency repairs in detail
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------- FAQs ---------------------------- */}
      <Section>
        <Container>
          <SectionHeading
            kicker="Roofing FAQs"
            title="Straight answers to common questions"
            lede="Prices, timings, guarantees and what happens when we open a roof and find more than expected."
          />
          <div className="mt-10">
            <FaqList faqs={homeFaqs} />
          </div>
        </Container>
      </Section>

      {/* --------------------------- quote ---------------------------- */}
      <Section tone="paper" id="quote">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
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
        body="That is what the free inspection is for. We will look, photograph what we find and tell you honestly whether it needs a repair or a replacement."
      />
    </>
  );
}
