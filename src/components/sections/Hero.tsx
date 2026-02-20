"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { TrustBar } from "@/components/shared/TrustBar";
import { SlideUp } from "@/components/ui/motion";

interface HeroProps {
  eyebrow: string;
  headline: string;
  ctaText: string;
  ctaHref: string;
  images: { src: string; alt: string }[];
}

const STAGGER_DELAY = 0.1;

export function Hero({ eyebrow, headline, ctaText, ctaHref, images }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex min-h-svh flex-col items-center justify-center"
    >
      {/* Full-bleed background image with subtle parallax on desktop */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? undefined : { scale: imageScale }}
      >
        {images[0] && (
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        )}
      </motion.div>

      {/* Top gradient for header readability */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/30 to-black/10"
        aria-hidden="true"
      />

      {/* Content block */}
      <div className="relative z-10 w-full max-w-4xl px-4 pb-24 pt-28 text-center md:pb-0 md:pt-0">
        <SlideUp immediate delay={0 * STAGGER_DELAY}>
          <Eyebrow className="mb-4 text-white">{eyebrow}</Eyebrow>
        </SlideUp>

        <SlideUp immediate delay={1 * STAGGER_DELAY}>
          <h1 className="mx-auto max-w-3xl text-6xl font-normal leading-[1.15] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] md:text-7xl lg:text-[96px]">
            {headline}
          </h1>
        </SlideUp>

        <SlideUp immediate delay={2 * STAGGER_DELAY}>
          <p className="mx-auto mt-4 max-w-xl text-xl text-white/80 md:text-2xl">
            Professional house painters serving Vancouver and the Lower Mainland
          </p>
        </SlideUp>

        {/* CTA row — no animation gate: renders immediately for instant conversion access */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <Link
            href={ctaHref}
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] md:w-auto"
          >
            {ctaText}
          </Link>

          <a
            href="tel:6043537378"
            className="inline-flex min-h-[48px] items-center text-sm font-medium text-white underline-offset-4 transition-colors hover:text-white/80 hover:underline"
          >
            604-353-7378
          </a>
        </div>

        {/* Trust bar */}
        <SlideUp immediate delay={4 * STAGGER_DELAY}>
          <TrustBar variant="light" className="mt-6 justify-center" />
        </SlideUp>
      </div>
    </section>
  );
}
