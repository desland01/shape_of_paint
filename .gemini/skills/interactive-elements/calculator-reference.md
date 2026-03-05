# Calculator Architecture Reference

The cost calculator is a 4-step wizard with calculator-specific patterns for room management, surface selection, material tiers, and estimate display. This reference covers everything beyond the base step wizard and mobile input patterns documented in `SKILL.md`.

---

## Modular Step Components

Each step lives in its own file under `src/components/tools/calculator-steps/`. The parent `CostCalculatorApp.tsx` owns all state and passes props down to each step.

### Step prop interfaces

```tsx
// StepDimensions
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

// StepSurfaces
interface StepSurfacesProps {
  currentRoom: RoomData;
  currentRoomMetrics: RoomMetrics;
  rooms: RoomData[];
  updateCurrentRoom: (updates: Partial<RoomData>) => void;
  onBack: () => void;
  onContinue: () => void;
}

// StepPaintQuality
interface StepPaintQualityProps {
  materialTier: MaterialTier;
  setMaterialTier: (tier: MaterialTier) => void;
  onBack: () => void;
  onContinue: () => void;
}

// StepEstimate
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

### Step responsibilities

| Step | Component | File | Responsibility |
|------|-----------|------|----------------|
| 1 | `StepDimensions` | `calculator-steps/StepDimensions.tsx` | Room name, length/width/height inputs, room tabs, add/remove room |
| 2 | `StepSurfaces` | `calculator-steps/StepSurfaces.tsx` | Surface type toggles (ceiling, baseboards, crown, wainscoting), door side count |
| 3 | `StepPaintQuality` | `calculator-steps/StepPaintQuality.tsx` | Material tier selection (Good/Better/Best), trim material info callout |
| 4 | `StepEstimate` | `calculator-steps/StepEstimate.tsx` | Total cost display, surface cost breakdown with animated bars, CTAs, disclaimer |

---

## Room Data Model

### RoomData type (from `src/lib/cost-calculator/types.ts`)

```typescript
export type MaterialTier = "good" | "better" | "best";

export interface RoomData {
  id: number;
  name: string;
  length: number;
  width: number;
  height: number;
  includeWalls: boolean;
  includeCeiling: boolean;
  includeBaseboards: boolean;
  doorSides: number;
  includeCrownMolding: boolean;
  includeWainscoting: boolean;
}
```

### Factory function (from `src/lib/cost-calculator/interiorCalculator.ts`)

```typescript
export function createEmptyRoom(id: number): RoomData {
  return {
    id,
    name: `Room ${id}`,
    length: DEFAULT_ROOM_DIMENSIONS.length,   // 12
    width: DEFAULT_ROOM_DIMENSIONS.width,     // 12
    height: DEFAULT_ROOM_DIMENSIONS.height,   // 8
    includeWalls: true,
    includeCeiling: false,
    includeBaseboards: false,
    doorSides: 0,
    includeCrownMolding: false,
    includeWainscoting: false,
  };
}
```

Key defaults: walls are always included on creation (`includeWalls: true`), all other surfaces start off, dimensions default to 12x12x8.

### Partial update pattern (from `CostCalculatorApp.tsx`)

```typescript
const updateCurrentRoom = (updates: Partial<RoomData>) => {
  setRooms((prev) =>
    prev.map((room, i) => (i === currentRoomIndex ? { ...room, ...updates } : room)),
  );
  if (error) setError(null);  // Clear error on any input change
};
```

This uses `Partial<RoomData>` so callers pass only the fields they want to change:

```tsx
updateCurrentRoom({ name: e.target.value })
updateCurrentRoom({ includeCeiling: !currentRoom.includeCeiling })
updateCurrentRoom({ doorSides: val })
updateCurrentRoom({ [field.key]: parseNum(e.target.value) })
```

---

## Multi-Room Management

### State shape

```typescript
const [rooms, setRooms] = useState<RoomData[]>([createEmptyRoom(1)]);
const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

