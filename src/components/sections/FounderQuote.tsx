"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";

interface FounderQuoteProps {
  quote: string;
  author: string;
}

export function FounderQuote({ quote, author }: FounderQuoteProps) {
  return (
    <section className="relative z-20 bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 text-center md:px-8">
        <AnimateOnScroll>
          <DecorativeIcon variant="leaf" className="mb-8" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <h2 className="mb-8 text-2xl font-normal leading-relaxed md:text-3xl lg:text-4xl lg:leading-relaxed">
            &ldquo;{quote}&rdquo;
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <p className="text-base font-medium text-text-secondary">
            &mdash; {author}
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <DecorativeIcon variant="leaf" className="mt-8" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
