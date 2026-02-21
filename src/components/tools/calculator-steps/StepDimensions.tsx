import type { RoomData } from "@/lib/cost-calculator/types";
import { MAX_DIMENSIONS } from "@/lib/cost-calculator/constants";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const parseNum = (v: string) => { const n = Number(v); return Number.isFinite(n) ? n : 0; };

interface StepDimensionsProps {
  rooms: RoomData[]; currentRoomIndex: number; currentRoom: RoomData; error: string | null;
  updateCurrentRoom: (updates: Partial<RoomData>) => void;
  addRoom: () => void; removeRoom: (i: number) => void;
  setCurrentRoomIndex: (i: number) => void; onContinue: () => void;
}

const DIM_FIELDS = [
  { key: "length" as const, label: "Length", max: MAX_DIMENSIONS.length },
  { key: "width" as const, label: "Width", max: MAX_DIMENSIONS.width },
  { key: "height" as const, label: "Height", max: MAX_DIMENSIONS.height },
] as const;

export const StepDimensions = ({
  rooms, currentRoomIndex, currentRoom, error,
  updateCurrentRoom, addRoom, removeRoom, setCurrentRoomIndex, onContinue,
}: StepDimensionsProps) => {

  return (
    <div className="space-y-5">
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

      <div>
        <label htmlFor="room-name" className="sr-only">Room name</label>
        <input
          id="room-name"
          type="text"
          placeholder="Living Room, Bedroom, Office..."
          value={currentRoom.name}
          onChange={(e) => updateCurrentRoom({ name: e.target.value })}
          className={cn(
            "min-h-12 w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors",
            error ? "border-red-500 focus:border-red-500" : "border-border-subtle focus:border-accent-gold"
          )}
        />
      </div>

      <div className="rounded-2xl border border-border-subtle bg-warm-light p-4">
        <p className="text-base font-semibold uppercase tracking-[0.09em] text-foreground">Dimensions</p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {DIM_FIELDS.map((field) => (
            <div key={field.key}>
              <label htmlFor={`dim-${field.key}`} className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-secondary">
                {field.label}
              </label>
              <div className="relative">
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
            </div>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3" role="alert">
          <p className="text-sm font-medium text-red-700">{error}</p>
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 pt-2 md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={addRoom}
          className="min-h-[48px] text-base text-text-secondary transition-colors hover:text-foreground"
        >
          + Add Another Room
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] md:w-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
