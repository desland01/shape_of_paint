import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Exterior Painting Vancouver BC",
  description: "Exterior painting in Vancouver by licensed professionals. Siding, stucco, trim, soffits & decks with premium products built for BC weather. Free estimate.",
};

const instagramImages = [
  { src: "/images/ig-1.jpg", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.jpg", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.jpg", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.jpg", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.jpg", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.jpg", alt: "Shape of Paint project 6" },
];

export default function ExteriorPaintingPage() {
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "Exterior Painting",
      description:
        "Exterior painting in Vancouver by licensed professionals. Siding, stucco, trim, soffits and decks with premium products built for BC weather.",
      url: `${siteConfig.url}/services/exterior`,
    })
  );
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: "Exterior Painting", url: `${siteConfig.url}/services/exterior` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <PageHero
        heading="Exterior Painting in Vancouver"
        description="Siding, stucco, trim, soffits, and decks — premium coatings built to withstand Vancouver rain, moisture, and UV exposure."
      />

      <FeatureSection
        eyebrow="Built for BC Weather"
        heading="Exterior paint that actually lasts in Vancouver"
        description="Vancouver's rain, moisture, and temperature swings destroy cheap paint jobs in 2–3 years. Our process starts with thorough surface prep — power washing, scraping, sanding, caulking, and priming every surface before a single coat goes on. We use premium exterior-grade coatings selected specifically for the West Coast climate. The result? A finish that protects your home and looks great 7–10 years from now."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Exterior painting project by Shape of Paint"
      />

      <SectionWrapper variant="warm">
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
          Exterior Painting Services We Offer
        </h2>
        <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
          <li>Siding — Wood, Hardie board, vinyl, and composite siding expertly finished for maximum curb appeal and weather protection.</li>
          <li>Stucco — Specialized elastomeric and acrylic coatings for stucco exteriors that flex with BC temperature changes.</li>
          <li>Trim and fascia — Crisp, weather-resistant finishes on all exterior trim that keep moisture out and look sharp for years.</li>
          <li>Soffits — Detailed work on overhead surfaces that most painters rush through. We don't.</li>
          <li>Decks and porches — Staining and sealing that protects your wood from Vancouver rain and keeps it looking great through every season.</li>
          <li>Front doors and garage doors — Bold, welcoming finishes that boost curb appeal the moment someone drives up.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Explore Our Other Services</h2>
        <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
          Need work inside your home too? Our{" "}
          <Link href="/services/interior" className="font-semibold text-foreground transition-opacity hover:opacity-70">
            interior painting in Vancouver
          </Link>{" "}
          covers walls, ceilings, trim, baseboards, and specialty finishes. We also offer{" "}
          <Link href="/services/cabinets" className="font-semibold text-foreground transition-opacity hover:opacity-70">
            spray-finished cabinet painting
          </Link>{" "}
          that transforms tired kitchens for a fraction of the cost of replacing.
        </p>
      </SectionWrapper>

      <Testimonials
        heading="What Vancouver homeowners say about our exterior painting"
        testimonials={[...siteConfig.testimonials]}
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
