# CLAUDE.md Audit
_Audited: 2026-02-20_

## Summary
- Files audited: 2 (CLAUDE.local.md does not exist — skipped)
- Issues: 0 critical, 3 warnings, 2 info

---

## ~/.claude/CLAUDE.md (user-level)
- Line count: 106
- Status: OK

### Issues
- INFO: The Deep Research Protocol (lines 43-99) mentions "Firecrawl" as the required MCP tool for all web research agents. This is a runtime instruction, not a broken import, but if the Firecrawl MCP is ever removed or renamed the entire research protocol silently breaks. No mitigation is present in the file itself.
- INFO: Line 90 contains a specific product reference ("like we did with Hume EVI 3") — this is a living example that may become confusing or misleading over time as projects evolve. Low priority, but worth keeping current.

### Strengths
- Well under the 200-line OK threshold (106 lines). No context bloat risk.
- Has a clear "Identity" section (line 3) defining the CPO role.
- Has clear, table-formatted delegation rules (lines 22-31).
- No @ import syntax — all content is self-contained, no broken references possible.
- No deprecated model names (`claude-2`, `claude-instant`, `claude-v1`) detected.
- No deprecated tool-use syntax (`anthropic_tool_use`, `tool_use_block`) detected.
- No `.cursor/rules/` references — all command paths use `.claude/` correctly.
- All slash commands referenced (`/orchestrator`, `/context-guardian`, `/compact`, `/clear`) resolve to confirmed existing skills under `/Users/thebeast/.claude/skills/`.
- Subagent rules (lines 35-41) are concrete and actionable (one skill per subagent, 8 max concurrent, 3 attempts before escalation).

---

## ./CLAUDE.md (project-level)
- Line count: 317
- Status: WARNING (context bloat risk)

### Issues
- WARNING: 317 lines puts this file in the 200-500 range — context bloat territory. At this length it reliably loads in full, but any significant additions risk approaching the 500-line critical threshold. Consider extracting the Component Inventory table (lines 217-240, ~24 lines) and the full Project Map directory tree (lines 27-88, ~62 lines) into separate @-imported files under `.claude/` to keep the main file under 200 lines.
- WARNING: `sterling-sky-local-seo` is listed in the Available Skills table (line 261) as an available slash command (`sterling-sky-local-seo`) but no matching skill directory or `.md` file exists at `/Users/thebeast/.claude/skills/`. The closest match is `local-seo`. This will silently fail if an agent attempts to invoke it.
- WARNING: The `@font-face` usage on line 97 (`@font-face` inside a table cell describing CSS rules) was confirmed as NOT a CLAUDE.md @ import — it is plain inline code. No broken import. Flagging here for transparency that the grep hit was a false positive on the @ character.

### Strengths
- References key file paths throughout — Project Map, Vibe-Code Hooks, and Component Inventory all map to real file locations that were confirmed to exist.
- All three cross-referenced docs resolve on disk:
  - `.claude/requirements.md` — EXISTS
  - `.claude/commands/kyle-roof-seo.md` — EXISTS
  - `docs/keyword-map.md` — EXISTS
- All `_reference/` files referenced (design-system.md, page-architecture.md, animations.md, automations.md, tech-stack.md, integrations-todo.md, screenshots/) — all confirmed to exist.
- No deprecated model names or tool-use syntax detected.
- No `.cursor/rules/` references — all paths use `.claude/` correctly.
- Placeholder tokens section (lines 198-215) is clearly marked as intentional template tokens, not missing content.
- Has clear delegation rules at the top (lines 6-15) consistent with the user-level CLAUDE.md.
- All other skills referenced with `/` prefix (`/hormozi-sanchez-writer`, `/kyle-roof-seo`, `/on-page-seo`, `/reverse-silo`, `/local-seo`, `landing-pages`) resolve to confirmed existing files under `.claude/skills/` or `.claude/commands/`.
- Has engineering, visual design, and brand voice principles (lines 17-23) — sufficient substitute for a formal engineering standards section.
- Has copywriting and SEO standards section with concrete, non-negotiable rules (lines 248-305).

---

## CLAUDE.local.md
- Status: NOT FOUND — file does not exist at `/Users/thebeast/Paint-For-Money/shape-of-paint/CLAUDE.local.md`
- No action required unless local overrides are needed.

---

## Recommended Actions (Priority Order)

| Priority | File | Action |
|----------|------|--------|
| HIGH | `./CLAUDE.md` | Remove or rename `sterling-sky-local-seo` in the skills table (line 261). Replace with `local-seo` or `google-ads-local-service` which both exist. |
| MEDIUM | `./CLAUDE.md` | Extract Component Inventory and Project Map into separate files under `.claude/` and replace with `@` imports to bring line count under 200. |
| LOW | `~/.claude/CLAUDE.md` | Update the Hume EVI 3 example (line 90) when a more current or generic example is available. |
| LOW | `~/.claude/CLAUDE.md` | Add a note in the Deep Research Protocol that Firecrawl MCP availability must be confirmed before dispatching research agents. |
