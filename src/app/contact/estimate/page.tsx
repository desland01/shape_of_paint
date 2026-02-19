import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Painting Estimate Vancouver",
  description: "Request your free painting estimate from Shape of Paint. Vancouver & Lower Mainland interior, exterior & cabinet painting. Call 604-353-7378.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
];

export default function EstimatePage() {
  return (
    <>
      <PageHero
        heading="Get Your Free Painting Estimate"
        description="We give firm quotes. The price we give is the price you pay. No surprises, no hidden fees."
        image="/images/hero-1.webp"
        imageAlt="Request a free painting estimate"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[500px] text-center">
          <p className="mb-8 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Interior, exterior, or cabinets — tell us about your project and we'll get back to you within 2 business days. Most estimates are done in one visit.
          </p>
          {/* <!-- BOOKING_EMBED --> */}
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[700px]">
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Shape of Paint is licensed and insured, serving homeowners across Vancouver and the Lower Mainland. We specialize in interior painting, exterior painting, and spray-finished cabinet refinishing. A 30% deposit is collected when the quote is accepted, with the balance due upon final walkthrough. We accept cash, credit, or e-transfer.
          </p>
        </div>
      </SectionWrapper>

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
