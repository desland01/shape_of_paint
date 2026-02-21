"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MATERIALS, TRIM_MATERIAL } from "@/lib/cost-calculator/constants";
import { calculateEstimate, calculateRoomMetrics, createEmptyRoom } from "@/lib/cost-calculator/interiorCalculator";
import type { MaterialTier, RoomData } from "@/lib/cost-calculator/types";
import { StepDimensions } from "./calculator-steps/StepDimensions";
import { StepSurfaces } from "./calculator-steps/StepSurfaces";
import { StepPaintQuality } from "./calculator-steps/StepPaintQuality";
import { StepEstimate } from "./calculator-steps/StepEstimate";

type Step = 1 | 2 | 3 | 4;
const TOTAL_STEPS = 4;
const SLIDE_OFFSET = 120;

export function CostCalculatorApp() {
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [rooms, setRooms] = useState<RoomData[]>([createEmptyRoom(1)]);
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [materialTier, setMaterialTier] = useState<MaterialTier>("better");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Derived state
  const currentRoom = rooms[currentRoomIndex] ?? rooms[0];
  const currentRoomMetrics = useMemo(() => calculateRoomMetrics(currentRoom), [currentRoom]);
  const estimate = useMemo(() => calculateEstimate(rooms, materialTier), [rooms, materialTier]);
  const totalSqFt = estimate.totals.wallSqFt + estimate.totals.ceilingSqFt;
  const surfaceCostEntries = [
    { label: "Walls", cost: estimate.surfaceCosts.walls },
    { label: "Ceiling", cost: estimate.surfaceCosts.ceiling },
    { label: "Baseboards", cost: estimate.surfaceCosts.baseboards },
    { label: "Doors", cost: estimate.surfaceCosts.doors },
    { label: "Crown Molding", cost: estimate.surfaceCosts.crown },
    { label: "Wainscoting", cost: estimate.surfaceCosts.wainscoting },
  ].filter((entry) => entry.cost > 0);

  // Navigation
  const goToStep = (nextStep: Step) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
    setError(null);
    scrollRef.current?.scrollTo(0, 0);
  };

  // Room mutations
  const updateCurrentRoom = (updates: Partial<RoomData>) => {
    setRooms((prev) =>
      prev.map((room, i) => (i === currentRoomIndex ? { ...room, ...updates } : room)),
    );
    if (error) setError(null);
  };

  const addRoom = () => {
    const trimmedName = currentRoom.name.trim();
    const isDefaultName = trimmedName.length === 0 || trimmedName === `Room ${currentRoom.id}`;
    if (isDefaultName) { setError("Please name your room before adding another."); return; }
    const nextRoomId = rooms.reduce((max, r) => Math.max(max, r.id), 0) + 1;
    const nextRooms = [...rooms, createEmptyRoom(nextRoomId)];
    setRooms(nextRooms);
    setCurrentRoomIndex(nextRooms.length - 1);
    setError(null);
  };

  const removeRoom = (index: number) => {
    if (rooms.length <= 1) return;
    const nextRooms = rooms.filter((_, i) => i !== index);
    setRooms(nextRooms);
    setCurrentRoomIndex((prev) => Math.min(prev, nextRooms.length - 1));
    setError(null);
  };

  // Step 1 validation
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

  // Reset
  const resetCalculator = () => {
    setStep(1);
    setDirection(-1);
    setRooms([createEmptyRoom(1)]);
    setCurrentRoomIndex(0);
    setMaterialTier("better");
    setError(null);
    scrollRef.current?.scrollTo(0, 0);
  };

  // Animation system (matches ContactForm exactly)
  const springTransition = { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.8 };
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

  return (
    <div className="flex h-full flex-col">
      {/* Heading */}
      <div className="mb-6 flex-shrink-0">
        <h1 className="text-4xl font-normal mb-1">Interior Painting Cost Calculator</h1>
        <p className="text-lg text-text-secondary">Room-by-room estimates in under 2 minutes</p>
      </div>

      {/* Progress bar */}
      <div className="mb-6 flex-shrink-0">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary mb-2">
          Step {step} of {TOTAL_STEPS}
        </p>
        <div className="h-0.5 w-full rounded-full bg-border-subtle">
          <motion.div
            className="h-full rounded-full bg-accent-gold"
            initial={false}
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </div>

      {/* Step content with slide transitions */}
      <div ref={scrollRef} className="relative flex-1 min-h-0 overflow-y-auto" style={{ perspective: "1200px" }}>
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <motion.div key="step-1" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={springTransition}>
              <StepDimensions
                rooms={rooms}
                currentRoomIndex={currentRoomIndex}
                currentRoom={currentRoom}
                error={error}
                updateCurrentRoom={updateCurrentRoom}
                addRoom={addRoom}
                removeRoom={removeRoom}
                setCurrentRoomIndex={setCurrentRoomIndex}
                onContinue={handleDimensionsContinue}
              />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="step-2" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={springTransition}>
              <StepSurfaces
                currentRoom={currentRoom}
                currentRoomMetrics={currentRoomMetrics}
                rooms={rooms}
                updateCurrentRoom={updateCurrentRoom}
                onBack={() => goToStep(1)}
                onContinue={() => goToStep(3)}
              />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="step-3" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={springTransition}>
              <StepPaintQuality
                materialTier={materialTier}
                setMaterialTier={setMaterialTier}
                onBack={() => goToStep(2)}
                onContinue={() => goToStep(4)}
              />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div key="step-4" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={springTransition}>
              <StepEstimate
                estimate={estimate}
                rooms={rooms}
                totalSqFt={totalSqFt}
                surfaceCostEntries={surfaceCostEntries}
                onBack={() => goToStep(3)}
                onReset={resetCalculator}
                prefersReducedMotion={prefersReducedMotion}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
