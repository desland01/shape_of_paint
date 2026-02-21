import type { MaterialTier } from "@/lib/cost-calculator/types";
import { MATERIALS, TRIM_MATERIAL } from "@/lib/cost-calculator/constants";
import { cn } from "@/lib/utils";
import { Check, Info } from "lucide-react";

interface StepPaintQualityProps {
  materialTier: MaterialTier;
  setMaterialTier: (tier: MaterialTier) => void;
  onBack: () => void;
  onContinue: () => void;
}

const formatCurrency = (value: number): string =>
  `$${value.toLocaleString()}`;

export const StepPaintQuality = ({
  materialTier,
  setMaterialTier,
  onBack,
  onContinue,
}: StepPaintQualityProps) => (
  <div className="space-y-3 md:space-y-4">
    <div className="space-y-2 md:space-y-3">
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
    </div>

    <div className="rounded-2xl border border-border-subtle bg-warm-light p-3 md:p-4 text-sm text-text-secondary">
      <Info className="mr-1.5 -mt-0.5 inline-block h-4 w-4 text-accent-gold" />
      Trim, doors, crown, and wainscoting are priced with{" "}
      <span className="font-semibold text-foreground">{TRIM_MATERIAL.name}</span>{" "}
      at {formatCurrency(TRIM_MATERIAL.price)}/gal.
    </div>

    <div className="flex flex-col-reverse gap-2 pt-1 md:gap-3 md:pt-2 md:flex-row md:items-center md:justify-between">
      <button
        type="button"
        onClick={onBack}
        className="min-h-[48px] text-base text-text-secondary hover:text-foreground transition-colors"
      >
        Back
      </button>
      <button
        type="button"
        onClick={onContinue}
        className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
      >
        View Estimate
      </button>
    </div>
  </div>
);
