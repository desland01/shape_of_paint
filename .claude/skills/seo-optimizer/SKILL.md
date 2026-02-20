---
name: seo-optimizer
description: Optimizes pages, plans blog content, writes SEO copy, and manages local SEO for Shape of Paint (Vancouver painting contractor). Use for on-page optimization, keyword targeting, reverse silo blog planning, service area pages, heading structure, schema markup, internal linking, GBP optimization, citation building, review strategy, and conversion copywriting. Combines Kyle Roof scientific SEO, Sterling Sky local SEO, and Hormozi/Sanchez copy methodology.
---

# SEO Optimizer — Shape of Paint

Master SEO skill for shapeofpaint.com. Covers on-page optimization (Kyle Roof methodology), reverse silo blog planning, local SEO (Sterling Sky), and conversion copywriting (Hormozi/Sanchez).

## Business Context

```
Name:         Shape of Paint
Owner:        Gabe Penner
Phone:        604-353-7378
Email:        hello@shapeofpaint.com
URL:          https://shapeofpaint.com
City:         Vancouver, BC, Canada
Service Area: Vancouver, Burnaby, North Vancouver, West Vancouver,
              Coquitlam, Port Moody, Surrey, New Westminster,
              Langley, Richmond, Delta, Pitt Meadows, Port Coquitlam
Services:     Interior Painting, Exterior Painting, Cabinet Painting
Social:       instagram.com/shapeofpaint, facebook.com/shapeofpaint
GBP Category: Painter (primary), House Painter (secondary)
```

## Site Architecture & Keyword Targets

| Page | URL | Primary Keyword | Vol/mo | KD |
|------|-----|-----------------|--------|----|
| Homepage | `/` | house painters vancouver | 1,000 | 15 |
| Interior | `/services/interior` | interior painting vancouver | 320 | 20 |
| Exterior | `/services/exterior` | exterior painting vancouver | 480 | 13 |
| Cabinets | `/services/cabinets` | cabinet painting vancouver | 210 | 1 |
| Estimate | `/contact/estimate` | free painting estimate vancouver | — | — |
| FAQ | `/contact/faq` | painters vancouver FAQ | — | — |
| About | `/about` | about Shape of Paint | — | — |
| Burnaby | `/areas/burnaby` | painters burnaby | 320 | — |
| North Van | `/areas/north-vancouver` | painters north vancouver | 260 | — |
| Coquitlam | `/areas/coquitlam` | painters coquitlam | 260 | 4 |
| Surrey | `/areas/surrey` | painters surrey bc | 480 | 4 |
| Langley | `/areas/langley` | painters langley bc | 210 | — |

**Easiest win:** Cabinet painting vancouver (KD 1, 210/mo). Painters surrey bc and painters coquitlam (KD 4) are next.

## Task Router

Read the appropriate reference file based on what you're doing:

**Optimizing a page?**
Apply the Four Placement Areas below, then read [on-page-reference.md](on-page-reference.md) for TF-IDF terms and H2/H3 structures per page.

**Planning or writing blog content?**
Read [reverse-silo-reference.md](reverse-silo-reference.md) for all 3 silo plans with linking matrices. Every blog post must follow the strict linking rules.

**Writing any copy (headlines, CTAs, descriptions)?**
Read [copywriting-reference.md](copywriting-reference.md) for Hormozi/Sanchez frameworks.

**Working on local SEO, GBP, citations, reviews, or service area pages?**
Read [local-seo-reference.md](local-seo-reference.md) for Sterling Sky methodology and citation lists.

**Need full keyword data, competitor analysis, or implementation phases?**
Read [docs/keyword-map.md](../../../docs/keyword-map.md) for the complete keyword research document.

## Four Placement Areas (Kyle Roof)

Every page optimization starts here. These four areas have the highest ranking impact based on 400+ controlled experiments.

### 1. Title Tag

- Under 60 characters
- Front-load the primary keyword
- Format: `[Primary Keyword] [City] [Province] | Shape of Paint`
- Each page must have a unique title

### 2. H1 Tag

- Exactly one H1 per page
- Must contain the primary keyword
- Place at the top of the content
- Can differ slightly from the title tag

### 3. URL

- Must include the primary keyword
- Short and clean, hyphens only
- No parameters, no dates (unless blog)

### 4. Body Content

- Primary keyword in the first 100 words
- Natural density guided by TF-IDF (see on-page-reference.md)
- Include semantic variations and related entities
- Answer user intent thoroughly

## Heading Hierarchy

Never skip levels. Every page follows this pattern:

