# Step Wizard Architecture Reference

Both `ContactForm` and `CostCalculatorApp` implement the same step wizard pattern -- direction-aware slide animations, spring physics, reduced-motion fallback, and a flex layout that fills available height without scrolling between steps. This reference documents every convention so new interactive elements can replicate the pattern exactly.

---

## Container Layout

Both components use an identical flex-column structure:

```tsx
// ContactForm (src/components/sections/ContactForm.tsx)
<div className="flex h-full flex-col">
  {/* Heading — flex-shrink-0 */}
  <div className="mb-6 flex-shrink-0">
    <h3 className="text-4xl font-normal mb-1">Tell Us About Your Project</h3>
    <p className="text-lg text-text-secondary">...</p>
  </div>

  {/* Progress bar — flex-shrink-0 */}
  <div className="mb-6 flex-shrink-0">...</div>

  {/* Step content — flex-1 fills remaining space */}
  <form className="flex flex-1 flex-col min-h-0">
    <div className="relative flex-1 min-h-0 overflow-hidden" style={{ perspective: "1200px" }}>
      <AnimatePresence mode="wait" custom={direction}>
        {/* step content */}
      </AnimatePresence>
    </div>
  </form>
</div>
```

```tsx
// CostCalculatorApp (src/components/tools/CostCalculatorApp.tsx)
<div className="flex h-full flex-col">
  {/* Heading — flex-shrink-0 */}
  <div className="mb-6 flex-shrink-0">
    <h1 className="text-4xl font-normal mb-1">Interior Painting Cost Calculator</h1>
    <p className="text-lg text-text-secondary">Room-by-room estimates in under 2 minutes</p>
  </div>

  {/* Progress bar — flex-shrink-0 */}
  <div className="mb-6 flex-shrink-0">...</div>

  {/* Step content — flex-1 fills remaining space */}
  <div ref={scrollRef} className="relative flex-1 min-h-0 overflow-y-auto" style={{ perspective: "1200px" }}>
    <AnimatePresence mode="wait" custom={direction}>
      {/* step content */}
    </AnimatePresence>
  </div>
</div>
```

**Why this layout exists:** The outer `flex h-full flex-col` makes the wizard fill its parent container. The heading and progress bar use `flex-shrink-0` so they never compress. The content area uses `flex-1 min-h-0` to fill the remaining vertical space. `overflow-hidden` (ContactForm) or `overflow-y-auto` (Calculator) prevents step content from pushing the layout taller.

**Key difference:** ContactForm uses `overflow-hidden` on the content area (no scrolling within steps). CostCalculatorApp uses `overflow-y-auto` because step content may exceed viewport height (room lists, surface toggles).

---

## Step State Management

### ContactForm -- numeric step with simple forward/back

```tsx
const [step, setStep] = useState(1);
const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

const goForward = useCallback(() => {
  setDirection(1);
  setStep((s) => Math.min(s + 1, 3));
}, []);

const goBack = useCallback(() => {
  setDirection(-1);
  setStep((s) => Math.max(s - 1, 1));
}, []);
```

### CostCalculatorApp -- typed step with goToStep

```tsx
type Step = 1 | 2 | 3 | 4;
const TOTAL_STEPS = 4;

const [step, setStep] = useState<Step>(1);
const [direction, setDirection] = useState(1);

const goToStep = (nextStep: Step) => {
  setDirection(nextStep > step ? 1 : -1);
  setStep(nextStep);
  setError(null);
  scrollRef.current?.scrollTo(0, 0);
};
```

**Key difference:** CostCalculatorApp uses a `Step` type alias constraining to `1 | 2 | 3 | 4` and a single `goToStep` function that infers direction from comparison. ContactForm uses separate `goForward`/`goBack` wrapped in `useCallback`. Both set `direction` before `step` so AnimatePresence reads the correct direction on exit.

### Validation before advancing

ContactForm validates with react-hook-form's `trigger`:

```tsx
const handleStep2Continue = useCallback(async () => {
  const isValid = await trigger(["name", "phone", "email"]);
  if (isValid) {
    goForward();
  }
}, [trigger, goForward]);
```

