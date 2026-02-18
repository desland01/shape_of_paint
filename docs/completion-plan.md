# Completion Plan: Shape of Paint

**Created:** 2026-02-18
**Status:** Phase 1 Copy complete. Phases 1B–9 pending.

---

## What's Done (Phase 1A: Copy Optimization)

All existing page copy, meta titles, meta descriptions, H1s, CTAs, and body content rewritten across 10 files using Kyle Roof SEO targets from `docs/keyword-map.md` and Hormozi/Sanchez conversion copy. Build passes clean.

**Files modified:**

| File | Changes |
|------|---------|
| `src/config/site.ts` | Tagline, description, 3 service descriptions |
| `src/app/layout.tsx` | Default title, template, meta description |
| `src/app/page.tsx` | All 12 section props rewritten |
| `src/app/about/page.tsx` | Metadata, hero, 3 body sections, founder bio, services heading |
| `src/app/services/interior/page.tsx` | Metadata, hero, process steps, feature section, services list, testimonials heading |
| `src/app/services/exterior/page.tsx` | Metadata, hero, feature section, services list, testimonials heading |
| `src/app/contact/page.tsx` | Metadata, hero, form heading, service area text |
| `src/app/contact/faq/page.tsx` | Metadata, heading, all 6 FAQ answers |
| `src/app/contact/estimate/page.tsx` | Metadata, hero, both body paragraphs |
| `src/components/sections/NewsletterSignup.tsx` | Heading, description |

---

## Phase 1B: Critical Fixes (Broken Nav + Schema + Missing Pages)

The site has 3 broken nav links and zero schema markup. These must happen first.

### 1B-1. Create `/services/cabinets` page

**Priority:** Highest — KD 1 (easiest keyword win in the entire map), 210/mo volume, already linked from nav + homepage + about page

- Use heading structure from keyword map:
  ```
  H1: Cabinet Painting in Vancouver
  ├── H2: Cabinet Painting Services
  │   ├── H3: Kitchen Cabinet Painting
  │   ├── H3: Bathroom Vanity & Cabinet Painting
  │   └── H3: Custom Finishes & Staining
  ├── H2: Our Spray Finish Process
  │   ├── H3: Cleaning & De-Glossing
  │   ├── H3: Priming & Bonding Coats
  │   └── H3: Spray Application & Reassembly
  ├── H2: Cabinet Painting vs. Replacing — Why Paint Wins
  ├── H2: Cabinet Painting Cost in Vancouver
  ├── H2: Gallery — Before & After
  └── H2: Frequently Asked Questions
  ```
- Title tag: `Cabinet Painting Vancouver BC | Shape of Paint` (47 chars)
- Meta description: `Professional cabinet painting in Vancouver. Spray-finished kitchen & bathroom cabinets that look brand new. Save thousands vs. replacing. Free estimate.` (153 chars)
- Full Hormozi copy: "Save thousands vs replacing" value equation, spray finish process, before/after framing
- TF-IDF terms: spray finish, HVLP, refinishing, primer, Benjamin Moore Advance, MDF, laminate, fraction of the price, kitchen cabinets, bathroom cabinets, vanity, cabinet doors, drawer fronts
- Service schema + LocalBusiness schema
- Internal links to `/services/interior` and `/services/exterior`
- Add to `sitemap.ts`

### 1B-2. Create `/services/portfolio` page

**Priority:** High — linked from nav and footer, currently 404

- Gallery page using existing portfolio images
- Structure: PageHero + PortfolioGallery + ContactCTA
- Title: `Our Work | Shape of Paint`
- Links to all 3 service pages

### 1B-3. Create `/about/reviews` page

**Priority:** High — linked from nav, currently 404

- Testimonials page with all testimonials from site config
- Placeholder for Google Reviews widget embed (integration TODO)
- Title: `Reviews | Vancouver Painters`
- Links to service pages

### 1B-4. Wire schema markup into all pages

**Priority:** High — keyword map requires LocalBusiness schema on every page

- [ ] Fix `src/lib/schema.ts`: Change `@type` from `"LocalBusiness"` to `"HousePainter"`
- [ ] Update `areaServed` to array of 10 cities from keyword map:
  ```json
  "areaServed": [
    {"@type": "City", "name": "Vancouver"},
    {"@type": "City", "name": "Burnaby"},
    {"@type": "City", "name": "North Vancouver"},
    {"@type": "City", "name": "West Vancouver"},
    {"@type": "City", "name": "Coquitlam"},
    {"@type": "City", "name": "Port Moody"},
    {"@type": "City", "name": "Surrey"},
    {"@type": "City", "name": "New Westminster"},
    {"@type": "City", "name": "Langley"},
    {"@type": "City", "name": "Richmond"}
  ]
  ```
- [ ] Inject LocalBusiness JSON-LD into `layout.tsx` (covers all pages)
- [ ] Inject Service schema into each service page (interior, exterior, cabinets)
- [ ] Inject FAQ schema into FAQ page
- [ ] Inject BreadcrumbList schema into all interior pages

### 1B-5. Add internal links between service pages

**Priority:** Medium — Kyle Roof methodology requires contextual cross-links

