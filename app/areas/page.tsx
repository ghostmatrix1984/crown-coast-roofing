import type { Metadata } from "next";
import Image from "next/image";
import { site, mainTowns, surroundingAreas } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections";
import { ButtonLink, CheckItem, Container, Section, SectionHeading } from "@/components/ui";
import { IconPhone } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Areas covered — Folkestone, Hythe, Dover, Deal & East Kent",
  description:
    "Roofing coverage across East Kent: Folkestone, Hythe, Dover and Deal, plus Sandgate, Cheriton, Hawkinge, Elham, Lyminge, Aylesham, Shepherdswell, Walmer, Kingsdown, Wingham and surrounding villages (CT13–CT21).",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Areas Covered", path: "/areas" },
        ])}
      />

      <Section tone="paper" className="border-b border-line">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="kicker">Areas covered</p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Roofing across Folkestone, Hythe, Dover and Deal
              </h1>
              <p className="lede mt-6 max-w-2xl">
                We keep the working patch small on purpose — roughly the {site.postcodeDistricts}{" "}
                postcode districts of East Kent. Short journeys mean a leaking roof gets looked at
                quickly, and the same roofer is still around for the work afterwards.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#quote">Get a free quote</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline">
                  <IconPhone className="h-4 w-4" />
                  {site.phoneDisplay}
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[3/2] w-full border border-line">
              <Image
                src="/images/areas-kent-roofs.jpg"
                alt="A terraced street in Folkestone with slate and tiled roofs, chimney stacks and downland behind"
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
          <SectionHeading
            kicker="Main towns"
            title="Where most of our work is"
            lede="Sea air, hilltop exposure and a lot of older roof coverings — each town here has its own roofing character, and we work on all of them week in, week out."
          />
          <div className="mt-12 grid gap-px border border-line-strong bg-line-strong sm:grid-cols-2">
            {mainTowns.map((town) => (
              <article key={town.slug} className="bg-canvas px-7 py-8">
                <h3 className="font-display text-2xl">{town.name}</h3>
                <p className="mt-3 leading-relaxed text-slate-mid">{town.blurb}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading
            kicker="Villages & surrounds"
            title="And the villages in between"
            lede="From the downs to the Wantsum channel — if your property is in or near one of these, we cover it."
          />
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
            {surroundingAreas.map((area) => (
              <li key={area} className="border-b border-line py-2 text-[1.02rem]">
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="border border-line bg-canvas px-7 py-8">
              <h3 className="font-display text-xl">On the edge of the patch?</h3>
              <p className="mt-3 leading-relaxed text-slate-mid">
                If you are just outside — Canterbury way, Ashford, or out towards Sandwich and the
                Thanet border — ask anyway. If we can fit the work in sensibly we will, and if we
                cannot we will tell you straight rather than leave you waiting.
              </p>
            </div>
            <div className="border border-line bg-canvas px-7 py-8">
              <h3 className="font-display text-xl">Landlords and letting agents</h3>
              <p className="mt-3 leading-relaxed text-slate-mid">
                We work with landlords across the district, arranging access with tenants directly
                and writing up work in dated, plain terms for maintenance records and end-of-tenancy
                files.
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            <CheckItem>Emergency make-safe visits prioritised within the patch</CheckItem>
            <CheckItem>Same-day leak inspections where the diary allows</CheckItem>
            <CheckItem>Scaffolding arranged locally across the district</CheckItem>
            <CheckItem>Free written quotes wherever we work</CheckItem>
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Want us to come and look?"
        body={`Send your postcode through the quote form or call ${site.phoneDisplay} — we will tell you honestly whether we cover your street and when we can get to you.`}
      />
    </>
  );
}
