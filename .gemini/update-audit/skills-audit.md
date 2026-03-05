# Skills Audit
_Audited: 2026-02-20_

## Summary
- Total skills audited: 82 (68 directory-format SKILL.md files + 12 legacy single-file .md files + 3 project-level SKILL.md files — 1 backup directory excluded)
- Issues: 10 critical, 18 warnings, 22 info

---

## Critical Issues

### expo-app-audit (legacy: `/Users/thebeast/.gemini/skills/expo-app-audit.md`)
- **Missing: `name` field in YAML frontmatter** — the frontmatter block appears AFTER the H1 heading, not at the top of the file. The file opens with `# Expo App Production Readiness Audit` on line 1, then the YAML block on lines 3-7. YAML frontmatter must be the very first thing in the file (starting at byte 0) for parsers to recognise it. As written, the frontmatter is invalid and Gemini Code will not parse it.
- **Wrong format: frontmatter not at top of file** — full content treated as body text, not metadata.
- **Also: legacy single-file format** — a directory-format version exists at `~/.gemini/skills/expo-app-audit/SKILL.md` (which is correctly formatted). The legacy `.md` file is a duplicate and should be removed.
- **Action:** Delete `/Users/thebeast/.gemini/skills/expo-app-audit.md`; the directory version is correct.

### react-native-accessibility (legacy: `/Users/thebeast/.gemini/skills/react-native-accessibility.md`)
- **Missing: `name` field** — frontmatter appears AFTER the H1 heading (same pattern as expo-app-audit.md). File starts with `# React Native Accessibility Implementation` then the YAML block. Frontmatter not at top; not parsed.
- **Also: legacy single-file format** — directory version exists at `~/.gemini/skills/react-native-accessibility/SKILL.md` (correctly formatted). The legacy file is a duplicate.
- **Action:** Delete `/Users/thebeast/.gemini/skills/react-native-accessibility.md`.

### expo-audit-remediation (legacy: `/Users/thebeast/.gemini/skills/expo-audit-remediation.md`)
- **Missing: `name` field** — frontmatter appears AFTER the H1 heading. Same broken pattern; frontmatter not at top.
- **Also: legacy single-file format** — directory version exists at `~/.gemini/skills/expo-audit-remediation/SKILL.md` (correctly formatted). The legacy file is a duplicate.
- **Action:** Delete `/Users/thebeast/.gemini/skills/expo-audit-remediation.md`.

### frontend-design-auto (legacy: `/Users/thebeast/.gemini/skills/frontend-design-auto.md`)
- **Missing: `name` field** — frontmatter is present and at top of file, but has no `name` field. Has `description`, `user-invocable`, `allowed-tools` but no `name`.
- **Also: legacy single-file format** — directory version exists at `~/.gemini/skills/frontend-design-auto/SKILL.md` (which includes a `name` field and is correct). The legacy file is a duplicate.
- **Action:** Delete `/Users/thebeast/.gemini/skills/frontend-design-auto.md`.

