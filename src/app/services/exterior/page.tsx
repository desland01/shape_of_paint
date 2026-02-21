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
  description: "Most exterior painting in Vancouver fails within 3 years. Bad prep, wrong coatings, no primer. Your home deserves better. Book a free assessment.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver craftsman home with fresh exterior paint" },
  { src: "/images/ig-2.webp", alt: "Exterior trim and soffit detail with lasting finish" },
  { src: "/images/ig-3.webp", alt: "Exterior siding painting on Vancouver residential home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished exterior accent with premium coatings" },
  { src: "/images/ig-5.webp", alt: "Front porch and entryway exterior painting detail" },
  { src: "/images/ig-6.webp", alt: "Before and after exterior painting transformation" },
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
        description="Your exterior paint should protect your home for 8-10 years. Most jobs fail in 3 because prep was skipped. We never skip it. Siding, stucco, trim, soffits, and decks — coated right the first time."
        image="/images/exterior.webp"
        imageAlt="Exterior house painting by Shape of Paint"
        ctaText="Book Your Free Assessment"
        ctaHref="/contact#contact-form"
      />

      <FeatureSection
        eyebrow="Built for BC Weather"
        heading="Exterior paint built to last in Vancouver"
        description="Here is the truth most painters will not tell you: they spray and pray. One coat over dirty siding and call it done. Your home peels in 18 months. We do the opposite. Every surface gets power washed, scraped, sanded, caulked, and primed before a single drop of finish goes on. Then we apply 2 coats of professional-grade coatings built for Vancouver rain, UV, and 5°C swings. Your home stays protected for 8-10 years."
        ctaText="See Our Exterior Work"
        ctaHref="/services/portfolio"
        image="/images/exterior.webp"
        imageAlt="Exterior painting project by Shape of Paint"
      />

      <SectionWrapper variant="warm">
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Every Surface of Your Home, Protected
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li>Siding — Your home's largest surface gets the most attention. Wood, Hardie board, vinyl, and composite siding prepped and coated for years of curb appeal.</li>
            <li>Stucco — Your stucco flexes with BC temperature swings. So do our elastomeric and acrylic coatings. No cracking. No peeling.</li>
            <li>Trim and fascia — Your trim is the first place moisture sneaks in. We seal every edge with weather-resistant finishes that hold up season after season.</li>
            <li>Soffits — The overhead surfaces most painters skip. Your soffits get the same prep and care as every visible face of your home.</li>
            <li>Decks and porches — Your wood takes a beating from Vancouver rain. We stain and seal it to hold through every season.</li>
            <li>Front doors and garage doors — Your entryway sets the tone. We match colors and finishes so your home looks great from the street.</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="md:max-w-[70%]">
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
        </div>
      </SectionWrapper>

      <Testimonials
        heading="200+ Vancouver homeowners trusted us with their exterior — here is what they say"
        testimonials={[...siteConfig.testimonials]}
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
