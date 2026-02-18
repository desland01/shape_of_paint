import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Richmond BC | Interior & Exterior | Shape of Paint",
  description:
    "Professional house painters in Richmond, BC serving Steveston, Ironwood, Brighouse, and more. Interior & exterior painting with master craftsmanship. Licensed, insured. Call 604-353-7378.",
};

export default function RichmondAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Richmond, BC"
        description="Professional interior and exterior painting for Richmond homeowners. Licensed, insured, and trusted with the details that matter."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Trusted Painters for Richmond Homes
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            When you need painters in Richmond BC, you need professionals who understand your community. Richmond is a thriving island city with unique character — from the heritage charm of Steveston's fishing village to modern condos along the Canada Line. Your home deserves painters who respect that diversity and deliver the craftsmanship your neighbourhood expects.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We've painted hundreds of Richmond homes. We know the moisture challenges from sea-level proximity and the river delta. We understand that many Richmond residents live in strata complexes, townhomes, and contemporary condos that demand precision finishing. Whether you're refreshing a Brighouse family home, updating a Terra Nova townhouse, or maintaining a Steveston heritage property, we bring the same meticulous approach: transparent timelines, no surprises, and results you'll love.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint has become the go-to choice for Richmond painters because we listen first. You tell us your vision — interior refresh, exterior protection, cabinet transformation — and we execute with the attention to detail that separates good painters from great ones. No cookie-cutter quotes. No guessing about timelines. Just honest, expert craftsmanship.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Richmond Painters"
        heading="Interior & Exterior Painting for Your Richmond Home"
        description="Your Richmond home faces specific challenges — moisture from proximity to water, diverse architectural styles, and the need for finishes that last. We handle interior walls, ceilings, trim, and baseboards with flawless precision. On the exterior, we use premium coatings engineered for BC's coastal climate, protecting your siding, stucco, and trim for years. From Steveston to Ironwood to Broadmoor, we're the Richmond painters homeowners and designers recommend."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Professional exterior painting services in Richmond BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Richmond Neighbourhoods We Serve
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We proudly paint homes throughout Richmond's best neighbourhoods:
          </p>
          <div className="grid grid-cols-2 gap-3 text-lg font-normal text-text-secondary md:gap-4">
            <div>• Steveston</div>
            <div>• Ironwood</div>
            <div>• Broadmoor</div>
            <div>• Terra Nova</div>
            <div>• Brighouse</div>
            <div>• Seafair</div>
            <div>• Thompson</div>
            <div>• Hamilton</div>
          </div>
          <p className="mt-6 text-lg font-normal leading-relaxed text-text-secondary">
            Whether your neighbourhood is known for established family homes, new construction, or waterfront living, we understand the unique needs of Richmond's diverse communities. We serve all of Richmond and can schedule your free estimate quickly.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Whatever your painting needs in Richmond, we have the expertise and experience to deliver stunning results. Explore how we can transform your home:
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
                Fresh walls, flawless trim, and expert colour selection for every room in your Richmond home.
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
                Durable coatings built for Richmond's coastal weather and moisture challenges.
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
        heading="Ready to Transform Your Richmond Home?"
        description="Schedule a no-obligation free estimate with Shape of Paint. We'll visit your home, discuss your vision, and provide a firm quote with no surprises. Join hundreds of Richmond homeowners and designers who've trusted us with their most important spaces."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Interior painting project in Richmond BC home"
      />
    </>
  );
}