### trpc-type-safety (`/Users/thebeast/.gemini/skills/trpc-type-safety/SKILL.md`)
- **Malformed YAML frontmatter** — The file has a valid frontmatter block (lines 1-8) with `name`, `description`, and a `progressive_disclosure` block. However, immediately after the closing `---` on line 9, the body begins with:
  ```
  # tRPC - End-to-End Type Safety

  ---
  progressive_disclosure:
  ...
  ---
  ```
  This second YAML block (lines 11-103) is not valid frontmatter — it appears in the body and will be rendered as raw text, not parsed. The `progressive_disclosure` field is also not a recognised Anthropic SKILL.md frontmatter field (it's an unknown/custom field even in the actual frontmatter block). This is a non-standard field (see INFO section).
- **Action:** Remove the second YAML block from the body. The content in it (section definitions) is not loaded by Gemini Code anyway and adds bloat.

### qa.backup.20260210134230 (`/Users/thebeast/.gemini/skills/qa.backup.20260210134230/SKILL.md`)
- **Invalid `name` field** — `name: qa` (only 2 characters, fine for length). However, the skill path contains `.backup.20260210134230` which is neither a clean skill name nor a valid directory name for a skill. This directory format (`qa.backup.*`) will confuse skill discovery — the system expects `~/.gemini/skills/<skill-name>/SKILL.md` where the directory name is the skill name. This skill's directory name does not match its `name` field (`qa`) and the dot-containing directory name is unusual.
- **Action:** This is clearly a backup artifact. If the canonical `qa` skill is needed, it should live at `~/.gemini/skills/qa/SKILL.md`. The backup directory should either be deleted or moved outside `~/.gemini/skills/`.

### skill-creator (`/Users/thebeast/.gemini/skills/skill-creator/SKILL.md`)
- **Wrong platform target** — The skill references `$CODEX_HOME/skills` (OpenAI Codex) and paths like `~/.codex/skills`. This skill was authored for OpenAI Codex, not Gemini Code. It will not function correctly as a Gemini Code skill. The `description` says "Codex" explicitly ("extends Codex's capabilities"). The `name` and `description` fields are present and valid per format, but the content is platform-mismatched.
- **Action:** Either rewrite for Gemini Code (replacing Codex references with Gemini Code references and correct paths) or remove it. Loading it will give incorrect guidance.

### skill-installer (`/Users/thebeast/.gemini/skills/skill-installer/SKILL.md`)
- **Wrong platform target** — Same issue as `skill-creator`. References `$CODEX_HOME/skills`, `~/.codex/skills`, `openai/skills` GitHub repo, `scripts/list-skills.py`, `scripts/install-skill-from-github.py` — all OpenAI Codex infrastructure. The `name` and `description` fields are present and formally valid, but the entire body is for the wrong agent platform.
- **Action:** Remove or rewrite for Gemini Code.

### gtm-conversion-tracking (legacy: `/Users/thebeast/.gemini/skills/gtm-conversion-tracking.md`)
- **Unknown frontmatter field `triggers`** — The legacy file has a `triggers` field in its frontmatter (lines 4-11: `triggers: - conversion tracking broken...`). This field is not part of the Anthropic SKILL.md spec. In the legacy single-file context this is just an INFO-level issue, but combined with being a duplicate of the directory version (`~/.gemini/skills/gtm-conversion-tracking/SKILL.md`), it is flagged as critical because the `triggers` field in the directory version is also present and will be ignored silently.
- **Also: legacy single-file format** — directory version exists and is the canonical copy.
- **Action:** Delete `/Users/thebeast/.gemini/skills/gtm-conversion-tracking.md`. The directory version's `triggers` field should be removed (see Warnings).

### seo-optimizer (`/Users/thebeast/Paint-For-Money/shape-of-paint/.gemini/skills/seo-optimizer/SKILL.md`)
- **`$ARGUMENTS` as trailing content** — The body of the skill ends with the raw token `$ARGUMENTS` on line 243 as a standalone line. This will literally inject user-provided arguments as raw text at the end of the skill body every invocation. If invoked without arguments, it will inject an empty string. This is not how `$ARGUMENTS` should be used (it should appear inline in an instruction, e.g., "Optimize the page at: $ARGUMENTS"). A bare `$ARGUMENTS` at the end is likely a leftover from a copy-paste and is a functional bug.
- **Action:** Remove the bare `$ARGUMENTS` line from the end of the file, or replace it with a meaningful instruction like "Target page or topic: $ARGUMENTS" if arguments are intended.

---

## Warnings

### gtm-conversion-tracking (`/Users/thebeast/.gemini/skills/gtm-conversion-tracking/SKILL.md`)
- **Unknown frontmatter field: `triggers`** — The `triggers` field is not part of the Anthropic SKILL.md spec. It will be silently ignored. The trigger information should be moved into the `description` field where Gemini Code can actually use it for auto-invocation.
- **Action:** Move trigger phrases from `triggers` into the `description` field. Remove `triggers`.

### expo-app-audit (`/Users/thebeast/.gemini/skills/expo-app-audit/SKILL.md`)
- **Unknown frontmatter field: `when_to_use`** — Not a recognised spec field. This information belongs in `description`.
- **Action:** Merge `when_to_use` content into `description`. Remove `when_to_use`.

### react-native-accessibility (`/Users/thebeast/.gemini/skills/react-native-accessibility/SKILL.md`)
- **Unknown frontmatter field: `when_to_use`** — Same issue as expo-app-audit. Not a recognised spec field.
- **Action:** Merge `when_to_use` content into `description`. Remove `when_to_use`.

### expo-audit-remediation (`/Users/thebeast/.gemini/skills/expo-audit-remediation/SKILL.md`)
- **Unknown frontmatter fields: `version`, `tags`** — Neither is part of the spec. Silently ignored.
- **Action:** Remove `version` and `tags`. If versioning is important, add it to a comment in the body.

### building-native-ui (`/Users/thebeast/.gemini/skills/building-native-ui/SKILL.md`)
- **Unknown frontmatter fields: `version`, `license`** — Not spec fields. Silently ignored.
- **Action:** Remove `version` and `license`.

### bullmq-specialist (`/Users/thebeast/.gemini/skills/bullmq-specialist/SKILL.md`)
- **Unknown frontmatter field: `source`** — Not a spec field (`source: vibeship-spawner-skills (Apache 2.0)`). Silently ignored.
- **Action:** Remove `source` or move attribution to a comment in the body.

### twilio-communications (`/Users/thebeast/.gemini/skills/twilio-communications/SKILL.md`)
- **Unknown frontmatter field: `source`** — Same issue as bullmq-specialist.
- **Action:** Remove `source` or move to a body comment.

### clerk-nextjs-patterns (`/Users/thebeast/.gemini/skills/clerk-nextjs-patterns/SKILL.md`)
- **Unknown frontmatter fields: `license`, `metadata`** — `metadata.author` and `metadata.version` are not spec fields. Silently ignored.
- **Action:** Remove `license` and `metadata` block.

### fastify-best-practices (`/Users/thebeast/.gemini/skills/fastify-best-practices/SKILL.md`)
- **Unknown frontmatter field: `metadata`** — `metadata.tags` is not a spec field.
- **Action:** Remove `metadata` block.

### opentelemetry (`/Users/thebeast/.gemini/skills/opentelemetry/SKILL.md`)
- **Unknown frontmatter fields: `version`, `category`, `author`, `license`, `progressive_disclosure`, `context_limit`, `tags`, `requires_tools`** — None of these are spec fields. This skill was imported from an external source with a different schema. The `name` and `description` are present and valid; all other non-spec fields are silently ignored.
- **Action:** Remove all non-spec fields: `version`, `category`, `author`, `license`, `progressive_disclosure`, `context_limit`, `tags`, `requires_tools`.

### trpc-type-safety (`/Users/thebeast/.gemini/skills/trpc-type-safety/SKILL.md`)
- **Unknown frontmatter field: `progressive_disclosure`** — Not a spec field. Combined with the malformed second YAML block in the body (see Critical Issues), this skill has significant structural issues.
- **Action:** Remove `progressive_disclosure` from frontmatter and remove the second YAML block from the body.

### product-manager (`/Users/thebeast/.gemini/skills/product-manager/SKILL.md`)
- **Unknown frontmatter fields: `version`, `author`, `category`, `tags`** — None are spec fields.
- **Action:** Remove all four non-spec fields.

### remotion-best-practices (`/Users/thebeast/.gemini/skills/remotion-best-practices/SKILL.md`)
- **Unknown frontmatter field: `metadata`** — `metadata.tags` is not a spec field.
- **Action:** Remove `metadata` block.

### prisma-database-setup (`/Users/thebeast/.gemini/skills/prisma-database-setup/SKILL.md`)
- **Unknown frontmatter fields: `license`, `metadata`** — Not spec fields.
- **Action:** Remove `license` and `metadata` block.

### design-reference (`/Users/thebeast/.gemini/skills/design-reference/SKILL.md`)
- **Unknown frontmatter fields: `license`, `metadata`** — `metadata.author` and `metadata.version` are not spec fields.
- **Action:** Remove `license` and `metadata` block.

### frontend-react-design (`/Users/thebeast/.gemini/skills/frontend-react-design/SKILL.md`)
- **Unknown frontmatter fields: `autoApply`, `globs`, `keywords`** — These are Cursor-specific frontmatter fields, not Gemini Code spec fields. The `globs` field in Cursor controls which file contexts activate a skill; in Gemini Code this is done via the `description` field. The `autoApply` and `keywords` fields are not spec fields.
- **Action:** Remove `autoApply`, `globs`, and `keywords`. Move any trigger keywords into the `description` field.

### frontend-trades-design (`/Users/thebeast/.gemini/skills/frontend-trades-design/SKILL.md`)
- **Unknown frontmatter fields: `autoApply`, `globs`, `keywords`** — Same Cursor-specific fields as frontend-react-design.
- **Action:** Remove `autoApply`, `globs`, and `keywords`. Move trigger keywords into `description`.

### mobile-cro-optimizer (`/Users/thebeast/.gemini/skills/mobile-cro-optimizer/SKILL.md`)
- **Unknown frontmatter fields: `autoApply`, `globs`, `keywords`** — Same Cursor-specific fields.
- **Action:** Remove `autoApply`, `globs`, and `keywords`. Move trigger keywords into `description`.

### sterling-sky-local-seo (project: `/Users/thebeast/Paint-For-Money/shape-of-paint/.gemini/skills/sterling-sky-local-seo/SKILL.md`)
- **`$ARGUMENTS` as bare trailing content** — Same pattern as seo-optimizer. The file ends with a bare `$ARGUMENTS` on line 208, which is a functional bug. If invoked without arguments, it appends nothing; if invoked with arguments, they appear as raw uncontextualised text.
- **Action:** Remove the bare `$ARGUMENTS` line or replace with a meaningful instruction.

---

## Info / Improvements

### crash (`/Users/thebeast/.gemini/skills/crash/SKILL.md`)
- **Project-hardcoded path** — Line 46: `pnpm type-check 2>&1 | tail -5` path is hardcoded to `/Users/thebeast/sales-console/Sales-console`. This skill is in the global `~/.gemini/skills/` directory and will fail for any project that is not Sales Console.
- **Suggestion:** Replace the hardcoded path with a shell-injection using `$GEMINI_PROJECT_DIR` or make the path dynamic.

### deploy (`/Users/thebeast/.gemini/skills/deploy/SKILL.md`)
- **Project-specific content in global skill** — References `pnpm type-check`, `pnpm build`, `https://truline.io`, Railway/Vercel dashboards. This is a global skill but is hard-wired to the Sales Coach project.
- **Suggestion:** Either move this to a project-level skill or make the endpoints configurable.

### status (`/Users/thebeast/.gemini/skills/status/SKILL.md`)
- **Project-specific content in global skill** — References "Sales Coach project", specific ports (3000, 3001, 4000), `pnpm dev:web`.
- **Suggestion:** Move to project level or make configurable.

### verify (`/Users/thebeast/.gemini/skills/verify/SKILL.md`)
- **Project-specific content in global skill** — References "Sales Coach project", `pnpm type-check`, `pnpm build`.
- **Suggestion:** Move to project level or make configurable.

### visual-eval (`/Users/thebeast/.gemini/skills/visual-eval/SKILL.md`)
- **Project-specific content in global skill** — Defaults to `http://localhost:3000/dashboard` and references `https://truline.io`.
- **Suggestion:** Make default URL configurable.

### new-router (`/Users/thebeast/.gemini/skills/new-router/SKILL.md`)
- **Missing `allowed-tools`** — The skill uses Write (creates files) and potentially Bash but has no `allowed-tools` field.
- **Suggestion:** Add `allowed-tools: Read, Write, Edit` if tool permissions are being used.

### new-widget (`/Users/thebeast/.gemini/skills/new-widget/SKILL.md`)
- **Missing `allowed-tools`** — Creates files but has no `allowed-tools` field.
- **Suggestion:** Add `allowed-tools: Read, Write, Edit`.

### create-command (`/Users/thebeast/.gemini/skills/create-command/SKILL.md`)
- **Cursor-specific path in body** — Step 4 instructs creating a folder at `.cursor/skills/commands/[command-name]/` and Step 5 mentions "Cursor's skill list". This is a Cursor-specific skill that has been copied into the Gemini Code skills directory. The paths and editor references are wrong for Gemini Code.
- **Suggestion:** Update paths to `.gemini/skills/[command-name]/` and references to Gemini Code.

### create-rule (`/Users/thebeast/.gemini/skills/create-rule/SKILL.md`)
- **Cursor-specific content** — The entire body references `.cursor/rules/`, `.mdc` files, and "Cursor rules". This is a Cursor-specific skill in the Gemini Code directory. In Gemini Code, rules live in `.gemini/rules/*.md` (plain `.md`, not `.mdc`).
- **Suggestion:** Update for Gemini Code or label clearly as Cursor-only.

### create-subagent (`/Users/thebeast/.gemini/skills/create-subagent/SKILL.md`)
- **Cursor-specific content** — References `.cursor/agents/`, `~/.cursor/agents/`, and "Cursor" throughout. This is a Cursor-specific skill. Gemini Code uses a different agent model.
- **Suggestion:** Update for Gemini Code or label clearly as Cursor-only.

### migrate-to-skills (`/Users/thebeast/.gemini/skills/migrate-to-skills/SKILL.md`)
- **Cursor-specific content** — References `.cursor/rules/*.mdc`, `.cursor/commands/*.md`, `.cursor/skills/`. In Gemini Code, the paths are `.gemini/rules/*.md` and `.gemini/skills/`. The migration tool would produce incorrect output paths if run under Gemini Code.
- **Suggestion:** Update source/destination paths for Gemini Code conventions.

### sync-skills-to-gemini (`/Users/thebeast/.gemini/skills/sync-skills-to-gemini/SKILL.md`)
- **References Cursor directories** — Copies from `~/.cursor/skills/` and `~/.cursor/skills-cursor/`. This skill exists to bridge Cursor→Gemini, which is valid, but the description should clarify this is a one-way sync from Cursor.
- **No issues with format** — name, description are valid. Just a usage note.

### skill-creator + skill-installer (critical above)
- Already covered in Critical Issues — platform mismatch (Codex vs Gemini Code).

### local-seo (`/Users/thebeast/.gemini/skills/local-seo/SKILL.md`)
- **Bare `$ARGUMENTS` at end of body** — Line 281: `$ARGUMENTS` appears as a standalone line at the end of the file. Same pattern as seo-optimizer and sterling-sky-local-seo.
- **Action:** Remove or wrap in a meaningful instruction.

### google-ads-account-diagnosis (legacy duplicate)
- The legacy file at `/Users/thebeast/.gemini/skills/google-ads-account-diagnosis.md` is an exact duplicate of the directory version. Both have valid frontmatter with `name` and `description`.
- **Action:** Delete the legacy `.md` file.

### google-ads-bid-strategy (legacy duplicate)
- Same as above — legacy file is a duplicate of the directory version.
- **Action:** Delete the legacy `.md` file.

### google-ads-keyword-expert (legacy duplicate)
- Same as above.
- **Action:** Delete the legacy `.md` file.

### google-ads-local-service (legacy duplicate)
- Same as above.
- **Action:** Delete the legacy `.md` file.

### google-ads-photographer (legacy duplicate)
- Same as above.
- **Action:** Delete the legacy `.md` file.

### google-ads-search-terms-auditor (legacy duplicate)
- Same as above.
- **Action:** Delete the legacy `.md` file.

### monorepo-trpc-setup (legacy duplicate)
- Same as above.
- **Action:** Delete the legacy `.md` file.

---

## Clean Skills (no issues)

The following 37 skills passed all checks (valid `name`, valid `description`, directory format, no unknown frontmatter fields beyond minor non-critical extras already noted above, and no functional content bugs):

- anthropic-ref
- app-store-launch
- clone-site-design
- context-guardian
- deep-research
- expo-router-nav
- find-skills
- frontend-design-auto (directory version)
- google-ads-account-diagnosis (directory version)
- google-ads-bid-strategy (directory version)
- google-ads-keyword-expert (directory version)
- google-ads-local-service (directory version)
- google-ads-photographer (directory version)
- google-ads-search-terms-auditor (directory version)
- gtm-conversion-tracking (directory version — minus `triggers` field, see Warning)
- kyle-roof-seo
- landing-pages (global)
- landing-pages (project)
- local-seo (minus trailing `$ARGUMENTS`, see Info)
- mapbox-nextjs
- monorepo-trpc-setup (directory version)
- nextjs-app-router-patterns
- orchestrator
- react-native-ai-voice-agent
- react-native-architecture
- react-native-crypto
- repurpose-site
- rnmapbox-expo
- sentry-react-setup
- stripe-integration
- supabase-rls-postgis
- tailwind-design-system
- technical-specification
- twilio-communications (minus `source` field, see Warning)
- update-gemini
- update-cursor-settings
- visual-verify-iterate

**Note:** Skills with only unknown/non-spec frontmatter fields (Warnings) are otherwise clean — they have valid `name` and `description` and will function correctly in Gemini Code. The unknown fields are silently ignored.
