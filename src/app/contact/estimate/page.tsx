import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Painting Estimate Vancouver",
  description: "Request your free painting estimate from Shape of Paint. Vancouver & Lower Mainland interior, exterior & cabinet painting. Call 604-353-7378.",
};

const instagramImages = [
  { src: "/images/ig-1.jpg", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.jpg", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.jpg", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.jpg", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.jpg", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.jpg", alt: "Shape of Paint project 6" },
];

export default function EstimatePage() {
  return (
    <>
      <PageHero
        heading="Get Your Free Painting Estimate"
        description="Firm quotes only — the price we give you is the price you pay. No hidden fees. No surprises."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[500px] text-center">
          <p className="mb-8 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Whether your project is interior, exterior, cabinets, or custom — tell us about it and we'll get back to you within 2 business days. Most estimates are done in a single visit.
          </p>
          {/* <!-- BOOKING_EMBED --> */}
          <Button
            asChild
            className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-xs font-medium uppercase tracking-[0.2em]"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[700px]">
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Shape of Paint is licensed and insured, proudly serving homeowners across Vancouver and the Lower Mainland. We specialize in interior painting, exterior painting, and spray-finished cabinet refinishing. 30% deposit when the quote is accepted. Balance due only when you're 100% happy. Cash, credit, or e-transfer.
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