- Interior page → link to exterior and cabinets
- Exterior page → link to interior and cabinets
- Cabinets page → link to interior and exterior
- Anchor text distribution from keyword map: partial match 30%, branded 30%, exact 15%, generic 20%, long-tail 5%

### 1B-6. Update `sitemap.ts`

- Add `/services/cabinets` (priority 0.9)
- Add `/services/portfolio` (priority 0.6)
- Add `/about/reviews` (priority 0.5)

---

## Phase 2: Service Area Pages (Tier 1 Cities)

Create individual pages for the highest-volume, lowest-difficulty city keywords. Each page needs 500+ words of unique content per keyword map rules.

| City | URL | Keyword | Vol/mo | KD |
|------|-----|---------|--------|----|
| Surrey | `/areas/surrey` | painters surrey bc | 480 | 4 |
| Burnaby | `/areas/burnaby` | painters burnaby | 320 | — |
| North Vancouver | `/areas/north-vancouver` | painters north vancouver | 260 | — |
| Coquitlam | `/areas/coquitlam` | painters coquitlam | 260 | 4 |

**Per-page requirements:**

- Title pattern: `Painters [City] BC | Interior & Exterior | Shape of Paint`
- H1 pattern: `House Painters in [City], BC`
- 500+ words unique content (NOT copied from main service pages)
- Mention local landmarks, neighbourhoods, cross-streets
- Area-specific testimonials if available
- Distance/drive time from Shape of Paint
- `areaServed` schema pointing to specific city
- Links UP to parent service pages (interior, exterior, cabinets)
- Add all to `sitemap.ts`

---

## Phase 3: Service Area Pages (Tier 2 + 3 Cities)

Same pattern as Tier 1, lower priority.

### Tier 2

| City | URL | Keyword | Vol/mo |
|------|-----|---------|--------|
| Langley | `/areas/langley` | painters langley bc | 210 |
| Port Moody | `/areas/port-moody` | house painters port moody | 90 |
| New Westminster | `/areas/new-westminster` | painters new westminster | 70 |

### Tier 3

| City | URL | Keyword | Vol/mo |
|------|-----|---------|--------|
| West Vancouver | `/areas/west-vancouver` | painters west vancouver | 50 |
| Pitt Meadows | `/areas/pitt-meadows` | house painters pitt meadows | 70 |
| Port Coquitlam | `/areas/port-coquitlam` | house painters port coquitlam | 20 |
| Richmond | `/areas/richmond` | painters richmond bc | 30 |
| Delta | `/areas/delta` | painters delta bc | 30 |

---

## Phase 4: Blog / Reverse Silo Content

15 blog posts across 3 silos. Each post follows strict linking rules:

1. **MUST link to TARGET PAGE** (money page)
2. **Links to 1–2 OTHER supporting posts** in same silo
3. **NO daisy chaining** (A→B→C)
4. **NO other internal links** outside the silo

### 4A. Blog infrastructure

- Create `/blog` layout and index page
- Decide: MDX with contentlayer vs. static page files
- Blog post template with author, date, reading time
- Article schema for each post

### 4B. Silo 1 — Cabinet Painting (highest ROI, most stable year-round)

**Target page:** `/services/cabinets`

| # | Post Title | URL | Target KW | Vol |
|---|-----------|-----|-----------|-----|
| 1 | Cabinet Painting vs. Replacing: Which Saves You More in Vancouver? | `/blog/cabinet-painting-vs-replacing` | cabinet painting vs replacing | ~10 |
| 2 | Kitchen Cabinet Painting Cost in Vancouver (2026 Guide) | `/blog/kitchen-cabinet-painting-cost-vancouver` | kitchen cabinet painting vancouver | 70 |
| 3 | Spray vs. Brush: Why Spray-Finished Cabinets Look Better | `/blog/spray-vs-brush-cabinet-painting` | spray painting cabinets | ~10 |
| 4 | How to Choose the Best Paint for Kitchen Cabinets | `/blog/best-paint-kitchen-cabinets` | best paint for kitchen cabinets | ~40 |
| 5 | Cabinet Refinishing vs. Refacing: What's the Difference? | `/blog/cabinet-refinishing-vs-refacing` | cabinet refinishing vancouver | 90 |

**Linking matrix:**
```
Post 1 → TARGET + Post 2
Post 2 → TARGET + Post 3
Post 3 → TARGET + Post 4
Post 4 → TARGET + Post 1
Post 5 → TARGET + Post 3
```

### 4C. Silo 2 — Interior Painting

**Target page:** `/services/interior`

| # | Post Title | URL | Target KW | Vol |
|---|-----------|-----|-----------|-----|
| 1 | Interior Painting Cost in Vancouver: What to Expect in 2026 | `/blog/interior-painting-cost-vancouver` | interior painting cost per square foot | 90 |
| 2 | How to Choose the Right Interior Paint Colours for Vancouver Homes | `/blog/interior-paint-colours-vancouver` | interior paint colours vancouver | ~10 |
| 3 | Level 5 Drywall Finish: Why It Matters for Your Vancouver Home | `/blog/level-5-finish-vancouver` | level 5 finish painting | ~10 |
| 4 | Low-VOC Paint Options for Vancouver Families | `/blog/low-voc-paint-vancouver` | eco friendly paint vancouver | ~10 |
| 5 | How to Prepare Your Home for Interior Painting | `/blog/prepare-home-interior-painting` | how to prepare for interior painting | ~20 |

