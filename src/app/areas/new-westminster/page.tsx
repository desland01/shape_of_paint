import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Painters New Westminster BC | Shape of Paint",
  description:
    "Professional house painters in New Westminster, BC. Interior, exterior, and cabinet painting for heritage homes and modern properties. Call 604-353-7378 for your free estimate.",
};

export default function NewWestminsterAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in New Westminster, BC"
        description="Expert painters for heritage homes, modern condos, and everything in between across the Royal City"
        image="/images/hero-1.webp"
        imageAlt="Painting services in New Westminster"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Your New Westminster Home Deserves the Right Painters
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            New Westminster is one of BC's most historic communities. Your home — whether it's a Victorian gem in Queens Park or a modern condo overlooking the Fraser River — deserves painters who know the Royal City. Moisture, temperature swings, and tough seasonal weather can damage paint fast. That's why painters in New Westminster need to know which coatings last, which prep stops peeling, and how to protect your home year after year.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint serves New Westminster families with a simple approach: listen first, prep well, finish right. We handle interior repaints for Uptown apartments, exterior coatings for Queensborough waterfront properties, and cabinet refinishing across Downtown and Sapperton. Every project gets our full attention — no surprises and a firm quote before we start.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            When you hire Shape of Paint in New Westminster, you get painters who show up on time and communicate daily. We leave your home looking better than you expected. That's how we've earned the trust of hundreds of homeowners across the Royal City.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="New Westminster Painters"
        heading="Heritage Details, Modern Precision"
        description="Your New Westminster home has its own personality. Maybe it's a character home with crown moulding that needs careful work. Maybe it's a modern Queensborough condo with clean lines. Or a Sapperton family home that needs a full refresh. We match our approach to your space — thorough prep, professional-grade coatings, and finishes that last. Walls, ceilings, trim, cabinets, exterior siding — we handle it all. You pick the colours. We handle the rest."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting in New Westminster homes"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            New Westminster Neighbourhoods We Serve
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Uptown:</strong> Modern condos and apartments with urban convenience and SkyTrain access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Downtown:</strong> Historic commercial buildings and loft-style residential conversions
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Sapperton:</strong> Family homes and multi-generational properties with neighbourhood character
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Queens Park:</strong> Heritage homes with period details, crown moulding, and architectural character
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Queensborough:</strong> Waterfront and riverside properties with Fraser River views
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Brow of the Hill:</strong> Hillside homes with mature landscapes and established communities
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Connaught Heights:</strong> Residential neighbourhoods with diverse home styles and ages
              </span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              Whether you need interior refresh, exterior weather protection, or cabinet transformation, Shape of Paint has the expertise:
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/interior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Interior Painting
                </Link>
                {" — Walls, ceilings, trim, and accent features for every room"}
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Exterior Painting
                </Link>
                {" — Siding, stucco, soffits, and decks built for coastal weather"}
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Cabinet Painting
                </Link>
                {" — Spray-finished kitchen and bathroom cabinets that look brand new"}
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Transform Your New Westminster Home?"
        description="From Queens Park heritage homes to Queensborough waterfront properties, we're ready to paint your home with the care and precision it deserves. Get your free estimate today — no pressure, no sales pitch, just honest advice and professional service."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting services in New Westminster"
      />
    </>
  );
}
