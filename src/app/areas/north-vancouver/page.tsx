import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Painters North Vancouver BC | Shape of Paint",
  description:
    "North Shore homes need coatings built for rain. 200+ homes painted in Lower Lonsdale, Lynn Valley, and Deep Cove. Licensed, insured. Free consultation.",
};

export default function NorthVancouverAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in North Vancouver, BC"
        description="Your North Shore home faces more rain than anywhere else in Metro Vancouver. You need painters who build every finish to withstand it. Licensed, insured, and proven on 200+ homes."
        image="/images/exterior-portfolio-5.webp"
        imageAlt="House painters in North Vancouver"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Coatings Built for North Shore Rain
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            If you own a home in North Vancouver, you own one of the most beautiful properties in the Lower Mainland. A waterfront condo in Lower Lonsdale (LoLo). A mountain-view property in Lynn Valley or Upper Lonsdale. A hidden gem tucked into Deep Cove or Edgemont. And every one of them faces the same challenge: rain.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            The North Shore gets 30% more rainfall than the rest of Metro Vancouver. That means moisture is always trying to find a way into your walls, trim, and siding. Your exterior paint isn't just about looks — it's your home's first line of defense against the elements.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            That's where your choice of painter matters most. Shape of Paint has spent years perfecting coatings and prep work for homes in North Vancouver's wet climate. You get primers that stop moisture from creeping through. Prep work that prevents paint failure on stucco. Protection for wooden siding against constant dampness. The difference shows up 3-5 years from now when your paint still looks fresh.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Inside your home, you get everything from fresh living room walls to detailed trim work on staircases. Your North Vancouver home deserves paint that lasts. Paint that looks clean and fresh for years. Not paint that peels in two seasons because someone cut corners on prep.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="North Vancouver Painters"
        heading="Built for North Shore Weather"
        description="Your home sits in the shadow of Grouse Mountain. You get incredible views. You also get constant moisture, rain, and humidity that destroys standard paint systems. We use professional-grade coatings rated for harsh coastal climates. We prep wood, stucco, and vinyl siding the right way. The result: paint that protects your investment and looks great for a decade or more. That's the North Vancouver difference."
        ctaText="Request Your Consultation"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting in North Vancouver"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
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
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Every home is different. Some need fresh{" "}
            <Link
              href="/services/interior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              interior painting
            </Link>{" "}
            to transform living spaces. Others need durable{" "}
            <Link
              href="/services/exterior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              exterior painting
            </Link>{" "}
            to weather North Shore storms for years to come. If you're thinking about upgrading your kitchen or bathroom, our{" "}
            <Link
              href="/services/cabinets"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              cabinet painting
            </Link>{" "}
            service gives you a brand-new look without the renovation price tag. Whatever your North Vancouver home needs, we've got the expertise and the finish quality to make it happen.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to transform your North Vancouver home?"
        description="Your free estimate comes from licensed, insured painters who have finished 200+ North Shore homes. No pressure. Just honest advice and a firm quote."
        ctaText="Start Your Project"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting in North Vancouver"
      />
    </>
  );
}
