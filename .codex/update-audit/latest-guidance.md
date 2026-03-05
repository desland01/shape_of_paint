# Latest Anthropic Guidance
_Fetched: 2026-02-20_

---

## Current Valid Hook Events

All hook events documented as valid in the current hooks reference:

| Event | When it fires | Supports Blocking |
|---|---|---|
| `SessionStart` | When a session begins or resumes | No |
| `UserPromptSubmit` | When you submit a prompt, before Claude processes it | Yes |
| `PreToolUse` | Before a tool call executes | Yes |
| `PermissionRequest` | When a permission dialog appears | Yes |
| `PostToolUse` | After a tool call succeeds | No (feedback only) |
| `PostToolUseFailure` | After a tool call fails | No (feedback only) |
| `Notification` | When Claude Code sends a notification | No |
| `SubagentStart` | When a subagent is spawned | No |
| `SubagentStop` | When a subagent finishes | Yes |
| `Stop` | When Claude finishes responding | Yes |
| `TeammateIdle` | When an agent team teammate is about to go idle | Yes |
| `TaskCompleted` | When a task is being marked as completed | Yes |
| `ConfigChange` | When a configuration file changes during a session | Yes (except `policy_settings`) |
| `PreCompact` | Before context compaction | No |
| `SessionEnd` | When a session terminates | No |

**Total: 15 valid hook events.**

### Matcher values by event

- `PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest` - match on tool name: `Bash`, `Edit`, `Write`, `Read`, `Glob`, `Grep`, `Task`, `WebFetch`, `WebSearch`, or MCP tool names (`mcp__<server>__<tool>`)
- `SessionStart` - `startup`, `resume`, `clear`, `compact`
- `SessionEnd` - `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled`, `other`
- `Notification` - `permission_prompt`, `idle_prompt`, `auth_success`, `elicitation_dialog`
- `SubagentStart`, `SubagentStop` - agent type: `Bash`, `Explore`, `Plan`, or custom agent names
- `PreCompact` - `manual`, `auto`
- `ConfigChange` - `user_settings`, `project_settings`, `local_settings`, `policy_settings`, `skills`
- `UserPromptSubmit`, `Stop`, `TeammateIdle`, `TaskCompleted` - no matcher support (always fire)

### Hook handler types

Three handler types are now supported:
- `type: "command"` - shell command (original type)
- `type: "prompt"` - single-turn LLM call returning `{"ok": true/false}`
- `type: "agent"` - multi-turn subagent with tool access, returning `{"ok": true/false}`

---

## Current SKILL.md Frontmatter Fields

All documented fields for `SKILL.md` files (all optional except where noted):

| Field | Required | Description |
|---|---|---|
| `name` | No | Display name. Lowercase letters, numbers, hyphens only, max 64 chars. Defaults to directory name. |
| `description` | Recommended | What the skill does and when to use it. Claude uses this for automatic invocation decisions. |
| `argument-hint` | No | Hint shown during autocomplete. Example: `[issue-number]` or `[filename] [format]`. |
| `disable-model-invocation` | No | Set `true` to prevent Claude from auto-loading this skill. Manual `/name` invocation only. Default: `false`. |
| `user-invocable` | No | Set `false` to hide from the `/` menu. Use for background knowledge. Default: `true`. |
| `allowed-tools` | No | Tools Claude can use without asking permission when this skill is active. |
| `model` | No | Model to use when this skill is active. |
| `context` | No | Set to `fork` to run in a forked subagent context. |
| `agent` | No | Which subagent type to use when `context: fork` is set. Options: `Explore`, `Plan`, `general-purpose`, or custom agent name. |
| `hooks` | No | Hooks scoped to this skill's lifecycle. Same configuration format as settings-based hooks. |

### String substitutions available in skill content

| Variable | Description |
|---|---|
| `$ARGUMENTS` | All arguments passed when invoking the skill |
| `$ARGUMENTS[N]` | Specific argument by 0-based index |
| `$N` | Shorthand for `$ARGUMENTS[N]` (e.g., `$0` for first argument) |
| `${CLAUDE_SESSION_ID}` | The current session ID |

### Skill file locations

| Location | Path | Priority |
|---|---|---|
| Enterprise | Managed settings | Highest |
| Personal | `~/.claude/skills/<skill-name>/SKILL.md` | 2nd |
| Project | `.claude/skills/<skill-name>/SKILL.md` | 3rd |
| Plugin | `<plugin>/skills/<skill-name>/SKILL.md` | Namespaced |

Note: `.claude/commands/` files still work and are equivalent to skills, but skills take precedence when names conflict.

---

## New / Changed Fields (since ~2025)

### Skills (new features)

