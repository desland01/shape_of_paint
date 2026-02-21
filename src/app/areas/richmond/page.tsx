import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";

import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Painters Richmond BC | Shape of Paint",
  description:
    "Painters Richmond BC trusted by 200+ homeowners. Interior, exterior, and cabinet painting with artisan craftsmanship. Licensed and insured. Free estimates.",
};

export default function RichmondAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Richmond, BC"
        description="Your Richmond home deserves painters trusted with the details that matter. Licensed, insured, and committed to your vision."
        image="/images/hero-2.webp"
        imageAlt="Professional painters in Richmond BC"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Island Living, Enduring Finishes
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            When you need painters in Richmond BC, you want a team that knows your community. Richmond is a thriving island city — from the heritage charm of Steveston's fishing village to modern condos along the Canada Line. Your home deserves painters who respect that range and deliver the quality your neighbourhood expects.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We've painted hundreds of Richmond homes. We know the moisture problems from sea-level air and the river delta. Many Richmond homes are strata complexes, townhomes, and condos that need precision finishing. Whether you're refreshing a Brighouse family home, updating a Terra Nova townhouse, or keeping a Steveston heritage property sharp, we bring clear timelines, no surprises, and results you'll love.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            You get painters who listen first. You tell us your vision — interior refresh, exterior protection, cabinet transformation — and we deliver with the care that sets great painters apart. No cookie-cutter quotes. No guessing about timelines. Just honest, expert work.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Richmond Painters"
        heading="Interior & Exterior Painting for Your Richmond Home"
        description="Your Richmond home faces real challenges — moisture from nearby water, different building styles, and the need for finishes that last. We handle interior walls, ceilings, trim, and baseboards with care. On the exterior, we use professional-grade coatings built for BC's coastal climate. Your siding, stucco, and trim stay protected for years. From Steveston to Ironwood to Broadmoor, we're the Richmond painters homeowners recommend."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting services in Richmond BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
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
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Whatever your painting needs in Richmond, you get the expertise and experience that delivers stunning results. Explore how we can transform your home:
          </p>
          <div className="space-y-4">
            <div>
              <Link
                href="/services/interior"
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
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
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
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
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Cabinet Painting & Refinishing
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Spray-finished kitchen and bathroom cabinets with an artisan finish that rivals custom cabinetry.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Transform Your Richmond Home?"
        description="Request your free estimate today. We'll visit your home, talk about your project, and give you a firm quote with no surprises. Hundreds of Richmond homeowners already trust us with their homes."
        ctaText="Start Your Project"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting project in Richmond BC home"
      />
    </>
  );
}
