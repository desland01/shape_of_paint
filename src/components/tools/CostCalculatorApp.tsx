"use client";

import React, { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Plus, X, Ruler, Paintbrush, FileText, Info, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import {
  MATERIALS,
  MAX_DIMENSIONS,
  TRIM_MATERIAL,
} from "@/lib/cost-calculator/constants";
import {
  calculateEstimate,
  calculateRoomMetrics,
  createEmptyRoom,
} from "@/lib/cost-calculator/interiorCalculator";
import type { MaterialTier, RoomData } from "@/lib/cost-calculator/types";

type Step = 1 | 2 | 3;

const STEP_LABELS: ReadonlyArray<{ id: Step; label: string }> = [
  { id: 1, label: "Measure" },
  { id: 2, label: "Select" },
  { id: 3, label: "Estimate" },
];

const STEP_CONTEXT: Record<Step, { eyebrow: string; heading: string; description: string; image: string }> = {
  1: {
    eyebrow: "Step 1 — Measure",
    heading: "Tell us about your space",
    description: "Enter room dimensions and select which surfaces need painting. Add as many rooms as your project requires.",
    image: "/images/interior-portfolio-3.webp",
  },
  2: {
    eyebrow: "Step 2 — Select",
    heading: "Choose your paint quality",
    description: "Each tier uses Benjamin Moore paint with different performance levels. Higher tiers offer better coverage, durability, and finish.",
    image: "/images/interior-portfolio-5.webp",
  },
  3: {
    eyebrow: "Step 3 — Estimate",
    heading: "Your project estimate is ready",
    description: "Review your cost breakdown below. This estimate uses professional production rates and current material pricing.",
    image: "/images/interior-portfolio-1.webp",
  },
};

const STEP_ICONS: Record<Step, React.ComponentType<{ className?: string }>> = {
  1: Ruler,
  2: Paintbrush,
  3: FileText,
};

function formatCurrency(value: number): string {
  return `$${value.toLocaleString()}`;
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
        "group min-h-[56px] rounded-2xl border p-4 text-left transition-all duration-300 active:scale-[0.97]",
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

export function CostCalculatorApp() {
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [rooms, setRooms] = useState<RoomData[]>([createEmptyRoom(1)]);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [materialTier, setMaterialTier] = useState<MaterialTier>("better");

  const currentRoom = rooms[currentRoomIndex] ?? rooms[0];

  const currentRoomMetrics = useMemo(
    () => calculateRoomMetrics(currentRoom),
    [currentRoom]
  );

  const estimate = useMemo(
    () => calculateEstimate(rooms, materialTier),
    [rooms, materialTier]
  );

  const totalSqFt = estimate.totals.wallSqFt + estimate.totals.ceilingSqFt;

  const stepAnimation = {
    initial: (dir: number) => ({ opacity: 0, x: prefersReducedMotion ? 0 : dir * 28, y: prefersReducedMotion ? 0 : 8 }),
    animate: { opacity: 1, x: 0, y: 0 },
    exit: (dir: number) => ({ opacity: 0, x: prefersReducedMotion ? 0 : dir * -28, y: prefersReducedMotion ? 0 : -4 }),
  };

  const goToStep = (nextStep: Step) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
    setError(null);
  };

  const updateCurrentRoom = (updates: Partial<RoomData>) => {
    setRooms((previous) =>
      previous.map((room, index) =>
        index === currentRoomIndex ? { ...room, ...updates } : room
      )
    );
    if (error) setError(null);
  };

  const addRoom = () => {
    const trimmedName = currentRoom.name.trim();
    const isDefaultName =
      trimmedName.length === 0 || trimmedName === `Room ${currentRoom.id}`;
    if (isDefaultName) {
      setError("Please name your room before adding another.");
      return;
    }

    const nextRoomId = rooms.reduce((maxId, room) => Math.max(maxId, room.id), 0) + 1;
    const nextRooms = [...rooms, createEmptyRoom(nextRoomId)];
    setRooms(nextRooms);
    setCurrentRoomIndex(nextRooms.length - 1);
    setError(null);
  };

  const removeRoom = (index: number) => {
    if (rooms.length <= 1) return;
    const nextRooms = rooms.filter((_, roomIndex) => roomIndex !== index);
    setRooms(nextRooms);
    setCurrentRoomIndex((previous) => Math.min(previous, nextRooms.length - 1));
    setError(null);
  };

  const handleRoomSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = currentRoom.name.trim();
    const isDefaultName =
      trimmedName.length === 0 || trimmedName === `Room ${currentRoom.id}`;
    if (isDefaultName) {
      setError("Please name your room before calculating.");
      return;
    }

    if (currentRoom.length <= 0 || currentRoom.width <= 0 || currentRoom.height <= 0) {
      setError("Please enter valid room dimensions.");
      return;
    }

    goToStep(2);
  };

  const resetCalculator = () => {
    setStep(1);
    setDirection(-1);
    setRooms([createEmptyRoom(1)]);
    setCurrentRoomIndex(0);
    setMaterialTier("better");
    setError(null);
  };

  const surfaceCostEntries = [
    { label: "Walls", cost: estimate.surfaceCosts.walls },
    { label: "Ceiling", cost: estimate.surfaceCosts.ceiling },
    { label: "Baseboards", cost: estimate.surfaceCosts.baseboards },
    { label: "Doors", cost: estimate.surfaceCosts.doors },
    { label: "Crown Molding", cost: estimate.surfaceCosts.crown },
    { label: "Wainscoting", cost: estimate.surfaceCosts.wainscoting },
  ].filter((entry) => entry.cost > 0);

  return (
    <SectionWrapper className="relative overflow-hidden py-14 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-24 h-56 w-56 rounded-full bg-accent-gold/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-secondary/30 blur-3xl" />
        <div className="absolute bottom-4 right-20 h-44 w-44 rounded-full bg-accent-sage/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] gap-8 px-4 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Sidebar — order-2 on mobile so form appears first */}
        <aside className="order-2 space-y-8 lg:order-1 lg:sticky lg:top-28 lg:self-start">
          {/* Dynamic text content — desktop only */}
          <div className="hidden space-y-4 lg:block">
            <Eyebrow>{STEP_CONTEXT[step].eyebrow}</Eyebrow>
            <h1 className="max-w-[18ch] text-5xl font-normal leading-[1.04] md:text-6xl">
              {STEP_CONTEXT[step].heading}
            </h1>
            <p className="max-w-[52ch] text-lg leading-relaxed text-text-secondary">
              {STEP_CONTEXT[step].description}
            </p>
          </div>

          {/* Step image — desktop only */}
          <div className="hidden overflow-hidden rounded-2xl lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={STEP_CONTEXT[step].image}
                  alt="Interior painting project"
                  width={600}
                  height={450}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {/* Live Snapshot card */}
            <div className="rounded-3xl border border-border-subtle border-l-4 border-l-accent-gold bg-background/85 p-5 shadow-[0_12px_38px_-26px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Live Snapshot
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={estimate.totalCost}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 font-mono text-4xl text-foreground"
                >
                  {formatCurrency(estimate.totalCost)}
                </motion.p>
              </AnimatePresence>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-warm p-3">
                  <p className="text-xs uppercase tracking-[0.08em] text-text-muted">
                    Rooms
                  </p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    {rooms.length}
                  </p>
                </div>
                <div className="rounded-xl bg-warm p-3">
                  <p className="text-xs uppercase tracking-[0.08em] text-text-muted">
                    Sq Ft
                  </p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    {Math.round(totalSqFt)}
                  </p>
                </div>
              </div>
            </div>

            {/* Assumptions — collapsible details */}
            <details className="rounded-3xl border border-border-subtle bg-warm p-5" open>
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.18em] text-text-muted select-none">
                Assumptions
              </summary>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-secondary">
                <li>2 coats on all selected surfaces</li>
                <li>Production-rate model used for labor calculations</li>
                <li>Benjamin Moore tier pricing</li>
              </ul>
            </details>
          </div>
        </aside>

        {/* Wizard card — order-1 on mobile so it appears first */}
        <section className="relative order-1 overflow-hidden rounded-[2rem] border border-border-subtle bg-background/95 shadow-[0_30px_80px_-42px_rgba(0,0,0,0.45)] backdrop-blur-sm lg:order-2">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent-gold via-brand-secondary to-accent-sage" />

          {/* Circle step progress indicator */}
          <div className="border-b border-border-subtle/80 bg-warm-light px-4 py-6 md:px-8">
            <div className="flex items-center justify-between">
              {STEP_LABELS.map((entry, index) => {
                const Icon = STEP_ICONS[entry.id];
                const isCompleted = step > entry.id;
                const isCurrent = step === entry.id;
                const isUpcoming = step < entry.id;
                return (
                  <React.Fragment key={entry.id}>
                    {index > 0 && (
                      <div className={cn(
                        "mx-2 h-0.5 flex-1 rounded-full transition-colors duration-300",
                        isCompleted ? "bg-accent-gold" : "bg-border-subtle"
                      )} />
                    )}
                    <div className="flex flex-col items-center gap-2">
                      <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                        isCompleted && "bg-accent-gold text-background",
                        isCurrent && "bg-accent-gold text-background shadow-[0_0_20px_-4px_rgba(210,149,111,0.5)]",
                        isUpcoming && "border-2 border-border-subtle text-text-muted"
                      )}>
                        {isCompleted ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                      </div>
                      <span className={cn(
                        "text-[0.7rem] font-semibold uppercase tracking-[0.12em]",
                        isCurrent || isCompleted ? "text-foreground" : "text-text-muted"
                      )}>
                        {entry.label}
                      </span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Step heading — mobile only */}
          <div className="space-y-2 px-4 pt-6 md:px-8 lg:hidden">
            <Eyebrow>{STEP_CONTEXT[step].eyebrow}</Eyebrow>
            <h1 className="max-w-[18ch] text-4xl font-normal leading-[1.08] md:text-5xl">
              {STEP_CONTEXT[step].heading}
            </h1>
          </div>

          <div className="px-4 py-6 md:px-8 md:py-8">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              {/* ── Step 1: Measure ── */}
              {step === 1 && (
                <motion.form
                  key="step-1"
                  custom={direction}
                  variants={stepAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
                  className="space-y-6"
                  onSubmit={handleRoomSubmit}
                >
                  {/* Room tabs */}
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

                  {/* Room name */}
                  <div>
                    <h2 className="text-3xl font-normal leading-tight text-foreground">
                      Name your room
                    </h2>
                    <p className="mt-1 text-base text-text-secondary">
                      Keep each room labeled so your estimate stays clear.
                    </p>
                    <label htmlFor="room-name" className="sr-only">
                      Room name
                    </label>
                    <input
                      id="room-name"
                      type="text"
                      value={currentRoom.name}
                      onChange={(event) =>
                        updateCurrentRoom({ name: event.target.value })
                      }
                      placeholder="Living Room, Bedroom, Office..."
                      className={cn("mt-4 min-h-12 w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors", error ? "border-red-500 focus:border-red-500" : "border-border-subtle focus:border-accent-gold")}
                    />
                  </div>

                  {/* Dimensions — wrapped in card */}
                  <div className="rounded-2xl border border-border-subtle bg-warm-light p-4">
                    <h3 className="text-base font-semibold uppercase tracking-[0.09em] text-foreground">
                      Dimensions
                    </h3>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {[
                        {
                          key: "length",
                          label: "Length",
                          value: currentRoom.length,
                          max: MAX_DIMENSIONS.length,
                        },
                        {
                          key: "width",
                          label: "Width",
                          value: currentRoom.width,
                          max: MAX_DIMENSIONS.width,
                        },
                        {
                          key: "height",
                          label: "Height",
                          value: currentRoom.height,
                          max: MAX_DIMENSIONS.height,
                        },
                      ].map((field) => (
                        <div key={field.key}>
                          <label
                            htmlFor={field.key}
                            className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                          >
                            {field.label}
                          </label>
                          <div className="relative mt-2">
                            <input
                              id={field.key}
                              type="number"
                              min={1}
                              max={field.max}
                              value={field.value}
                              onChange={(event) =>
                                updateCurrentRoom({
                                  [field.key]: parseNumberInput(event.target.value),
                                } as Partial<RoomData>)
                              }
                              className="min-h-12 w-full rounded-xl border border-border-subtle bg-background px-3 py-2 pr-9 text-center text-lg font-semibold text-foreground outline-none transition-colors focus:border-accent-gold"
                            />
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted">
                              ft
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Surfaces */}
                  <div>
                    <h3 className="text-base font-semibold uppercase tracking-[0.09em] text-foreground">
                      Surfaces
                    </h3>
                    <p className="mt-1 text-base text-text-secondary">
                      Walls are included. Add any additional surfaces below.
                    </p>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <SurfaceToggle
                        active={currentRoom.includeCeiling}
                        onClick={() =>
                          updateCurrentRoom({
                            includeCeiling: !currentRoom.includeCeiling,
                          })
                        }
                        label="Ceiling"
                        detail={`${Math.round(currentRoomMetrics.ceilingSqFt)} sq ft`}
                      />
                      <SurfaceToggle
                        active={currentRoom.includeBaseboards}
                        onClick={() =>
                          updateCurrentRoom({
                            includeBaseboards: !currentRoom.includeBaseboards,
                          })
                        }
                        label="Baseboards"
                        detail={`${Math.round(currentRoomMetrics.perimeter)} linear ft`}
                      />
                      <SurfaceToggle
                        active={currentRoom.includeCrownMolding}
                        onClick={() =>
                          updateCurrentRoom({
                            includeCrownMolding: !currentRoom.includeCrownMolding,
                          })
                        }
                        label="Crown Molding"
                        detail={`${Math.round(currentRoomMetrics.perimeter)} linear ft`}
                      />
                      <SurfaceToggle
                        active={currentRoom.includeWainscoting}
                        onClick={() =>
                          updateCurrentRoom({
                            includeWainscoting: !currentRoom.includeWainscoting,
                          })
                        }
                        label="Wainscoting"
                        detail={`${Math.round(currentRoomMetrics.perimeter)} linear ft`}
                      />
                    </div>
                  </div>

                  {/* Door sides */}
                  <div className="rounded-2xl border border-border-subtle bg-warm-light p-4">
                    <label
                      htmlFor="door-sides"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                    >
                      Door sides to paint
                    </label>
                    <div className="mt-2 flex items-center gap-3">
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
                  </div>

                  {/* Room summary card */}
                  <div className="rounded-2xl border border-border-subtle border-l-4 border-l-accent-gold bg-background p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-base">
                      <p className="text-text-secondary">
                        {rooms.length} room{rooms.length > 1 ? "s" : ""} configured
                      </p>
                      <p className="font-semibold text-foreground">
                        {Math.round(totalSqFt)} total sq ft
                      </p>
                    </div>
                  </div>

                  {/* Inline error — above action buttons */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3"
                      role="alert"
                    >
                      <p className="text-sm font-medium text-red-700">{error}</p>
                    </motion.div>
                  )}

                  {/* Bottom buttons */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={addRoom}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-border-subtle bg-warm-light px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-accent-gold/60 hover:bg-warm"
                    >
                      <Plus className="h-4 w-4" />
                      Add Room
                    </button>
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.form>
              )}

              {/* ── Step 2: Select ── */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  custom={direction}
                  variants={stepAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-3xl font-normal leading-tight text-foreground">
                      Select your paint tier
                    </h2>
                    <p className="mt-1 text-base text-text-secondary">
                      Pricing and durability increase by tier. Trim and doors
                      always use {TRIM_MATERIAL.name}.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {(Object.entries(MATERIALS) as Array<[MaterialTier, (typeof MATERIALS)[MaterialTier]]>).map(
                      ([tier, info]) => {
                        const selected = materialTier === tier;
                        return (
                          <motion.button
                            key={tier}
                            type="button"
                            onClick={() => setMaterialTier(tier)}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                              "w-full rounded-2xl border border-l-4 p-4 text-left transition-all duration-300",
                              selected
                                ? "border-accent-gold bg-accent-gold/10 ring-2 ring-accent-gold/50 shadow-lg shadow-[0_12px_34px_-24px_rgb(var(--shadow-button-glow))]"
                                : "border-border-subtle bg-background hover:border-accent-gold/60 hover:bg-warm-light"
                            )}
                            style={{ borderLeftColor: info.color }}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <p className="text-lg font-semibold text-foreground">
                                  {info.name}
                                </p>
                                <p className="text-base text-text-secondary">
                                  {info.description}
                                </p>
                                <div className="mt-3 grid grid-cols-2 gap-1.5">
                                  {info.features.map((feature) => (
                                    <span key={feature} className="rounded-full bg-background px-2.5 py-1 text-xs text-text-secondary">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="text-right">
                                <p className={cn(
                                  "font-mono text-3xl",
                                  selected ? "text-accent-gold" : "text-foreground"
                                )}>
                                  {formatCurrency(info.price)}
                                </p>
                                <p className="text-xs text-text-muted">per gallon</p>
                                {selected && (
                                  <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-accent-gold bg-background px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-foreground">
                                    <Check className="h-3 w-3" />
                                    Selected
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.button>
                        );
                      }
                    )}
                  </div>

                  <div className="rounded-2xl border border-border-subtle bg-warm-light p-4 text-base text-text-secondary">
                    <Info className="mr-1.5 -mt-0.5 inline-block h-4 w-4 text-accent-gold" />
                    Trim, doors, crown, and wainscoting are priced with{" "}
                    <span className="font-semibold text-foreground">
                      {TRIM_MATERIAL.name}
                    </span>{" "}
                    at {formatCurrency(TRIM_MATERIAL.price)}/gal.
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-border-subtle bg-warm-light px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-accent-gold/60 hover:bg-warm"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => goToStep(3)}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
                    >
                      View Estimate
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── Step 3: Estimate ── */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  custom={direction}
                  variants={stepAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Checkmark celebration */}
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
                      {rooms.length} room{rooms.length > 1 ? "s" : ""} •{" "}
                      {Math.round(totalSqFt)} sq ft
                    </p>
                  </div>

                  {/* Total cost card with warm glow */}
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

                  {/* Cost by surface with proportion bars */}
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

                  {/* Paint required */}
                  <div className="rounded-2xl border border-border-subtle bg-background p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                      Paint Required
                    </h3>
                    <div className="mt-3 space-y-2 text-sm">
                      {estimate.wallCeilingGallons > 0 && (
                        <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                          <span className="text-text-secondary">
                            {MATERIALS[materialTier].name} (walls + ceiling)
                          </span>
                          <span className="font-semibold text-foreground">
                            {estimate.wallCeilingGallons.toFixed(1)} gal
                          </span>
                        </div>
                      )}
                      {estimate.trimGallons > 0 && (
                        <div className="flex items-center justify-between">
                          <span className="text-text-secondary">
                            {TRIM_MATERIAL.name} (trim surfaces)
                          </span>
                          <span className="font-semibold text-foreground">
                            {estimate.trimGallons.toFixed(1)} gal
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rooms included */}
                  <div className="rounded-2xl border border-border-subtle bg-warm-light p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                      Rooms Included
                    </h3>
                    <div className="mt-3 space-y-2 text-sm">
                      {rooms.map((room) => {
                        const metrics = calculateRoomMetrics(room);
                        return (
                          <div
                            key={room.id}
                            className="flex items-center justify-between rounded-xl bg-background px-3 py-2"
                          >
                            <span className="text-text-secondary">
                              {room.name} ({room.length}x{room.width} ft)
                            </span>
                            <span className="font-semibold text-foreground">
                              {Math.round(metrics.wallSqFt + metrics.ceilingSqFt)} sq ft
                            </span>
                          </div>
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

                  {/* Conversion CTA card */}
                  <div className="rounded-3xl border border-accent-gold/30 bg-gradient-to-br from-warm to-warm-light p-6 text-center space-y-4">
                    <h3 className="text-xl font-normal text-foreground">
                      Ready for a precise quote?
                    </h3>
                    <p className="mx-auto max-w-[42ch] text-base text-text-secondary">
                      This estimate gives you a starting point. For exact pricing, our team will assess your space and finalize every detail.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <Link
                        href="/contact#contact-form"
                        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[9px] border border-cta bg-cta px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-cta-hover-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
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
                  </div>

                  {/* Bottom utility buttons */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-border-subtle bg-warm-light px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-accent-gold/60 hover:bg-warm"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Edit Materials
                    </button>
                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-border-subtle bg-warm-light px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-accent-gold/60 hover:bg-warm"
                    >
                      Start New Estimate
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
}
