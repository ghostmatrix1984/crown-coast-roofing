import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { ProjectPair } from "@/components/project-pair";
import { CtaBand } from "@/components/sections";
import { ButtonLink, CheckItem, Container, DemoNote, Section } from "@/components/ui";
import { IconPhone } from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Roofing projects — before and after",
  description:
    "Before-and-after examples of roofing work across Folkestone, Hythe, Dover and Deal: storm damage repairs, chimney leadwork renewal and flat roof replacements. Demonstration content for a fictional company.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />

      <Section tone="paper" className="border-b border-line">
        <Container>
          <p className="kicker">Projects</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            The kind of work we do, before and after
          </h1>
          <p className="lede mt-6 max-w-3xl">
            Every job gets photographed as it happens — the fault, the work and the finished detail.
            Here is what that looks like across three typical East Kent jobs, with two photographs on
            each: where the work started, and where it finished.
          </p>
          <div className="mt-6 max-w-3xl">
            <DemoNote>
              These case studies are fictional demonstration content, illustrated with licensed stock
              photography. They do not show real Crown &amp; Coast Roofing projects or real customers,
              and the paired images may show different properties.
            </DemoNote>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact#quote">Get a free quote</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {projects.map((project, index) => (
        <Section key={project.slug} tone={index % 2 === 0 ? "canvas" : "paper"}>
          <Container>
            <ProjectPair project={project} />
            <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="kicker">
                  {project.location} · {project.service}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">{project.summary}</p>
              </div>
              <ul className="grid content-start gap-3 border-t border-line-strong pt-6 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                {project.details.map((detail) => (
                  <CheckItem key={detail}>{detail}</CheckItem>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      ))}

      <CtaBand
        title="Have a roof that needs attention?"
        body="Send a few details through the quote form, or call and describe what you can see. We will come and look before we quote for anything."
      />
    </>
  );
}
