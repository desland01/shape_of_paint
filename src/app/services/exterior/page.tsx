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
  description: "Exterior painting in Vancouver by licensed professionals. Siding, stucco, trim, soffits & decks with professional coatings built for BC weather. Free estimate.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
];

export default function ExteriorPaintingPage() {
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "Exterior Painting",
      description:
        "Exterior painting in Vancouver by licensed professionals. Siding, stucco, trim, soffits and decks with professional coatings built for BC weather.",
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
        description="Siding, stucco, trim, soffits, and decks. Professional coatings built to handle Vancouver rain, moisture, and UV."
        image="/images/exterior.webp"
        imageAlt="Exterior house painting by Shape of Paint"
      />

      <FeatureSection
        eyebrow="Built for BC Weather"
        heading="Exterior paint built to last in Vancouver"
        description="Vancouver rain, moisture, and temperature swings destroy bad paint jobs fast. Our process starts with power washing, scraping, sanding, caulking, and priming every surface. Then we apply professional-grade coatings made for the West Coast climate. Your finish will look great 7-10 years from now."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting project by Shape of Paint"
      />

      <SectionWrapper variant="warm">
        <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
          Exterior Painting Services We Offer
        </h2>
        <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
          <li>Siding — Wood, Hardie board, vinyl, and composite siding coated for lasting curb appeal and weather protection.</li>
          <li>Stucco — Specialized elastomeric and acrylic coatings for stucco exteriors that flex with BC temperature changes.</li>
          <li>Trim and fascia — Crisp, weather-resistant finishes on all exterior trim that keep moisture out and hold up season after season.</li>
          <li>Soffits — Detailed work on overhead surfaces that many painters overlook. We treat them with the same care as every visible face of your home.</li>
          <li>Decks and porches — Staining and sealing that protects your wood from Vancouver rain and holds through every season.</li>
          <li>Front doors and garage doors — Colors and finishes that match your home and look great from the street.</li>
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">Explore Our Other Services</h2>
        <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
          Need work inside your home too? Our{" "}
          <Link href="/services/interior" className="font-medium text-foreground hover:text-link-hover transition-colors duration-300">
            interior painting in Vancouver
          </Link>{" "}
          covers walls, ceilings, trim, baseboards, and specialty finishes. We also offer{" "}
          <Link href="/services/cabinets" className="font-medium text-foreground hover:text-link-hover transition-colors duration-300">
            spray-finished cabinet painting
          </Link>{" "}
          that delivers a designer-quality finish factory replacements cannot match.
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
