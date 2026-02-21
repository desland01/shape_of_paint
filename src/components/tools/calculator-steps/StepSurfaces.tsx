import { useState } from "react";
import { Check, Pencil } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MAX_DIMENSIONS } from "@/lib/cost-calculator/constants";
import type { RoomData, RoomMetrics } from "@/lib/cost-calculator/types";
import { NumberPadSheet } from "@/components/ui/number-pad-sheet";

interface StepSurfacesProps {
  currentRoom: RoomData;
  currentRoomMetrics: RoomMetrics;
  rooms: RoomData[];
  updateCurrentRoom: (updates: Partial<RoomData>) => void;
  onBack: () => void;
  onContinue: () => void;
}

function parseNumberInput(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

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

export function StepSurfaces({
  currentRoom,
  currentRoomMetrics,
  rooms,
  updateCurrentRoom,
  onBack,
  onContinue,
}: StepSurfacesProps) {
  const [doorPadOpen, setDoorPadOpen] = useState(false);

  return (
    <div className="space-y-3 md:space-y-5">
      <p className="text-base text-text-secondary">
        Walls are included. Add any additional surfaces below.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <SurfaceToggle
          active={currentRoom.includeCeiling}
          label="Ceiling"
          detail={`${Math.round(currentRoomMetrics.ceilingSqFt)} sq ft`}
          onClick={() =>
            updateCurrentRoom({ includeCeiling: !currentRoom.includeCeiling })
          }
        />
        <SurfaceToggle
          active={currentRoom.includeBaseboards}
          label="Baseboards"
          detail={`${Math.round(currentRoomMetrics.perimeter)} linear ft`}
          onClick={() =>
            updateCurrentRoom({
              includeBaseboards: !currentRoom.includeBaseboards,
            })
          }
        />
        <SurfaceToggle
          active={currentRoom.includeCrownMolding}
          label="Crown Molding"
          detail={`${Math.round(currentRoomMetrics.perimeter)} linear ft`}
          onClick={() =>
            updateCurrentRoom({
              includeCrownMolding: !currentRoom.includeCrownMolding,
            })
          }
        />
        <SurfaceToggle
          active={currentRoom.includeWainscoting}
          label="Wainscoting"
          detail={`${Math.round(currentRoomMetrics.perimeter)} linear ft`}
          onClick={() =>
            updateCurrentRoom({
              includeWainscoting: !currentRoom.includeWainscoting,
            })
          }
        />
      </div>

      <div className="rounded-2xl border border-border-subtle bg-warm-light p-3 md:p-4">
        <label
          htmlFor="door-sides"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted md:mb-0"
        >
          Door sides
        </label>

        {/* Desktop: standard number input */}
        <div className="mt-2 hidden items-center gap-3 md:flex">
          <input
            id="door-sides"
            type="number"
            min={0}
            max={MAX_DIMENSIONS.doorSides}
            value={currentRoom.doorSides}
            onChange={(event) =>
              updateCurrentRoom({
                doorSides: parseNumberInput(event.target.value),
              })
            }
            className="min-h-12 w-20 rounded-xl border border-border-subtle bg-background px-3 py-2 text-center text-lg font-semibold text-foreground outline-none transition-colors focus:border-accent-gold"
          />
          <p className="text-base text-text-secondary">
            {currentRoom.doorSides > 0
              ? `${Math.ceil(currentRoom.doorSides / 2)} door${Math.ceil(currentRoom.doorSides / 2) > 1 ? "s" : ""} (two sides each)`
              : "Enter total sides, not number of doors."}
          </p>
        </div>

        {/* Mobile: tappable display that opens NumberPadSheet */}
        <button
          type="button"
          onClick={() => setDoorPadOpen(true)}
          className="mt-2 flex w-full items-center gap-3 md:hidden"
          aria-label={`Door sides: ${currentRoom.doorSides}. Tap to edit.`}
        >
          <span className="flex min-h-12 w-20 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-background text-lg font-semibold text-foreground">
            {currentRoom.doorSides}
          </span>
          <span className="flex-1 text-left text-base text-text-secondary">
            {currentRoom.doorSides > 0
              ? `${Math.ceil(currentRoom.doorSides / 2)} door${Math.ceil(currentRoom.doorSides / 2) > 1 ? "s" : ""} (two sides each)`
              : "Enter total sides, not number of doors."}
          </span>
          <Pencil className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
        </button>
      </div>

      <p className="text-center text-sm text-text-muted">
        {rooms.length} room{rooms.length > 1 ? "s" : ""} configured
      </p>

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
    </div>
  );
}
