"use client";

import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline: string;
  ctaText: string;
  ctaHref: string;
}

export function CTABanner({ headline, ctaText, ctaHref }: CTABannerProps) {
  return (
    <section className="bg-warm py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
        <AnimateOnScroll>
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
            {headline}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <Button
            asChild
            className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-xs font-medium uppercase tracking-[0.2em]"
          >
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
