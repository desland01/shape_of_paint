# Claude Config Update Report
_Generated: 2026-02-20_

## Summary
- Upstream changes: 10 new fields/keys (skills), 15 new or formalized hook events (+6 net new), 3 deprecated fields, 3 new hook handler types
- Files audited: 82 skills (68 directory SKILL.md + 12 legacy single-file + 3 project-level — 1 backup excluded), 5 hook event blocks (7 handlers), 2 CLAUDE.md files (CLAUDE.local.md not found)
- Issues: 11 critical, 21 warnings, 27 info

---

## Skills to Update

| Skill | Path | Issue | Severity | Action |
|-------|------|-------|----------|--------|
| expo-app-audit (legacy) | `/Users/thebeast/.claude/skills/expo-app-audit.md` | Frontmatter after H1 heading — not parsed; duplicate of directory version | Critical | Delete this file |
| react-native-accessibility (legacy) | `/Users/thebeast/.claude/skills/react-native-accessibility.md` | Frontmatter after H1 heading — not parsed; duplicate of directory version | Critical | Delete this file |
| expo-audit-remediation (legacy) | `/Users/thebeast/.claude/skills/expo-audit-remediation.md` | Frontmatter after H1 heading — not parsed; duplicate of directory version | Critical | Delete this file |
| frontend-design-auto (legacy) | `/Users/thebeast/.claude/skills/frontend-design-auto.md` | Missing `name` field; duplicate of directory version | Critical | Delete this file |
| gtm-conversion-tracking (legacy) | `/Users/thebeast/.claude/skills/gtm-conversion-tracking.md` | Unknown `triggers` field; duplicate of directory version | Critical | Delete this file |
| trpc-type-safety | `/Users/thebeast/.claude/skills/trpc-type-safety/SKILL.md` | Second YAML block (92 lines) embedded in body — rendered as raw text, not parsed; also has unknown `progressive_disclosure` field in real frontmatter | Critical | Remove second YAML block from body; remove `progressive_disclosure` from frontmatter |
| qa.backup.20260210134230 | `/Users/thebeast/.claude/skills/qa.backup.20260210134230/SKILL.md` | Directory name contains dots and timestamp — not a valid skill name; backup artifact confused with skill discovery | Critical | Delete or move outside `~/.claude/skills/` |
| skill-creator | `/Users/thebeast/.claude/skills/skill-creator/SKILL.md` | Written for OpenAI Codex (`$CODEX_HOME/skills`) — entire body wrong platform | Critical | Rewrite for Claude Code or delete |
| skill-installer | `/Users/thebeast/.claude/skills/skill-installer/SKILL.md` | Written for OpenAI Codex — references `~/.codex/skills`, Codex GitHub repo, Codex install scripts | Critical | Rewrite for Claude Code or delete |
| seo-optimizer | `/Users/thebeast/Paint-For-Money/shape-of-paint/.claude/skills/seo-optimizer/SKILL.md` | Bare `$ARGUMENTS` token on line 243 as standalone line — functional bug (injects raw user args as uncontextualized text) | Critical | Remove bare `$ARGUMENTS` or replace with meaningful instruction e.g. "Target page or topic: $ARGUMENTS" |
| sterling-sky-local-seo | `/Users/thebeast/Paint-For-Money/shape-of-paint/.claude/skills/sterling-sky-local-seo/SKILL.md` | Bare `$ARGUMENTS` token on line 208 as standalone line — same functional bug as seo-optimizer | Warning | Remove bare `$ARGUMENTS` or replace with meaningful instruction |
| local-seo | `/Users/thebeast/.claude/skills/local-seo/SKILL.md` | Bare `$ARGUMENTS` token on line 281 as standalone line — same functional bug | Info | Remove bare `$ARGUMENTS` or replace with meaningful instruction |
| gtm-conversion-tracking (directory) | `/Users/thebeast/.claude/skills/gtm-conversion-tracking/SKILL.md` | Unknown frontmatter field `triggers` — silently ignored; trigger info should be in `description` | Warning | Move `triggers` content into `description`; remove `triggers` field |
| expo-app-audit (directory) | `/Users/thebeast/.claude/skills/expo-app-audit/SKILL.md` | Unknown frontmatter field `when_to_use` — not a spec field | Warning | Merge into `description`; remove `when_to_use` |
| react-native-accessibility (directory) | `/Users/thebeast/.claude/skills/react-native-accessibility/SKILL.md` | Unknown frontmatter field `when_to_use` — not a spec field | Warning | Merge into `description`; remove `when_to_use` |
| expo-audit-remediation (directory) | `/Users/thebeast/.claude/skills/expo-audit-remediation/SKILL.md` | Unknown frontmatter fields `version`, `tags` — not spec fields | Warning | Remove both fields |
| building-native-ui | `/Users/thebeast/.claude/skills/building-native-ui/SKILL.md` | Unknown frontmatter fields `version`, `license` — not spec fields | Warning | Remove both fields |
| bullmq-specialist | `/Users/thebeast/.claude/skills/bullmq-specialist/SKILL.md` | Unknown frontmatter field `source` — not a spec field | Warning | Remove or move to body comment |
| twilio-communications | `/Users/thebeast/.claude/skills/twilio-communications/SKILL.md` | Unknown frontmatter field `source` — not a spec field | Warning | Remove or move to body comment |
| clerk-nextjs-patterns | `/Users/thebeast/.claude/skills/clerk-nextjs-patterns/SKILL.md` | Unknown frontmatter fields `license`, `metadata` (`metadata.author`, `metadata.version`) | Warning | Remove both fields |
| fastify-best-practices | `/Users/thebeast/.claude/skills/fastify-best-practices/SKILL.md` | Unknown frontmatter field `metadata` (`metadata.tags`) | Warning | Remove `metadata` block |
| opentelemetry | `/Users/thebeast/.claude/skills/opentelemetry/SKILL.md` | Unknown frontmatter fields: `version`, `category`, `author`, `license`, `progressive_disclosure`, `context_limit`, `tags`, `requires_tools` — imported from external source with different schema | Warning | Remove all 8 non-spec fields |
| product-manager | `/Users/thebeast/.claude/skills/product-manager/SKILL.md` | Unknown frontmatter fields `version`, `author`, `category`, `tags` | Warning | Remove all 4 non-spec fields |
| remotion-best-practices | `/Users/thebeast/.claude/skills/remotion-best-practices/SKILL.md` | Unknown frontmatter field `metadata` (`metadata.tags`) | Warning | Remove `metadata` block |
| prisma-database-setup | `/Users/thebeast/.claude/skills/prisma-database-setup/SKILL.md` | Unknown frontmatter fields `license`, `metadata` | Warning | Remove both fields |
| design-reference | `/Users/thebeast/.claude/skills/design-reference/SKILL.md` | Unknown frontmatter fields `license`, `metadata` (`metadata.author`, `metadata.version`) | Warning | Remove both fields |
| frontend-react-design | `/Users/thebeast/.claude/skills/frontend-react-design/SKILL.md` | Unknown Cursor-specific frontmatter fields `autoApply`, `globs`, `keywords` — wrong editor platform fields | Warning | Remove all 3; move keywords into `description` |
| frontend-trades-design | `/Users/thebeast/.claude/skills/frontend-trades-design/SKILL.md` | Unknown Cursor-specific frontmatter fields `autoApply`, `globs`, `keywords` | Warning | Remove all 3; move keywords into `description` |
| mobile-cro-optimizer | `/Users/thebeast/.claude/skills/mobile-cro-optimizer/SKILL.md` | Unknown Cursor-specific frontmatter fields `autoApply`, `globs`, `keywords` | Warning | Remove all 3; move keywords into `description` |
| crash | `/Users/thebeast/.claude/skills/crash/SKILL.md` | Hardcoded project path `/Users/thebeast/sales-console/Sales-console` in line 46 — global skill fails for any other project | Info | Replace with `$CLAUDE_PROJECT_DIR` or make path dynamic |
| deploy | `/Users/thebeast/.claude/skills/deploy/SKILL.md` | Project-specific content in global skill — hardwired to Sales Coach project (pnpm type-check, pnpm build, truline.io, Railway/Vercel dashboards) | Info | Move to project-level or make endpoints configurable |
| status | `/Users/thebeast/.claude/skills/status/SKILL.md` | Project-specific content in global skill — references "Sales Coach", specific ports 3000/3001/4000, `pnpm dev:web` | Info | Move to project-level or make configurable |
| verify | `/Users/thebeast/.claude/skills/verify/SKILL.md` | Project-specific content in global skill — references "Sales Coach", `pnpm type-check`, `pnpm build` | Info | Move to project-level or make configurable |
| visual-eval | `/Users/thebeast/.claude/skills/visual-eval/SKILL.md` | Project-specific content in global skill — defaults to `http://localhost:3000/dashboard`, references `truline.io` | Info | Make default URL configurable |
| new-router | `/Users/thebeast/.claude/skills/new-router/SKILL.md` | Missing `allowed-tools` — skill uses Write/Bash but no permissions declared | Info | Add `allowed-tools: Read, Write, Edit` |
| new-widget | `/Users/thebeast/.claude/skills/new-widget/SKILL.md` | Missing `allowed-tools` — creates files but no permissions declared | Info | Add `allowed-tools: Read, Write, Edit` |
| create-command | `/Users/thebeast/.claude/skills/create-command/SKILL.md` | Cursor-specific paths in body — Step 4 creates `.cursor/skills/commands/`, Step 5 references "Cursor's skill list" | Info | Update paths to `.claude/skills/` and references to Claude Code |
| create-rule | `/Users/thebeast/.claude/skills/create-rule/SKILL.md` | Entire body references `.cursor/rules/`, `.mdc` files, and "Cursor rules" | Info | Update for Claude Code or label as Cursor-only |
| create-subagent | `/Users/thebeast/.claude/skills/create-subagent/SKILL.md` | Entire body references `.cursor/agents/`, `~/.cursor/agents/`, and "Cursor" throughout | Info | Update for Claude Code or label as Cursor-only |
| migrate-to-skills | `/Users/thebeast/.claude/skills/migrate-to-skills/SKILL.md` | References `.cursor/rules/*.mdc`, `.cursor/commands/*.md`, `.cursor/skills/` as source paths — wrong for Claude Code | Info | Update source/destination paths for Claude Code conventions |
| google-ads-account-diagnosis (legacy) | `/Users/thebeast/.claude/skills/google-ads-account-diagnosis.md` | Duplicate of directory version | Info | Delete legacy `.md` file |
| google-ads-bid-strategy (legacy) | `/Users/thebeast/.claude/skills/google-ads-bid-strategy.md` | Duplicate of directory version | Info | Delete legacy `.md` file |
| google-ads-keyword-expert (legacy) | `/Users/thebeast/.claude/skills/google-ads-keyword-expert.md` | Duplicate of directory version | Info | Delete legacy `.md` file |
| google-ads-local-service (legacy) | `/Users/thebeast/.claude/skills/google-ads-local-service.md` | Duplicate of directory version | Info | Delete legacy `.md` file |
| google-ads-photographer (legacy) | `/Users/thebeast/.claude/skills/google-ads-photographer.md` | Duplicate of directory version | Info | Delete legacy `.md` file |
| google-ads-search-terms-auditor (legacy) | `/Users/thebeast/.claude/skills/google-ads-search-terms-auditor.md` | Duplicate of directory version | Info | Delete legacy `.md` file |
| monorepo-trpc-setup (legacy) | `/Users/thebeast/.claude/skills/monorepo-trpc-setup.md` | Duplicate of directory version | Info | Delete legacy `.md` file |

