# Local SEO Full-Sweep Implementation Plan (City-First URL Architecture)

## Status

Completed on March 5, 2026.

## Outcome Summary

This plan is implemented.

- City-first routing is live:
  - Location hubs: `/{city}`
  - Service spokes: `/{city}/{service}`
  - Primary service money pages: `/vancouver/{service}`
- Legacy route families are removed from app routes:
  - `/areas/*`
  - `/services/*`
- Portfolio moved to `/portfolio`.
- `/locations` index route is live.
- Local SEO content architecture, schema, canonicals, and sitemap were updated to match this structure.
- `.claude` and `.codex` local SEO command/skill references were updated for city-first enforcement.
- Google Maps business profile data is wired into config/schema/UI using live entity details.

## Completed Work by Plan Phase

### 1. Build the New SEO Routing System

Completed.

- Added typed city/service route model in `src/config/local-seo.ts`.
- Implemented dynamic routes:
  - `src/app/[city]/page.tsx`
  - `src/app/[city]/[service]/page.tsx`
- Implemented static params and strict invalid route handling (`notFound`).
- Added `/locations` route (`src/app/locations/page.tsx`).
- Added `/portfolio` route (`src/app/portfolio/page.tsx`).

### 2. Remove Legacy Routes and Rewire Navigation

Completed.

- Removed `src/app/areas/*` route set.
- Removed `src/app/services*` route set.
- Updated nav/footer/service links in `src/config/site.ts` to city-first URLs.
- Rewired component links to city-first routes and `/portfolio`.

### 3. Implement Local SEO Content Layers

Completed.

- Hub and spoke pages include geo/service-aligned titles, H1s, intros, and FAQ sections.
- Reverse-silo pattern implemented:
  - hub -> all local spokes
  - spoke -> parent hub
  - non-Vancouver spoke -> matching Vancouver money page
- Copy updated to premium/artisan tone constraints.

### 4. Schema, Canonicals, and Sitemap

Completed.

- `src/lib/schema.ts` updated for location/service schema generation and LocalBusiness enhancements.
- Canonicals are self-referential per city hub/spoke metadata.
- `src/app/sitemap.ts` updated to include:
  - `/locations`, `/{city}`, `/{city}/{service}`, `/portfolio`
- Deprecated `/areas/*` and `/services*` sitemap entries removed.

### 5. Source-of-Truth Config and Site Data

Completed.

- `src/config/site.ts` updated as source-of-truth for:
  - city-first nav/footer/service targets
  - live Google Maps profile URL and identifiers
  - business address/coordinates/review data

### 6. Skill/Command System Updates (`.claude` + `.codex`)

Completed.

- Local SEO and premium-writer command docs updated to enforce:
  - city-first architecture
  - Vancouver money-page rule
  - no legacy `/areas/*` or `/services/*` assumptions

### 7. Final QA and Validation

Completed.

Validation run results:

1. `npm run lint` passed with warnings only (no errors).
2. `npm run build` passed and generated city/service routes successfully.
3. Link integrity checks in `src` show no stale runtime references to `/areas/*` or `/services/*`.

## Current Non-Blocking Warnings

- `@next/next/no-img-element` warnings in:
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Header.tsx`
  - `src/components/sections/BrandLogos.tsx`
- `react-hooks/incompatible-library` warning in:
  - `src/components/sections/ContactForm.tsx` (`watch()` from React Hook Form)
- Unused vars warning in:
  - `src/components/tools/CostCalculatorApp.tsx`

These are not blocking build or route architecture completion.

## Final Acceptance Checklist

- [x] Requested routing architecture implemented.
- [x] Legacy route families removed.
- [x] Sitemap and schema aligned with new architecture.
- [x] City/service link graph implemented.
- [x] `.claude` and `.codex` guidance updated.
- [x] Build and lint checks completed successfully.
- [x] No unrelated dirty-worktree changes were reverted.
