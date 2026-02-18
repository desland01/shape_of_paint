# Painting Contractor Template — AI Working Guide

> Cloned from https://www.whiteoakpainting.com on 2026-02-18.
> Stack: Next.js 16 + Tailwind CSS v4 + shadcn/ui + Framer Motion

## Delegation

**Default to `/orchestrator` for everything.** The only exception is a truly trivial task (1 file, 1 obvious change) which gets a single subagent with no plan file.

| Complexity | Signal | Approach |
|------------|--------|----------|
| Trivial | 1 file, single obvious change | 1 subagent, no plan file |
| Everything else | 2+ files, any ambiguity, any multi-step work | Activate `/orchestrator` with parallel batches |

If in doubt, use `/orchestrator`. Err on the side of orchestration.

## Project Map

```
src/
├── app/
│   ├── layout.tsx                    # Root layout, Montserrat font, metadata defaults
│   ├── page.tsx                      # Homepage (14 sections)
│   ├── globals.css                   # Design tokens (colors, typography, spacing)
│   ├── about/page.tsx                # About / Our Story page
│   ├── services/
│   │   ├── interior/page.tsx         # Interior painting service page
│   │   └── exterior/page.tsx         # Exterior painting service page
│   ├── contact/
│   │   ├── page.tsx                  # Contact page with form
│   │   ├── estimate/page.tsx         # Free estimate CTA page
│   │   └── faq/page.tsx              # FAQ page with accordion
│   ├── api/contact/route.ts          # Contact form endpoint (logs to console)
│   ├── sitemap.ts                    # Auto-generated sitemap
│   └── robots.ts                     # Robots.txt config
├── components/
│   ├── ui/                           # shadcn/ui primitives (Button, Card, Input, etc.)
│   ├── layout/
│   │   ├── Header.tsx                # Logo + nav + mobile hamburger menu
│   │   └── Footer.tsx                # Logo, phone, link columns, copyright
│   ├── sections/
│   │   ├── Hero.tsx                  # 3-col photo grid + overlay card
│   │   ├── FounderQuote.tsx          # Large quote block with author
│   │   ├── VideoTestimonial.tsx      # Eyebrow + heading + video embed
│   │   ├── ServicesGrid.tsx          # 3-column service cards
│   │   ├── CTABanner.tsx             # Full-width CTA with heading + button
│   │   ├── FeatureSection.tsx        # Split image + text (reversible)
│   │   ├── PortfolioGallery.tsx      # Photo grid with lightbox
│   │   ├── Testimonials.tsx          # Carousel with prev/next
│   │   ├── ContactCTA.tsx            # Split heading + image CTA
│   │   ├── InstagramGrid.tsx         # 6-photo grid
│   │   ├── NewsletterSignup.tsx      # Email capture form
│   │   ├── ContactForm.tsx           # Full contact form (RHF + Zod)
│   │   ├── ContactCards.tsx          # Address, email, phone cards
│   │   ├── PageHero.tsx              # Simple centered page header
│   │   └── FAQ.tsx                   # Accordion FAQ section
│   └── shared/
│       ├── SectionWrapper.tsx        # Section container with bg variants
│       ├── AnimateOnScroll.tsx        # Framer Motion scroll trigger
│       ├── DecorativeIcon.tsx         # Leaf/feather decorative icon
│       └── Eyebrow.tsx               # Uppercase label text
├── config/
│   └── site.ts                       # ⭐ Single source for all business info
├── lib/
│   ├── schema.ts                     # JSON-LD generators (LocalBusiness, Service, FAQ)
│   └── utils.ts                      # cn() utility
└── styles/ (tokens in globals.css)
```

## Vibe-Code Hooks

### Branding & Tokens

| "I want to..." | Do this |
|-----------------|---------|
| Change brand colors | Edit CSS custom properties in `src/app/globals.css`. Reference colors from target site are in `_reference/design-system.md`. |
| Change fonts | Update font import in `src/app/layout.tsx` and `--font-montserrat` variable in `src/app/globals.css`. Target used Montserrat (all weights). |
| Adjust spacing | Edit section padding in `src/components/shared/SectionWrapper.tsx` (currently py-16 md:py-24 lg:py-32). |
| Change border radius | Edit `--radius` in `src/app/globals.css` (currently 0.25rem for minimal rounding). |
| Adjust decorative icons | Edit `src/components/shared/DecorativeIcon.tsx` — uses Lucide `Leaf` icon in gold/sage variants. |