---

## Hooks to Update

| Event | Issue | Severity | Action |
|-------|-------|----------|--------|
| `Setup` (prompt handler) | `Setup` is not a valid hook event name — not in the list of 15 valid events. This hook will never fire. | Critical | Rename to `SessionStart` if intent is session initialization/prompt injection. If it duplicates existing SessionStart logic, remove it instead. |
| `SessionStart` handler 1 (`gsd-check-update.js`) | No `timeout` field — if the script hangs (e.g., network failure), session startup stalls indefinitely | Info | Add `"timeout": 10000` to match handler 2 |
| `SubagentStart` (`enforce-single-skill.sh`) | No `timeout` field — if the script blocks or errors, subagent startup stalls indefinitely | Info | Add `"timeout": 5` |
| `SessionEnd` | `timeout: 5` is very short for a cleanup script — verify `cleanup-orphaned-watchers.sh` reliably finishes within 5 seconds | Info | Test under realistic conditions; increase timeout if needed |

---

## CLAUDE.md to Update

| File | Issue | Severity | Action |
|------|-------|----------|--------|
| `/Users/thebeast/Paint-For-Money/shape-of-paint/CLAUDE.md` | `sterling-sky-local-seo` listed in skills table (line 261) but no skill exists at `~/.claude/skills/sterling-sky-local-seo/` — silently fails when invoked | Warning | Replace with `local-seo` or `google-ads-local-service` (both confirmed to exist) |
| `/Users/thebeast/Paint-For-Money/shape-of-paint/CLAUDE.md` | 317 lines — context bloat risk territory (200-500 range). Project Map tree (lines 27-88, ~62 lines) and Component Inventory table (lines 217-240, ~24 lines) are the primary candidates for extraction | Warning | Extract both blocks into separate files under `.claude/` and replace with `@` imports to bring line count under 200 |
| `/Users/thebeast/.claude/CLAUDE.md` | Deep Research Protocol hardcodes Firecrawl MCP by name (line 43-99) — silently breaks if Firecrawl is removed or renamed, with no fallback noted | Info | Add a note that Firecrawl MCP availability must be confirmed before dispatching research agents |
| `/Users/thebeast/.claude/CLAUDE.md` | Line 90 contains "like we did with Hume EVI 3" — living example that may become misleading as projects evolve | Info | Update to a more generic or current example when convenient |

