"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";

interface HeroProps {
  eyebrow: string;
  headline: string;
  ctaText: string;
  ctaHref: string;
  images: { src: string; alt: string }[];
}

export function Hero({ eyebrow, headline, ctaText, ctaHref, images }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // H1 stays solid until CTA starts entering from below (~35% progress),
  // then fades out. CTA enters viewport bottom at ~50% progress (100vh scroll
  // into a 200vh section), so there is a brief overlap where CTA is rising
  // while H1 is fading — giving the "push through" effect with no hard collision.
  const h1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "200vh" }}>

      {/* ── Sticky frame: 3-col images + H1 overlay ────────────────────── */}
      {/* This entire block sticks to the top of the viewport while the user
          scrolls through the 200vh section. Images fill the frame; H1 floats
          on top with a transparent (no background) overlay. */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden">

        {/* 3-col image grid fills the full sticky viewport */}
        <div className="absolute inset-0 grid grid-cols-3">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top"
                priority={i === 0}
                sizes="33vw"
              />
            </div>
          ))}
        </div>

        {/* H1 card — transparent background, text only, fades on scroll */}
        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: h1Opacity }}
          className="absolute inset-x-0 top-0 z-10 px-6 pt-16 text-center md:pt-24"
        >
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] md:text-6xl lg:text-7xl lg:leading-[1.1]"
          >
            {headline}
          </motion.h1>
        </motion.div>
      </div>

      {/* ── Spacer ─────────────────────────────────────────────────────── */}
      {/* Pushes the CTA card to ~100vh below the initial viewport so it is
          off-screen on first load. User scrolls ~100vh before CTA enters
          from the bottom (at scrollYProgress ≈ 0.5). */}
      <div style={{ height: "100vh" }} aria-hidden="true" />

      {/* ── CTA card — transparent background, scrolls naturally upward ── */}
      {/* z-20 ensures it paints on top of the sticky image frame as it rises.
          No background colour — text floats directly over the images. */}
      <div className="relative z-20 px-6 pb-24 text-center">
        <DecorativeIcon variant="feather" className="mb-6" size={40} />
        <Eyebrow className="mb-6 text-white">{eyebrow}</Eyebrow>
        <Button
          asChild
          className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-xs font-medium uppercase tracking-[0.2em]"
        >
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
      </div>

    </section>
  );
}
