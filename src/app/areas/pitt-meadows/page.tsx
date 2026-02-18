import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "House Painters Pitt Meadows BC | Shape of Paint",
  description:
    "Professional house painters in Pitt Meadows, BC. Interior & exterior painting serving Central Pitt Meadows, Osprey Village, and all local neighborhoods. Free estimates. Call 604-353-7378.",
};

export default function PittMeadowsAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Pitt Meadows, BC"
        description="Expert interior and exterior painting for Pitt Meadows homes. We know your neighborhood, your weather, and what it takes to protect your investment."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Professional Painting Services in Pitt Meadows
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Pitt Meadows is a tight-knit community with a unique character. Your homes tell stories — from the agricultural roots and cranberry farms to the newer developments rising near the WCE station. Whether your house sits on the quiet edge of the dyke trails or in the heart of Central Pitt Meadows, it faces challenges that generic painters miss. Vancouver's heavy rain seeps into exterior gaps. Interior moisture from our damp climate damages paint and trim. New construction needs precision finishing. And older homes need painters who understand 70s-era materials and how they shift with BC seasons.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            We're not just house painters in Pitt Meadows — we're your neighbors who get it. We've painted living rooms in Osprey Village, refreshed exteriors in Golden Ears communities, and handled kitchen cabinets that needed craft instead of corners cut. We show up on time, prep like it's our own home, and leave your space looking better than you imagined. That's the Shape of Paint difference.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Ready to transform your Pitt Meadows home? Call us for a free estimate. No pressure, no hidden fees — just honest painters and a commitment to excellence.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Pitt Meadows Painters"
        heading="Interior and Exterior Painting That Lasts"
        description="Your Pitt Meadows home deserves painters who understand the local climate and your neighborhood's unique needs. We handle interior walls, ceilings, and cabinets with flawless finishes. For exteriors, we use premium coatings rated for heavy rain, moisture, and harsh BC sun exposure. From Central Pitt Meadows to the quieter areas near Golden Ears, we deliver craftsmanship on every project."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Professional interior painting in Pitt Meadows"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Interior Painting
                </Link>
                — Walls, ceilings, trim, baseboards, and feature walls with precision prep and flawless finishes.
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Exterior Painting
                </Link>
                — Siding, stucco, trim, soffits, and decks with premium coatings built for BC weather.
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Cabinet Painting
                </Link>
                — Kitchen and bathroom cabinets sprayed to a showroom finish. Designer-quality results without the renovation.
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to Paint Your Pitt Meadows Home?"
        description="Get a free, no-obligation estimate from our team. We'll walk through your project, discuss colors and finishes, answer your questions, and give you a firm price before we start. That's our promise."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Professional exterior painting in Pitt Meadows"
      />
    </>
  );
}
