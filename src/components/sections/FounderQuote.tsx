"use client";

import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { SlideUp } from "@/components/ui/motion";

interface FounderQuoteProps {
  quote: string;
  author: string;
}

export function FounderQuote({ quote, author }: FounderQuoteProps) {
  return (
    <section className="relative z-20 bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 text-center md:px-8">
        <SlideUp>
          <DecorativeIcon variant="leaf" className="mb-6" />
        </SlideUp>
        <SlideUp delay={0.1}>
          <h2 className="mb-4 text-2xl font-normal leading-[1.45] tracking-[1.5px] md:text-[32px]">
            &ldquo;{quote}&rdquo;
          </h2>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-base font-medium text-text-secondary">
            &mdash; {author}
          </p>
        </SlideUp>
        <SlideUp delay={0.3}>
          <DecorativeIcon variant="leaf" className="mt-6" />
        </SlideUp>
      </div>
    </section>
  );
}
