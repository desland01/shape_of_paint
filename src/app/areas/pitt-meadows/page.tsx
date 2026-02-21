import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "House Painters Pitt Meadows BC | Shape of Paint",
  description:
    "Trusted house painters in Pitt Meadows, BC. 200+ homes painted with precision. Interior, exterior, and cabinet finishes built for your climate. Free estimates.",
};

export default function PittMeadowsAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Pitt Meadows, BC"
        description="Your Pitt Meadows home faces unique weather challenges. You deserve painters who understand your neighbourhood and deliver finishes that last."
        image="/images/exterior-portfolio-6.webp"
        imageAlt="Exterior painting in Pitt Meadows"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Small-Town Roots, Professional-Grade Results
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Pitt Meadows is a tight-knit community with real character. Your homes tell stories — from cranberry farm roots to newer builds near the WCE station. Whether your house sits near the dyke trails or in Central Pitt Meadows, it faces challenges that generic painters miss. Heavy rain seeps into exterior gaps. Damp air damages interior paint and trim. New builds need clean finishes. Older homes need painters who know 70s-era materials and how they shift with BC seasons.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            You're not hiring generic painters — you're getting neighbours who understand your community. We've painted living rooms in Osprey Village, refreshed exteriors near Golden Ears, and handled kitchen cabinets that needed skill, not shortcuts. Your project gets on-time arrivals, prep like it's our own home, and a finished space that looks better than you expected. That's the Shape of Paint difference.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Ready to transform your Pitt Meadows home? Request your free estimate. No pressure, no hidden fees — just honest painters and a commitment to excellence.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Pitt Meadows Painters"
        heading="Interior and Exterior Painting That Lasts"
        description="Your Pitt Meadows home deserves painters who know the local climate and your neighborhood's needs. We handle interior walls, ceilings, and cabinets with smooth, lasting finishes. For exteriors, we use professional-grade coatings rated for heavy rain and BC sun. From Central Pitt Meadows to the quieter areas near Golden Ears, we deliver quality on every project."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Professional interior painting in Pitt Meadows"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Pitt Meadows Neighborhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              <span className="font-medium text-foreground">Central Pitt Meadows:</span> The heart of our community. We paint everything from young family homes to heritage properties in this established neighborhood.
            </p>
            <p>
              <span className="font-medium text-foreground">South Bonson:</span> A quiet residential area where we've completed interior repaints and cabinet refinishing projects that transformed kitchens and bathrooms.
            </p>
            <p>
              <span className="font-medium text-foreground">North Lougheed:</span> Mixed development with newer homes and properties near the WCE station. We handle both new construction punch lists and established home updates.
            </p>
            <p>
              <span className="font-medium text-foreground">Osprey Village:</span> A close-knit pocket where we've built relationships with homeowners who trust us for both interior and exterior work.
            </p>
            <p>
              <span className="font-medium text-foreground">Golden Ears Area:</span> Rural, beautiful, and remote — homes here need durable exterior coatings that stand up to moisture and isolation. We've got the experience.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-normal leading-relaxed text-text-secondary">
              Whatever your Pitt Meadows home needs, we have the expertise and materials to deliver:
            </p>
            <ul className="space-y-3 text-lg font-normal text-text-secondary">
              <li>
                <Link
                  href="/services/interior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Interior Painting
                </Link>
                — Walls, ceilings, trim, baseboards, and feature walls with precision prep and flawless finishes.
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Exterior Painting
                </Link>
                — Siding, stucco, trim, soffits, and decks with professional-grade coatings built for BC weather.
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Cabinet Painting
                </Link>
                — Kitchen and bathroom cabinets sprayed to a showroom finish. Designer-quality results without the renovation.
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Paint Your Pitt Meadows Home?"
        description="Request your no-obligation estimate today. We'll walk through your project, discuss colours and finishes, answer your questions, and give you a firm price before we start. That's our promise."
        ctaText="Start Your Project"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting in Pitt Meadows"
      />
    </>
  );
}
