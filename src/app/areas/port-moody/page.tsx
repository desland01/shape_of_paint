import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

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
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Port Moody Interior & Exterior Painting Services
          </h2>
          <div className="space-y-6 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              House painters Port Moody: Port Moody is known as the City of the Arts. Your home deserves craftsmanship that matches. Located between the Burrard Inlet and Coast Mountains, Port Moody homes face unique challenges — moisture from the inlet, temperature shifts, and the need for finishes that look polished while standing up to coastal weather. That's where we come in.
            </p>
            <p>
              Shape of Paint brings professional painting expertise to every corner of Port Moody — from Heritage Mountain's view properties to the compact, vibrant Moody Centre neighbourhood. Whether you're painting a bedroom, refreshing your exterior before the season changes, or transforming cabinets, we handle it with precision and care. We listen to your goals, offer expert colour advice, and deliver results that enhance your home's character.
            </p>
            <p>
              Port Moody is a community that values quality and creativity. Your paint job should reflect that. From the arts community to families along Rocky Point Park, Port Moody homeowners trust us to get it right the first time. No shortcuts. Just beautiful, lasting results.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Port Moody Painters"
        heading="Interior & Exterior Painting Built for Coastal Living"
        description="We paint walls, ceilings, trim, siding, decks, and cabinets — using premium coatings formulated for BC's moisture and weather. From single-room refreshes to full-exterior renovations, our team brings attention to detail on every project. You choose the colours and style. We handle everything else — prep, application, cleanup, and your satisfaction."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Professional interior painting in Port Moody, BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-normal text-text-secondary">
              Whether you need interior walls refreshed, exterior protection from coastal weather, or beautiful cabinet finishes, we deliver professional results every time.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/services/interior"
                className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Interior Painting
              </Link>
              <br />
              <Link
                href="/services/exterior"
                className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Exterior Painting
              </Link>
              <br />
              <Link
                href="/services/cabinets"
                className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
              >
                Cabinet Painting
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to Paint Your Port Moody Home?"
        description="Get a free, no-obligation estimate for your painting project. We'll visit your home, listen to your vision, offer expert colour advice, and provide a firm quote with no hidden fees. From consultation to final walkthrough, we're committed to your satisfaction."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Exterior painting project in Port Moody, BC"
      />
    </>
  );
}
