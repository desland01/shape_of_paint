"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { SlideUp } from "@/components/ui/motion";
import { siteConfig } from "@/config/site";

interface CTABannerProps {
  headline: string;
  ctaText: string;
  ctaHref: string;
}

export function CTABanner({ headline, ctaText, ctaHref }: CTABannerProps) {
  const phoneDigits = siteConfig.phone.replace(/\D/g, "");

  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="text-center">
          <SlideUp>
            <h2 className="text-3xl font-normal leading-[1.2] md:text-4xl lg:text-[60px]">
              {headline}
            </h2>
          </SlideUp>
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border-subtle bg-transparent px-10 py-3 text-base font-semibold uppercase tracking-[0.2em] text-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
            >
              {ctaText}
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Or call us:{" "}
            <a
              href={`tel:+1${phoneDigits}`}
              className="inline-flex min-h-[44px] items-center gap-1 underline underline-offset-2"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