// Derived
const currentRoom = rooms[currentRoomIndex] ?? rooms[0];
```

### Add room

Validates the current room has a custom name before allowing a new room. Generates a monotonically increasing ID based on the max existing ID.

```typescript
const addRoom = () => {
  const trimmedName = currentRoom.name.trim();
  const isDefaultName = trimmedName.length === 0 || trimmedName === `Room ${currentRoom.id}`;
  if (isDefaultName) { setError("Please name your room before adding another."); return; }
  const nextRoomId = rooms.reduce((max, r) => Math.max(max, r.id), 0) + 1;
  const nextRooms = [...rooms, createEmptyRoom(nextRoomId)];
  setRooms(nextRooms);
  setCurrentRoomIndex(nextRooms.length - 1);  // Auto-switch to new room
  setError(null);
};
```

### Remove room

Cannot remove the last room. After removal, clamps `currentRoomIndex` to stay in bounds.

```typescript
const removeRoom = (index: number) => {
  if (rooms.length <= 1) return;
  const nextRooms = rooms.filter((_, i) => i !== index);
  setRooms(nextRooms);
  setCurrentRoomIndex((prev) => Math.min(prev, nextRooms.length - 1));
  setError(null);
};
```

### Chip-based room tabs (from `StepDimensions.tsx`)

Only rendered when `rooms.length > 1`. Each chip has a select button and an X remove button.

```tsx
{rooms.length > 1 && (
  <div className="flex flex-wrap gap-2">
    {rooms.map((room, index) => {
      const selected = index === currentRoomIndex;
      return (
        <div
          key={room.id}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-2 py-1.5 text-sm transition-colors",
            selected
              ? "border-accent-gold bg-accent-gold/15 text-foreground"
              : "border-border-subtle bg-background text-text-secondary hover:border-accent-gold/60"
          )}
        >
          <button
            type="button"
            onClick={() => setCurrentRoomIndex(index)}
            className="min-h-[48px] px-2 text-left"
          >
            {room.name}
          </button>
          <button
            type="button"
            aria-label={`Remove ${room.name}`}
            onClick={() => removeRoom(index)}
            className="inline-flex h-7 w-7 min-h-[48px] items-center justify-center rounded-full bg-foreground/10 text-[0.65rem] transition-colors hover:bg-foreground hover:text-background"
          >
            <X className="h-2.5 w-2.5" />
          </button>
        </div>
      );
    })}
  </div>
)}
```

Key patterns:
- `rounded-full` pill shape for chips
- `border-accent-gold bg-accent-gold/15` for active chip
- `min-h-[48px]` on both sub-buttons for touch targets
- Remove button uses `bg-foreground/10` with hover inversion to `bg-foreground hover:text-background`
- `aria-label={`Remove ${room.name}`}` for accessibility

---

## Validation Pattern

### Error state management

```typescript
const [error, setError] = useState<string | null>(null);
```

Errors are cleared automatically in three places:
1. `updateCurrentRoom` -- any input change clears the error
2. `goToStep` -- navigating to a new step clears the error
3. `addRoom` / `removeRoom` -- room mutations clear the error

### Step 1 validation (before advancing)

```typescript
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

### Inline error display (from `StepDimensions.tsx`)

```tsx
{error && (
  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3" role="alert">
    <p className="text-sm font-medium text-red-700">{error}</p>
  </div>
)}
```

Exact error classes: `rounded-2xl border border-red-200 bg-red-50 px-4 py-3` with text in `text-sm font-medium text-red-700`. Uses `role="alert"` for screen reader announcement.

### Input border error state (room name)

```tsx
className={cn(
  "min-h-12 w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors",
  error ? "border-red-500 focus:border-red-500" : "border-border-subtle focus:border-accent-gold"
)}
```

---

## Calculation Architecture

### File structure

```
src/lib/cost-calculator/
  types.ts              # Data models and interfaces
  constants.ts          # Pricing, production rates, material info
  interiorCalculator.ts # Pure calculation functions
```

### Key type definitions (from `types.ts`)

