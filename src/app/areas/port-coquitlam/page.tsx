import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "House Painters Port Coquitlam BC | Shape of Paint",
  description:
    "Professional house painters in Port Coquitlam, BC. Interior & exterior painting serving Citadel Heights, Oxford Heights, Mary Hill, and all PoCo neighborhoods. Free estimates. Call 604-353-7378.",
};

export default function PortCoquitlamAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Port Coquitlam, BC"
        description="Expert interior and exterior painting for Port Coquitlam homes. We understand your community and deliver craftsmanship that matches your pride in PoCo."
        image="/images/exterior-portfolio-7.webp"
        imageAlt="House painting in Port Coquitlam"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Community Roots, Craftsmanship That Endures
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Port Coquitlam — or PoCo as locals call it — has heart. It's family-focused, community-minded, and full of homes with character. Houses from the 1970s and 80s sit next to newer builds. The Traboulay PoCo Trail brings people together. Families gather for the May Day Parade. The Coquitlam River runs through your backyard. Your homes need painters who get it — painters who know how Vancouver's damp climate wears on siding, how older trim needs patient prep, and how new homes need clean, precise finishes.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            We're house painters in Port Coquitlam who actually know PoCo. We've painted living rooms in Citadel Heights, refreshed exteriors in Mary Hill, and tackled kitchen cabinets in Birchland Manor. We show up when we say we will. We prep like it's our own home. We talk to you every step. And we leave your space looking better than you expected — on time and on budget.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Ready to give your PoCo home the attention it deserves? Call us for a free estimate. No hidden charges, no surprises — just honest painters who care about your neighborhood as much as you do.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Port Coquitlam Painters"
        heading="Painting That Honors Your Home"
        description="Whether your Port Coquitlam home was built in the 70s or last year, it deserves expert care. We handle interior walls, ceilings, and cabinets with smooth finishes that change how your home feels. For exteriors, we use professional-grade coatings that stand up to heavy rain and BC sun — protecting your home for years. From Citadel Heights to Shaughnessy to Downtown PoCo, we bring quality to every neighborhood."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting in Port Coquitlam"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Port Coquitlam Neighborhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              <span className="font-medium text-foreground">Citadel Heights:</span> Great views and proud homes. We've finished interior and exterior projects here that homeowners love.
            </p>
            <p>
              <span className="font-medium text-foreground">Oxford Heights:</span> Established, tree-lined, and stable. We understand how to prep and protect the character homes that make this neighborhood special.
            </p>
            <p>
              <span className="font-medium text-foreground">Mary Hill:</span> Diverse and dynamic. We've handled everything from young family homes to estates, respecting the unique mix that makes Mary Hill PoCo's backbone.
            </p>
            <p>
              <span className="font-medium text-foreground">Birchland Manor:</span> A close-knit pocket where cabinets and interior updates have earned us repeat clients and neighborhood word-of-mouth.
            </p>
            <p>
              <span className="font-medium text-foreground">Shaughnessy:</span> Quality and care. Homeowners here value craftsmanship, and we deliver it on every trim piece and wall.
            </p>
            <p>
              <span className="font-medium text-foreground">Downtown PoCo:</span> The heart of the community. We've painted apartments, townhomes, and businesses that keep the downtown vibrant.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-normal leading-relaxed text-text-secondary">
              Whatever your Port Coquitlam home needs, we have the expertise and materials to deliver:
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
        heading="Ready to Transform Your Port Coquitlam Home?"
        description="Get a free, no-obligation estimate from our team. We'll walk through your project, discuss colors and finishes, answer your questions, and give you a firm price before we start. That's our promise to PoCo homeowners."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Professional interior painting in Port Coquitlam"
      />
    </>
  );
}
