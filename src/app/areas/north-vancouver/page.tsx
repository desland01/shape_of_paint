import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters North Vancouver BC | Shape of Paint",
  description:
    "Expert painters in North Vancouver, BC. Interior & exterior painting for Lower Lonsdale, Lynn Valley, Deep Cove. Licensed, insured. Call 604-353-7378.",
};

export default function NorthVancouverAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in North Vancouver, BC"
        description="Expert interior and exterior painting for North Shore homes. Licensed, insured, and built for Vancouver's wet climate."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Interior & Exterior Painting Services in North Vancouver
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            North Vancouver has some of the most beautiful homes in the Lower Mainland. Waterfront condos in Lower Lonsdale (LoLo). Mountain-view properties in Lynn Valley and Upper Lonsdale. Hidden gems tucked into Deep Cove and Edgemont. Every one of them faces the same challenge: rain.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            The North Shore gets more rainfall than most of Vancouver. That means moisture is always trying to find a way into your walls, trim, and siding. Your exterior paint isn't just about looks—it's your home's first line of defense against the elements.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            That's where we come in. Shape of Paint has spent years perfecting coatings and prep work for homes that live in North Vancouver's wet climate. We know which primers stop moisture from creeping through. We know the prep work that prevents paint failure on stucco. We know how to protect wooden siding from the constant dampness.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Inside your home, we handle everything from fresh living room walls to detailed trim work on staircases. Your North Vancouver home deserves paint that lasts. Paint that looks clean and fresh for years. Not paint that peels in two seasons because someone cut corners on prep.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="North Vancouver Painters"
        heading="Built for North Shore Weather"
        description="Your home sits in the shadow of Grouse Mountain. You get incredible views. You also get constant moisture, rain, and humidity that breaks down cheap paint systems. We use premium coatings rated for harsh coastal climates. We prep wood, stucco, and vinyl siding the right way. The result: paint that actually protects your investment and looks incredible for a decade or more. That's the North Vancouver difference."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting in North Vancouver"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            North Vancouver Neighbourhoods We Serve
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Whether you're in Lower Lonsdale's vibrant walkable neighbourhood, the quiet tree-lined streets of Lynn Valley, the scenic waterfront of Deep Cove, or the established family homes of Edgemont, we're your painters. We also serve Norgate, Upper Lonsdale, and everything in between.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-background p-4 text-lg font-normal text-text-secondary">
              • Lower Lonsdale (LoLo)
            </div>
            <div className="rounded-lg bg-background p-4 text-lg font-normal text-text-secondary">
              • Lynn Valley
            </div>
            <div className="rounded-lg bg-background p-4 text-lg font-normal text-text-secondary">
              • Deep Cove
            </div>
            <div className="rounded-lg bg-background p-4 text-lg font-normal text-text-secondary">
              • Edgemont
            </div>
            <div className="rounded-lg bg-background p-4 text-lg font-normal text-text-secondary">
              • Norgate
            </div>
            <div className="rounded-lg bg-background p-4 text-lg font-normal text-text-secondary">
              • Upper Lonsdale
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Every home is different. Some need fresh{" "}
            <Link
              href="/services/interior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              interior painting
            </Link>{" "}
            to transform living spaces. Others need durable{" "}
            <Link
              href="/services/exterior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              exterior painting
            </Link>{" "}
            to weather North Shore storms for years to come. If you're thinking about upgrading your kitchen or bathroom, our{" "}
            <Link
              href="/services/cabinets"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              cabinet painting
            </Link>{" "}
            service gives you a brand-new look without the renovation price tag. Whatever your North Vancouver home needs, we've got the expertise and the finish quality to make it happen.
          </p>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to transform your North Vancouver home?"
        description="Get a free estimate from licensed, insured painters who understand North Shore homes."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.webp"
        imageAlt="Interior painting in North Vancouver"
      />
    </>
  );
}
