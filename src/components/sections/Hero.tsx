"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
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

export function Hero({
  eyebrow,
  headline,
  ctaText,
  ctaHref,
  images,
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const cardOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const cardScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.97]);

  return (
    <section ref={sectionRef} className="relative -mb-[50vh]">
      <div className="grid max-h-[35vh] grid-cols-3 overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-3/4 overflow-hidden">
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

      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { opacity: cardOpacity, scale: cardScale }
        }
        className="sticky top-8 z-10 -mt-24 mx-4 rounded-t-3xl bg-white/85 px-6 py-12 text-center backdrop-blur-lg md:mx-auto md:max-w-[700px] md:px-12 md:py-16 lg:-mt-32"
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
        >
          <DecorativeIcon variant="feather" className="mb-6" size={40} />
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.1]">
            {headline}
          </h1>
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Button
            asChild
            className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-xs font-medium uppercase tracking-[0.2em]"
          >
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="h-[50vh]" aria-hidden="true" />
    </section>
  );
}
