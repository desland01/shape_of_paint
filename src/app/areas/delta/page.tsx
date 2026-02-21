import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painters Delta BC | Shape of Paint",
  description:
    "Painters Delta BC trusted by 200+ homeowners. Interior, exterior, and cabinet painting for Ladner, Tsawwassen, and North Delta. Licensed and insured. Free estimates.",
};

export default function DeltaAreaPage() {
  const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Areas", url: `${siteConfig.url}/areas` },
    { name: "Delta", url: `${siteConfig.url}/areas/delta` },
  ]));
  const serviceJsonLd = JSON.stringify(generateServiceSchema({
    name: "House Painting in Delta",
    description: "Professional interior, exterior, and cabinet painting services in Delta, BC by Shape of Paint.",
    url: `${siteConfig.url}/areas/delta`,
    areaServed: "Delta",
  }));
  const faqItems = [
    {
      question: "How much does it cost to paint a house in Delta?",
      answer: "Interior painting in Delta ranges from $3-8 per square foot, and exterior work runs $4-12 per square foot. Costs vary between Tsawwassen oceanfront properties, Ladner heritage homes, and newer North Delta builds due to different prep needs. Shape of Paint provides a firm quote after a free in-home visit.",
    },
    {
      question: "What exterior paint handles Delta's coastal weather?",
      answer: "Tsawwassen homes near the ocean benefit from marine-grade coatings that resist salt air corrosion. Ladner and North Delta properties do well with premium acrylic latex exteriors. Shape of Paint selects the right product for your specific location and exposure to ensure maximum protection.",
    },
    {
      question: "How long does interior paint last in Delta homes?",
      answer: "Quality interior paint lasts 8-12 years in Delta homes with normal wear. Newer builds in North Delta often have smoother drywall that holds paint longer, while older Ladner properties may need more thorough prep. Shape of Paint uses premium products that maintain their finish for years.",
    },
    {
      question: "When is the best time to paint a house in Delta?",
      answer: "May through September is the ideal exterior painting season in Delta. Tsawwassen enjoys more sunshine than most of the Lower Mainland, which can extend the painting window. Shape of Paint schedules your project during the best weather conditions for lasting results.",
    },
  ];
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="House Painters in Delta, BC"
        description="Your Ladner, Tsawwassen, or North Delta home deserves painters who know your community. Licensed, insured, and detail-obsessed."
        image="/images/exterior-portfolio-3.webp"
        imageAlt="Exterior painting in Delta BC"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Three Communities, One Standard of Care
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            When you need painters in Delta BC, you want a team that knows your area. Delta has three distinct communities — each with its own feel. Tsawwassen offers oceanfront living and waterfront culture. Ladner feels like a heritage village. North Delta brings suburban comfort for families in newer homes. No matter which part of Delta you call home, your painters should understand your world.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We've painted hundreds of Delta homes across all three communities. We know how salty marine air wears on exterior finishes. We work on every home style — heritage cottages, modern oceanfront properties, and suburban family homes. Refreshing your Ladner heritage home? Protecting a Tsawwassen property from coastal weather? Updating a North Delta house? We bring precision, honesty, and results.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            You get painters who listen first. You tell us your vision — a fresh interior colour scheme, exterior protection, cabinet transformation — and we get it done right. No surprises. No guessing. Just the professional painting service your Delta home deserves.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Delta Painters"
        heading="Interior & Exterior Painting for Your Delta Home"
        description="Your Delta home deserves painters who know the area. Interior work includes smooth wall finishes, expert trim, and colours that fit your space. Exterior work uses professional-grade coatings built for Delta's marine climate — protecting Tsawwassen oceanfront homes, Ladner heritage properties, and North Delta residences. We handle siding, stucco, trim, decks, and soffits with the same care that keeps homeowners coming back."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Professional interior painting services in Delta BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Delta Neighbourhoods We Serve
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            We proudly paint homes throughout Delta's best neighbourhoods:
          </p>
          <div className="grid grid-cols-2 gap-3 text-lg font-normal text-text-secondary md:gap-4">
            <div>• Ladner</div>
            <div>• Tsawwassen</div>
            <div>• North Delta</div>
            <div>• Sunbury</div>
            <div>• Sunshine Hills</div>
            <div>• Annieville</div>
          </div>
          <p className="mt-6 text-lg font-normal leading-relaxed text-text-secondary">
            From Tsawwassen Mills shopping to the BC Ferries terminal, from Boundary Bay's natural beauty to the Delta Nature Reserve, we serve every corner of Delta. Whether you're near farmland or oceanfront, in a heritage home or modern neighbourhood, we understand your area and can schedule your free estimate quickly.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary">
            Whatever your painting needs in Delta, you get the expertise and experience that delivers stunning results. Explore how we can transform your home:
          </p>
          <div className="space-y-4">
            <div>
              <Link
                href="/services/interior"
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Interior Painting
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Fresh walls, flawless trim, and expert colour selection for every room in your Delta home.
              </p>
            </div>
            <div>
              <Link
                href="/services/exterior"
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Exterior Painting
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Durable coatings built for Delta's coastal weather and marine environment challenges.
              </p>
            </div>
            <div>
              <Link
                href="/services/cabinets"
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Cabinet Painting & Refinishing
              </Link>
              <p className="mt-2 text-lg font-normal leading-relaxed text-text-secondary">
                Spray-finished kitchen and bathroom cabinets with an artisan finish that rivals custom cabinetry.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions About Painting in Delta
          </h2>
          <div className="space-y-8">
            {faqItems.map((item, i) => (
              <div key={i}>
                <h3 className="mb-3 text-xl font-medium">{item.question}</h3>
                <p className="text-lg font-normal leading-relaxed text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Transform Your Delta Home?"
        description="Request your free estimate today. We'll visit your home in Ladner, Tsawwassen, North Delta, or anywhere in Delta. We'll talk about your project and give you a firm quote with no surprises. Hundreds of Delta homeowners already trust us with their homes."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting project in Delta BC home"
      />
    </>
  );
}