- **`hooks` frontmatter field** - Skills can now define hooks scoped to their own lifecycle. This is new capability allowing per-skill automation. Subagents also support this in their frontmatter.
- **`context: fork` + `agent` field** - Run skills in isolated subagent contexts. The `agent` field specifies which subagent configuration to use.
- **`user-invocable` field** - New field to hide skills from the `/` menu while still allowing Claude to invoke them automatically.
- **`disable-model-invocation` field** - Replaces or formalizes the pattern of preventing Claude from auto-triggering skills.
- **`${CLAUDE_SESSION_ID}` substitution** - New variable for session-specific logging/file creation.
- **`$ARGUMENTS[N]` and `$N` shorthand** - New positional argument access.
- **`once` field on hook handlers** - A hook handler field (skills and agents only) that runs the hook only once per session then removes it.
- **Custom slash commands merged into skills** - `.claude/commands/` files and `.claude/skills/` SKILL.md files are now unified. Skills add optional features on top.
- **Monorepo nested discovery** - Claude Code auto-discovers skills from nested `.claude/skills/` directories when working in subdirectories.
- **Skills from `--add-dir`** - Skills defined in `.claude/skills/` within `--add-dir` directories are loaded automatically with live change detection.

### Hooks (new events and features)

- **`ConfigChange` event** - NEW event (added in v2.1.49). Fires when configuration files change during a session. Supports blocking (except `policy_settings`). Matchers: `user_settings`, `project_settings`, `local_settings`, `policy_settings`, `skills`.
- **`TeammateIdle` event** - NEW event for agent team teammate lifecycle control.
- **`TaskCompleted` event** - NEW event that fires when a task is marked as completed.
- **`SubagentStart` / `SubagentStop` events** - Hooks for subagent lifecycle.
- **`PostToolUseFailure` event** - NEW dedicated event for tool call failures (previously only `PostToolUse` existed).
- **`PermissionRequest` event** - NEW event for intercepting permission dialogs.
- **`UserPromptSubmit` event** - Fires before Claude processes a user prompt.
- **`PreCompact` event** - Fires before context compaction (`manual` or `auto`).
- **`type: "prompt"` hook handler** - NEW. Single-turn LLM evaluation returning `{"ok": true/false}`.
- **`type: "agent"` hook handler** - NEW. Multi-turn subagent with tool access for complex verification.
- **`async: true` on command hooks** - NEW. Run hooks in the background without blocking Claude.
- **`once` field** - Hook handler runs only once per session (skills/agents only).
- **`last_assistant_message` in Stop/SubagentStop input** - NEW field providing the final response text without needing to parse transcript files.
- **`additionalContext` output field** - Hooks can inject context into Claude's conversation via JSON output.
- **`CLAUDE_ENV_FILE`** - SessionStart hooks can write `export` statements to persist environment variables for subsequent Bash commands.
- **`hookSpecificOutput` pattern** - Structured JSON output for events needing richer control (PreToolUse, PermissionRequest, SubagentStart, SessionStart).
- **Plugin hooks** - Plugins can ship `hooks/hooks.json` with a top-level `description` field.
- **`allowManagedHooksOnly` setting** - Enterprise-only setting to block user/project/plugin hooks.
- **`disableAllHooks` now respects managed settings hierarchy** - Fixed in v2.1.49: non-managed settings can no longer disable managed hooks.

### Settings (new keys)

- **`attribution`** - New object with `commit` and `pr` sub-keys for controlling git commit and PR attribution text.
- **`availableModels`** - Restrict which models users can select.
- **`autoUpdatesChannel`** - Choose `"stable"` or `"latest"` release channel.
- **`statusLine`** - Custom status line command.
- **`fileSuggestion`** - Custom script for `@` file autocomplete.
- **`showTurnDuration`** - Show/hide turn duration messages.
- **`spinnerVerbs`** - Customize action verbs in spinner.
- **`spinnerTipsEnabled`** / **`spinnerTipsOverride`** - Control spinner tips.
- **`terminalProgressBarEnabled`** - Enable/disable terminal progress bar.
- **`alwaysThinkingEnabled`** - Enable extended thinking by default.
- **`plansDirectory`** - Where plan files are stored.
- **`forceLoginMethod`** / **`forceLoginOrgUUID`** - Restrict login method and auto-select org.
- **`sandbox`** - Full sandbox configuration object (enabled, network, excludedCommands, etc.).
- **`teammateMode`** - Agent team display: `"auto"`, `"in-process"`, or `"tmux"`.
- **`otelHeadersHelper`** - Script to generate dynamic OpenTelemetry headers.
- **`awsAuthRefresh`** / **`awsCredentialExport`** - AWS/Bedrock credential scripts.
- **`enableAllProjectMcpServers`** / **`enabledMcpjsonServers`** / **`disabledMcpjsonServers`** - MCP server approval controls.
- **`enabledPlugins`** - Control which plugins are enabled.
- **`companyAnnouncements`** - Startup announcements (enterprise).
- **`disableAllHooks`** - Disable all hooks globally.
- **`allowManagedHooksOnly`** - Managed only: block user/project/plugin hooks.
- **`env`** - Environment variables applied to every session.