---

## Auto-Fix Candidates
Safe to apply automatically — low risk, no judgment required:

- [ ] Delete legacy duplicate skill files (directory versions are correct and complete):
  - `/Users/thebeast/.claude/skills/expo-app-audit.md`
  - `/Users/thebeast/.claude/skills/react-native-accessibility.md`
  - `/Users/thebeast/.claude/skills/expo-audit-remediation.md`
  - `/Users/thebeast/.claude/skills/frontend-design-auto.md`
  - `/Users/thebeast/.claude/skills/gtm-conversion-tracking.md`
  - `/Users/thebeast/.claude/skills/google-ads-account-diagnosis.md`
  - `/Users/thebeast/.claude/skills/google-ads-bid-strategy.md`
  - `/Users/thebeast/.claude/skills/google-ads-keyword-expert.md`
  - `/Users/thebeast/.claude/skills/google-ads-local-service.md`
  - `/Users/thebeast/.claude/skills/google-ads-photographer.md`
  - `/Users/thebeast/.claude/skills/google-ads-search-terms-auditor.md`
  - `/Users/thebeast/.claude/skills/monorepo-trpc-setup.md`
- [ ] Remove/rename `qa.backup.20260210134230` directory from `~/.claude/skills/` — it is a backup artifact, not a skill
- [ ] Add `"timeout": 10000` to `SessionStart` handler 1 (`gsd-check-update.js` command)
- [ ] Add `"timeout": 5` to `SubagentStart` handler (`enforce-single-skill.sh` command)
- [ ] Remove bare `$ARGUMENTS` trailing line from `seo-optimizer/SKILL.md` (line 243) — replace with meaningful instruction or delete
- [ ] Remove bare `$ARGUMENTS` trailing line from `sterling-sky-local-seo/SKILL.md` (line 208)
- [ ] Remove bare `$ARGUMENTS` trailing line from `local-seo/SKILL.md` (line 281)
- [ ] Fix broken skill reference in project `CLAUDE.md` line 261: rename `sterling-sky-local-seo` to `local-seo`
- [ ] Remove non-spec frontmatter fields from directory skills (safe because Claude Code silently ignores them already — removing cleans up false signal):
  - `gtm-conversion-tracking/SKILL.md`: remove `triggers`
  - `expo-app-audit/SKILL.md`: remove `when_to_use`
  - `react-native-accessibility/SKILL.md`: remove `when_to_use`
  - `expo-audit-remediation/SKILL.md`: remove `version`, `tags`
  - `building-native-ui/SKILL.md`: remove `version`, `license`
  - `bullmq-specialist/SKILL.md`: remove `source`
  - `twilio-communications/SKILL.md`: remove `source`
  - `clerk-nextjs-patterns/SKILL.md`: remove `license`, `metadata`
  - `fastify-best-practices/SKILL.md`: remove `metadata`
  - `opentelemetry/SKILL.md`: remove `version`, `category`, `author`, `license`, `progressive_disclosure`, `context_limit`, `tags`, `requires_tools`
  - `product-manager/SKILL.md`: remove `version`, `author`, `category`, `tags`
  - `remotion-best-practices/SKILL.md`: remove `metadata`
  - `prisma-database-setup/SKILL.md`: remove `license`, `metadata`
  - `design-reference/SKILL.md`: remove `license`, `metadata`
  - `frontend-react-design/SKILL.md`: remove `autoApply`, `globs`, `keywords`
  - `frontend-trades-design/SKILL.md`: remove `autoApply`, `globs`, `keywords`
  - `mobile-cro-optimizer/SKILL.md`: remove `autoApply`, `globs`, `keywords`
  - `trpc-type-safety/SKILL.md`: remove `progressive_disclosure` from frontmatter

