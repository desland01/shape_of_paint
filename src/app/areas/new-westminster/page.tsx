import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

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
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Your New Westminster Home Deserves the Right Painters
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            New Westminster is one of BC's most historic and vibrant communities. Your home — whether it's a Victorian heritage gem in Queens Park or a modern condo overlooking the Fraser River — deserves painters who understand the character of the Royal City and the specific challenges of our coastal climate. Moisture, temperature swings, and intense seasonal weather can damage paint fast. That's why painters in New Westminster need to know which coatings last, which prep work actually prevents peeling, and how to protect your investment year after year.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint has been serving New Westminster families and homeowners with the same approach: listen first, prepare thoroughly, and finish with precision. We handle interior repaints for Uptown apartments, exterior coatings for waterfront properties in Queensborough, and cabinet refinishing for homes across Downtown and Sapperton. Every project gets our full attention — no shortcuts, no surprises, and a firm quote before we touch anything.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            When you hire Shape of Paint to paint your home in New Westminster, you get painters who show up on time, communicate daily, and leave your home looking better than you imagined. That's not a promise — it's how we've earned the trust of hundreds of homeowners across the Royal City and the Lower Mainland.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="New Westminster Painters"
        heading="Interior & Exterior Painting for Every Home Style"
        description="Your New Westminster home has its own personality. Maybe it's a period character home with crown moulding and hardwood that needs careful, detailed work. Maybe it's a modern Queensborough condo with clean lines and bright spaces. Or maybe it's a Sapperton family home that needs a complete refresh. We adapt our technique to your space — meticulous prep, premium coatings, and finishes that last. From walls and ceilings to trim, baseboards, cabinets, and exterior siding, we handle every detail. You pick the colours. We handle the rest."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.webp"
        imageAlt="Interior painting in New Westminster homes"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
                <strong>Brow of the Hill:</strong> Elevated homes with mature landscapes and established communities
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
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Interior Painting
                </Link>
                {" — Walls, ceilings, trim, and accent features for every room"}
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Exterior Painting
                </Link>
                {" — Siding, stucco, soffits, and decks built for coastal weather"}
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Cabinet Painting
                </Link>
                {" — Spray-finished kitchen and bathroom cabinets that look brand new"}
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to Transform Your New Westminster Home?"
        description="From Queens Park heritage homes to Queensborough waterfront properties, we're ready to paint your home with the care and precision it deserves. Get your free estimate today — no pressure, no sales pitch, just honest advice and professional service."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.webp"
        imageAlt="Exterior painting services in New Westminster"
      />
    </>
  );
}
