import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Demo deployments are not indexed. Set `site.demoMode` to false (with
 * verified business data in place) to open the site up to search engines.
 */
export default function robots(): MetadataRoute.Robots {
  if (site.demoMode) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