---

## Manual Review Required
Changes requiring human judgment — DO NOT auto-apply:

- [ ] Merge invalid `Setup` hook into `SessionStart` — requires deciding what the prompt message does and whether it overlaps with the existing SessionStart handlers (the file currently has 2 handlers in SessionStart already)
- [ ] Fix `skill-creator` — written for OpenAI Codex, not Claude Code (requires full rewrite replacing `$CODEX_HOME/skills` with `~/.claude/skills/`, Codex terminology with Claude Code terminology, or decide to delete)
- [ ] Fix `skill-installer` — same Codex platform mismatch; requires full rewrite or deletion
- [ ] Fix `trpc-type-safety` embedded YAML block — body has a 92-line second YAML block starting at line 11 that is rendered as raw text. Content needs to be evaluated: keep as formatted prose, discard, or restructure
- [ ] Refactor project `CLAUDE.md` from 317 lines to under 200 — extract Project Map directory tree (lines 27-88) and Component Inventory table (lines 217-240) into `@`-imported files under `.claude/`; requires deciding file names and import syntax
- [ ] Review 5 project-hardcoded global skills: `crash`, `deploy`, `status`, `verify`, `visual-eval` — all in `~/.claude/skills/` but hardwired to the Sales Coach/Truline project. Decision needed: move to project-level, make dynamic with environment variables, or document as intentionally project-specific
- [ ] Audit Cursor-specific skills (`create-command`, `create-rule`, `create-subagent`, `migrate-to-skills`) — each references `.cursor/` paths and Cursor conventions. Decide whether to rewrite for Claude Code, dual-label them, or remove them from the Claude Code skills directory
- [ ] Evaluate `sync-skills-to-claude` — copies from `~/.cursor/skills/`; valid as a one-way Cursor-to-Claude bridge but description should clarify this intent explicitly
- [ ] Add `allowed-tools` to `new-router` and `new-widget` — requires confirming which tools each skill actually needs to use
- [ ] Decide whether to move `gtm-conversion-tracking` trigger phrases into `description` — the `triggers` field content is useful context but must move into `description` to actually influence Claude's auto-invocation decisions

