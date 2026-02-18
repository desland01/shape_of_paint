import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

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
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Professional Painting Services in Port Coquitlam
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Port Coquitlam — or PoCo as locals call it — has a heart. It's family-oriented, community-minded, and full of homes with character. Your neighborhood has roots running deep. You've got houses from the 1970s and 80s sitting proudly next to newer developments. The Traboulay PoCo Trail brings people together. Families gather for the May Day Parade. The Coquitlam River runs through your backyard. The WCE station connects you to the region. And through it all, your homes need painters who get it — painters who understand how Vancouver's damp climate challenges siding, how older trim responds to prep and patience, and how new homes need precision finishing that inspires.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            We're house painters in Port Coquitlam who actually know Port Coquitlam. We've painted living rooms in Citadel Heights, refreshed exteriors in Mary Hill, tackled kitchen cabinets in Birchland Manor, and understood the unique charm of Downtown PoCo. We show up when we say we will. We prep like it's our own home. We communicate every step. And we leave your space looking better than you imagined — on time and on budget.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Ready to give your PoCo home the attention it deserves? Call us for a free estimate. No hidden charges, no surprises — just honest painters who care about your neighborhood as much as you do.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Port Coquitlam Painters"
        heading="Painting That Honors Your Home"
        description="Whether your Port Coquitlam home was built in the 70s or last year, it deserves expert care. We handle interior walls, ceilings, and cabinets with flawless finishes that transform how you live. For exteriors, we use premium coatings that stand up to heavy rain, moisture, and harsh BC sun — protecting your investment for years. From Citadel Heights to Shaughnessy to Downtown PoCo, we bring craftsmanship to every neighborhood."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Professional exterior painting in Port Coquitlam"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Port Coquitlam Neighborhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              <span className="font-medium text-foreground">Citadel Heights:</span> Elevated views and proud homes. We've completed interior and exterior projects here that earned homeowners genuine pride.
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
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
        heading="Ready to Transform Your Port Coquitlam Home?"
        description="Get a free, no-obligation estimate from our team. We'll walk through your project, discuss colors and finishes, answer your questions, and give you a firm price before we start. That's our promise to PoCo homeowners."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Professional interior painting in Port Coquitlam"
      />
    </>
  );
}
