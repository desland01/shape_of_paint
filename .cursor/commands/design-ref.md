---
description: Load full design context for building new pages
---

You are building a new page for this project. Before writing any code, internalize the design reference files below. Every component you create must follow these patterns exactly.

## Design Context

Read and follow these files:

- @_reference/design-system.md — Colors, typography, spacing, shapes, component inventory
- @_reference/page-architecture.md — Page structure patterns, section ordering, header/footer anatomy
- @_reference/animations.md — Framer Motion patterns, scroll triggers, hover states, timing
- @src/config/site.ts — Single source of truth for all business content, nav, services, testimonials
- @src/app/globals.css — Design tokens (CSS custom properties, Tailwind theme)
- @CLAUDE.md — Project map, component inventory, vibe-code hooks

## Existing Components

Reuse these before creating anything new:

**Layout:** @src/components/layout/Header.tsx @src/components/layout/Footer.tsx

**Shared primitives:** @src/components/shared/SectionWrapper.tsx @src/components/shared/AnimateOnScroll.tsx @src/components/shared/DecorativeIcon.tsx @src/components/shared/Eyebrow.tsx

**Section blocks:** @src/components/sections/

## Rules

1. **Reuse first.** Compose pages from existing section components. Only create new ones when nothing fits.
2. **SectionWrapper for every section.** Alternate `variant="white"` and `variant="warm"` for the cream/white rhythm.
3. **AnimateOnScroll on every section.** Use fade-up with stagger for child elements.
4. **Eyebrow above every heading.** Uppercase, tracked, small — matches the editorial feel.
5. **DecorativeIcon between sections** where the original site uses botanical separators.
6. **All copy from siteConfig** or as props. Never hardcode business content in components.
7. **Montserrat font only.** Light weights (300-400) for body, medium (500) for nav, semibold (600-700) for headings.
8. **CTA buttons use the red accent** (`bg-[#C75B3F]`). Secondary actions use outlined or text links.
9. **Images use next/image** with `placehold.co` URLs as temporary sources. Always include descriptive alt text.
10. **Mobile-first.** All layouts must work on 375px+ with responsive breakpoints at `md:` and `lg:`.

## Your task

$ARGUMENTS
