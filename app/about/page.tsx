import type { Metadata } from "next";
import Image from "next/image";
import { site, mainTowns } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, ProcessSteps, WhyUsList } from "@/components/sections";
import {
  ButtonLink,
  CheckItem,
  Container,
  DemoNote,
  Kicker,
  Section,
  SectionHeading,
} from "@/components/ui";
import { IconPhone } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "About — independent East Kent roofers",
  description:
    "Crown & Coast Roofing is an independent roofing company working on homes and rental properties across Folkestone, Hythe, Dover and Deal. Repair-first advice, itemised written quotes and photographed work. Demonstration website for a fictional company.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <Section tone="paper" className="border-b border-line">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="kicker">About Crown &amp; Coast</p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                A small roofing company that plans to stay small
              </h1>
              <p className="lede mt-6 max-w-2xl">
                Crown &amp; Coast Roofing works on homes and rental properties across the corner of
                East Kent between Folkestone and Deal. The company is deliberately local: a short
                round of towns means we can get to a leaking roof quickly and still know the street
                when we come back for the next job.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#quote">Get a free quote</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <IconPhone className="h-4 w-4" />
                  {site.phoneDisplay}
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full border border-line">
              <Image
                src="/images/about-kent-homes.jpg"
                alt="Kentish brick cottages with slate roofs and chimney stacks — the kind of local housing stock Crown & Coast works on"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              kicker="How we work"
              title="Repair first. Replace when it is genuinely time."
              lede="A roof is the largest thing on most houses that nobody looks at — until it leaks. Our job is to look at it properly and give you options that make sense, not a single take-it-or-leave-it price."
            />
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
              <p>
                Every visit starts the same way: from the inside where we can get it, then on the
                roof. We photograph what we find — the slipped tile, the failed flashing, the split
                in the felt — and those photographs go with your quote so you can see what we are
                pricing, not just take our word for it.
              </p>
              <p>
                Where a repair will hold, we say so. Where a roof is at the end of its life and
                repairs would be money spent twice, we say that too, and set out the options: the
                covering, the timbers, the insulation, the detailing at the ridges and verges. Work
                is quoted in writing, itemised line by line, and the price is the price once agreed.
              </p>
              <p>
                The company works across {site.coverageNote}, mostly on Victorian and interwar
                terraces, post-war semis, bungalows and the older cottages and townhouses around
                Hythe, Deal and the villages. Kentish peg tiles, plain tiles, natural slate and
                traditional lead detail are all routine work here — and so are flat roofs over garages
                and bays, which is where a good share of local leaks start.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading
            kicker="Why choose Crown & Coast"
            title="What you get on every job"
            lede="Not a slogan — just the things customers tell us matter when someone is working on the roof over their heads."
          />
          <div className="mt-12">
            <WhyUsList />
          </div>
          <div className="mt-10 max-w-3xl">
            <DemoNote>
              About-page copy describes a fictional demonstration company. Biographies, accreditations
              and business history have deliberately not been invented for this demo.
            </DemoNote>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            kicker="Where we work"
            title="One corner of Kent, known properly"
            lede="Knowing the local housing stock matters: which estates use a tile that is no longer made, which seafront streets take the brunt of south-easterlies, which older cottages hide a slate roof behind a parapet."
          />
          <ul className="mt-12 grid gap-px border border-line-strong bg-line-strong sm:grid-cols-2 lg:grid-cols-4">
            {mainTowns.map((town) => (
              <li key={town.slug} className="bg-canvas px-6 py-7">
                <h3 className="font-display text-xl">{town.name}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-mid">{town.blurb}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            <CheckItem>Free written quotes on every job</CheckItem>
            <CheckItem>Photographs before, during and after</CheckItem>
            <CheckItem>Guarantee terms set out in writing</CheckItem>
            <CheckItem>Waste removed and the site left tidy</CheckItem>
          </ul>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading
            kicker="How it works"
            title="From first call to final check"
            lede="The same careful rhythm on a single repair as on a full re-roof: inspect, written quote, schedule, complete."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <p className="mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-slate-mid">
            <Kicker>Also worth knowing</Kicker>
            For landlords we are happy to liaise with tenants for access, and to write up work in the
            plain, dated terms that keep maintenance records straight at the end of a tenancy.
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
