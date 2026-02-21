import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painters New Westminster BC | Shape of Paint",
  description:
    "200+ Royal City homes painted with precision. Interior, exterior, and cabinet painting for New Westminster heritage and modern properties. Book your free estimate.",
};

const faqItems = [
  {
    question: "How much does house painting cost in New Westminster?",
    answer:
      "Interior painting in New Westminster ranges from $3-8 per square foot, and exterior from $4-12 per square foot. Heritage homes in Queen's Park often cost more due to detailed trim, crown moulding, and period-specific prep work. Shape of Paint provides a firm quote after visiting your home — no hidden fees.",
  },
  {
    question: "Can you paint heritage homes in New Westminster?",
    answer:
      "Yes. Shape of Paint has experience with New Westminster's heritage character homes, especially in the Queen's Park neighbourhood. We understand period-appropriate prep techniques, detailed trim work, and how to protect original architectural features while delivering a finish that lasts 8-10 years.",
  },
  {
    question: "What exterior paint lasts longest in New Westminster?",
    answer:
      "Premium acrylic latex with mildew resistance performs best in New Westminster. The Royal City's position along the Fraser River adds extra moisture to the air, which accelerates paint breakdown on unprotected surfaces. Shape of Paint selects coatings rated for high-humidity coastal climates.",
  },
  {
    question: "How do I choose paint colours for my New Westminster home?",
    answer:
      "Shape of Paint includes a free colour consultation with every project. We bring sample boards to your home so you see colours in your actual lighting. If you live in a heritage neighbourhood with colour guidelines, we help you choose options that complement both your home's character and community standards.",
  },
];

export default function NewWestminsterAreaPage() {
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Areas", url: `${siteConfig.url}/areas` },
      { name: "New Westminster", url: `${siteConfig.url}/areas/new-westminster` },
    ])
  );
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "House Painting in New Westminster",
      description:
        "Professional interior, exterior, and cabinet painting for New Westminster homes. Heritage and modern properties across the Royal City. Licensed and insured.",
      url: `${siteConfig.url}/areas/new-westminster`,
      areaServed: "New Westminster",
    })
  );
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="House Painters in New Westminster, BC"
        description="Your heritage home or modern condo deserves painters who know the Royal City inside and out"
        image="/images/hero-1.webp"
        imageAlt="Painting services in New Westminster"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Your New Westminster Home Deserves the Right Painters
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            New Westminster is one of BC's most historic communities. Your home — whether it's a Victorian gem in Queens Park or a modern condo overlooking the Fraser River — deserves painters who know the Royal City. Moisture, temperature swings, and tough seasonal weather can damage paint fast. That's why painters in New Westminster need to know which coatings last, which prep stops peeling, and how to protect your home year after year.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint serves New Westminster families with a simple approach: listen first, prep well, finish right. Your Uptown apartment gets a precision interior repaint. Your Queensborough waterfront property gets coatings built for moisture. Your Downtown or Sapperton cabinets get a factory-smooth spray finish. Every project gets our full attention — no surprises and a firm quote before we start.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            When you hire Shape of Paint in New Westminster, you get painters who show up on time and communicate daily. Your home ends up looking better than you expected. That's how we've earned the trust of hundreds of homeowners across the Royal City.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="New Westminster Painters"
        heading="Heritage Details, Modern Precision"
        description="Your New Westminster home has its own personality. Maybe it's a character home with crown moulding that needs careful work. Maybe it's a modern Queensborough condo with clean lines. Or a Sapperton family home that needs a full refresh. We match our approach to your space — thorough prep, professional-grade coatings, and finishes that last. Walls, ceilings, trim, cabinets, exterior siding — we handle it all. You pick the colours. We handle the rest."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting in New Westminster homes"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            New Westminster Neighbourhoods We Serve
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Uptown:</strong> Modern condos and apartments with urban convenience and SkyTrain access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Downtown:</strong> Historic commercial buildings and loft-style residential conversions
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Sapperton:</strong> Family homes and multi-generational properties with neighbourhood character
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Queens Park:</strong> Heritage homes with period details, crown moulding, and architectural character
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Queensborough:</strong> Waterfront and riverside properties with Fraser River views
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Brow of the Hill:</strong> Hillside homes with mature landscapes and established communities
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Connaught Heights:</strong> Residential neighbourhoods with diverse home styles and ages
              </span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              Whether you need interior refresh, exterior weather protection, or cabinet transformation, Shape of Paint has the expertise:
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/interior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Interior Painting
                </Link>
                {" — Walls, ceilings, trim, and accent features for every room"}
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Exterior Painting
                </Link>
                {" — Siding, stucco, soffits, and decks built for coastal weather"}
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Cabinet Painting
                </Link>
                {" — Spray-finished kitchen and bathroom cabinets that look brand new"}
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions About Painting in New Westminster
          </h2>
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3 className="text-xl font-medium">{item.question}</h3>
                <p className="mt-3 text-lg font-normal leading-relaxed text-text-secondary">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Transform Your New Westminster Home?"
        description="From Queens Park heritage homes to Queensborough waterfront properties, your home gets the care and precision it deserves. Request your estimate today — no pressure, no sales pitch, just honest advice and professional service."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting services in New Westminster"
      />
    </>
  );
}
