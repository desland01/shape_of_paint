import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters West Vancouver BC | Shape of Paint",
  description:
    "Professional house painters for West Vancouver's luxury homes. Upscale interior, exterior, and cabinet painting with attention to premium finishes. Call 604-353-7378 for your free estimate.",
};

export default function WestVancouverAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in West Vancouver, BC"
        description="Luxury painters for West Vancouver's high-end homes and waterfront properties"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Premium Painting for West Vancouver's Most Valued Homes
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            West Vancouver isn't like anywhere else in the Lower Mainland. This is where ocean views, towering cedars, and multi-million-dollar custom homes meet Cypress Mountain peaks and Lighthouse Park trails. You live in one of BC's most beautiful communities — and you expect painters who understand that your home isn't just a residence, it's an investment in your lifestyle. When you paint a custom home in Ambleside, a beachfront property in Dundarave, or an estate in British Properties, every detail matters. The finish quality. The colour accuracy. The timeline. The respect for your space.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            West Vancouver's waterfront exposure means your paint takes a beating. Salt air, intense UV, and rapid weather changes demand premium coatings and expert application. Interior work needs the same precision — whether you're refreshing a high-ceilinged Great Room or refinishing custom cabinetry. Shape of Paint has been the trusted choice for West Vancouver homeowners and interior designers who demand results that match the calibre of their homes.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            When you hire painters in West Vancouver, you're hiring for quality, reliability, and the kind of professionalism that comes from working on prestigious properties across the North Shore. Shape of Paint brings that expertise to every project — firm timelines, transparent communication, premium materials, and a walkthrough where we don't leave until you're completely satisfied.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="West Vancouver Painters"
        heading="High-End Interior & Exterior Painting for Luxury Homes"
        description="Your West Vancouver home deserves painters who understand luxury finishes, premium coatings, and flawless application. Whether it's interior walls and trim with museum-quality prep, exterior paint formulated for coastal exposure, or spray-finished cabinetry that looks professionally crafted, we bring the same meticulous attention to every detail. We work with your design vision, collaborate with interior designers, and deliver the calibre of finish that West Vancouver homeowners expect. High-end results. On time. On budget."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.webp"
        imageAlt="Exterior painting for West Vancouver luxury homes"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            West Vancouver Neighbourhoods We Serve
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Ambleside:</strong> Iconic waterfront village with ocean views, boutique shops, and beachfront properties
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Dundarave:</strong> Coastal community with heritage homes, modern estates, and park access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Caulfeild:</strong> Upscale residential enclave with architectural homes and tree-lined streets
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>British Properties:</strong> Premier luxury neighbourhood with custom estates and panoramic views
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Eagle Harbour:</strong> Quiet waterfront community with secluded homes and ocean access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Horseshoe Bay:</strong> Gateway village with historic character, modern renovations, and ferry access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Panorama Village:</strong> Elevated residential area with mountain views and spacious properties
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Altamont:</strong> Quiet neighbourhood with mature homes and established character
              </span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              West Vancouver homes demand the finest finishes. We specialize in:
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/interior"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Interior Painting
                </Link>
                {" — Premium finishes for high-end homes, custom trim, and accent walls"}
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Exterior Painting
                </Link>
                {" — Coastal-rated coatings that protect against salt air and UV exposure"}
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                  Cabinet Painting
                </Link>
                {" — Luxury spray finishes for designer kitchens and bathrooms"}
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Transform Your West Vancouver Home with Expert Painters"
        description="From Ambleside waterfront to British Properties estates, Shape of Paint delivers the high-end finishes and professional service that West Vancouver homes deserve. Contact us for your free estimate — let's talk about bringing your home to life."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.webp"
        imageAlt="Interior painting for West Vancouver homes"
      />
    </>
  );
}
