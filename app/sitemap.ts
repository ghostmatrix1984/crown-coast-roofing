import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

/** Evaluated once at module load so prerendering sees a stable value. */
const lastModified = new Date();

/**
 * Route map for search engines. Harmless while the site is noindex (see
 * robots.ts) and ready for a real launch by flipping `site.demoMode`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/projects", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/areas", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
  ];

  return [
    ...routes.map((route) => ({
      url: new URL(route.path, site.url).toString(),
      lastModified,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: new URL(`/services/${service.slug}`, site.url).toString(),
      lastModified,
      priority: 0.8,
    })),
  ];
}
