import { Check, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { EstimateResult, RoomData } from "@/lib/cost-calculator/types";

interface StepEstimateProps {
  estimate: EstimateResult;
  rooms: RoomData[];
  totalSqFt: number;
  surfaceCostEntries: Array<{ label: string; cost: number }>;
  onBack: () => void;
  onReset: () => void;
  prefersReducedMotion: boolean | null;
}

const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString()}`;
};

export const StepEstimate = ({
  estimate,
  rooms,
  totalSqFt,
  surfaceCostEntries,
  onReset,
}: StepEstimateProps) => {
  return (
    <div className="space-y-5">
      {/* Celebration checkmark */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
          className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold text-background shadow-[0_10px_28px_-16px_rgb(var(--shadow-button-glow))]"
        >
          <Check className="h-7 w-7" />
        </motion.div>
        <h2 className="mt-3 text-3xl font-normal text-foreground">
          Your estimated project cost
        </h2>
        <p className="mt-1 text-base text-text-secondary">
          {rooms.length} room{rooms.length > 1 ? "s" : ""} &bull;{" "}
          {Math.round(totalSqFt)} sq ft
        </p>
      </div>

      {/* Total cost dark card */}
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

      {/* CTA row */}
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

      {/* Surface cost breakdown */}
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

      {/* Disclaimer */}
      <p className="text-xs leading-relaxed text-text-muted">
        This estimate is a planning figure based on dimensions,
        selected surfaces, and assumed production rates. Final job
        pricing may vary after on-site review and prep assessment.
      </p>

      {/* Start Over */}
      <div className="text-center">
        <button
          type="button"
          onClick={onReset}
          className="min-h-[48px] text-base text-text-secondary hover:text-foreground transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};
