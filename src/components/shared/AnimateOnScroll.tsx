"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  scale?: boolean;
}

// cubic-bezier(0.25, 0.46, 0.45, 0.94) — matched from whiteoakpainting.com
const EASE_DEFAULT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  scale = false,
}: AnimateOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...directionOffset[direction], ...(scale ? { scale: 1.02 } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: scale ? 0.7 : duration, 
        delay, 
        ease: scale ? EASE_OUT : EASE_DEFAULT 
      }}
    >
      {children}
    </motion.div>
  );
}
