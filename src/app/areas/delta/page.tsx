import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Delta BC | Interior & Exterior | Shape of Paint",
  description:
    "Professional house painters in Delta, BC serving Ladner, Tsawwassen, North Delta, and more. Interior & exterior painting with master craftsmanship. Licensed, insured. Call 604-353-7378.",
};

export default function DeltaAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Delta, BC"
        description="Professional interior and exterior painting for Delta homeowners. Licensed, insured, and trusted with the details that matter."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Trusted Painters for Delta Homes
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            When you need painters in Delta BC, you need professionals who understand your community's unique character. Delta is made up of three distinct neighbourhoods — each with its own personality. Tsawwassen offers oceanfront living and vibrant waterfront culture. Ladner feels like a heritage village with established charm. North Delta brings suburban comfort to families seeking newer construction. No matter which Delta neighbourhood you call home, your painters should understand your world.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We've painted hundreds of Delta homes across all three communities. We know how the marine environment affects exterior finishes. We understand the diverse home styles — from heritage village cottages to modern oceanfront properties to suburban family homes. Whether you're refreshing your Ladner heritage home, protecting a Tsawwassen oceanfront property from coastal weather, or updating North Delta's contemporary residences, we bring precision, transparency, and results.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint has earned the trust of Delta homeowners because we listen first and deliver expert craftsmanship every time. You describe your vision — a fresh interior colour scheme, exterior protection for years to come, cabinet transformation — and we execute with meticulous attention to detail. No surprises. No shortcuts. Just the professional painting service Delta homeowners deserve.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Delta Painters"
        heading="Interior & Exterior Painting for Your Delta Home"
        description="Your Delta home deserves painters who understand the region's specific needs. Interior projects include flawless wall finishes, expert trim work, and colours that complement your space. Exterior work uses premium coatings engineered for Delta's marine climate and weather conditions — protecting Tsawwassen oceanfront homes, Ladner heritage properties, and North Delta modern residences. We handle siding, stucco, trim, decks, and soffits with the same precision that keeps homeowners and designers coming back."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Professional interior painting services in Delta BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Delta Neighbourhoods We Serve
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We proudly paint homes throughout Delta's best neighbourhoods:
          </p>
          <div className="grid grid-cols-2 gap-3 text-lg font-normal text-text-secondary md:gap-4">
            <div>• Ladner</div>
            <div>• Tsawwassen</div>
            <div>• North Delta</div>
            <div>• Sunbury</div>
            <div>• Sunshine Hills</div>
            <div>• Annieville</div>
          </div>
          <p className="mt-6 text-lg font-normal leading-relaxed text-text-secondary">
            From Tsawwassen Mills shopping to the BC Ferries terminal, from Boundary Bay's natural beauty to the Delta Nature Reserve, we serve every corner of Delta. Whether you're near farmland or oceanfront, in a heritage home or modern neighbourhood, we understand your area and can schedule your free estimate quickly.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Whatever your painting needs in Delta, we have the expertise and experience to deliver stunning results. Explore how we can transform your home:
          </p>
          <div className="space-y-4">
            <div>
              <Link
                href="/services/interior"
                className="font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Interior Painting
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Fresh walls, flawless trim, and expert colour selection for every room in your Delta home.
              </p>
            </div>
            <div>
              <Link
                href="/services/exterior"
                className="font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Exterior Painting
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Durable coatings built for Delta's coastal weather and marine environment challenges.
              </p>
            </div>
            <div>
              <Link
                href="/services/cabinets"
                className="font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Cabinet Painting & Refinishing
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Spray-finished kitchen and bathroom cabinets that look brand new at a fraction of replacement cost.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to Transform Your Delta Home?"
        description="Schedule a no-obligation free estimate with Shape of Paint. We'll visit your home in Ladner, Tsawwassen, North Delta, or anywhere across Delta, discuss your vision, and provide a firm quote with no surprises. Join hundreds of Delta homeowners and designers who've trusted us with their most important spaces."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Exterior painting project in Delta BC home"
      />
    </>
  );
}