### Pages & Sections

| "I want to..." | Do this |
|-----------------|---------|
| Add a new page | Create `src/app/[name]/page.tsx`. Copy metadata pattern from `src/app/about/page.tsx`. Add to `src/config/site.ts` nav. |
| Reorder homepage sections | Move JSX blocks in `src/app/page.tsx` — sections render in source order. |
| Edit the hero | `src/components/sections/Hero.tsx` — props: eyebrow, headline, ctaText, ctaHref, images. |
| Edit navigation | `src/components/layout/Header.tsx` — items from `src/config/site.ts` nav array. |
| Edit footer | `src/components/layout/Footer.tsx` — content from `src/config/site.ts` footerLinks. |
| Add a section to any page | Import from `src/components/sections/` into the page file. |

### Content & Copy

| "I want to..." | Do this |
|-----------------|---------|
| Set business name globally | Edit `src/config/site.ts` — propagates to metadata, schema, layout. |
| Set contact info | Edit `src/config/site.ts` — address, phone, email. Used in footer, contact page, schema. |
| Replace placeholder text | `grep -rn "Your Headline Here\|BUSINESS_NAME\|PHONE\|EMAIL\|ADDRESS\|placehold.co" src/` |
| Add testimonials | Edit `testimonials` array in `src/config/site.ts` — shape: `{ quote, author }`. |
| Add services | Edit `services` array in `src/config/site.ts` — shape: `{ title, description, href, image }`. |
| Add FAQ items | Edit the `faqItems` array in `src/app/contact/faq/page.tsx`. |

### Forms & Integrations

| "I want to..." | Do this |
|-----------------|---------|
| Connect contact form | Wire `src/app/api/contact/route.ts` — currently logs to console. Add Resend/SendGrid/webhook. |
| Add analytics | Insert script at `<!-- ANALYTICS -->` in `src/app/layout.tsx`. |
| Add chat widget | Insert at `<!-- CHAT_WIDGET -->` in `src/app/layout.tsx`. |
| Add booking/scheduling | Insert at `<!-- BOOKING_EMBED -->` in `src/app/contact/estimate/page.tsx`. |
| Connect newsletter | Wire form submit in `src/components/sections/NewsletterSignup.tsx`. |
| See all integration TODOs | Read `_reference/integrations-todo.md`. |

### SEO

| "I want to..." | Do this |
|-----------------|---------|
| Update page meta | Each page exports `metadata` — edit title/description in the page file. |
| Update schema markup | Edit business info in `src/config/site.ts` — feeds all JSON-LD via `src/lib/schema.ts`. |
| Add OG images | Place in `/public/og/` and reference in page metadata. |
| Edit sitemap | `src/app/sitemap.ts` — add/remove URLs. |
| Edit robots.txt | `src/app/robots.ts`. |

### Animations

| "I want to..." | Do this |
|-----------------|---------|
| Disable all animations | Remove `<AnimateOnScroll>` wrappers or set `initial={false}` on motion components. |
| Adjust timing | Edit `duration` and `delay` props on `<AnimateOnScroll>`. Default: 0.6s duration. |
| Add animation to element | Wrap with `<AnimateOnScroll direction="up" delay={0.1}>`. |
| Reference original timing | See `_reference/animations.md` for target site animation specs. |

## Placeholder Tokens

| Token | Replace with |
|-------|-------------|
| `[BUSINESS_NAME]` | Your business name |
| `[PHONE]` | Your phone number |
| `[EMAIL]` | Your email |
| `[ADDRESS]` | Your street address |
| `[CITY]`, `[STATE]`, `[ZIP]` | Your location |
| `[SERVICE_AREA]` | Your service area |
| `[TAGLINE]` | Your tagline |
| `[WEBSITE_URL]` | Your domain |
| `[OWNER_NAME]` | Business owner name |
| `"Your Headline Here"` | Actual headline copy |
| `"Brief description..."` | Actual body copy |
| `placehold.co` URLs | Real image paths |

**Find all:** `grep -rn "\[BUSINESS_NAME\]\|\[PHONE\]\|\[EMAIL\]\|\[ADDRESS\]\|Your Headline Here\|Brief description\|placehold.co" src/`

## Component Inventory

