import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/content";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/json-ld";
import { FaqList } from "@/components/faq";
import { CtaBand, ProcessSteps, ServiceHero } from "@/components/sections";
import { ButtonLink, CheckItem, Container, Section, SectionHeading } from "@/components/ui";
import { IconArrowRight, IconPhone } from "@/components/icons";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: `${service.summary} Covering ${site.coverageNote}. Free written quotes from ${site.name}.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={buildServiceJsonLd(service)} />

      <ServiceHero service={service} />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading kicker="The work" title={`What ${service.shortName.toLowerCase()} involves`} />
              <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
                {service.intro.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <h2 className="mt-12 font-display text-2xl sm:text-3xl">What is included</h2>
              <ul className="mt-6 grid gap-3">
                {service.includes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <aside className="border border-line bg-paper px-7 py-8">
              <h2 className="font-display text-2xl">Warning signs to look for</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-mid">
                Spotted any of these? It is worth a look before the next lot of weather.
              </p>
              <ul className="mt-5 list-disc space-y-2.5 pl-5 text-[0.98rem] leading-relaxed text-ink-soft">
                {service.warningSigns.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-[0.95rem] leading-relaxed text-slate-mid">
                  We inspect across {site.coverageNote}.
                </p>
                <ButtonLink href="/contact#quote" className="mt-4 w-full">
                  Get a free quote
                </ButtonLink>
                <ButtonLink href={site.phoneHref} variant="outline" className="mt-3 w-full">
                  <IconPhone className="h-4 w-4" />
                  {site.phoneDisplay}
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading
            kicker="How it works"
            title={`How ${service.shortName.toLowerCase()} jobs run`}
            lede="The same four steps on every job, from a single repair to a full re-roof."
          />
          <div className="mt-12">
            <ProcessSteps variant="service" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            kicker="Common questions"
            title={`${service.shortName} — questions we get asked`}
          />
          <div className="mt-10">
            <FaqList faqs={service.faqs} />
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading kicker="Related services" title="Often booked alongside" />
          <ul className="mt-10 grid gap-px border border-line-strong bg-line-strong sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="bg-canvas">
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col justify-between gap-5 px-6 py-7 transition-colors hover:bg-paper"
                >
                  <span>
                    <h3 className="font-display text-xl leading-snug">{item.shortName}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-mid">
                      {item.summary}
                    </p>
                  </span>
                  <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-copper-deep">
                    Details
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
