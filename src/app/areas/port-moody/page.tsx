import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "House Painters Port Moody BC | Shape of Paint",
  description: "Professional house painters in Port Moody, BC. Interior, exterior, and cabinet painting for Heritage Mountain, Glenayre, Inlet Centre, and all Port Moody neighbourhoods. Licensed, insured, trusted by local homeowners.",
};

export default function PortMoodyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Port Moody, BC"
        description="Expert painting services for Port Moody homeowners. Professional, licensed, and ready to bring your vision to life."
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
              House painters Port Moody: Port Moody is known as the City of the Arts. Your home deserves quality work to match. Sitting between the Burrard Inlet and Coast Mountains, Port Moody homes face real challenges — moisture from the inlet, temperature shifts, and the need for finishes that look great and hold up to coastal weather. That's where we come in.
            </p>
            <p>
              Shape of Paint brings professional painting to every corner of Port Moody — from Heritage Mountain's view properties to Moody Centre's walkable core. Painting a bedroom? Refreshing your exterior before the season changes? Transforming cabinets? We handle it with precision and care. We listen, offer colour advice, and deliver results that bring out your home's best.
            </p>
            <p>
              Port Moody is a community that values quality and creativity. Your paint job should reflect that. From the arts community to families along Rocky Point Park, Port Moody homeowners trust us to get it right the first time. Beautiful, lasting results.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Port Moody Painters"
        heading="Interior & Exterior Painting Built for Coastal Living"
        description="We paint walls, ceilings, trim, siding, decks, and cabinets — using professional-grade coatings built for BC's moisture and weather. From a single room to a full exterior, our team brings care to every project. You choose the colours and style. We handle everything else — prep, painting, cleanup, and your satisfaction."
        ctaText="Get Your Free Estimate"
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
        description="Get a free estimate for your painting project. We'll visit your home, listen to your ideas, offer colour advice, and give you a firm quote with no hidden fees. From first call to final walkthrough, your satisfaction is our goal."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting project in Port Moody, BC"
      />
    </>
  );
}
