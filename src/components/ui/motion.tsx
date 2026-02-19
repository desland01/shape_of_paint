"use client";

import { motion, HTMLMotionProps, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Duration and easing constants from _reference/animations.md
const DURATION_DEFAULT = 0.5; // 400-600ms
const DURATION_IMAGE = 0.7; // 600-800ms
// cubic-bezier(0.25, 0.46, 0.45, 0.94) — matched from whiteoakpainting.com
const EASE_DEFAULT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, className, delay = 0, duration = DURATION_DEFAULT, ...props }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration, delay, ease: EASE_DEFAULT }
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ children, className, delay = 0, duration = DURATION_DEFAULT, ...props }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration, delay, ease: EASE_DEFAULT }
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0, duration = DURATION_IMAGE, ...props }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, scale: 1.02 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration, delay, ease: EASE_OUT }
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, delay = 0, staggerChildren = 0.1, ...props }: MotionProps & { staggerChildren?: number }) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren
      }
    }
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Hover effect for interactive elements (cards, images)
export function HoverScale({ children, className, scale = 1.03, duration = 0.3, ...props }: MotionProps & { scale?: number }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration, ease: EASE_OUT }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
