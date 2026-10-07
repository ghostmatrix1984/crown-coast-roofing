import Link from "next/link";
import { navLinks, site, mainTowns, surroundingAreas, copyrightYear } from "@/lib/site";
import { services } from "@/lib/content";
import { imageCredits } from "@/lib/image-credits";
import { Wordmark } from "./logo";
import { EmailText } from "./ui";
import { IconMail, IconPhone } from "./icons";

export function SiteFooter() {
  return (
    <footer className="stripe-dark roof-texture pt-16 pb-28 text-paper md:pb-16">
      <div className="mx-auto w-full max-w-[80rem] px-5 min-[2560px]:max-w-[110rem] sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-paper/75">
              Independent roofing company working on homes and rental properties across
              Folkestone, Hythe, Dover, Deal and the surrounding East Kent villages. Repairs,
              re-roofs, flat roofing, leadwork and storm call-outs, with free written quotes.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-copper-mist">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-paper/80 transition-colors hover:text-copper-mist"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-copper-mist">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-paper/80 transition-colors hover:text-copper-mist"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact#quote"
                  className="text-copper-mist underline underline-offset-4"
                >
                  Free quote form
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-copper-mist">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-copper-mist"
                >
                  <IconPhone className="h-4 w-4 text-copper-mist" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-copper-mist"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-copper-mist" />
                  <span className="text-[0.9rem]">
                    <EmailText />
                  </span>
                </a>
              </li>
              <li className="text-paper/70">{site.baseLocation}</li>
              <li className="text-paper/70">Covering {site.postcodeDistricts}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-copper-mist">
            Areas covered
          </h2>
          <p className="mt-3 text-[0.9rem] leading-relaxed text-paper/70">
            {[...mainTowns.map((t) => t.name), ...surroundingAreas].join(" · ")}
          </p>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-[0.85rem] leading-relaxed text-paper/65">
          <p className="max-w-3xl">
            <strong className="text-copper-mist">Demonstration website.</strong> Crown &amp; Coast
            Roofing is a fictional company created for design and development demonstration. The
            telephone number is an Ofcom drama number, the email and domain are illustrative, and
            testimonials, projects and figures shown on this site are demo content — not real
            reviews, accreditations or completed works.
          </p>
          <p className="mt-3">
            © {copyrightYear} {site.name} (demo) ·{" "}
            <Link href="/contact" className="link-underline">
              Contact
            </Link>{" "}
            · <Link href="/services" className="link-underline">Services</Link>
          </p>

          <details className="mt-6 max-w-3xl">
            <summary className="inline-flex min-h-11 cursor-pointer items-center gap-2 font-semibold text-copper-mist">
              Photography credits
              <span aria-hidden="true" className="faq-sign text-base font-normal">
                +
              </span>
            </summary>
            <ul className="mt-3 space-y-2">
              {imageCredits.map((credit) => (
                <li key={credit.file}>
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline"
                  >
                    {credit.title}
                  </a>{" "}
                  by {credit.author} ·{" "}
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline"
                  >
                    {credit.license}
                  </a>
                  . Used unmodified as demo imagery on this fictional site.
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
}
