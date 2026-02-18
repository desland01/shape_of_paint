"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  eyebrow?: string;
  heading: string;
  testimonials: Testimonial[];
}

export function Testimonials({
  eyebrow = "Reviews",
  heading,
  testimonials,
}: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="bg-warm py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 text-center md:px-8">
        <AnimateOnScroll>
          <DecorativeIcon variant="leaf" className="mb-6" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <h2 className="mb-12 text-3xl font-semibold md:text-4xl lg:text-5xl">{heading}</h2>
        </AnimateOnScroll>

        <div className="relative min-h-[200px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <blockquote className="mb-6 text-xl font-normal leading-relaxed md:text-2xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <p className="text-base font-medium text-text-secondary">
                &mdash; {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full p-2 transition-colors hover:bg-background"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs text-text-muted">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="rounded-full p-2 transition-colors hover:bg-background"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
