"use client";

import Image from "next/image";
import { SlideUp } from "@/components/ui/motion";
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
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      <div
        className={`mx-auto max-w-[700px] px-6 md:px-8${hasImage ? " relative z-10" : ""}`}
      >
        <SlideUp>
          <DecorativeIcon
            variant="leaf"
            className={`mb-6${hasImage ? " brightness-0 invert" : ""}`}
          />
        </SlideUp>
        <SlideUp delay={0.1}>
          <h1
            className={`mb-4 text-4xl font-normal leading-[1.15] md:text-5xl lg:text-6xl${hasImage ? " text-white" : ""}`}
          >
            {heading}
          </h1>
        </SlideUp>
        {description && (
          <SlideUp delay={0.2}>
            <p
              className={`text-lg md:text-xl font-normal leading-relaxed${hasImage ? " text-white/90" : " text-text-secondary"}`}
            >
              {description}
            </p>
          </SlideUp>
        )}
      </div>
    </section>
  );
}
