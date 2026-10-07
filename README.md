# Crown & Coast Roofing

A production-quality demo website for **Crown & Coast Roofing** — a *fictional*
independent roofing company serving Folkestone, Hythe, Dover, Deal and the
surrounding East Kent villages. Built as a design and development demonstration:
the business, its people, contact details, testimonials, projects and figures do
not exist. Workflow, checks and guardrails are defined in [AGENTS.md](AGENTS.md).

## Stack

- Next.js 16 (App Router) + React + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Fraunces (display) + Archivo (text), self-hosted via `next/font`
- In-house line icons and roof-inspired details (tile courses, ridge rules)

## Brand & design direction

Premium trade identity: deep charcoal/slate, warm off-white canvas and a muted
copper accent. Editorial typography, ruled layouts (no generic card grids),
large licensed roofing photography and subtle roof-derived visual details —
tile-course section seams and ridge rules. Restrained motion only (hover/focus
transitions and the accessible before/after comparison slider).

Pages: home, services overview, seven service detail pages, projects
(before/after case studies), about, areas covered, contact / free quote, plus a
branded 404.

## Quote form & submission layer

- Accessible form (labels, fieldsets, error summary, loading/error/success
  states, duplicate-submit protection, honeypot).
- Submissions POST to `app/api/quote/route.ts`, which validates and then
  forwards to a Formspree-style endpoint **only** when the server-side
  environment variable `QUOTE_FORM_ENDPOINT` is set.
- With no endpoint configured the site runs in **clearly labelled demo mode**:
  the success panel states plainly that nothing was sent, and no data leaves the
  browser. It never pretends an enquiry was delivered.

## Environment variables

See [`.env.example`](.env.example):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata, canonicals and sitemap |
| `QUOTE_FORM_ENDPOINT` | Server-side Formspree-style endpoint for quote enquiries (optional) |

## SEO & structured data

- Per-page metadata with canonicals and Open Graph, built via `lib/seo.ts`.
- `app/robots.ts` and `app/sitemap.ts` driven by `lib/site.ts`.
- JSON-LD builders in `lib/structured-data.ts`. **No `LocalBusiness` markup is
  emitted** while the business is fictional; `verifiedFacts` is the single place
  to add genuine, checked business data (address, geo, hours) for a real
  customer, after which the builder can be rendered in the layout.
- `site.demoMode` (in `lib/site.ts`) keeps demo deployments **noindex** and
  robots-disallowed. Set it to `false` for a real launch.

## Photography

All photography is unmodified (resized) Wikimedia Commons material, used under
the licences recorded in [`public/images/CREDITS.md`](public/images/CREDITS.md)
and rendered in the site footer. Case-study "before/after" pairings are
illustrative demonstration pairings, not genuine projects. Replace with owned or
licensed client photography before any commercial launch.

## Checks

```bash
npm run lint
npx tsc --noEmit   # typecheck
npm run build
npm run start -- -p 3001
```

Final QA runs against the production build (`npm run start`), never `next dev`.
