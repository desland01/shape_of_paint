"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Button } from "@/components/ui/button";

interface HeroProps {
  eyebrow: string;
  headline: string;
  ctaText: string;
  ctaHref: string;
  images: { src: string; alt: string }[];
}

export function Hero({
  eyebrow,
  headline,
  ctaText,
  ctaHref,
  images,
}: HeroProps) {
  return (
    <section className="relative -mb-[50vh]">
      <div className="grid grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="33vw"
            />
          </div>
        ))}
      </div>

      <div className="sticky top-8 z-10 -mt-24 mx-4 rounded-t-3xl bg-background px-6 py-12 text-center shadow-sm md:mx-auto md:max-w-[700px] md:px-12 md:py-16 lg:-mt-32">
        <AnimateOnScroll>
          <DecorativeIcon variant="feather" className="mb-6" size={40} />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.1]">
            {headline}
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <Button
            asChild
            className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-xs font-medium uppercase tracking-[0.2em]"
          >
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </AnimateOnScroll>
      </div>

      <div className="h-[50vh]" aria-hidden="true" />
    </section>
  );
}
