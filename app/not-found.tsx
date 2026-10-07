import Link from "next/link";
import { site } from "@/lib/site";
import { ButtonLink, Container, Section } from "@/components/ui";
import { IconPhone } from "@/components/icons";
import { Wordmark } from "@/components/logo";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Wordmark />
          <p className="mt-10 font-display text-7xl font-semibold text-copper">404</p>
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            This page has slipped off the roof
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-mid">
            The page you are after does not exist — perhaps the address has changed. The main
            sections are below, or call us on{" "}
            <a href={site.phoneHref} className="link-underline font-semibold text-ink">
              {site.phoneDisplay}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back to the home page</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Roofing services
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline">
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
            {[
              ["Projects", "/projects"],
              ["About", "/about"],
              ["Areas Covered", "/areas"],
              ["Contact / Free Quote", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="link-underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
