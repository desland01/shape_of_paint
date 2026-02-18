"use client";

import Image from "next/image";
import Link from "next/link";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { cn } from "@/lib/utils";
import { SlideUp, ScaleIn } from "@/components/ui/motion";

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
            <SlideUp>
              <DecorativeIcon variant="leaf" className="mb-4" />
            </SlideUp>
            <SlideUp delay={0.1}>
              <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            </SlideUp>
            <SlideUp delay={0.15}>
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                {heading}
              </h3>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="mb-6 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
                {description}
              </p>
            </SlideUp>
            <Link
              href={ctaHref}
              className="inline-flex items-center py-3 min-h-[48px] text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
            >
              {ctaText}
            </Link>
          </div>
          <ScaleIn delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
