import type { Metadata } from "next";
import { site } from "./site";

/**
 * Metadata helpers. Every route uses buildMetadata so titles, canonicals and
 * demo-mode robots stay consistent across the site.
 */

export function buildMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = new URL(path, site.url);
  return {
    title,
    description,
    alternates: { canonical },
    robots: site.demoMode || noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}