**Linking matrix:**
```
Post 1 → TARGET + Post 2
Post 2 → TARGET + Post 3
Post 3 → TARGET + Post 4
Post 4 → TARGET + Post 1
Post 5 → TARGET + Post 3
```

### 4D. Silo 3 — Exterior Painting

**Target page:** `/services/exterior`

| # | Post Title | URL | Target KW | Vol |
|---|-----------|-----|-----------|-----|
| 1 | How Much Does It Cost to Paint a House Exterior in Vancouver? | `/blog/exterior-painting-cost-vancouver` | how much to paint a house vancouver | ~10 |
| 2 | Best Exterior Paint for Vancouver's Rain and Moisture | `/blog/best-exterior-paint-vancouver-weather` | best exterior paint for vancouver weather | ~10 |
| 3 | When Is the Best Time to Paint Your House Exterior in BC? | `/blog/best-time-exterior-painting-bc` | best time to paint exterior bc | ~10 |
| 4 | Stucco vs. Siding: Exterior Painting Differences in Vancouver | `/blog/stucco-vs-siding-painting-vancouver` | stucco painting vancouver | 20 |
| 5 | How to Spot Exterior Paint Failure Before It's Too Late | `/blog/exterior-paint-failure-signs` | peeling paint exterior | ~10 |

**Linking matrix:**
```
Post 1 → TARGET + Post 2
Post 2 → TARGET + Post 3
Post 3 → TARGET + Post 4
Post 4 → TARGET + Post 1
Post 5 → TARGET + Post 3
```

---

## Phase 5: Integrations

These require accounts, credentials, or assets from the business owner.

| Integration | File | Blocked On |
|-------------|------|------------|
| Email service (Resend/SendGrid) | `src/app/api/contact/route.ts` | API key |
| Booking embed | `src/app/contact/estimate/page.tsx` | Booking platform URL |
| Google Analytics | `src/app/layout.tsx` | GA4 measurement ID |
| Search Console verification | `src/app/layout.tsx` metadata | Verification code |
| Newsletter service | `src/components/sections/NewsletterSignup.tsx` | Mailchimp/ConvertKit API |
| Chat widget | `src/app/layout.tsx` | Widget script |
| OG images | `/public/og/` | Design assets |
| Favicon | `/public/favicon.ico` | Business favicon file |
| Real photography | All image references | Photo files |
| Google Maps embed | Contact page | Embed code |
| Video testimonials | VideoTestimonial component | YouTube/Vimeo URLs |
| Google Reviews widget | `/about/reviews` | Reviews embed script |

---

## Execution Order

| Step | Phase | What | Parallel Tasks | Dependency |
|------|-------|------|---------------|------------|
| 1 | 1B-1/2/3 | Cabinets page + Portfolio page + Reviews page | 3 | None |
| 2 | 1B-4/5/6 | Schema wiring + Internal links + Sitemap update | 3 | Step 1 |
| 3 | 2 | Tier 1 service area pages (4 cities) | 4 | Step 2 |
| 4 | 3 | Tier 2 service area pages (3 cities) | 3 | Step 3 |
| 5 | 3 | Tier 3 service area pages (5 cities) | 5 | Step 3 |
| 6 | 4A | Blog infrastructure | 1 | None (can start anytime) |
| 7 | 4B | Blog Silo 1: Cabinets (5 posts) | 5 | Step 6 |
| 8 | 4C | Blog Silo 2: Interior (5 posts) | 5 | Step 6 |
| 9 | 4D | Blog Silo 3: Exterior (5 posts) | 5 | Step 6 |
| 10 | 5 | Integrations | As credentials arrive | Business owner input |

**Steps 1–2** are the critical path — fix broken links and unlock the easiest keyword win.
**Steps 3–5** are high-value SEO — capture city-specific searches.
**Steps 6–9** are content marketing — reverse silo for authority building.
**Step 10** is operational — requires external accounts/assets.

---

## Copywriting Standards (All Phases)

All new content must follow:

- **Kyle Roof SEO:** Primary keyword in title (<60 chars), H1, URL, and first 100 words. H1→H2→H3 hierarchy. TF-IDF related terms from keyword map.
- **Hormozi/Sanchez Copy:** 5th grade reading level. Specific numbers. "You" > "we". Short sentences. Value equation. Damaging admissions for trust. Contrarian angles. Unexpected CTAs.
- **Local SEO:** NAP consistency (Shape of Paint / Vancouver, BC / 604-353-7378). LocalBusiness schema on every page. Service area mentions.
- **Reverse Silo Rules:** Blog posts link ONLY to target page + 1-2 siblings. No other internal links. No daisy chaining.

See `docs/keyword-map.md` for full keyword data and `CLAUDE.md` for project structure reference.