```typescript
export interface RoomMetrics {
  perimeter: number;
  wallSqFt: number;
  ceilingSqFt: number;
  baseboardsFt: number;
  crownMoldingFt: number;
  wainscotingFt: number;
  wallLabor: number;
  ceilingLabor: number;
  baseboardsLabor: number;
  doorLabor: number;
  crownLabor: number;
  wainscotingLabor: number;
  laborHours: number;
  wallGallons: number;
  ceilingGallons: number;
  baseboardsGallons: number;
  doorGallons: number;
  crownGallons: number;
  wainscotingGallons: number;
  totalGallons: number;
}

export interface ProjectMetrics {
  laborHours: number;
  totalGallons: number;
  wallSqFt: number;
  ceilingSqFt: number;
  wallLabor: number;
  ceilingLabor: number;
  baseboardsLabor: number;
  doorLabor: number;
  crownLabor: number;
  wainscotingLabor: number;
  wallGallons: number;
  ceilingGallons: number;
  baseboardsGallons: number;
  doorGallons: number;
  crownGallons: number;
  wainscotingGallons: number;
}

export interface SurfaceCosts {
  walls: number;
  ceiling: number;
  baseboards: number;
  doors: number;
  crown: number;
  wainscoting: number;
}

export interface MaterialInfo {
  name: string;
  price: number;
  color: string;
  description: string;
  features: string[];
}

export interface EstimateResult {
  rooms: RoomData[];
  material: MaterialTier;
  totals: ProjectMetrics;
  laborCost: number;
  materialCost: number;
  totalCost: number;
  surfaceCosts: SurfaceCosts;
  wallCeilingGallons: number;
  trimGallons: number;
}
```

### Calculation pipeline

All functions are **pure** -- no side effects, no state mutation. The pipeline flows:

```
calculateRoomMetrics(room: RoomData) -> RoomMetrics
    |
    v
calculateProjectMetrics(rooms: RoomData[]) -> ProjectMetrics
    |  (reduces all rooms by summing their RoomMetrics)
    v
calculateSurfaceCosts(totals: ProjectMetrics, materialTier: MaterialTier) -> SurfaceCosts
    |
    v
calculateEstimate(rooms: RoomData[], materialTier: MaterialTier) -> EstimateResult
    (orchestrates the full pipeline, returns final result)
```

**`calculateRoomMetrics`** -- computes per-room areas, labor hours, and paint gallons:

```typescript
export function calculateRoomMetrics(room: RoomData): RoomMetrics {
  const perimeter = 2 * (room.length + room.width);
  const wallSqFt = room.includeWalls
    ? 2 * room.height * (room.length + room.width)
    : 0;
  const ceilingSqFt = room.includeCeiling ? room.length * room.width : 0;
  const baseboardsFt = room.includeBaseboards ? perimeter : 0;
  const crownMoldingFt = room.includeCrownMolding ? perimeter : 0;
  const wainscotingFt = room.includeWainscoting ? perimeter : 0;

  // Labor hours per surface
  const wallLabor = wallSqFt / PRODUCTION_RATES.walls;
  const ceilingLabor = ceilingSqFt / PRODUCTION_RATES.ceiling;
  const baseboardsLabor =
    (baseboardsFt / PRODUCTION_RATES.trim) * CALCULATION_CONSTANTS.TRIM_LABOR_MULTIPLIER;
  const doorLabor = room.doorSides * PRODUCTION_RATES.doorSide;
  const crownLabor =
    (crownMoldingFt / PRODUCTION_RATES.crownMolding) * CALCULATION_CONSTANTS.TRIM_LABOR_MULTIPLIER;
  const wainscotingLabor =
    (wainscotingFt / PRODUCTION_RATES.wainscoting) * CALCULATION_CONSTANTS.TRIM_LABOR_MULTIPLIER;
  const laborHours = wallLabor + ceilingLabor + baseboardsLabor + doorLabor + crownLabor + wainscotingLabor;

  // Paint gallons per surface (2 coats)
  const wallGallons = wallSqFt > 0
    ? (wallSqFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.walls : 0;
  const ceilingGallons = ceilingSqFt > 0
    ? (ceilingSqFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.ceiling : 0;
  const baseboardsGallons = baseboardsFt > 0
    ? (baseboardsFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.trim : 0;
  const doorGallons = room.doorSides > 0
    ? room.doorSides * GALLONS_PER_DOOR_SIDE : 0;
  const crownGallons = crownMoldingFt > 0
    ? (crownMoldingFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.crownMolding : 0;
  const wainscotingGallons = wainscotingFt > 0
    ? (wainscotingFt * CALCULATION_CONSTANTS.COATS) / PAINT_COVERAGE.wainscoting : 0;
  const totalGallons = wallGallons + ceilingGallons + baseboardsGallons + doorGallons + crownGallons + wainscotingGallons;

  return { perimeter, wallSqFt, ceilingSqFt, baseboardsFt, crownMoldingFt, wainscotingFt,
    wallLabor, ceilingLabor, baseboardsLabor, doorLabor, crownLabor, wainscotingLabor, laborHours,
    wallGallons, ceilingGallons, baseboardsGallons, doorGallons, crownGallons, wainscotingGallons, totalGallons };
}
```