---

## Upstream Changes to Apply
From `latest-guidance.md` — new capabilities now available:

- [ ] `ConfigChange` hook event now available (new in v2.1.49) — fires when config files change mid-session; supports blocking (except `policy_settings`); matchers: `user_settings`, `project_settings`, `local_settings`, `policy_settings`, `skills`. Useful for enterprise security auditing or enforcing config consistency during sessions
- [ ] Skills can now define their own lifecycle hooks in `SKILL.md` frontmatter via the `hooks` field — same configuration format as settings-based hooks. Useful for per-skill automation (e.g., auto-logging when a skill is invoked)
- [ ] `SubagentStop` and `Stop` hooks now receive `last_assistant_message` in stdin (added v2.1.47) — no longer need to parse transcript files to inspect the final response
- [ ] `PostToolUseFailure` event now available — dedicated event for tool call failures (previously only `PostToolUse` existed). Useful for failure-specific alerting or recovery logic
- [ ] `TeammateIdle` event now available — fires when an agent team teammate is about to go idle; supports blocking
- [ ] `TaskCompleted` event now available — fires when a task is being marked as completed; supports blocking
- [ ] `PermissionRequest` event now available — intercept permission dialogs before they surface to the user
- [ ] `type: "prompt"` hook handler now available — single-turn LLM evaluation returning `{"ok": true/false}`; useful for lightweight semantic checks without a full subagent
- [ ] `type: "agent"` hook handler now available — multi-turn subagent with tool access for complex verification tasks
- [ ] `async: true` on command hooks now available — run hooks in the background without blocking Claude
- [ ] `context: fork` + `agent` field in SKILL.md — run skills in isolated subagent contexts; `agent` specifies which subagent type (`Explore`, `Plan`, `general-purpose`, or custom)
- [ ] `user-invocable: false` field in SKILL.md — hide a skill from the `/` menu while still allowing Claude to auto-invoke it; useful for background knowledge skills
- [ ] `disable-model-invocation: true` field in SKILL.md — prevent Claude from auto-loading a skill; manual `/name` invocation only
- [ ] `${CLAUDE_SESSION_ID}` substitution now available in skill content — useful for session-specific logging or file creation
- [ ] `$ARGUMENTS[N]` and `$N` shorthand — positional argument access (e.g., `$0` for first argument); currently all `$ARGUMENTS` uses are bare (no indexing) — consider adopting where multiple arguments are expected
- [ ] `isolation: "worktree"` available for subagents — subagents can work in a temporary git worktree (also available via `--worktree` / `-w` CLI flag in v2.1.49)
- [ ] `additionalContext` output field in hooks — hooks can now inject context directly into Claude's conversation via JSON output
- [ ] `CLAUDE_ENV_FILE` in SessionStart hooks — write `export` statements to persist environment variables for subsequent Bash commands across the session
- [ ] `once` field on hook handlers — runs a hook handler only once per session then removes it (skills and agents only)
- [ ] `PreCompact` event now available — fires before context compaction (`manual` or `auto` matcher); useful for saving state before compaction
- [ ] `SessionEnd` event matchers now documented: `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled`, `other` — current `matcher: "*"` on the cleanup handler is valid but could be refined to specific exit types if needed
- [ ] Deprecated `includeCoAuthoredBy` setting — if used anywhere in settings, replace with `attribution.commit`
- [ ] Deprecated `ignorePatterns` setting — if used anywhere in settings, replace with `permissions.deny` using `Read` rules
- [ ] Deprecated `PreToolUse` `decision`/`reason` top-level output fields — use `hookSpecificOutput.permissionDecision` and `hookSpecificOutput.permissionDecisionReason` instead; old values `"approve"`/`"block"` map to `"allow"`/`"deny"` respectively
