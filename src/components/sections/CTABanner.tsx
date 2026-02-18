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
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 border-t border-border-subtle">
        <AnimateOnScroll>
          <div className="text-center md:text-left md:flex md:items-center md:justify-between pt-16 md:pt-20">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                {headline}
              </h2>
              <p className="text-base text-text-secondary mt-2">
                Licensed, insured, and backed by 200+ five-star reviews.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8 flex flex-col items-center md:items-end shrink-0">
              <Button
                asChild
                className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] min-h-[48px]"
              >
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
              <a
                href="tel:6043537378"
                className="text-sm text-text-secondary hover:text-foreground transition-colors mt-2"
              >
                Or call 604-353-7378
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
