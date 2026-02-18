"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { SlideUp } from "@/components/ui/motion";

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
        <SlideUp>
          <DecorativeIcon variant="leaf" className="mb-6" />
        </SlideUp>
        <SlideUp delay={0.1}>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        </SlideUp>
        <SlideUp delay={0.15}>
          <h2 className="mb-12 text-3xl font-semibold md:text-4xl lg:text-5xl">{heading}</h2>
        </SlideUp>

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
              {/* Stars */}
              <div className="mb-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-accent-gold">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-6 text-xl font-normal leading-relaxed md:text-2xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <p className="text-base font-medium text-text-secondary">
                &mdash; {testimonials[current].author}
              </p>
              <p className="text-sm text-text-muted mt-1">via Google</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors hover:bg-background"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs text-text-muted">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="rounded-full p-3 min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors hover:bg-background"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="mt-8">
          <a
            href="https://www.google.com/maps/place/Shape+of+Paint"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 min-h-[48px] text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
          >
            Read all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
