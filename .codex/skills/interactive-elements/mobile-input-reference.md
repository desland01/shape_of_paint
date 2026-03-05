# Mobile Input System Reference

Mobile users never type into standard form inputs. Instead, tappable buttons open bottom sheets with custom input UIs (number pad or text field). Desktop users see standard floating-label inputs. The breakpoint is `md` (768px) -- everything below that gets the mobile treatment.

The system has four pieces:

1. **NumberPadSheet** -- custom numeric keypad in a bottom sheet
2. **TextInputSheet** -- text/email/tel input in a bottom sheet with keyboard-aware positioning
3. **useKeyboardHeight** -- hook that measures the native keyboard height
4. **The dual-render pattern** -- `hidden md:block` for desktop inputs, `md:hidden` for mobile tappable buttons

---

## NumberPadSheet

**File:** `src/components/ui/number-pad-sheet.tsx`

### Props Interface

```tsx
interface NumberPadSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  value: number | string
  onChange: (value: number) => void
  label: string
  suffix?: string
  allowDecimal?: boolean
  maxValue?: number
  maxLength?: number
}
```

### Key Layout

Phone-order layout (1-2-3 on top row), NOT calculator order (7-8-9 on top):

```tsx
const KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  [".", "0", "backspace"],
] as const
```

### Internal State Sync

The sheet maintains an internal string state that syncs with the `value` prop whenever the sheet opens:

```tsx
const [internalValue, setInternalValue] = React.useState("")

React.useEffect(() => {
  if (open) {
    const numVal = typeof value === "string" ? parseFloat(value) : value
    if (isNaN(numVal) || numVal === 0) {
      setInternalValue("")
    } else {
      setInternalValue(String(numVal))
    }
  }
}, [open, value])
```

### maxLength and maxValue Enforcement

Both are enforced inside `handleKeyPress` before updating state. `maxLength` counts only digits (ignores decimal point):

```tsx
// Enforce maxLength (count only digits, not decimal point)
if (maxLength !== undefined) {
  const digitCount = candidate.replace(".", "").length
  if (digitCount > maxLength) return prev
}

// Enforce maxValue
if (maxValue !== undefined) {
  const parsed = parseFloat(candidate)
  if (!isNaN(parsed) && parsed > maxValue) return prev
}
```

### Decimal Handling

The decimal key is disabled when `allowDecimal` is false OR when the value already contains a decimal:

```tsx
const hasDecimal = internalValue.includes(".")
const isDecimalDisabled = !allowDecimal || hasDecimal
```

If the user taps decimal on an empty value, it starts with `"0."`:

```tsx
if (key === ".") {
  if (!allowDecimal || hasDecimal) return
  setInternalValue((prev) => {
    if (prev === "") return "0."
    return prev + "."
  })
  return
}
```

### Delete Key Behavior

Backspace removes the last character from the string:

```tsx
if (key === "backspace") {
  setInternalValue((prev) => {
    const next = prev.slice(0, -1)
    return next
  })
  return
}
```

### PadKey Component (Tap Animation)

Each key uses a Framer Motion spring animation on tap. Respects `prefers-reduced-motion`:

```tsx
const KEY_SPRING = { type: "spring" as const, stiffness: 500, damping: 30 }

// Motion-enabled key:
<MotionButton
  type="button"
  onClick={onPress}
  disabled={disabled}
  aria-label={ariaLabel}
  whileTap={disabled ? undefined : { scale: 0.95 }}
  transition={KEY_SPRING}
  className={`flex h-14 items-center justify-center rounded-xl text-xl font-semibold text-foreground transition-colors ${
    disabled
      ? "pointer-events-none opacity-30"
      : "bg-warm-light hover:bg-border-subtle active:bg-border-subtle"
  }`}
>
  {children}
</MotionButton>
```

### Grid Layout

The keypad uses a 3-column grid with gap-2:

```tsx
<div className="grid grid-cols-3 gap-2">
  {KEYS.flat().map((key) => { /* ... */ })}
</div>
```

### Value Display Area

Centered at the top of the sheet, with optional suffix:

```tsx
<div className="flex items-baseline justify-center gap-2 py-3">
  <span className="text-3xl font-semibold tabular-nums text-foreground">
    {displayValue}
  </span>
  {suffix && (
    <span className="text-lg text-text-secondary">{suffix}</span>
  )}
</div>
```

### Done Button

Uses the exact CTA button spec with `rounded-[9px]`:

```tsx
<button
  type="button"
  onClick={handleDone}
  className="mt-3 w-full rounded-[9px] border border-cta bg-cta py-3.5 text-base font-semibold text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-hover"
  aria-label={`Done editing ${label}`}
>
  Done
</button>
```

### Sheet Container