---

## Deprecated Fields

- **`includeCoAuthoredBy`** (settings) - DEPRECATED. Use `attribution.commit` instead. The `attribution` object provides separate control over commit and PR attribution text.
- **`ignorePatterns`** (settings) - DEPRECATED. Use `permissions.deny` with `Read` rules instead.
- **`PreToolUse` top-level `decision` and `reason` fields** (hook output) - DEPRECATED for PreToolUse specifically. Use `hookSpecificOutput.permissionDecision` and `hookSpecificOutput.permissionDecisionReason` instead. The old values `"approve"` and `"block"` map to `"allow"` and `"deny"` respectively. Note: other events like `PostToolUse` and `Stop` continue to use top-level `decision` and `reason` as their current format.

---

## CHANGELOG Highlights (last 30 days)

The CHANGELOG does not include explicit dates per entry. The two most recent versions as of the fetch date are v2.1.49 and v2.1.47. Based on the content and known timeline, these are the most recent releases. All entries below are from those versions.

### v2.1.49 (most recent)

- **`ConfigChange` hook event** added - fires when config files change mid-session, supports enterprise security auditing and optional blocking
- **`--worktree` / `-w` CLI flag** - start Claude in an isolated git worktree
- **Subagent `isolation: "worktree"`** - subagents can work in a temporary git worktree
- **Ctrl+F to kill background agents** (two-press confirmation)
- **Agent definitions `background: true`** - always run as a background task
- **Plugins can ship `settings.json`** for default configuration
- **`Simple mode` (`CLAUDE_CODE_SIMPLE`) now includes file edit tool** in addition to Bash
- **SDK model info** now includes `supportsEffort`, `supportedEffortLevels`, `supportsAdaptiveThinking` fields
- **`disableAllHooks` fix** - non-managed settings can no longer disable managed policy hooks
- **Sonnet 4.5 with 1M context removed from Max plan** - replaced by Sonnet 4.6 with 1M context; switch via `/model`
- Fixed file-not-found errors to suggest corrected paths
- Fixed Ctrl+C and ESC being silently ignored when background agents running
- Fixed prompt suggestion cache regression
- Fixed `plugin enable`/`plugin disable` scope auto-detection
- Fixed verbose mode not updating thinking block display when toggled via `/config`
- Fixed unbounded WASM memory growth during long sessions

### v2.1.47

- **`last_assistant_message` field** added to Stop and SubagentStop hook inputs
- Fixed FileWriteTool line counting to preserve intentional trailing blank lines
- Fixed Windows terminal rendering bugs (`os.EOL` issues)
- Improved VS Code plan preview - auto-updates as Claude iterates
- Fixed compaction failing with many PDF documents
- Improved memory usage in long-running sessions
- **Startup performance** improved by deferring SessionStart hook execution (~500ms reduction)
- Fixed bash tool output silently discarded on Windows (MSYS2/Cygwin)
- Improved `@` file mention performance with pre-warmed index
- Fixed bash permission classifier hallucinating match descriptions
- Fixed user-defined agents only loading one file on NFS/FUSE filesystems
- **`ctrl+f`** now kills all background agents (replaces double-ESC pattern)
- Simplified teammate navigation to Shift+Down only (with wrapping)
- Fixed single file write/edit error aborting all parallel file operations

---

## Unreachable URLs

- `https://code.claude.com/docs/skills` - 404 (correct URL is `https://code.claude.com/docs/en/skills`)
- `https://code.claude.com/docs/hooks` - 404 (correct URL is `https://code.claude.com/docs/en/hooks`)
- `https://code.claude.com/docs/settings` - 404 (correct URL is `https://code.claude.com/docs/en/settings`)
- `https://docs.anthropic.com/en/docs/claude-code/skills` - 301 redirect to `https://code.claude.com/docs/en/skills`
- `https://docs.anthropic.com/en/docs/claude-code/hooks` - 301 redirect to `https://code.claude.com/docs/en/hooks`
- `https://docs.anthropic.com/en/docs/claude-code/settings` - 301 redirect to `https://code.claude.com/docs/en/settings`

All content was successfully retrieved via the redirected `code.claude.com/docs/en/` URLs.

---

## Sources

- [Skills documentation](https://code.claude.com/docs/en/skills)
- [Hooks reference](https://code.claude.com/docs/en/hooks)
- [Settings reference](https://code.claude.com/docs/en/settings)
- [CHANGELOG](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
