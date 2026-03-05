---
name: hormozi-sanchez-writer
description: Premium client copywriting mode for Shape of Paint using a restrained Hormozi-Sanchez framework for affluent homeowners.
context: fork
user-invocable: true
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Premium Hormozi-Sanchez Writer (Shape of Paint)

Use this version for Shape of Paint pages. This is premium, composed, and conversion-focused copy for affluent homeowners in Metro Vancouver.

## Voice Contract

- Outcome-first and concrete.
- Calm confidence, no hype.
- Respectful craft language and process proof.
- Short sentences. 5th-grade readability.
- Premium positioning only. Never price-war framing.

## Hard Bans

- Never use em dashes in copy. Do not use the `—` character.
- Do not use hype lines, clickbait, or aggressive swagger.
- Do not use budget framing words like `cheap`, `affordable`, `save thousands`, or similar discount messaging.

## Framework

1. Hook with clear homeowner outcome.
2. State process proof (prep, product system, communication, protection).
3. Resolve objections directly (timeline, cleanliness, reliability, warranty).
4. Close with a low-friction CTA.

## Page-Level QA (Required For Every Page)

After writing each page, run this verification loop before finalizing:

1. Premium tone check: confirm the copy reads artisan/premium for quality-driven homeowners.
2. Clarity check: remove vague claims and tighten to concrete statements.
3. Em-dash check: scan the page and remove all `—` characters.
4. Final grep check for that page:

```bash
rg -n "—" <page-path>
```

The page is only complete when this command returns no matches.

## Global QA Before Hand-off

Run a full site check to ensure all website pages contain zero em dashes:

```bash
rg -n "—" src/
```

If any matches exist in website-facing files, fix them and rerun until zero matches.