| Component | Path | Key Props |
|-----------|------|-----------|
| Hero | sections/Hero.tsx | eyebrow, headline, ctaText, ctaHref, images |
| FounderQuote | sections/FounderQuote.tsx | quote, author |
| VideoTestimonial | sections/VideoTestimonial.tsx | eyebrow, heading, videoUrl? |
| ServicesGrid | sections/ServicesGrid.tsx | services: { title, description, href, image }[] |
| CTABanner | sections/CTABanner.tsx | headline, ctaText, ctaHref |
| FeatureSection | sections/FeatureSection.tsx | eyebrow, heading, description, ctaText, ctaHref, image, imageAlt, reversed?, variant? |
| PortfolioGallery | sections/PortfolioGallery.tsx | eyebrow, heading, subtitle?, images: { src, alt }[] |
| Testimonials | sections/Testimonials.tsx | eyebrow?, heading, testimonials: { quote, author }[] |
| ContactCTA | sections/ContactCTA.tsx | heading, description, ctaText, ctaHref, image, imageAlt |
| InstagramGrid | sections/InstagramGrid.tsx | instagramUrl, images: { src, alt }[] |
| NewsletterSignup | sections/NewsletterSignup.tsx | (self-contained) |
| ContactForm | sections/ContactForm.tsx | (self-contained with API route) |
| ContactCards | sections/ContactCards.tsx | (reads from site config) |
| PageHero | sections/PageHero.tsx | heading, description? |
| FAQ | sections/FAQ.tsx | eyebrow?, heading, items: { question, answer }[] |
| Header | layout/Header.tsx | (reads from site config) |
| Footer | layout/Footer.tsx | (reads from site config) |

## Site Config

`src/config/site.ts` — **edit this first.** It feeds metadata, schema, footer, nav, services, and testimonials.

## SEO & Copywriting Standards

**Read `.claude/requirements.md` before any content or SEO task.** It summarizes the rules below.

### Available Skills & Commands

| Skill / Command | Use For |
|-----------------|---------|
| `/hormozi-sanchez-writer` | Conversion-focused copy (value equation, hooks, contrarian angles) |
| `/kyle-roof-seo` | SEO analysis, keyword optimization, TF-IDF |
| `/on-page-seo` | Title tags, H1s, URL structure, content audit |
| `/reverse-silo` | Blog content planning, internal linking strategy |
| `/local-seo` | GBP optimization, NAP consistency, citation building |
| `sterling-sky-local-seo` | "Near me" rankings, review strategy (Joy Hawkins methodology) |
| `landing-pages` | Google Ads landing pages, paid traffic conversion |

### SEO Requirements (Non-Negotiable)

Per Kyle Roof methodology in `.claude/commands/kyle-roof-seo.md`:

| Element | Rule |
|---------|------|
| Title Tag | Under 60 chars, keyword front-loaded |
| H1 | One per page, contains primary keyword |
| URL | Short, includes keyword, hyphens only |
| Body | Primary keyword in first 100 words |
| Headings | H1→H2→H3 hierarchy, never skip levels |

**LocalBusiness schema** is required on every page (generated via `src/lib/schema.ts`).

### Internal Linking (Reverse Silo)

Blog posts follow strict linking rules from `docs/keyword-map.md`:

1. Every supporting post MUST link to its target service page
2. Each post links to 1-2 other related posts in same silo
3. NO daisy chaining (A→B→C)
4. NO other internal links outside the silo

### Copywriting Standards

Per `.claude/commands/hormozi-sanchez-writer.md`:

- 5th grade reading level
- Specific numbers ("47 families" not "many")
- "You" more than "we"
- Short sentences
- VALUE = (Dream Outcome × Likelihood) / (Time × Effort)

### Key Docs

| File | Purpose |
|------|---------|
| `src/config/site.ts` | NAP, services, SEO defaults (single source of truth) |
| `docs/keyword-map.md` | Full keyword targeting strategy template |
| `.claude/requirements.md` | Copywriting and SEO standards |

## Reference Files

| File | When to use |
|------|-------------|
| `_reference/design-system.md` | Choosing brand colors/fonts (extracted hex codes from target) |
| `_reference/page-architecture.md` | Understanding section order and page templates |
| `_reference/animations.md` | Tweaking animation timing or adding new ones |
| `_reference/automations.md` | Connecting integrations and understanding original setup |
| `_reference/tech-stack.md` | Understanding the original site's technology |
| `_reference/integrations-todo.md` | Checklist of services to connect |
| `_reference/screenshots/` | Visual reference of the target site |
