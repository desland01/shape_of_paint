"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";

interface PageHeroProps {
  heading: string;
  description?: string;
}

export function PageHero({ heading, description }: PageHeroProps) {
  return (
    <section className="bg-background py-16 text-center md:py-24">
      <div className="mx-auto max-w-[700px] px-6 md:px-8">
        <AnimateOnScroll>
          <DecorativeIcon variant="leaf" className="mb-6" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {heading}
          </h1>
        </AnimateOnScroll>
        {description && (
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
              {description}
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
