import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "House Painters Port Moody BC | Shape of Paint",
  description: "Port Moody's trusted house painters. Coastal-grade finishes for Heritage Mountain, Glenayre, and Inlet Centre. Licensed, insured. Book your free consultation.",
};

export default function PortMoodyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Port Moody, BC"
        description="Your Port Moody home sits between inlet and mountains. You need painters who build every finish for coastal moisture. Licensed, insured, and trusted across Heritage Mountain, Glenayre, and Moody Centre."
        image="/images/exterior-portfolio-8.webp"
        imageAlt="Painting contractors in Port Moody"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            The City of the Arts Deserves Artisan Finishes
          </h2>
          <div className="space-y-6 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              Port Moody is known as the City of the Arts. Your home deserves quality work to match. Sitting between the Burrard Inlet and Coast Mountains, your home faces real challenges — moisture from the inlet, temperature shifts, and the need for finishes that look great and hold up to coastal weather. That's where your choice of painter makes the difference.
            </p>
            <p>
              Shape of Paint brings professional painting to every corner of Port Moody — from Heritage Mountain's view properties to Moody Centre's walkable core. Painting a bedroom? Refreshing your exterior before the season changes? Transforming cabinets? You get precision and care on every surface. You share your vision. You get honest colour advice. And you get results that bring out your home's best.
            </p>
            <p>
              Port Moody is a community that values quality and creativity. Your paint job should reflect that. From the arts community to families along Rocky Point Park, over 75 Port Moody homeowners have trusted us to get it right the first time. Beautiful, lasting results.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Port Moody Painters"
        heading="Interior & Exterior Painting Built for Coastal Living"
        description="Your walls, ceilings, trim, siding, decks, and cabinets all get professional-grade coatings built for BC's moisture and weather. From a single room to a full exterior, you get care on every project. You choose the colours and style. You get everything else handled — prep, painting, cleanup, and a result you're proud of."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Professional interior painting in Port Moody, BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Port Moody Neighbourhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal text-text-secondary">
            <p className="font-medium text-foreground">We paint homes throughout Port Moody, including:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Heritage Mountain</strong> — View properties with mountain and inlet panoramas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Glenayre</strong> — Established neighbourhood with mature trees and family homes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Inlet Centre</strong> — Modern, centrally located community near Burrard Inlet</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Moody Centre</strong> — Vibrant, walkable urban core with shops, cafes, and arts venues</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>College Park</strong> — Family-oriented neighbourhood near trails and schools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Pleasantside</strong> — Quiet residential area with parks and community amenities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Ioco</strong> — Waterfront neighbourhood with industrial heritage and new development</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-normal text-text-secondary">
              Whether you need interior walls refreshed, exterior protection from coastal weather, or beautiful cabinet finishes, we deliver professional results every time.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/services/interior"
                className="text-sm font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Interior Painting
              </Link>
              <br />
              <Link
                href="/services/exterior"
                className="text-sm font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Exterior Painting
              </Link>
              <br />
              <Link
                href="/services/cabinets"
                className="text-sm font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Cabinet Painting
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Paint Your Port Moody Home?"
        description="Your free estimate starts with a home visit. You share your ideas, get honest colour advice, and receive a firm quote with no hidden fees. From first call to final walkthrough, your satisfaction drives every decision."
        ctaText="Talk to Our Team"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting project in Port Moody, BC"
      />
    </>
  );
}
