---
name: interactive-elements
description: Build viewport-fit interactive elements (step wizards, calculators, multi-step forms) that feel like native web apps. Covers step-by-step navigation with spring animations, mobile bottom sheet inputs (NumberPadSheet, TextInputSheet), desktop floating-label inputs, useKeyboardHeight hook, and the dual-render desktop/mobile pattern. Use for any component where users input data through a funnel workflow.
---

## Core UX Principle

**The user never scrolls. Every step fits in the viewport.**

Every interactive element uses a flex column layout where the heading and progress bar are `flex-shrink-0`, the content area is `flex-1 min-h-0 overflow-hidden` (or `overflow-y-auto` for calculator steps with more content), and steps swap in place via `AnimatePresence` with direction-aware spring animations.

The outer container is always `flex h-full flex-col`. The step content area sits inside a `relative flex-1 min-h-0` wrapper with `style={{ perspective: "1200px" }}` to enable the subtle 3D rotation during transitions.

## Architecture Pattern

Every step wizard follows the same state and animation structure:

- `useState` tracks current `step` (number) and `direction` (1 for forward, -1 for backward)
- `AnimatePresence mode="wait" custom={direction}` wraps all step branches
- Each step is a `motion.div` with `key`, `custom={direction}`, `variants`, `initial="enter"`, `animate="center"`, `exit="exit"`, and `transition={springTransition}`
- `SLIDE_OFFSET = 120` controls the horizontal travel distance (constant, shared across all wizards)
- Spring transition: `{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }`
- Reduced-motion variants collapse all movement to static `{ opacity: 1, x: 0, scale: 1, rotateY: 0 }`
- `useReducedMotion()` from Framer Motion gates all animation

The progress bar animates width with the brand easing `[0.25, 0.46, 0.45, 0.94]` and respects reduced-motion by setting `duration: 0`.

For full implementation details including variant definitions and navigation helpers, see step-wizard-reference.md.

## The Dual-Render Pattern

This is the key innovation for mobile UX. Instead of one responsive input that works poorly on both platforms, each form field renders **two completely separate elements** gated by Tailwind breakpoint classes:

- **Desktop** (`hidden md:block`): Standard floating-label `<input>` with `peer` CSS trick for label animation. The user types directly into the field.
- **Mobile** (`md:hidden`): A tappable `<button>` styled to look like an input field, showing the current value or placeholder text with a `Pencil` icon. Tapping opens a bottom sheet overlay.

The breakpoint is `md` (768px). Both elements read from and write to the same form state (React Hook Form `setValue` / `watch`, or plain `useState`).

Bottom sheet components used for mobile input:

- **NumberPadSheet** -- Custom number pad with 1-9/0 grid, decimal toggle, backspace, max-value/max-length enforcement. Used for phone numbers, room dimensions, square footage.
- **TextInputSheet** -- Native text input inside a bottom sheet with auto-focus, keyboard-aware padding via `useKeyboardHeight`, Enter-to-submit for single-line, and multiline textarea support. Used for names, emails, messages.

Both sheet components use the base `Sheet` from `src/components/ui/sheet.tsx` (Radix Dialog) with `side="bottom"` and `showCloseButton={false}`. Both have a "Done" button using the standard CTA styling.

## Component Inventory

| Component | Path | Purpose |
|-----------|------|---------|
| ContactForm | src/components/sections/ContactForm.tsx | Multi-step contact form with 3-step wizard |
| CostCalculatorApp | src/components/tools/CostCalculatorApp.tsx | Cost calculator 4-step wizard orchestrator |
| StepDimensions | src/components/tools/calculator-steps/StepDimensions.tsx | Room dimensions input step |
| StepSurfaces | src/components/tools/calculator-steps/StepSurfaces.tsx | Surface selection step |
| StepPaintQuality | src/components/tools/calculator-steps/StepPaintQuality.tsx | Material tier selector |
| StepEstimate | src/components/tools/calculator-steps/StepEstimate.tsx | Estimate display + CTA |
| NumberPadSheet | src/components/ui/number-pad-sheet.tsx | Mobile numeric input bottom sheet |
| TextInputSheet | src/components/ui/text-input-sheet.tsx | Mobile text input bottom sheet |
| Sheet | src/components/ui/sheet.tsx | Base Radix Dialog bottom sheet |
| useKeyboardHeight | src/hooks/useKeyboardHeight.ts | Visual viewport keyboard detection |
| types.ts | src/lib/cost-calculator/types.ts | Calculator data models |
| constants.ts | src/lib/cost-calculator/constants.ts | Pricing constants and material tiers |
| interiorCalculator.ts | src/lib/cost-calculator/interiorCalculator.ts | Pure calculation functions |

## Shared Conventions

### CTA Button

```
rounded-[9px] border border-cta bg-cta text-cta-foreground
transition-[background-color,box-shadow,border-color] duration-[400ms]
[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]
hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]
```

Full-width on mobile (`w-full`), auto-width on desktop (`md:w-auto`). Always `min-h-[48px]`.

### Touch Targets

All interactive elements require `min-h-[48px]` (or `min-h-12` / `h-14` for number pad keys). This is non-negotiable for mobile accessibility.

### Animation Constants

| Token | Value |
|-------|-------|
| Spring transition | `{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }` |
| Brand easing | `[0.25, 0.46, 0.45, 0.94]` |
| Slide offset | `120` px horizontal travel |
| Key press spring | `{ type: "spring", stiffness: 500, damping: 30 }` (number pad) |
| Reduced motion | All values collapse to identity (no movement, instant) |

### Error Display

- Inline field errors: `text-xs text-red-600 mt-1`
- Bordered error blocks: `rounded-2xl border border-red-200 bg-red-50`
- Sheet input errors: `text-sm text-red-600` with `role="alert"`

### Background Alternation

Use `--background` (#FFFCF8 warm off-white) and `--warm` (#F5F0EA warm cream). Never pure white #FFFFFF.

### Floating Label Classes

- Input: `peer block w-full min-h-12 rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground`
- Label: `pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground`

Requires `placeholder=" "` on the input for the peer trick to work.

## Task Router

| Task | Reference File |
|------|---------------|
| Build a new step wizard or add steps to an existing one | step-wizard-reference.md |
| Add mobile bottom sheet input to a form field | mobile-input-reference.md |
| Build a new calculator or modify calculation logic | calculator-reference.md |
| Add a new interactive element from scratch | Read all three reference files |
