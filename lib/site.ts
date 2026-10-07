/**
 * Single source of truth for the business identity.
 *
 * Crown & Coast Roofing is a FICTIONAL demonstration business. Every business
 * fact below is demo content and must be replaced with the real company's
 * details before this site is used commercially.
 *
 * The telephone number uses Ofcom's reserved "drama" range (01632 960xxx) so
 * it can never dial a real person. The domain is illustrative only.
 */

export const site = {
  name: "Crown & Coast Roofing",
  shortName: "Crown & Coast",
  tagline: "Roofing for Folkestone, Hythe, Dover & Deal",
  description:
    "Independent roofing company covering Folkestone, Hythe, Dover, Deal and the surrounding East Kent villages. Roof repairs and leak detection, new roofs, slate and tiled roofing, flat roofing, chimney leadwork, fascias and guttering, plus storm emergency call-outs. Free written quotes.",

  /**
   * Demo deployments must not be indexed. Set to false (and fill in the
   * verified business facts in lib/structured-data.ts) for a real launch.
   */
  demoMode: true,

  /** Set via NEXT_PUBLIC_SITE_URL in the environment when deployed. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001",

  /** Ofcom drama number — fictional demo contact detail. */
  phoneDisplay: "01632 960 244",
  phoneHref: "tel:+441632960244",
  email: "quotes@crownandcoastroofing.co.uk",

  baseLocation: "Folkestone, Kent",
  coverageNote: "Folkestone, Hythe, Dover, Deal and surrounding East Kent villages",
  postcodeDistricts: "CT13–CT21",

  /** Demo opening hours — replace with confirmed hours before launch. */
  hours: [
    { days: "Monday – Friday", time: "7.30am – 6pm" },
    { days: "Saturday", time: "8am – 2pm" },
    { days: "Sunday", time: "Storm emergencies only" },
  ],
} as const;

/**
 * Copyright year, evaluated once at module load so it stays a stable value for
 * prerendering (Next.js cache components forbid `new Date()` during render).
 */
export const copyrightYear = new Date().getFullYear();

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Areas Covered", href: "/areas" },
  { label: "Contact / Free Quote", href: "/contact" },
] as const;

/** Towns at the heart of the coverage area. */export const mainTowns = [
  {
    name: "Folkestone",
    slug: "folkestone",
    blurb:
      "From the Harbour and the Warren to Cheriton and Sandgate Hill — seafront weather is hard on roofs, and we work on everything from Victorian terraces to newer estates.",
  },
  {
    name: "Hythe",
    slug: "hythe",
    blurb:
      "Period cottages and townhouses around the Military Canal and along the coast, where leadwork, gutters and salt-laden wind do most of the damage.",
  },
  {
    name: "Dover",
    slug: "dover",
    blurb:
      "Town and village roofs across the Dover district, from Kearsney and River up to the downs — re-roofs, flat roofs over garages and bay roofs, and storm call-outs.",
  },
  {
    name: "Deal",
    slug: "deal",
    blurb:
      "Cliff-top and conservation-area homes around Deal and Walmer, where matching plain tiles, slate and ridge detail matters as much as keeping the rain out.",
  },
] as const;

/** Surrounding villages and smaller communities we cover. */
export const surroundingAreas = [
  "Sandgate",
  "Cheriton",
  "Hawkinge",
  "Capel-le-Ferne",
  "Densole",
  "Lyminge",
  "Elham",
  "Stelling Minnis",
  "Aylesham",
  "Shepherdswell",
  "Eythorne",
  "Guston",
  "Whitfield",
  "River",
  "Kearsney",
  "Temple Ewell",
  "Lydden",
  "Waldershare",
  "Ringwould",
  "Kingsdown",
  "Walmer",
  "Sholden",
  "Wingham",
  "Ash",
  "Richborough",
  "Littlebourne",
] as const;
