# Hooks + Settings Audit
_Audited: 2026-02-20_

## Summary
- Hook events defined: 5
- Total hook handlers: 7
- Issues: 1 critical, 0 warnings, 3 info

---

## Hook Issues

### Setup (prompt)
- **Status: CRITICAL**
- Issues:
  - `Setup` is NOT a valid hook event name. It does not appear in the current list of 15 valid events: `SessionStart, SessionEnd, UserPromptSubmit, PreToolUse, PostToolUse, PermissionRequest, Notification, SubagentStart, SubagentStop, Stop, TeammateIdle, TaskCompleted, ConfigChange, PreCompact, PostCompact`.
  - This hook will never fire.
- Action: Determine intended behavior. If initialization logic is meant to run at session start, move this handler into the `SessionStart` event block. If it is meant to inject a system prompt at session start, the `SessionStart` event with a `prompt`-type handler is the correct replacement.

---

### SessionEnd (command)
- **Status: INFO**
- Handler: `bash ~/.claude/scripts/cleanup-orphaned-watchers.sh`
- File exists: YES (`/Users/thebeast/.claude/scripts/cleanup-orphaned-watchers.sh`)
- Issues:
  - `timeout` is set to `5` (seconds). This is a very short window for a cleanup script; verify the script completes reliably within 5 seconds.
  - `matcher` field is present and set to `"*"` — this is valid, but note that `matcher` is not universally documented for all event types. Confirm this is intentional.
- Action: No blocking issues. Consider testing the 5-second timeout under realistic conditions.

---

### SessionStart — handler 1 (command)
- **Status: INFO**
- Handler: `node "/Users/thebeast/.claude/hooks/gsd-check-update.js"`
- File exists: YES
- Issues:
  - No `timeout` field. Defaults apply, but an explicit timeout is recommended to prevent session startup stalls if the script hangs (e.g., on network failure).
- Action: Add `"timeout": 10000` (or similar) to match the pattern used in handler 2.

---

### SessionStart — handler 2 (command + prompt)
- **Status: OK**
- Commands:
  - `node "/Users/thebeast/.claude/hooks/claude-code-update-checker.js"` — file exists: YES, timeout: 10000 ms (explicit — good)
  - Prompt handler: inline text — valid, no file path to check
- Issues: None.

---

### SubagentStart (command)
- **Status: INFO**
- Handler: `~/.claude/skills/context-guardian/scripts/enforce-single-skill.sh`
- File exists: YES (resolved to `/Users/thebeast/.claude/skills/context-guardian/scripts/enforce-single-skill.sh`)
- Issues:
  - No `timeout` field. If this script blocks or errors, subagent startup could stall indefinitely.
- Action: Add `"timeout": 5` to match the intent (the `SessionEnd` cleanup script uses 5 seconds, which is a reasonable default for lightweight enforcement scripts).

---

### UserPromptSubmit (command)
- **Status: OK**
- Handler: `/Users/thebeast/.claude/hooks/auto-load-anthropic-ref.sh`
- File exists: YES
- Timeout: 5 seconds (explicit — good)
- Issues: None.

---

## Settings Schema Issues

### `statusLine` key
- **Status: OK**
- `statusLine` is a known valid top-level key. The referenced file `/Users/thebeast/.claude/hooks/gsd-statusline.js` exists on disk. No issues.

### `permissions.defaultMode: "plan"`
- **Status: INFO**
- `defaultMode` is set to `"plan"`, which enables plan-before-execute mode globally. This is valid. No schema issue, but worth noting that this affects all sessions and subagents — verify this is intentional for all use cases.

### No unknown top-level keys detected
- All top-level keys present (`permissions`, `model`, `hooks`, `statusLine`, `enabledPlugins`, `alwaysThinkingEnabled`, `autoUpdatesChannel`, `skipDangerousModePermissionPrompt`) are in the known-valid list.

### `skipDangerousModePermissionPrompt: true`
- **Status: INFO**
- This suppresses the dangerous-mode confirmation prompt globally. Acceptable for a power-user setup, but worth acknowledging explicitly — a rogue or confused subagent has fewer guardrails.

### No deprecated `on_*` snake_case event patterns detected
- All hook event keys use the current PascalCase naming convention.

---

## Clean Hooks (no issues)

- **SessionEnd**: Runs `cleanup-orphaned-watchers.sh` on session exit (5 s timeout).
- **SessionStart [handler 2]**: Runs `claude-code-update-checker.js` with explicit 10 000 ms timeout, then injects a changelog review prompt.
- **UserPromptSubmit**: Runs `auto-load-anthropic-ref.sh` on every user prompt (5 s timeout).

---

## Action Summary

| Priority | Event | Action |
|----------|-------|--------|
| CRITICAL | `Setup` | Rename to `SessionStart` (or remove if duplicate of existing SessionStart logic) |
| INFO | `SessionStart` handler 1 | Add `"timeout": 10000` to `gsd-check-update.js` command |
| INFO | `SubagentStart` | Add `"timeout": 5` to `enforce-single-skill.sh` command |
| INFO | `permissions.defaultMode` | Confirm `"plan"` mode is intended for all sessions globally |
