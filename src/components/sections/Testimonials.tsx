"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

const WatercolorPeony = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    aria-hidden="true"
    className="h-16 w-16"
  >
    {/* Soft outer glow */}
    <ellipse cx="40" cy="40" rx="24" ry="22" fill="rgba(222,160,140,0.1)" />

    {/* Outer petal ring — five organic petals radiating from center */}
    <ellipse cx="40" cy="24" rx="11" ry="14" transform="rotate(-5 40 24)" fill="rgba(215,140,120,0.3)" />
    <ellipse cx="54" cy="34" rx="10" ry="13" transform="rotate(65 54 34)" fill="rgba(205,125,105,0.28)" />
    <ellipse cx="50" cy="50" rx="10" ry="12" transform="rotate(35 50 50)" fill="rgba(220,145,120,0.25)" />
    <ellipse cx="30" cy="50" rx="10" ry="12" transform="rotate(-35 30 50)" fill="rgba(210,135,115,0.27)" />
    <ellipse cx="26" cy="34" rx="10" ry="13" transform="rotate(-65 26 34)" fill="rgba(200,130,110,0.3)" />

    {/* Middle petal ring — tighter, warmer */}
    <ellipse cx="40" cy="30" rx="8" ry="10" transform="rotate(10 40 30)" fill="rgba(210,120,95,0.35)" />
    <ellipse cx="48" cy="38" rx="7" ry="9" transform="rotate(70 48 38)" fill="rgba(200,110,90,0.32)" />
    <ellipse cx="44" cy="48" rx="7" ry="9" transform="rotate(35 44 48)" fill="rgba(215,125,100,0.3)" />
    <ellipse cx="36" cy="48" rx="7" ry="9" transform="rotate(-35 36 48)" fill="rgba(205,115,95,0.32)" />
    <ellipse cx="32" cy="38" rx="7" ry="9" transform="rotate(-70 32 38)" fill="rgba(210,120,100,0.35)" />

    {/* Inner petals — concentrated, rich */}
    <ellipse cx="40" cy="35" rx="6" ry="7" fill="rgba(210,115,90,0.4)" />
    <ellipse cx="45" cy="40" rx="5" ry="6" transform="rotate(60 45 40)" fill="rgba(200,105,85,0.38)" />
    <ellipse cx="40" cy="45" rx="5" ry="6" fill="rgba(215,120,95,0.35)" />
    <ellipse cx="35" cy="40" rx="5" ry="6" transform="rotate(-60 35 40)" fill="rgba(205,110,88,0.38)" />

    {/* Center bloom — warm saturated core */}
    <ellipse cx="40" cy="40" rx="7" ry="6" fill="rgba(210,110,85,0.5)" />
    <ellipse cx="40" cy="39" rx="4.5" ry="4" fill="rgba(195,95,75,0.45)" />
    <ellipse cx="40" cy="38" rx="2" ry="1.5" fill="rgba(185,85,65,0.35)" />
  </svg>
);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [testimonials.length]);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 text-center md:px-8">
        <SlideUp>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        </SlideUp>
        <SlideUp delay={0.1}>
          <h2 className="mb-12 text-5xl font-normal leading-[1.2] md:text-6xl lg:text-[72px]">{heading}</h2>
        </SlideUp>

        {/* Arrow + Card row */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left arrow */}
          {testimonials.length > 1 && (
            <button
              onClick={prev}
              className="shrink-0 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-text-secondary hover:text-foreground transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1} />
            </button>
          )}

          {/* White testimonial card */}
          <div className="relative min-h-[200px] w-full max-w-[900px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-2xl bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.07)] md:p-12 lg:p-16"
              >
                {/* Watercolor peony */}
                <div className="mx-auto mb-8 flex items-center justify-center">
                  <WatercolorPeony />
                </div>

                <blockquote className="mb-6 text-left text-2xl italic leading-relaxed text-foreground md:text-center md:text-3xl lg:text-[30px] lg:leading-relaxed">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <p className="text-lg font-medium text-text-secondary">
                  &mdash; {testimonials[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          {testimonials.length > 1 && (
            <button
              onClick={next}
              className="shrink-0 p-2 min-h-[48px] min-w-[48px] flex items-center justify-center text-text-secondary hover:text-foreground transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
