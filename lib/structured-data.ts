import { site, mainTowns, surroundingAreas } from "./site";
import type { Faq } from "./content";

/**
 * Structured data (JSON-LD) builders.
 *
 * Crown & Coast Roofing is a fictional demonstration business, so NO
 * LocalBusiness markup is emitted by default: search engines must never be
 * shown invented addresses, credentials or opening hours for a business that
 * does not exist.
 *
 * To enable genuine LocalBusiness structured data for a real customer later:
 *   1. Fill in `verifiedFacts` below with checked, real business data
 *      (address, geo coordinates, real phone number, confirmed hours).
 *   2. Set `site.demoMode` to false in lib/site.ts.
 *   3. Render <JsonLd data={buildLocalBusinessJsonLd(verifiedFacts)} /> in
 *      app/layout.tsx (and the service pages will pick up Service markup).
 * Nothing else in the site needs to change.
 */

export type VerifiedBusinessFacts = {
  legalName: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  email: string;
  latitude: number;
  longitude: number;
  openingHours: string[];
  priceRange?: string;
  /** Only add accreditations that can be evidenced for the real customer. */
  accreditations?: string[];
};

/** Replace with verified facts for a real launch — kept null while fictional. */
export const verifiedFacts: VerifiedBusinessFacts | null = null;

export function buildLocalBusinessJsonLd(facts: VerifiedBusinessFacts) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "RoofingContractor"],
    name: site.name,
    legalName: facts.legalName,
    description: site.description,
    url: site.url,
    telephone: facts.telephone,
    email: facts.email,
    priceRange: facts.priceRange ?? "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: facts.streetAddress,
      addressLocality: facts.addressLocality,
      addressRegion: facts.addressRegion,
      postalCode: facts.postalCode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: facts.latitude,
      longitude: facts.longitude,
    },
    openingHoursSpecification: facts.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      description: spec,
    })),
    areaServed: [...mainTowns.map((t) => t.name), ...surroundingAreas].map((name) => ({
      "@type": "City",
      name,
    })),
    knowsAbout: [
      "Roof repairs",
      "Leak detection",
      "New roofs",
      "Slate roofing",
      "Tiled roofing",
      "Flat roofing",
      "Chimney repairs",
      "Leadwork",
      "Fascias, soffits and guttering",
      "Storm roof repairs",
    ],
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}

export function buildFaqPageJsonLd(faqs: readonly Faq[] | Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function buildServiceJsonLd(service: {
  name: string;
  summary: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: new URL(`/services/${service.slug}`, site.url).toString(),
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: [...mainTowns.map((t) => t.name), ...surroundingAreas].map((name) => ({
      "@type": "City",
      name,
    })),
  };
}