CostCalculatorApp validates imperatively:

```tsx
const handleDimensionsContinue = () => {
  const trimmedName = currentRoom.name.trim();
  const isDefaultName = trimmedName.length === 0 || trimmedName === `Room ${currentRoom.id}`;
  if (isDefaultName) { setError("Please name your room before continuing."); return; }
  if (currentRoom.length <= 0 || currentRoom.width <= 0 || currentRoom.height <= 0) {
    setError("Please enter valid room dimensions.");
    return;
  }
  goToStep(2);
};
```

**Pattern:** Validation always runs *before* calling the navigation function. If validation fails, the step does not change and an error is displayed.

---

## Animation System

### SLIDE_OFFSET

Both files define the same constant:

```tsx
const SLIDE_OFFSET = 120;
```

This is the horizontal pixel distance for the enter/exit slide. 120px provides enough movement to feel directional without being jarring.

### Spring Transition Config

Both files use identical spring physics:

```tsx
const springTransition = { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.8 };
```

### Variants Object (Full Motion)

The variants use a custom function signature so `direction` (1 or -1) can be passed as the Framer Motion `custom` prop:

```tsx
const variants = {
  enter: (d: number) => ({
    x: d * SLIDE_OFFSET,
    opacity: 0,
    scale: 0.96,
    rotateY: d * 3,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (d: number) => ({
    x: d * -SLIDE_OFFSET,
    opacity: 0,
    scale: 0.96,
    rotateY: d * -3,
  }),
};
```

- `enter`: The incoming step starts offset by `direction * 120px`, invisible, slightly scaled down, with 3 degrees of Y rotation for a subtle 3D tilt.
- `center`: Resting state -- no offset, full opacity, normal scale, no rotation.
- `exit`: The outgoing step exits in the *opposite* direction (`d * -SLIDE_OFFSET`), mirroring the enter animation.

The `rotateY` is only 3 degrees -- perceptible as a slight card-flip effect but not distracting.

### Perspective Container

Both components wrap the AnimatePresence area in a container with CSS perspective:

```tsx
style={{ perspective: "1200px" }}
```

This enables the `rotateY` transform to render with 3D depth. Without it, `rotateY` would have no visible effect.

### AnimatePresence + motion.div

```tsx
<AnimatePresence mode="wait" custom={direction}>
  {step === 1 && (
    <motion.div
      key="step1"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={springTransition}
    >
      {/* step content */}
    </motion.div>
  )}
</AnimatePresence>
```

- `mode="wait"` ensures the exiting step fully animates out before the entering step begins.
- `custom={direction}` passes the direction value to the functional variants (`enter` and `exit`).
- Each `motion.div` needs a unique `key` so AnimatePresence detects the swap.

---

## Reduced Motion

Both files detect the user's motion preference and swap in static variants:

### ContactForm

```tsx
const shouldReduceMotion = useReducedMotion();

const variants = shouldReduceMotion
  ? {
      enter: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
      center: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
      exit: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
    }
  : {
      enter: (d: number) => ({ /* full motion */ }),
      center: { /* ... */ },
      exit: (d: number) => ({ /* full motion */ }),
    };
```

### CostCalculatorApp

```tsx
const prefersReducedMotion = useReducedMotion();

const variants = prefersReducedMotion
  ? {
      enter: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
      center: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
      exit: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
    }
  : {
      enter: (d: number) => ({ x: d * SLIDE_OFFSET, opacity: 0, scale: 0.96, rotateY: d * 3 }),
      center: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
      exit: (d: number) => ({ x: d * -SLIDE_OFFSET, opacity: 0, scale: 0.96, rotateY: d * -3 }),
    };
```

**Pattern:** The reduced motion variants set all properties to their resting values (opacity 1, x 0, scale 1, rotateY 0). Steps swap instantly with no visible animation. The ternary is applied at variant definition time, not at render time.

The reduced motion flag is also used for the progress bar:

```tsx
transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
```

---

## Progress Bar

Both files use the same progress bar structure:

```tsx
<div className="mb-6 flex-shrink-0">
  <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary mb-2">
    Step {step} of {TOTAL_STEPS}
  </p>
  <div className="h-0.5 w-full rounded-full bg-border-subtle">
    <motion.div
      className="h-full rounded-full bg-accent-gold"
      initial={false}
      animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    />
  </div>
</div>
```

- The track is `h-0.5` (2px) with `bg-border-subtle`.
- The fill is `bg-accent-gold` (brand gold).
- The width animates as a percentage: `(step / totalSteps) * 100`.
- `initial={false}` prevents animation on first render (no slide-in from 0% on mount).
- Brand easing: `[0.25, 0.46, 0.45, 0.94]` -- a custom cubic-bezier matched from whiteoakpainting.com.
- Step label uses uppercase tracking: `text-xs font-medium uppercase tracking-[0.15em] text-text-secondary`.

**ContactForm** hardcodes `3` as total steps. **CostCalculatorApp** uses a `TOTAL_STEPS = 4` constant.

---

## Navigation Button Layout

Both components (and all calculator step sub-components) use the same `flex-col-reverse` pattern:

### ContactForm (inline in each step)

```tsx
<div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between pt-2">
  <button
    type="button"
    onClick={goBack}
    className="min-h-[48px] text-base text-text-secondary hover:text-foreground transition-colors"
    aria-label="Go back to project type selection"
  >
    Back
  </button>
  <button
    type="button"
    onClick={handleStep2Continue}
    className={`${CTA_CLASS} md:w-auto`}
  >
    Continue
  </button>
</div>
```

### Calculator step components (e.g., StepSurfaces)

```tsx
<div className="flex flex-col-reverse gap-2 pt-1 md:gap-3 md:pt-2 md:flex-row md:items-center md:justify-between">
  <button
    type="button"
    onClick={onBack}
    className="min-h-[48px] text-base text-text-secondary transition-colors hover:text-foreground"
  >
    Back
  </button>
  <button
    type="button"
    onClick={onContinue}
    className="inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] md:w-auto"
  >
    Continue
  </button>
</div>
```

**Why `flex-col-reverse`:** In the DOM, the Back button comes first (logical reading order, accessibility). On mobile (`flex-col-reverse`), this places the primary CTA on top visually where the thumb can reach it, with the Back button below. On desktop (`md:flex-row`), they render left-to-right: Back on the left, CTA on the right.

### Back button spec

- No background, no border -- plain text link styling
- `min-h-[48px]` -- meets 48px touch target requirement
- `text-base text-text-secondary hover:text-foreground transition-colors`

### Forward/Submit button spec (CTA)