```tsx
<Sheet open={open} onOpenChange={onOpenChange}>
  <SheetContent side="bottom" showCloseButton={false} className="p-5">
```

---

## TextInputSheet

**File:** `src/components/ui/text-input-sheet.tsx`

### Props Interface

```tsx
interface TextInputSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  label: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  error?: string;
}
```

### Local Value Sync

Local state syncs with parent value when the sheet opens:

```tsx
const [localValue, setLocalValue] = useState(value);

useEffect(() => {
  if (open) {
    setLocalValue(value);
  }
}, [open, value]);
```

### Auto-Focus with Delay

The input auto-focuses 100ms after the sheet opens (to let the slide-up animation complete):

```tsx
useEffect(() => {
  if (!open) return;

  const timer = setTimeout(() => {
    if (multiline) {
      textareaRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  }, 100);

  return () => clearTimeout(timer);
}, [open, multiline]);
```

### Enter-to-Submit (Single-Line Mode)

When `multiline` is false, pressing Enter triggers Done:

```tsx
const handleKeyDown = useCallback(
  (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
      handleDone();
    }
  },
  [multiline, handleDone]
);
```

### Keyboard Height Adjustment

Uses `useKeyboardHeight` to push the sheet content above the native keyboard:

```tsx
const { keyboardHeight } = useKeyboardHeight();

<SheetContent
  side="bottom"
  showCloseButton={false}
  className="rounded-t-2xl px-5 pb-5 pt-4"
  style={{ paddingBottom: keyboardHeight > 0 ? keyboardHeight + 20 : 20 }}
>
```

### Input Styling

```tsx
const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent-gold";
```

For single-line inputs, `min-h-12` is added. For textareas, `resize-none` is added.

Error state adds `border-red-500 focus:border-red-500`:

```tsx
className={`${inputClasses} min-h-12 ${hasError ? "border-red-500 focus:border-red-500" : ""}`}
```

### Error Display Inside Sheet

```tsx
{hasError && (
  <p id={errorId} className="text-sm text-red-600" role="alert">
    {error}
  </p>
)}
```

### Done Button

Same CTA spec as NumberPadSheet:

```tsx
<button
  type="button"
  onClick={handleDone}
  className="min-h-12 w-full rounded-[9px] border border-cta bg-cta text-base font-semibold text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
>
  Done
</button>
```

### inputMode Mapping

Native keyboard type is set via `inputMode` for better mobile UX:

```tsx
const INPUT_MODE_MAP: Record<string, React.HTMLAttributes<HTMLInputElement>["inputMode"]> = {
  tel: "tel",
  email: "email",
  text: "text",
};
```

---

## useKeyboardHeight Hook

**File:** `src/hooks/useKeyboardHeight.ts`

### Full Implementation

```tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface KeyboardHeightResult {
  keyboardHeight: number;
  isKeyboardOpen: boolean;
}

const DEBOUNCE_MS = 50;
const KEYBOARD_THRESHOLD = 100;

export const useKeyboardHeight = (): KeyboardHeightResult => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleResize = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const viewport = window.visualViewport;
      if (!viewport) {
        setKeyboardHeight(0);
        return;
      }

      const height = Math.max(0, Math.round(window.innerHeight - viewport.height));
      setKeyboardHeight(height);
    }, DEBOUNCE_MS);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) {
      return;
    }

    const viewport = window.visualViewport;
    viewport.addEventListener("resize", handleResize);

    return () => {
      viewport.removeEventListener("resize", handleResize);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [handleResize]);

  return {
    keyboardHeight,
    isKeyboardOpen: keyboardHeight > KEYBOARD_THRESHOLD,
  };
};
```

### Why This Exists

When a native keyboard opens on mobile, the browser's `window.visualViewport` shrinks but `window.innerHeight` stays the same. The difference is the keyboard height. We use this to add padding to the bottom of the `TextInputSheet` so the input field stays visible above the keyboard.

### Key Details

| Constant | Value | Purpose |
|----------|-------|---------|
| `DEBOUNCE_MS` | `50` | Debounce the resize listener to avoid layout thrash |
| `KEYBOARD_THRESHOLD` | `100` | Minimum pixel difference to consider the keyboard "open" (avoids false positives from browser chrome changes) |

### Return Shape

```tsx
{
  keyboardHeight: number;    // Pixels of keyboard height (0 when closed)
  isKeyboardOpen: boolean;   // true when keyboardHeight > 100
}
```

---

## The Dual-Render Pattern

This is the core pattern that makes the mobile input system work. Every input field renders TWO versions:

1. **Desktop:** Standard floating-label input, visible at `md` and above
2. **Mobile:** Tappable button that opens a bottom sheet, hidden at `md` and above

### Complete Example from ContactForm.tsx

