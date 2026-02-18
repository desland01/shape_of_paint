"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";

interface ContactCTAProps {
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export function ContactCTA({
  heading,
  description,
  ctaText,
  ctaHref,
  image,
  imageAlt,
}: ContactCTAProps) {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <AnimateOnScroll>
              <DecorativeIcon variant="leaf" className="mb-4" />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
                {heading}
              </h3>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <p className="mb-6 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
                {description}
              </p>
            </AnimateOnScroll>
            <Link
              href={ctaHref}
              className="inline-flex items-center py-3 min-h-[48px] text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
            >
              {ctaText}
            </Link>
          </div>
          <AnimateOnScroll direction="right" delay={0.2} scale>
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