**`calculateProjectMetrics`** -- reduces all rooms into aggregate totals:

```typescript
export function calculateProjectMetrics(rooms: RoomData[]): ProjectMetrics {
  return rooms.reduce(
    (acc, room) => {
      const metrics = calculateRoomMetrics(room);
      return {
        laborHours: acc.laborHours + metrics.laborHours,
        totalGallons: acc.totalGallons + metrics.totalGallons,
        wallSqFt: acc.wallSqFt + metrics.wallSqFt,
        ceilingSqFt: acc.ceilingSqFt + metrics.ceilingSqFt,
        wallLabor: acc.wallLabor + metrics.wallLabor,
        ceilingLabor: acc.ceilingLabor + metrics.ceilingLabor,
        baseboardsLabor: acc.baseboardsLabor + metrics.baseboardsLabor,
        doorLabor: acc.doorLabor + metrics.doorLabor,
        crownLabor: acc.crownLabor + metrics.crownLabor,
        wainscotingLabor: acc.wainscotingLabor + metrics.wainscotingLabor,
        wallGallons: acc.wallGallons + metrics.wallGallons,
        ceilingGallons: acc.ceilingGallons + metrics.ceilingGallons,
        baseboardsGallons: acc.baseboardsGallons + metrics.baseboardsGallons,
        doorGallons: acc.doorGallons + metrics.doorGallons,
        crownGallons: acc.crownGallons + metrics.crownGallons,
        wainscotingGallons: acc.wainscotingGallons + metrics.wainscotingGallons,
      };
    },
    { laborHours: 0, totalGallons: 0, wallSqFt: 0, ceilingSqFt: 0,
      wallLabor: 0, ceilingLabor: 0, baseboardsLabor: 0, doorLabor: 0,
      crownLabor: 0, wainscotingLabor: 0, wallGallons: 0, ceilingGallons: 0,
      baseboardsGallons: 0, doorGallons: 0, crownGallons: 0, wainscotingGallons: 0 }
  );
}
```

**`calculateSurfaceCosts`** -- breaks down cost per surface type:

```typescript
export function calculateSurfaceCosts(
  totals: ProjectMetrics,
  materialTier: MaterialTier
): SurfaceCosts {
  const materialPrice = MATERIALS[materialTier].price;
  const trimPrice = TRIM_MATERIAL.price;

  return {
    walls: Math.round(totals.wallLabor * LABOR_RATE + totals.wallGallons * materialPrice),
    ceiling: Math.round(totals.ceilingLabor * LABOR_RATE + totals.ceilingGallons * materialPrice),
    baseboards: Math.round(totals.baseboardsLabor * LABOR_RATE + totals.baseboardsGallons * trimPrice),
    doors: Math.round(totals.doorLabor * LABOR_RATE + totals.doorGallons * trimPrice),
    crown: Math.round(totals.crownLabor * LABOR_RATE + totals.crownGallons * trimPrice),
    wainscoting: Math.round(totals.wainscotingLabor * LABOR_RATE + totals.wainscotingGallons * trimPrice),
  };
}
```

Key insight: walls and ceilings use the selected material tier price, while trim surfaces (baseboards, doors, crown, wainscoting) always use `TRIM_MATERIAL.price`.

**`calculateEstimate`** -- top-level orchestrator:

```typescript
export function calculateEstimate(
  rooms: RoomData[],
  materialTier: MaterialTier
): EstimateResult {
  const totals = calculateProjectMetrics(rooms);
  const materialPrice = MATERIALS[materialTier].price;
  const trimPrice = TRIM_MATERIAL.price;

  const wallCeilingGallons = totals.wallGallons + totals.ceilingGallons;
  const trimGallons = totals.baseboardsGallons + totals.doorGallons
    + totals.crownGallons + totals.wainscotingGallons;

  const laborCost = Math.round(totals.laborHours * LABOR_RATE);
  const wallCeilingMaterialCost = wallCeilingGallons * materialPrice;
  const trimMaterialCost = trimGallons * trimPrice;
  const materialCost = Math.round(wallCeilingMaterialCost + trimMaterialCost);
  const totalCost = laborCost + materialCost;
  const surfaceCosts = calculateSurfaceCosts(totals, materialTier);

  return { rooms, material: materialTier, totals, laborCost, materialCost,
    totalCost, surfaceCosts, wallCeilingGallons, trimGallons };
}
```

### How CostCalculatorApp uses calculations

Both are memoized with `useMemo` and recompute only when their dependencies change:

```typescript
const currentRoomMetrics = useMemo(() => calculateRoomMetrics(currentRoom), [currentRoom]);
const estimate = useMemo(() => calculateEstimate(rooms, materialTier), [rooms, materialTier]);
```

Surface cost entries for the breakdown display are derived and filtered to non-zero:

```typescript
const surfaceCostEntries = [
  { label: "Walls", cost: estimate.surfaceCosts.walls },
  { label: "Ceiling", cost: estimate.surfaceCosts.ceiling },
  { label: "Baseboards", cost: estimate.surfaceCosts.baseboards },
  { label: "Doors", cost: estimate.surfaceCosts.doors },
  { label: "Crown Molding", cost: estimate.surfaceCosts.crown },
  { label: "Wainscoting", cost: estimate.surfaceCosts.wainscoting },
].filter((entry) => entry.cost > 0);
```

---

## Constants Pattern

All constants live in `src/lib/cost-calculator/constants.ts`, separated from calculation logic. Every constant object uses `as const` for type narrowing.

### Market calibration

```typescript
export const MARKET_CALIBRATION = {
  benchmarkDate: "2026-02-19",
  vancouverAverageWageCad: 29.14,
  sarasotaAverageWageUsd: 20.49,
} as const;
```

### Labor rate (derived)

```typescript
export const LABOR_RATE = MARKET_CALIBRATION.vancouverAverageWageCad * 3;
// = 87.42
```

Business rule: company billing rate = average painter wage * 3.

### Production rates (sq ft or linear ft per hour)

```typescript
export const PRODUCTION_RATES = {
  walls: 70,        // sq ft/hr
  ceiling: 75,      // sq ft/hr
  trim: 50,         // linear ft/hr
  doorSide: 0.75,   // hours per door side
  crownMolding: 40, // linear ft/hr
  wainscoting: 35,  // linear ft/hr
} as const;
```

### Paint coverage (sq ft or linear ft per gallon)

```typescript
export const PAINT_COVERAGE = {
  walls: 400,        // sq ft/gal
  ceiling: 400,      // sq ft/gal
  trim: 800,         // linear ft/gal
  crownMolding: 800, // linear ft/gal
  wainscoting: 300,  // linear ft/gal
} as const;

export const GALLONS_PER_DOOR_SIDE = 0.05;
```

### Material tiers

```typescript
export const MATERIALS: Record<MaterialTier, MaterialInfo> = {
  good: {
    name: "ben Interior",
    price: 75.99,
    color: "#8A9A8A",
    description: "Reliable Benjamin Moore coverage for everyday spaces",
    features: [
      "Paint + primer",
      "Scuff-resistant finish",
      "Zero VOC / low odour",
      "400-450 sq ft per 3.79L",
    ],
  },
  better: {
    name: "Regal Select Interior",
    price: 94.99,
    color: "#5E7E66",
    description: "Premium washable performance for higher-traffic rooms",
    features: [
      "Stain-release technology",
      "High durability + washability",
      "Excellent hide + levelling",
      "350-450 sq ft per 3.78L",
    ],
  },
  best: {
    name: "AURA Waterborne Interior",
    price: 112.99,
    color: "#2E5D3B",
    description: "Top-tier Benjamin Moore depth, coverage, and longevity",
    features: [
      "Colour Lock technology",
      "Extreme hide + rich colour",
      "Scuff + mildew resistant",
      "Self-priming performance",
    ],
  },
};
```