Here is the Name field as a full example:

```tsx
{/* Name */}
<div>
  {/* Desktop: floating-label input */}
  <div className="hidden md:block">
    <div className="relative">
      <input
        id="name"
        type="text"
        placeholder=" "
        autoComplete="name"
        aria-invalid={errors.name ? "true" : undefined}
        aria-describedby={errors.name ? "name-error" : undefined}
        className={INPUT_CLASS}
        {...register("name")}
      />
      <label htmlFor="name" className={LABEL_CLASS}>
        Your Name
      </label>
    </div>
    {errors.name && (
      <p id="name-error" className="text-xs text-red-600 mt-1">
        {errors.name.message}
      </p>
    )}
  </div>
  {/* Mobile: tappable display */}
  <div className="md:hidden">
    <button
      type="button"
      onClick={() => setActiveSheet("name")}
      aria-label={nameValue ? `Edit name: ${nameValue}` : "Enter your name"}
      className={`min-h-12 w-full border bg-background px-3 py-3 text-left text-base flex items-center justify-between ${
        errors.name ? "border-red-500" : "border-border-subtle"
      }`}
    >
      <span className={nameValue ? "text-foreground" : "text-text-muted"}>
        {nameValue || "Your Name"}
      </span>
      <Pencil className="h-4 w-4 text-text-secondary flex-shrink-0" />
    </button>
    {errors.name && (
      <p className="text-xs text-red-600 mt-1">
        {errors.name.message}
      </p>
    )}
  </div>
</div>
```

And the corresponding sheet at the bottom of the component:

```tsx
<TextInputSheet
  open={activeSheet === "name"}
  onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
  value={nameValue || ""}
  onChange={(val) => setValue("name", val, { shouldValidate: true })}
  label="Your Name"
  type="text"
  autoComplete="name"
  error={errors.name?.message}
/>
```

### Example from StepDimensions.tsx (NumberPadSheet variant)

```tsx
{/* Desktop input */}
<div className="relative hidden md:block">
  <input
    id={`dim-${field.key}`}
    type="number"
    inputMode="decimal"
    min={0}
    max={field.max}
    value={currentRoom[field.key] || ""}
    onChange={(e) => updateCurrentRoom({ [field.key]: parseNum(e.target.value) })}
    className="min-h-12 w-full rounded-xl border border-border-subtle bg-background px-3 py-3 pr-8 text-center text-base text-foreground outline-none transition-colors focus:border-accent-gold"
  />
  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-secondary">ft</span>
</div>

{/* Mobile tappable display */}
<button
  type="button"
  aria-label={`Edit ${field.label}`}
  onClick={() => setActiveSheet(field.key)}
  className="md:hidden min-h-12 w-full rounded-xl border border-border-subtle bg-background px-3 py-3 text-base flex items-center justify-between transition-colors focus:outline-none focus:border-accent-gold"
>
  <span className={cn(
    "flex-1 text-center",
    currentRoom[field.key] ? "text-foreground" : "text-text-muted"
  )}>
    {currentRoom[field.key] || "0"}
  </span>
  <span className="flex items-center gap-1.5 shrink-0">
    <span className="text-xs text-text-secondary">ft</span>
    <Pencil className="h-3.5 w-3.5 text-text-secondary" />
  </span>
</button>
```

And the corresponding sheets:

```tsx
<TextInputSheet
  open={activeSheet === "room-name"}
  onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
  value={currentRoom.name}
  onChange={(val) => updateCurrentRoom({ name: val })}
  label="Room Name"
  placeholder="Living Room, Bedroom, Office..."
/>

{DIM_FIELDS.map((field) => (
  <NumberPadSheet
    key={field.key}
    open={activeSheet === field.key}
    onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
    value={currentRoom[field.key]}
    onChange={(val) => updateCurrentRoom({ [field.key]: val })}
    label={field.label}
    suffix="ft"
    allowDecimal={true}
    maxValue={field.max}
  />
))}
```

### Pencil Icon Convention

Every mobile tappable button includes a `Pencil` icon from Lucide as a visual affordance that the field is editable:

```tsx
import { Pencil } from "lucide-react";

// Standard size in ContactForm:
<Pencil className="h-4 w-4 text-text-secondary flex-shrink-0" />

// Slightly smaller in StepDimensions dimension buttons:
<Pencil className="h-3.5 w-3.5 text-text-secondary" />
```

### Value Display on Tappable Buttons

Values show in `text-foreground`. Placeholder text shows in `text-text-muted`:

```tsx
<span className={nameValue ? "text-foreground" : "text-text-muted"}>
  {nameValue || "Your Name"}
</span>
```

For multiline fields, `line-clamp-2` truncates long values:

