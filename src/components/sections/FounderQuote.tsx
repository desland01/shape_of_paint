"use client";

import { SlideUp } from "@/components/ui/motion";

interface FounderQuoteProps {
  quote: string;
  author: string;
}

export function FounderQuote({ quote, author }: FounderQuoteProps) {
  return (
    <section className="relative z-20 bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 text-center md:px-8">
        <SlideUp delay={0.1}>
          <h2 className="mx-auto mb-4 max-w-[38ch] text-4xl font-normal leading-[1.45] tracking-[1.5px] md:text-[46px]">
            &ldquo;{quote}&rdquo;
          </h2>
        </SlideUp>
        <SlideUp delay={0.2}>
          <p className="text-lg font-medium text-text-secondary">
            &mdash; {author}
          </p>
        </SlideUp>
      </div>
    </section>
  );
}