### Trim material (fixed, not tier-selectable)

```typescript
export const TRIM_MATERIAL = {
  name: "ADVANCE Waterborne Alkyd",
  price: 104.99,
} as const;
```

### Dimension defaults and limits

```typescript
export const DEFAULT_ROOM_DIMENSIONS = {
  length: 12,
  width: 12,
  height: 8,
} as const;

export const MAX_DIMENSIONS = {
  length: 100,
  width: 100,
  height: 20,
  doorSides: 40,
} as const;
```

### Calculation constants

```typescript
export const CALCULATION_CONSTANTS = {
  COATS: 2,
  TRIM_LABOR_MULTIPLIER: 2,
} as const;
```

---

## SurfaceToggle Component

Defined inline in `StepSurfaces.tsx`. A toggle button with animated checkmark, used for ceiling, baseboards, crown molding, and wainscoting.

### Full component

```tsx
function SurfaceToggle({
  active,
  label,
  detail,
  onClick,
}: {
  active: boolean;
  label: string;
  detail: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group min-h-[48px] rounded-2xl border p-2.5 md:p-3 text-left transition-all duration-300 active:scale-[0.97]",
        active
          ? "border-accent-gold bg-accent-gold/10 shadow-[0_10px_30px_-18px_rgb(var(--shadow-button-glow))]"
          : "border-border-subtle bg-background hover:border-accent-gold/60 hover:bg-warm-light"
      )}
      aria-pressed={active}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.08em] text-foreground">
            {label}
          </p>
          <p className="mt-1 text-sm text-text-muted">{detail}</p>
        </div>
        <motion.span
          animate={{ scale: active ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full border transition-colors",
            active
              ? "border-accent-gold bg-accent-gold text-background"
              : "border-border-subtle text-transparent group-hover:border-accent-gold/60"
          )}
        >
          <Check className="h-3.5 w-3.5" />
        </motion.span>
      </div>
    </button>
  );
}
```

### Key patterns

- **`aria-pressed={active}`** -- accessibility for toggle state
- **Animated checkmark** -- `motion.span` with `animate={{ scale: active ? 1 : 0 }}` and spring transition `{ type: "spring", stiffness: 500, damping: 30 }`
- **Active state glow** -- `shadow-[0_10px_30px_-18px_rgb(var(--shadow-button-glow))]`
- **Active colors** -- `border-accent-gold bg-accent-gold/10` on card, `border-accent-gold bg-accent-gold text-background` on checkmark
- **Press feedback** -- `active:scale-[0.97]`
- **Layout** -- 2-column grid: `<div className="grid grid-cols-2 gap-3">`

### Usage in StepSurfaces

```tsx
<SurfaceToggle
  active={currentRoom.includeCeiling}
  label="Ceiling"
  detail={`${Math.round(currentRoomMetrics.ceilingSqFt)} sq ft`}
  onClick={() => updateCurrentRoom({ includeCeiling: !currentRoom.includeCeiling })}
/>
```

The `detail` prop shows computed measurements from `currentRoomMetrics` (e.g., sq ft for ceiling, linear ft for baseboards/crown/wainscoting).

---

## Material Tier Selector

From `StepPaintQuality.tsx`. Iterates over `MATERIALS` and renders a selectable card per tier.

### Tier card markup

```tsx
{(Object.entries(MATERIALS) as Array<[MaterialTier, (typeof MATERIALS)[MaterialTier]]>).map(
  ([tier, info]) => {
    const selected = materialTier === tier;
    return (
      <button
        key={tier}
        type="button"
        onClick={() => setMaterialTier(tier)}
        className={cn(
          "w-full rounded-2xl border border-l-4 p-3 md:p-4 text-left transition-all duration-300 active:scale-[0.98]",
          selected
            ? "border-accent-gold bg-accent-gold/10 ring-2 ring-accent-gold/50 shadow-lg"
            : "border-border-subtle bg-background hover:border-accent-gold/60 hover:bg-warm-light"
        )}
        style={{ borderLeftColor: info.color }}
        aria-pressed={selected}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-foreground">{info.name}</p>
            {selected && (
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-gold text-background">
                <Check className="h-3 w-3" />
              </span>
            )}
          </div>
          <p className="font-mono text-lg text-foreground">
            {formatCurrency(info.price)}<span className="text-xs text-text-muted">/gal</span>
          </p>
        </div>
        <div className="mt-1.5 md:mt-2 flex flex-wrap gap-1.5">
          {info.features.map((feature) => (
            <span key={feature} className="rounded-full bg-warm px-2 py-px md:px-2.5 md:py-0.5 text-xs text-text-secondary">
              {feature}
            </span>
          ))}
        </div>
      </button>
    );
  }
)}
```

