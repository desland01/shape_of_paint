import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Surrey BC | Interior & Exterior | Shape of Paint",
  description:
    "Professional painters in Surrey BC serving Fleetwood, Newton, and Cloverdale. Interior and exterior painting for your home. Free estimates.",
};

export default function SurreyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Surrey, BC"
        description="Professional interior and exterior painting services for Surrey's largest neighbourhoods. Licensed, insured, and built for BC weather."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Interior & Exterior Painting Services in Surrey
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Surrey is the largest city in the Lower Mainland. Your home needs painters who understand exactly what that means. More humidity. More rain. Weather that changes fast. We're painters Surrey homeowners call when they want results that last.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Whether you live in Fleetwood, Newton, Cloverdale, South Surrey, Guildford, or Panorama Ridge, your home faces the same tough conditions. Your exterior takes a beating from constant dampness and salt air. Your interior needs durable, beautiful finishes that handle moisture without peeling or cracking. We paint every room and every surface. Walls, ceilings, trim, baseboards, decks, siding, stucco, and more. You pick the colours. We handle the prep, application, and cleanup.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Our team has painted hundreds of Surrey homes. We know which finishes stand up to our climate. We know which prep steps prevent future problems. And we know how to schedule around Surrey's weather so your project stays on track. No surprises. No delays. Just solid craftsmanship.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Surrey Painters"
        heading="Why Local Knowledge Matters"
        description="Surrey homes have specific needs. Your exterior paint has to resist persistent dampness and freeze-thaw cycles. Your interior needs coatings that handle humidity without bubbling or peeling. We've painted Surrey homes in every neighbourhood — Fleetwood, Newton, Cloverdale, and beyond. We know the challenges your roof, deck, and siding face. We know which primers seal properly in Surrey's climate. And we know how to deliver professional results on time and within budget. When you hire Shape of Paint, you're hiring painters who live and work in the same communities you do."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Exterior painting in Surrey BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Surrey Neighbourhoods We Serve
          </h2>
          <div className="space-y-6 text-lg font-normal leading-relaxed text-text-secondary">
            <div>
              <p className="mb-2 font-semibold text-foreground">Fleetwood</p>
              <p>
                Homes in Fleetwood battle constant rain and moisture. Your exterior siding needs protection. We paint Fleetwood decks, siding, and trim with finishes built to last.
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">Newton</p>
              <p>
                Newton's older homes need experienced painters who understand how to prep vintage exteriors and seal interior walls properly. We've handled dozens of Newton projects.
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">Cloverdale</p>
              <p>
                Cloverdale families trust us with their interior renovations and exterior refresh. From kitchen cabinets to full home painting, we deliver results that match your vision.
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">South Surrey & Guildford</p>
              <p>
                These neighbourhoods host some of Surrey's most beautiful homes. We bring the same attention to detail that designers demand. Master finishes. Zero shortcuts.
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">Panorama Ridge</p>
              <p>
                Higher elevation homes face wind and weather. Your exterior coating needs to withstand it all. We've perfected the prep and finish for Panorama Ridge homes.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint delivers three core services to Surrey homeowners. Our{" "}
            <Link
              href="/services/interior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              interior painting
            </Link>{" "}
            service covers walls, ceilings, trim, baseboards, and specialty finishes. If you're ready to transform your home's exterior, check out our{" "}
            <Link
              href="/services/exterior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              exterior painting in Vancouver
            </Link>{" "}
            service — the same expertise and techniques we bring to every Surrey project. And if your kitchen or bathroom cabinets need a refresh, our{" "}
            <Link
              href="/services/cabinets"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              cabinet painting services
            </Link>{" "}
            can make them look brand new at a fraction of replacement cost. Every service includes a firm quote, daily updates, and a final walkthrough where we don't leave until you're happy.
          </p>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to transform your Surrey home?"
        description="Surrey homeowners deserve painters who understand their neighbourhoods. Get a free, no-pressure estimate for your interior, exterior, or cabinet project. We'll walk you through options, answer questions, and give you a firm price with no surprises."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Interior painting in Surrey BC"
      />
    </>
  );
}
