import type { Metadata } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { CtaBand, ServiceList } from "@/components/sections";
import { JsonLd } from "@/components/json-ld";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { Container, DemoNote, Section, SectionHeading } from "@/components/ui";
import { ButtonLink } from "@/components/ui";
import { IconPhone } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Roofing services — repairs, re-roofs, flat roofing, leadwork",
  description:
    "Roof repairs and leak detection, new roofs and replacements, pitched tiled and slate roofing, flat roofing, chimney repairs and leadwork, fascias, soffits and guttering, and storm emergency repairs across Folkestone, Hythe, Dover and Deal.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <Section tone="paper" className="border-b border-line">
        <Container>
          <p className="kicker">Services</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            Everything to do with keeping rain out of East Kent homes
          </h1>
          <p className="lede mt-6 max-w-3xl">
            Seven core services, one roofer. Whether it is a leak that needs tracing today or a roof
            that has reached the end of its life, the process is the same: inspect properly, quote in
            writing, do the work to the detail your building needs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact#quote">Get a free quote</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            kicker="What we do"
            title="Our roofing services in detail"
            lede="Each service page explains what the work involves, what it costs in terms of time and disruption, and the warning signs to look for at home."
          />
          <div className="mt-12">
            <ServiceList items={services} />
          </div>
          <div className="mt-10 max-w-3xl">
            <DemoNote>
              Demonstration content: service descriptions are realistic trade copy written for this
              fictional company, and do not represent a real business or its accreditations.
            </DemoNote>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        body="Describe the problem in the quote form, or call and talk it through. Half the time the answer is a small repair rather than the job the customer feared."
      />
    </>
  );
}