```
H1: [Primary Keyword] in Vancouver
├── H2: [Service/Topic Section]
│   ├── H3: [Specific Detail]
│   └── H3: [Specific Detail]
├── H2: Our [Process/Approach]
│   ├── H3: [Step 1]
│   └── H3: [Step 2]
├── H2: [Cost/Pricing] in Vancouver
├── H2: Why Vancouver Homeowners Choose Shape of Paint
└── H2: Frequently Asked Questions
    ├── H3: [Question 1]
    └── H3: [Question 2]
```

- Include primary keyword in at least one H2
- One topic per H2 section
- Use H3s for detailed breakdowns
- Short paragraphs (2-3 sentences max)

## Schema Requirements

### LocalBusiness (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "name": "Shape of Paint",
  "telephone": "+1-604-353-7378",
  "email": "hello@shapeofpaint.com",
  "url": "https://shapeofpaint.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
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
  ],
  "sameAs": [
    "https://instagram.com/shapeofpaint",
    "https://facebook.com/shapeofpaint",
    "https://www.google.com/maps/place/Shape+of+Paint"
  ],
  "priceRange": "$$"
}
```

### Service Schema (each service page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Interior Painting | Exterior Painting | Cabinet Painting]",
  "provider": {
    "@type": "HousePainter",
    "name": "Shape of Paint"
  },
  "areaServed": {"@type": "City", "name": "Vancouver"}
}
```

Use FAQPage schema on any page with FAQ content. Use Article schema on blog posts.

## Reverse Silo Linking Rules

These rules are non-negotiable for all blog content:

1. Every supporting post MUST link to its target page
2. Each supporting post links to 1-2 other supporting posts in the same silo
3. NO daisy chaining (if A links to B, A does NOT also link to C through B)
4. NO other internal links outside the silo

Three silos exist: Interior (`/services/interior`), Exterior (`/services/exterior`), Cabinets (`/services/cabinets`). See [reverse-silo-reference.md](reverse-silo-reference.md) for complete post lists and linking matrices.

## Anchor Text Distribution

| Type | % | Examples |
|------|---|---------|
| Exact match | 15% | "interior painting vancouver" |
| Partial match | 30% | "our interior painting services" |
| Branded | 30% | "Shape of Paint", "Gabe and his crew" |
| Generic | 20% | "learn more", "view details" |
| Long-tail | 5% | "interior painting services in Vancouver BC" |

## Pre-Publish Checklist

### Content
- [ ] Hook creates instant curiosity (Hormozi/Sanchez)
- [ ] Specific numbers used (not vague claims)
- [ ] Written at 5th grade reading level
- [ ] "You" used more than "we"
- [ ] Sounds human, not corporate

### SEO
- [ ] Title tag: primary keyword + under 60 chars
- [ ] Single H1 containing primary keyword
- [ ] URL includes target keyword
- [ ] H1 > H2 > H3 hierarchy (no skipping)
- [ ] Primary keyword in first 100 words
- [ ] TF-IDF related terms included (see on-page-reference.md)
- [ ] Images have descriptive alt text with keywords
- [ ] Internal links follow reverse silo rules

### Schema & Technical
- [ ] LocalBusiness schema on every page
- [ ] Service/FAQ/Article schema where applicable
- [ ] `npm run build` passes
- [ ] `npm run lint` passes

## Seasonality (Vancouver)

| Season | Search Trend | Strategy |
|--------|-------------|----------|
| Feb-Apr | Volume surges 50-90% | Push exterior content, spring booking CTAs |
| May-Jun | Peak season | Focus on conversion, testimonial collection |
| Jul-Sep | Strong for exterior | Exterior blog content, portfolio before/afters |
| Oct-Dec | Volume drops 40-60% | Interior content push, cabinet painting (stable year-round at 210/mo) |

Cabinet painting has the most stable demand year-round. Prioritize the cabinets silo for consistent winter lead generation.

## Reference Files

| File | Read When |
|------|-----------|
| [on-page-reference.md](on-page-reference.md) | Optimizing any page (TF-IDF terms, H2/H3 structures, audit checklist) |
| [reverse-silo-reference.md](reverse-silo-reference.md) | Planning or writing blog posts (3 silo plans, linking matrices) |
| [local-seo-reference.md](local-seo-reference.md) | GBP, citations, reviews, service area pages, NAP |
| [copywriting-reference.md](copywriting-reference.md) | Writing any headline, CTA, description, or body copy |
| [docs/keyword-map.md](../../../docs/keyword-map.md) | Full keyword data, competitor analysis, implementation phases |

## Specific Focus (if provided)
Apply your analysis to this user-specified context, URL, keyword, or page: $ARGUMENTS