```tsx
<span className={`${messageValue ? "text-foreground" : "text-text-muted"} line-clamp-2`}>
  {messageValue || "Tell us about your project"}
</span>
```

---

## Floating Label Classes

**File:** `src/components/sections/ContactForm.tsx`

### INPUT_CLASS

```tsx
const INPUT_CLASS =
  "peer block w-full min-h-12 rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground";
```

### LABEL_CLASS

```tsx
const LABEL_CLASS =
  "pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground";
```

### How the Floating Label Works

The trick relies on the `peer` class from Tailwind and `placeholder=" "` (a single space) on the input:

1. The input gets `peer` class and `placeholder=" "`
2. When the input is empty and unfocused, `peer-placeholder-shown` is true -- the label sits at `top-3.5` in `text-base` (looks like a placeholder)
3. When the input has a value OR is focused, the label moves to `top-2` in `text-xs font-medium` (floats up as a label)

### Full Markup Pattern

```tsx
<div className="relative">
  <input
    id="name"
    type="text"
    placeholder=" "
    autoComplete="name"
    className={INPUT_CLASS}
    {...register("name")}
  />
  <label htmlFor="name" className={LABEL_CLASS}>
    Your Name
  </label>
</div>
```

The `placeholder=" "` is critical -- without it, `peer-placeholder-shown` won't toggle correctly.

### CTA_CLASS (for reference)

```tsx
const CTA_CLASS =
  "w-full min-h-[48px] flex items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] disabled:opacity-50 disabled:pointer-events-none";
```

---

## ActiveSheet State Management

Each component that uses bottom sheets declares a single `useState` to track which sheet is open. Only one sheet can be open at a time.

### From ContactForm.tsx

```tsx
const [activeSheet, setActiveSheet] = useState<string | null>(null);
```

### From StepDimensions.tsx (typed union)

```tsx
type SheetId = "room-name" | "length" | "width" | "height";

const [activeSheet, setActiveSheet] = useState<SheetId | null>(null);
```

### Opening a Sheet

Set the state to the sheet's identifier:

```tsx
onClick={() => setActiveSheet("name")}
onClick={() => setActiveSheet("phone")}
onClick={() => setActiveSheet(field.key)}
```

### Closing a Sheet

Every sheet's `onOpenChange` clears the state when the sheet closes:

```tsx
onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
```

This pattern is identical across all sheet instances. The `if (!open)` guard ensures we only clear on close, not on open.

### Multiple Sheets, One State

All sheets in a component share the same `activeSheet` variable. Each sheet checks `open={activeSheet === "itsKey"}`. Since `activeSheet` can only hold one value, only one sheet is ever open:

```tsx
<TextInputSheet
  open={activeSheet === "name"}
  onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
  /* ... */
/>

<NumberPadSheet
  open={activeSheet === "phone"}
  onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
  /* ... */
/>

<TextInputSheet
  open={activeSheet === "email"}
  onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
  /* ... */
/>

<TextInputSheet
  open={activeSheet === "message"}
  onOpenChange={(open) => { if (!open) setActiveSheet(null); }}
  /* ... */
/>
```

---

## Error Display on Mobile Tappable Buttons

### Border Color on Error

The tappable button's border changes to `border-red-500` when there is an error:

```tsx
className={`min-h-12 w-full border bg-background px-3 py-3 text-left text-base flex items-center justify-between ${
  errors.name ? "border-red-500" : "border-border-subtle"
}`}
```

### Error Message Below Button

Error text renders directly below the tappable button:

```tsx
{errors.name && (
  <p className="text-xs text-red-600 mt-1">
    {errors.name.message}
  </p>
)}
```

### Error Inside TextInputSheet

TextInputSheet also displays errors inside the sheet itself, so the user sees the error while editing:

```tsx
{hasError && (
  <p id={errorId} className="text-sm text-red-600" role="alert">
    {error}
  </p>
)}
```

The input inside the sheet also gets error border styling:

```tsx
className={`${inputClasses} min-h-12 ${hasError ? "border-red-500 focus:border-red-500" : ""}`}
```

### Pattern Summary

Errors show in two places simultaneously:
1. On the tappable button (red border + message below) -- visible when the sheet is closed
2. Inside the sheet (red border on input + message above Done button) -- visible when the sheet is open

---

## Sheet Base Component

**File:** `src/components/ui/sheet.tsx`

The Sheet is built on Radix UI's Dialog primitive (`radix-ui`). For bottom sheets, the key config is:

```tsx
<SheetContent
  side="bottom"
  showCloseButton={false}
  className="..."
>
```

`side="bottom"` applies these animation classes:

```
data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t
```

The `showCloseButton={false}` prop is used on all input sheets because the user dismisses via the Done button or tapping the overlay. The close button X is suppressed.
