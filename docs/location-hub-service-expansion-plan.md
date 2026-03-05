# Location Hub Service Expansion Plan (DataForSEO-Informed)

Date: March 5, 2026  
Scope: Plan only (no page implementation in this document)

## Goal

Add the right service pages to existing city hubs (`/{city}`) with a keyword map that:

1. Uses real search demand from DataForSEO.
2. Avoids keyword cannibalization.
3. Pushes authority to Vancouver money pages using reverse silo.

## Inputs Used

## 1) Existing live site audit (`shapeofpaint.com`)

Current public services and positioning language:

1. Interiors: prep-first, budget/timeline reliability, Benjamin Moore expertise.
2. Exteriors: substrate protection, weather/rot prevention, durability focus.
3. Cabinets: off-site door/drawer spraying, degrease/abrade/repair process.
4. Custom Projects: wainscotting, board-and-batten, shiplap, coffered ceilings.
5. Faux Finishes: decorative finishes, Venetian plaster, artisan network.
6. Staining: new wood + heritage rejuvenation, stain matching.
7. Spray Finishes: HVLP/airless/AAA capability across surfaces.
8. Design Services: bespoke design support from concept to install.

## 2) DataForSEO keyword pulls

DataForSEO MCP tool returned `401` in this environment, so queries were run directly against the DataForSEO API using the same account credentials.

Endpoints used:

1. `/v3/dataforseo_labs/google/related_keywords/live`
2. `/v3/dataforseo_labs/google/keyword_suggestions/live`
3. `/v3/dataforseo_labs/google/keyword_overview/live`

Query settings:

1. `location_name: Canada`
2. `language_code: en`
3. seed terms based on current service names and Vancouver intent.

## DataForSEO Findings (What to target)

High-confidence Vancouver service intent terms:

1. `exterior painting vancouver` (480, KD 18)
2. `exterior house painting vancouver` (480, KD 18)
3. `interior painting vancouver` (320, KD 20)
4. `interior house painting vancouver` (320, KD 23)
5. `cabinet painting vancouver` (210, KD 1)
6. `cabinet refacing vancouver` (110, KD 0)
7. `cabinet refinishing vancouver` (90, KD 0)
8. `kitchen cabinet painting vancouver` (70, KD 0)
9. `venetian plaster vancouver` (90, KD 0)
10. `custom millwork vancouver` (50, KD 0, mostly navigational)
11. `stucco painting vancouver` (20, KD 0)
12. `deck staining vancouver` (10, KD 0)
13. `fence staining vancouver` (10, KD 0)

Low/no-demand terms (do not justify city-wide standalone pages yet):

1. `spray finishes vancouver` (no meaningful tracked volume)
2. `paint color consultation vancouver` / `colour consultation vancouver` (no meaningful tracked volume)
3. most faux-finish phrasing except Venetian-plaster variants.

## Service Names to Target in Location Hubs

Recommended indexable service spokes under each city hub:

1. `interior-painting`
2. `exterior-painting`
3. `cabinet-painting`
4. `decorative-finishes` (position around Venetian plaster / artisan finishes)
5. `deck-fence-staining`
6. `custom-millwork-feature-walls`

Support services to keep as conversion/support content (not city-wide indexable spokes in phase 1):

1. `spray-finishes`
2. `design-services`

Reason: low standalone search demand; better used as proof/process differentiators inside money pages and conversion sections.

## Canonical Keyword Map (No Cannibalization)

## Homepage ownership

1. `/` owns: `house painters vancouver`, `painters vancouver`.
2. Service pages must not target these as primary keywords.

## Vancouver money pages (primary ownership)

1. `/vancouver/interior-painting`
   - Primary: `interior painting vancouver`
   - Secondary: `interior house painting vancouver`, `vancouver interior painting`

2. `/vancouver/exterior-painting`
   - Primary: `exterior painting vancouver`
   - Secondary: `exterior house painting vancouver`, `exterior home painting vancouver`, `stucco painting vancouver`

3. `/vancouver/cabinet-painting`
   - Primary: `cabinet painting vancouver`
   - Secondary: `cabinet refacing vancouver`, `cabinet refinishing vancouver`, `kitchen cabinet painting vancouver`

