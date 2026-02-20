# Codex Agent Playbook (Project-Coherent)

> This file is Codex-native guidance, written from Codex operating behavior.
> It is intentionally concise and aligned with this repo's `CLAUDE.md`.

## Purpose

- Define how Codex executes work in this repository.
- Keep behavior coherent with project constraints in `CLAUDE.md` without duplicating it.

## Decision Order

1. Explicit user instruction
2. System/developer instructions
3. This `AGENTS.md` (Codex execution model)
4. Project constraints in `CLAUDE.md`

If `AGENTS.md` and `CLAUDE.md` conflict on project policy, follow `CLAUDE.md`.
If user direction conflicts with prior project preference, follow the user unless unsafe.

## Codex Execution Model

### Working Style

- Be direct, pragmatic, and implementation-first.
- Prefer doing the change over proposing the change.
- Keep communication short, factual, and progress-oriented.
- State assumptions when they materially affect output.

### Task Loop

1. Understand request and success criteria.
2. Inspect relevant files with minimal scope.
3. Implement complete solution (not partial scaffolding).
4. Validate (`lint`, tests, build, or targeted checks).
5. Report what changed, where, and verification status.

### Engineering Standards

- Fix root causes, not cosmetic symptoms.
- Preserve existing architecture unless there is a clear reason to change it.
- Avoid introducing new abstractions unless reuse or clarity justifies them.
- Keep edits minimal and local to the request.

### Tooling Preferences

- Use `rg`/`rg --files` for search.
- Parallelize independent reads/checks when possible.
- Prefer `apply_patch` for focused file edits.
- Avoid destructive git commands unless explicitly requested.
- Do not revert unrelated user changes.

## Project-Coherence Rules (From `CLAUDE.md`)

### Brand & Copy

- Premium/artisan positioning only.
- Avoid budget framing terms (`cheap`, `affordable`, `save thousands`, etc.).
- Use specific, concrete language over vague claims.

### Design System

- Preserve existing visual language (colors, typography, spacing, motion).
- Keep touch targets `min-h-[48px]`.
- Respect established layout conventions (`max-w-[1200px]`, `px-6 md:px-8`).
- Use motion primitives in `src/components/ui/motion.tsx` for new animation work.

### Source of Truth

- `src/config/site.ts` for business identity, nav/footer links, services, testimonials.
- `src/config/blog.ts` for blog metadata.
- `src/lib/schema.ts` for structured data.

Prefer updating these sources over hardcoding repeated values in sections/pages.

### SEO/Structure Requirements

- One H1 per page with primary keyword intent.
- Clear heading hierarchy.
- Title/description discipline and keyword-aligned URL structure.
- Maintain required internal-linking strategy for content silos when editing SEO pages.

## Delegation Guidance

- For trivial single-file, obvious edits: execute directly.
- For multi-step or ambiguous work: use orchestrated/planned execution.
- Favor parallel work streams when tasks are independent.

## Done Criteria

A task is complete when all are true:

- Requested behavior/content is implemented.
- Affected paths are validated with appropriate checks.
- No unrelated files were modified intentionally.
- Final report includes file references and verification outcomes.

## Maintenance

- Keep this file Codex-centric.
- Keep it coherent with `CLAUDE.md` whenever project policy evolves.
