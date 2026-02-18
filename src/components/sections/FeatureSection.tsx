"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  eyebrow: string;
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
  return (
    <section
      className={cn(
        "py-16 md:py-24 lg:py-32",
        variant === "warm" ? "bg-warm" : "bg-background"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div
          className={cn(
            "grid items-center gap-12 md:grid-cols-2 md:gap-16",
            reversed && "md:[&>*:first-child]:order-2"
          )}
        >
          <div>
            <AnimateOnScroll>
              <DecorativeIcon variant="leaf" className="mb-4" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                {heading}
              </h3>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="mb-6 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
                {description}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.25}>
              <Link
                href={ctaHref}
                className="text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
              >
                {ctaText}
              </Link>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll
            direction={reversed ? "left" : "right"}
            delay={0.2}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