4. `/vancouver/decorative-finishes`
   - Primary: `venetian plaster vancouver`
   - Secondary: `venetian plaster walls` (supporting, non-local modifier in body/FAQ only)

5. `/vancouver/deck-fence-staining`
   - Primary: `deck staining vancouver`
   - Secondary: `fence staining vancouver`, `wood staining vancouver`

6. `/vancouver/custom-millwork-feature-walls`
   - Primary: `custom millwork vancouver`
   - Secondary: `wainscoting vancouver`, `board and batten vancouver`, `feature wall painting vancouver`

## Non-Vancouver city spokes (pattern ownership)

For each city spoke `/{city}/{service}`:

1. Primary keyword pattern: `{service keyword} {city}`.
2. Vancouver head terms remain owned by Vancouver money pages.
3. City spoke copy and anchors must not claim the Vancouver generic head term as primary.

## Cannibalization Guardrails

1. Exactly one primary keyword per URL.
2. `cabinet refinishing` and `cabinet refacing` stay secondary terms on cabinet painting pages (do not split into separate city-wide pages in phase 1).
3. `spray-finishes` and `design-services` remain support pages until demand justifies indexable spokes.
4. No duplicate H1 patterns across services within the same city.
5. No competing blog slugs targeting identical service+city head terms.

## Reverse Silo Authority Plan

## Link graph rules

1. Every city hub `/{city}` links to all active service spokes for that city.
2. Every city service spoke `/{city}/{service}` links to:
   - parent city hub `/{city}`
   - Vancouver money page `/vancouver/{service}` (authority-up link)
   - 1-2 sibling service spokes in same city when contextually relevant.
3. Every supporting blog in a service silo links first to Vancouver money page, then optionally to one relevant city spoke.

## Silo structure

1. Interior silo -> target: `/vancouver/interior-painting`
2. Exterior silo -> target: `/vancouver/exterior-painting`
3. Cabinet silo -> target: `/vancouver/cabinet-painting`
4. Decorative silo -> target: `/vancouver/decorative-finishes`
5. Staining silo -> target: `/vancouver/deck-fence-staining`
6. Millwork silo -> target: `/vancouver/custom-millwork-feature-walls`

## Local-SEO Skill Execution Plan (4 Layers)

## Layer 1: On-page + geo modifiers

1. Add geo-modified title/H1/first-100-words for each new service spoke.
2. Keep one H1 and strict heading hierarchy.
3. Ensure service+city alignment in metadata and opening copy.

## Layer 2: Reverse + geo silo

1. Add new service slugs to location hub cards.
2. Enforce bidirectional parent-child links.
3. Add Vancouver authority-up links from all non-Vancouver spokes.

## Layer 3: GEO fundamentals

1. Add answer-first summaries on each service spoke.
2. Add concise FAQ blocks per service intent.
3. Keep schema explicit for extraction (`Service`, `FAQPage`, `BreadcrumbList`).

## Layer 4: Premium writer

1. Rewrite service intros in premium artisan tone.
2. Keep proof/process language from current brand positioning.
3. Avoid hype or budget framing.

## Implementation Blueprint (when execution starts)

Primary files expected to change:

1. `src/config/local-seo.ts`
   - add new service slugs/content and rollout flags (`indexable` vs `support`).

2. `src/app/[city]/page.tsx`
   - show new service cards in location hubs.

3. `src/app/[city]/[service]/page.tsx`
   - metadata templates, copy modules, FAQ blocks for new service types.

4. `src/config/site.ts`
   - nav/footer service link additions.

5. `src/lib/schema.ts`
   - service schema mapping for new service families.

6. `src/app/sitemap.ts`
   - include all new indexable city/service combinations.

## Rollout sequence

1. Launch Vancouver money pages first for 3 new services (`decorative-finishes`, `deck-fence-staining`, `custom-millwork-feature-walls`).
2. Expand same services to all city spokes.
3. Publish supporting blog cluster per service silo.
4. Add `spray-finishes` and `design-services` as support sections site-wide (not standalone city spokes in phase 1).

## Acceptance Criteria for this plan

1. Service names are locked to a data-backed, non-cannibalizing set.
2. Every service has one clear keyword owner URL.
3. Reverse-silo links explicitly feed authority to Vancouver money pages.
4. Low-demand services are handled as support content, not index bloat.