Full CTA class string (from ContactForm's `CTA_CLASS` constant):

```tsx
const CTA_CLASS =
  "w-full min-h-[48px] flex items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] disabled:opacity-50 disabled:pointer-events-none";
```

Calculator step components inline the same classes (with minor variations like `inline-flex` instead of `flex` and the addition of `hover:text-cta-hover-foreground`). The CTA always gets `md:w-auto` to prevent full-width on desktop.

---

## ScrollRef Pattern (Calculator Only)

CostCalculatorApp uses a ref on the content container to scroll back to the top on step change:

```tsx
const scrollRef = useRef<HTMLDivElement>(null);

// In the goToStep function:
const goToStep = (nextStep: Step) => {
  setDirection(nextStep > step ? 1 : -1);
  setStep(nextStep);
  setError(null);
  scrollRef.current?.scrollTo(0, 0);
};

// Also in resetCalculator:
const resetCalculator = () => {
  setStep(1);
  setDirection(-1);
  setRooms([createEmptyRoom(1)]);
  setCurrentRoomIndex(0);
  setMaterialTier("better");
  setError(null);
  scrollRef.current?.scrollTo(0, 0);
};

// Attached to the content container:
<div ref={scrollRef} className="relative flex-1 min-h-0 overflow-y-auto" style={{ perspective: "1200px" }}>
```

**Why this exists:** Because the calculator uses `overflow-y-auto` (steps can be taller than the viewport), users may be scrolled partway down when they advance. Without `scrollTo(0, 0)`, the new step would appear mid-scroll. ContactForm does not need this because it uses `overflow-hidden` (step content always fits the container).

---

## Step Component Pattern (Calculator)

CostCalculatorApp delegates each step's UI to a dedicated component. The orchestrator (CostCalculatorApp) owns all state and passes it down via props. Step components communicate back via callback props.

### Prop Interface Examples

**StepDimensions** -- receives state, mutation callbacks, and a navigation callback:

```tsx
interface StepDimensionsProps {
  rooms: RoomData[];
  currentRoomIndex: number;
  currentRoom: RoomData;
  error: string | null;
  updateCurrentRoom: (updates: Partial<RoomData>) => void;
  addRoom: () => void;
  removeRoom: (i: number) => void;
  setCurrentRoomIndex: (i: number) => void;
  onContinue: () => void;
}
```

**StepSurfaces** -- state + mutation callback + two navigation callbacks:

```tsx
interface StepSurfacesProps {
  currentRoom: RoomData;
  currentRoomMetrics: RoomMetrics;
  rooms: RoomData[];
  updateCurrentRoom: (updates: Partial<RoomData>) => void;
  onBack: () => void;
  onContinue: () => void;
}
```

**StepPaintQuality** -- minimal: current value, setter, navigation:

```tsx
interface StepPaintQualityProps {
  materialTier: MaterialTier;
  setMaterialTier: (tier: MaterialTier) => void;
  onBack: () => void;
  onContinue: () => void;
}
```

**StepEstimate** -- read-only data + reset callback:

```tsx
interface StepEstimateProps {
  estimate: EstimateResult;
  rooms: RoomData[];
  totalSqFt: number;
  surfaceCostEntries: Array<{ label: string; cost: number }>;
  onBack: () => void;
  onReset: () => void;
  prefersReducedMotion: boolean | null;
}
```

### Conventions

1. **Navigation callbacks are always `onBack` and `onContinue`** (or `onReset` for the final step). The step component calls them; the orchestrator decides what step to navigate to.
2. **State mutations use a single `updateCurrentRoom(updates: Partial<RoomData>)` pattern** -- partial updates merged by the orchestrator.
3. **Validation can live in either place.** StepDimensions delegates validation to the orchestrator (`onContinue` points to `handleDimensionsContinue` which validates then calls `goToStep`). StepSurfaces and StepPaintQuality call `onContinue` directly with no validation.
4. **Step components own their own local UI state** (e.g., which bottom sheet is open) but never own wizard-level state (current step, direction, form data).
5. **The `motion.div` wrapper lives in the orchestrator, not the step component.** Step components render plain `<div>` roots. The orchestrator wraps them in `<motion.div key="step-N" ...>`.

### ContactForm Contrast

ContactForm does not extract steps into separate components. All three steps are inline JSX within the same component, gated by `{step === N && (...)}`. This works because ContactForm's steps are simpler (no complex sub-state). For new wizards with more than trivial step UI, follow the calculator pattern of extracting step components.

---

## Summary: What to Copy for a New Step Wizard

1. **Outer container:** `flex h-full flex-col`
2. **Heading + progress bar:** `flex-shrink-0`
3. **Content area:** `flex-1 min-h-0 overflow-hidden` (or `overflow-y-auto` if steps are tall), `style={{ perspective: "1200px" }}`
4. **State:** `useState` for step (typed union or number), direction (1 | -1), and a scrollRef if using overflow-y-auto
5. **Constants:** `SLIDE_OFFSET = 120`, `springTransition = { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }`
6. **Variants:** Full motion with `enter`/`center`/`exit` using direction-aware `x`, `opacity`, `scale`, `rotateY`; reduced motion with all values at resting state
7. **AnimatePresence:** `mode="wait"` with `custom={direction}`
8. **Progress bar:** `motion.div` with `animate={{ width }}`, `initial={false}`, brand easing `[0.25, 0.46, 0.45, 0.94]`
9. **Navigation:** `flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between` with plain-text Back and CTA-styled Continue
10. **Step components:** Extract if step UI is non-trivial. Pass state down, receive callbacks for mutation and navigation.
