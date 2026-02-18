import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Langley BC | Interior & Exterior | Shape of Paint",
  description: "Professional house painters in Langley, BC. Interior, exterior, and cabinet painting for Walnut Grove, Willoughby, Fort Langley, and surrounding neighbourhoods. Licensed, insured, and trusted by local homeowners.",
};

export default function LangleyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Langley, BC"
        description="Expert interior and exterior painting services for Langley homeowners. Licensed, insured, and committed to quality."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Langley Interior & Exterior Painting Services
          </h2>
          <div className="space-y-6 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              Painters Langley BC: If you live in Langley, you know the challenge. Your home faces Vancouver's unpredictable weather. Rain, moisture, and temperature swings wear down exterior paint faster than most regions. That's where we come in. Shape of Paint brings professional, licensed house painting to every corner of Langley — from Walnut Grove's family neighbourhoods to the heritage charm of Fort Langley.
            </p>
            <p>
              Whether you're painting a bedroom, refreshing your front exterior, or transforming kitchen cabinets, we handle it with meticulous prep and premium coatings. We listen to your vision, offer honest colour advice, and deliver results that match Langley's quality standards. No shortcuts. No surprises.
            </p>
            <p>
              Your home is your biggest investment. The paint job is the first thing people see. We make sure it makes the right impression — and lasts for years, not months. From Brookswood's horse country estates to Aldergrove's rural developments, Langley homeowners trust us to get it right.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Langley Painters"
        heading="Professional Interior & Exterior Painting for Every Home"
        description="We paint walls, ceilings, trim, siding, stucco, and cabinets. From single-room updates to full-house renovations, our crew brings craftsmanship and attention to detail on every project. You pick the colours and style. We handle the prep, application, and cleanup — leaving your home looking brand new."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Professional exterior painting in Langley, BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Langley Neighbourhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal text-text-secondary">
            <p className="font-medium text-foreground">We paint homes throughout Langley, including:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Walnut Grove</strong> — Growing family neighbourhoods with new and established homes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Willoughby</strong> — Rapid residential growth with mixed development and family properties</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Murrayville</strong> — Quiet, established neighbourhood with well-maintained homes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Fort Langley</strong> — Heritage community with charming character homes and river proximity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Brookswood</strong> — Horse country with rural estates and large properties</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Aldergrove</strong> — Mix of rural farms, estates, and new suburban developments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Langley City</strong> — Urban core with diverse housing styles and property types</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-normal text-text-secondary">
              Whether you need interior walls refreshed, exterior protection from BC weather, or beautiful cabinet finishes, we've got you covered.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/services/interior"
                className="text-base font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Interior Painting
              </Link>
              <br />
              <Link
                href="/services/exterior"
                className="text-base font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Exterior Painting
              </Link>
              <br />
              <Link
                href="/services/cabinets"
                className="text-base font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Cabinet Painting
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to Transform Your Langley Home?"
        description="Get a free, no-obligation estimate for your painting project. We'll visit your home, assess your needs, and provide a firm quote with no hidden charges. From colour consultation to final walkthrough, we're here to make your vision real."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Interior painting project in Langley, BC"
      />
    </>
  );
}
