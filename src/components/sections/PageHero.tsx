"use client";

import Link from "next/link";
import Image from "next/image";
import { SlideUp, ScrollZoom } from "@/components/ui/motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";

interface PageHeroProps {
  heading: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({
  heading,
  description,
  image,
  imageAlt = "",
  ctaText,
  ctaHref,
}: PageHeroProps) {
  const hasImage = !!image;

  return (
    <section
      className={
        hasImage
          ? "relative flex min-h-[55vh] items-center justify-center text-center"
          : "bg-background py-16 text-center md:py-24"
      }
    >
      {hasImage && (
        <>
          <ScrollZoom className="absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </ScrollZoom>
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      <div
        className={`mx-auto max-w-content px-4 md:px-8${hasImage ? " relative z-10" : ""}`}
      >
        <SlideUp immediate>
          <DecorativeIcon
            variant="leaf"
            className={`mb-6${hasImage ? " brightness-0 invert" : ""}`}
          />
        </SlideUp>
        <SlideUp immediate delay={0.1}>
          <h1
            className={`mb-4 text-4xl font-normal leading-[1.15] md:text-7xl lg:text-8xl${hasImage ? " text-white" : ""}`}
          >
            {heading}
          </h1>
        </SlideUp>
        {description && (
          <SlideUp immediate delay={0.2}>
            <p
              className={`text-lg md:text-2xl lg:text-3xl font-normal leading-relaxed${hasImage ? " text-white/90" : " text-text-secondary"}`}
            >
              {description}
            </p>
          </SlideUp>
        )}
        {ctaText && ctaHref && (
          <SlideUp immediate delay={0.3}>
            <Link
              href={ctaHref}
              className={`mt-8 inline-flex min-h-[48px] items-center justify-center rounded-[9px] border px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]${hasImage ? " border-white/60 bg-white/15 text-white hover:text-foreground" : " border-cta bg-cta text-cta-foreground"}`}
            >
              {ctaText}
            </Link>
          </SlideUp>
        )}
      </div>
    </section>
  );
}