### Key patterns

- **Left border color coding** via inline `style={{ borderLeftColor: info.color }}`:
  - Good (`ben`): `#8A9A8A` (muted sage)
  - Better (`Regal Select`): `#5E7E66` (medium green)
  - Best (`AURA`): `#2E5D3B` (deep forest green)
- **`border-l-4`** -- thicker left border that takes the inline color
- **Feature chips** -- `rounded-full bg-warm px-2 py-px md:px-2.5 md:py-0.5 text-xs text-text-secondary`
- **Selected state** -- `ring-2 ring-accent-gold/50 shadow-lg` plus inline checkmark badge
- **Radio-like behavior** -- `aria-pressed={selected}`, only one can be active
- **Price display** -- `font-mono text-lg` for the dollar amount, with `text-xs text-text-muted` for "/gal"

### Trim material info callout

Below the tier cards:

```tsx
<div className="rounded-2xl border border-border-subtle bg-warm-light p-3 md:p-4 text-sm text-text-secondary">
  <Info className="mr-1.5 -mt-0.5 inline-block h-4 w-4 text-accent-gold" />
  Trim, doors, crown, and wainscoting are priced with{" "}
  <span className="font-semibold text-foreground">{TRIM_MATERIAL.name}</span>{" "}
  at {formatCurrency(TRIM_MATERIAL.price)}/gal.
</div>
```

---

## StepEstimate Display

### Celebration checkmark animation

Spring-animated scale from 0 to 1 on mount:

```tsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
  className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold text-background shadow-[0_10px_28px_-16px_rgb(var(--shadow-button-glow))]"
>
  <Check className="h-7 w-7" />
</motion.div>
```

### Dark gradient total card

```tsx
<div className="rounded-3xl bg-gradient-to-br from-foreground via-foreground to-text-secondary p-6 text-center text-background shadow-[0_0_40px_-10px_rgba(210,149,111,0.3)]">
  <p className="text-xs uppercase tracking-[0.18em] text-background/75">
    Labor + Materials
  </p>
  <p className="mt-2 font-mono text-6xl">{formatCurrency(estimate.totalCost)}</p>
  <div className="mt-3 flex items-center justify-center gap-6 text-sm text-background/75">
    <span>Labor: {formatCurrency(estimate.laborCost)}</span>
    <span className="h-3 w-px bg-background/30" />
    <span>Materials: {formatCurrency(estimate.materialCost)}</span>
  </div>
</div>
```

Key patterns:
- `rounded-3xl` (larger radius than other cards)
- `bg-gradient-to-br from-foreground via-foreground to-text-secondary` -- dark gradient
- `shadow-[0_0_40px_-10px_rgba(210,149,111,0.3)]` -- warm gold ambient glow
- `font-mono text-6xl` for the total dollar amount
- Labor/Materials split below with a `h-3 w-px bg-background/30` divider

### Surface cost breakdown with animated progress bars

