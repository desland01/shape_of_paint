"use client";

import Image from "next/image";
import { SlideUp, ScrollZoom } from "@/components/ui/motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";

interface PageHeroProps {
  heading: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  heading,
  description,
  image,
  imageAlt = "",
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
              style={{ objectFit: "cover" }}
            />
          </ScrollZoom>
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      <div
        className={`mx-auto max-w-[700px] px-4 md:px-8${hasImage ? " relative z-10" : ""}`}
      >
        <SlideUp immediate>
          <DecorativeIcon
            variant="leaf"
            className={`mb-6${hasImage ? " brightness-0 invert" : ""}`}
          />
        </SlideUp>
        <SlideUp immediate delay={0.1}>
          <h1
            className={`mb-4 text-6xl font-normal leading-[1.15] md:text-7xl lg:text-8xl${hasImage ? " text-white" : ""}`}
          >
            {heading}
          </h1>
        </SlideUp>
        {description && (
          <SlideUp immediate delay={0.2}>
            <p
              className={`text-2xl md:text-3xl font-normal leading-relaxed${hasImage ? " text-white/90" : " text-text-secondary"}`}
            >
              {description}
            </p>
          </SlideUp>
        )}
      </div>
    </section>
  );
}
