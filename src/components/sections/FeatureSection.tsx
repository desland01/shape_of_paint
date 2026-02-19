"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";
import { SlideUp } from "@/components/ui/motion";

export function getParallaxConfig() {
  return {
    textCard: { outputRange: [50, -50] as [number, number] },
    image: { outputRange: [50, -50] as [number, number] },
    blob: { outputRange: [-90, 90] as [number, number] },
  };
}

interface FeatureSectionProps {
  eyebrow?: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  variant?: "default" | "warm";
}

export function FeatureSection({
  eyebrow,
  heading,
  description,
  ctaText,
  ctaHref,
  image,
  imageAlt,
  reversed = false,
  variant = "default",
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const parallax = getParallaxConfig();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textCardY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : parallax.textCard.outputRange);
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : parallax.image.outputRange);
  const blobY = useTransform(scrollYProgress, [0, 0.3, 1], shouldReduceMotion ? [0, 0, 0] : [-210, -90, -90]);
  const blobX = useTransform(
    scrollYProgress,
    [0, 0.075, 0.15, 0.225, 0.3, 1],
    shouldReduceMotion
      ? [0, 0, 0, 0, 0, 0]
      : reversed
        ? [-60, -28, -18, -16, -15, -15]
        : [60, 28, 18, 16, 15, 15]
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 lg:py-32 overflow-x-clip",
        variant === "warm" ? "bg-warm" : "bg-background"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/*
          CSS Grid overlap layout:
          - 12 columns on desktop
          - Image spans columns 5-12 (default) or 1-8 (reversed)
          - Card spans columns 1-7 (default) or 6-12 (reversed)
          - Both share row 1, creating the overlap
        */}
        <div className="relative md:grid md:grid-cols-12 md:items-center">
          {/* Image area — positioned to the right (default) or left (reversed) */}
          <motion.div
            style={{ y: imageY }}
            className={cn(
              "relative md:row-start-1 overflow-visible",
              reversed
                ? "md:col-start-1 md:col-end-9"
                : "md:col-start-5 md:col-end-13"
            )}
          >
            <div className="relative overflow-visible">
              {/* Watercolor splash — prominent organic painterly element */}
              <motion.div style={{ y: blobY, x: blobX }} className={cn(
                  "absolute z-[2] pointer-events-none",
                  reversed
                    ? "-top-8 -left-8 md:-top-12 md:-left-12"
                    : "-top-8 -right-8 md:-top-12 md:-right-12"
                )}>
                <svg
                  aria-hidden="true"
                  className="w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  {/* Large base blob */}
                  <path
                    d="M120,20 C155,15 185,40 190,75 C195,110 180,145 155,165 C130,185 95,190 65,175 C35,160 15,130 20,95 C25,60 85,25 120,20Z"
                    fill="rgba(222,150,125,0.55)"
                  />
                  {/* Mid-tone overlay */}
                  <path
                    d="M130,35 C160,30 180,55 182,85 C184,115 165,140 140,155 C115,170 85,168 65,150 C45,132 40,105 50,80 C60,55 100,40 130,35Z"
                    fill="rgba(210,149,111,0.45)"
                  />
                  {/* Inner concentrated wash */}
                  <path
                    d="M110,45 C140,38 165,55 170,80 C175,105 160,130 140,145 C120,160 95,158 78,142 C61,126 55,100 65,78 C75,56 80,52 110,45Z"
                    fill="rgba(230,140,115,0.35)"
                  />
                  {/* Small accent splatters for organic texture */}
                  <circle cx="155" cy="40" r="18" fill="rgba(210,149,111,0.4)" />
                  <circle cx="60" cy="155" r="12" fill="rgba(222,150,125,0.3)" />
                  <ellipse cx="170" cy="120" rx="15" ry="20" fill="rgba(200,120,95,0.25)" />
                </svg>
              </motion.div>
              {/* Image container with subtle shadow */}
              <motion.div style={{ scale: imageScale }} className="relative z-[1] aspect-[4/3] overflow-hidden shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)] transition-shadow duration-700">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text card — overlaps the image via shared grid row */}
          <motion.div
            style={{ y: textCardY }}
            className={cn(
              "relative z-10",
              "md:row-start-1",
              reversed
                ? "md:col-start-7 md:col-end-13"
                : "md:col-start-1 md:col-end-7"
            )}
          >
            <div
              className={cn(
                "bg-white rounded-2xl p-8 md:p-10 lg:p-12",
                "shadow-[0_4px_40px_-8px_rgba(0,0,0,0.08)]",
                "-mt-12 mx-4 md:mt-0 md:mx-0"
              )}
            >
              <SlideUp>
                <DecorativeIcon variant="leaf" className="mb-4 justify-start" />
              </SlideUp>
              {eyebrow && (
                <SlideUp delay={0.1}>
                  <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
                </SlideUp>
              )}
              <SlideUp delay={0.15}>
                <h2 className="mb-4 text-3xl font-normal leading-[1.25] md:text-4xl">
                  {heading}
                </h2>
              </SlideUp>
              <SlideUp delay={0.2}>
                <p className="mb-6 text-base md:text-lg font-normal leading-relaxed text-text-secondary">
                  {description}
                </p>
              </SlideUp>
              <SlideUp delay={0.25}>
                <Link
                  href={ctaHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-foreground bg-foreground px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:text-foreground hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
                >
                  {ctaText}
                </Link>
              </SlideUp>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