```tsx
<div className="rounded-2xl border border-border-subtle bg-warm-light p-5">
  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
    Cost by Surface
  </h3>
  <div className="mt-3">
    {surfaceCostEntries.map((entry, index) => {
      const proportion = estimate.totalCost > 0 ? entry.cost / estimate.totalCost : 0;
      return (
        <motion.div
          key={entry.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
          className="border-b border-border-subtle py-3 last:border-b-0"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">{entry.label}</span>
            <span className="font-semibold text-foreground">{formatCurrency(entry.cost)}</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border-subtle">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.round(proportion * 100)}%` }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full rounded-full bg-accent-gold"
            />
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
```

Key patterns:
- Each row slides in: `initial={{ opacity: 0, x: -10 }}` with staggered delay `0.15 + index * 0.05`
- Progress bar animates width from 0: `initial={{ width: 0 }}` to proportional width
- Bar uses the standard easing: `ease: [0.25, 0.46, 0.45, 0.94]`
- Progress bar: `h-1.5 rounded-full bg-accent-gold` inside `h-1.5 rounded-full bg-border-subtle`

### CTA row

```tsx
<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
  <Link
    href="/contact#contact-form"
    className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-6 py-3 text-base font-semibold uppercase tracking-[0.15em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
  >
    Request Your Free Estimate
  </Link>
  <a
    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[9px] border border-border-subtle bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-gold/60 hover:bg-warm"
  >
    <Phone className="h-4 w-4" />
    {siteConfig.phone}
  </a>
</div>
```

Two actions: primary CTA linking to contact form, secondary phone link with `Phone` icon.

### Disclaimer

```tsx
<p className="text-xs leading-relaxed text-text-muted">
  This estimate is a planning figure based on dimensions,
  selected surfaces, and assumed production rates. Final job
  pricing may vary after on-site review and prep assessment.
</p>
```

---

## Reset Calculator

From `CostCalculatorApp.tsx`. Resets all state to initial values.

```typescript
const resetCalculator = () => {
  setStep(1);
  setDirection(-1);
  setRooms([createEmptyRoom(1)]);
  setCurrentRoomIndex(0);
  setMaterialTier("better");
  setError(null);
  scrollRef.current?.scrollTo(0, 0);
};
```

Triggered by the "Start Over" button in StepEstimate:

```tsx
<button
  type="button"
  onClick={onReset}
  className="min-h-[48px] text-base text-text-secondary hover:text-foreground transition-colors"
>
  Start Over
</button>
```

Key details:
- Direction is set to `-1` so the slide animation goes backward
- Material tier resets to `"better"` (the default middle tier)
- Scroll position resets to top via `scrollRef`
- Creates a fresh room with `createEmptyRoom(1)` -- ID starts at 1 again

---

## Dimension Input Pattern

From `StepDimensions.tsx`. Uses a config-driven approach with `DIM_FIELDS`:

```typescript
const DIM_FIELDS = [
  { key: "length" as const, label: "Length", max: MAX_DIMENSIONS.length },
  { key: "width" as const, label: "Width", max: MAX_DIMENSIONS.width },
  { key: "height" as const, label: "Height", max: MAX_DIMENSIONS.height },
] as const;
```

Rendered as a 3-column grid (`grid grid-cols-3 gap-3`) inside a `rounded-2xl border border-border-subtle bg-warm-light p-4` card. Each field has a desktop `<input>` (hidden on mobile) and a mobile tappable `<button>` that opens a `NumberPadSheet`.

### Number parsing utility

```typescript
const parseNum = (v: string) => { const n = Number(v); return Number.isFinite(n) ? n : 0; };
```

### Sheet management

Uses a discriminated union for bottom sheet routing:

```typescript
type SheetId = "room-name" | "length" | "width" | "height";
const [activeSheet, setActiveSheet] = useState<SheetId | null>(null);
```

Only one sheet can be open at a time. Each sheet closes by setting `activeSheet` back to `null`.

---

## Door Sides Input

From `StepSurfaces.tsx`. Shows a count of door sides (not doors) with helper text converting to door count.

Desktop: standard number input. Mobile: tappable display opening a `NumberPadSheet` with `allowDecimal={false}`.

```tsx
<NumberPadSheet
  open={doorPadOpen}
  onOpenChange={setDoorPadOpen}
  value={currentRoom.doorSides}
  onChange={(val) => updateCurrentRoom({ doorSides: val })}
  label="Door Sides"
  suffix="sides"
  allowDecimal={false}
  maxValue={MAX_DIMENSIONS.doorSides}
/>
```

Helper text logic:
```tsx
{currentRoom.doorSides > 0
  ? `${Math.ceil(currentRoom.doorSides / 2)} door${Math.ceil(currentRoom.doorSides / 2) > 1 ? "s" : ""} (two sides each)`
  : "Enter total sides, not number of doors."}
```
