# Project Requirements — Copywriting, SEO & Design Standards

> **Universal Requirements**: Read this file before any content or SEO task.

---

## Business Context

| Field | Value |
|-------|-------|
| Company | See `src/config/site.ts` |
| Location | See `src/config/site.ts` |
| Services | See `src/config/site.ts` |
| Tech Stack | Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui |
| Deployment | Vercel |

---

## Copywriting Standards

**Source:** `.claude/commands/hormozi-sanchez-writer.md`

### Core Philosophy
- Lead with VALUE, not hype
- Be CONTRARIAN - challenge conventional wisdom
- Sound like a human, not a corporation
- Every word must EARN its place

### Hook Formulas

**Hormozi Hook:**
```
"How to [OUTCOME] without [PAIN], even if [OBJECTION]"
```

**Sanchez Contrarian:**
```
"Everyone says [belief]. They're wrong. Here's why..."
```

### Value Equation
```
VALUE = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort)
```

### Writing Rules
- Write at 5th grade reading level
- Use "you" more than "we" or "I"
- Short sentences. Like this.
- Specific numbers always ("47 families" not "many families")
- Damaging admissions build trust

### CTA Rules
- Specific: "Get the 47-page playbook" not "Download now"
- Conversational: "Send it to me" not "Submit"

---

## SEO Standards

**Source:** `.claude/commands/kyle-roof-seo.md`, `.claude/commands/on-page-seo.md`

### Four Critical Placement Areas

| Area | Requirements |
|------|-------------|
| **Title Tag** | Under 60 chars, front-load keyword, compelling |
| **H1 Tag** | One per page only, include primary keyword |
| **URL** | Short, clean, keyword-included, hyphens |
| **Body** | Natural density, TF-IDF guided, keyword in first 100 words |

### Heading Hierarchy
- H1 → H2 → H3 (never skip levels)
- One topic per H2 section
- Target keyword in at least one H2

### TF-IDF Optimization
1. Analyze competitors - what terms do top 10 pages use?
2. Identify gaps - what terms are you missing?
3. Check density - are you overusing any terms?
4. Add related terms - semantic variations
5. Re-analyze after changes

---

## Local SEO Standards

**Source:** `.claude/skills/sterling-sky-local-seo/SKILL.md`, `.claude/commands/local-seo.md`

### NAP Consistency (Critical)
- Name, Address, Phone must be IDENTICAL everywhere
- Even "St" vs "Street" matters
- Check: website, GBP, all citations, social profiles

### Review Management
- Review velocity > total count (recent reviews matter most)
- Respond to ALL reviews within 48 hours
- Encourage written reviews (not just stars)
- Minimum target: 4.0+ rating

### GBP Essentials
- 100% profile completion
- Primary + secondary categories
- Post weekly updates
- Respond to all Q&A

### Schema Markup (Required)
Every page needs LocalBusiness schema with: name, address, phone, hours, coordinates, URL, image.

---

## Internal Linking

**Source:** `.claude/commands/reverse-silo.md`

### Reverse Silo Structure
```
[Supporting A]  [Supporting B]  [Supporting C]
      \              |              /
       └─────────────v─────────────┘
            [TARGET PAGE]
```

### Rules
1. Each supporting page MUST link to target page
2. Each supporting page links to 1-2 other supporting pages
3. NO daisy chaining (A→B→C chains)
4. Supporting pages have NO other outbound internal links
5. Minimum 5 supporting pieces per target

---

## Pre-Publish Checklist

### Content
- [ ] Hook creates instant curiosity
- [ ] Contrarian angle present
- [ ] Specific numbers used (not vague claims)
- [ ] Written at 5th grade level
- [ ] Sounds human, not corporate

### SEO
- [ ] Title tag: keyword + under 60 chars
- [ ] Single H1 with primary keyword
- [ ] URL includes target keyword
- [ ] Proper heading hierarchy (H1→H2→H3)
- [ ] Primary keyword in first 100 words
- [ ] LocalBusiness schema included

### Technical
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Images have descriptive alt text
- [ ] Internal links follow Reverse Silo structure

---

## Reference Files by Task

Read these when performing specific task types:

| Task Type | Reference File |
|-----------|----------------|
| Deep copywriting | `.claude/commands/hormozi-sanchez-writer.md` |
| SEO analysis | `.claude/commands/kyle-roof-seo.md` |
| Page optimization | `.claude/commands/on-page-seo.md` |
| Content silo planning | `.claude/commands/reverse-silo.md` |
| GBP optimization | `.claude/skills/sterling-sky-local-seo/SKILL.md` |
| Local ranking strategy | `.claude/commands/local-seo.md` |
| Landing pages (paid traffic) | `.claude/skills/landing-pages/SKILL.md` |
