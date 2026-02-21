import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "House Painters Port Coquitlam BC | Shape of Paint",
  description:
    "Trusted house painters in Port Coquitlam, BC. Interior, exterior, and cabinet painting with precision craftsmanship. 200+ PoCo homes transformed. Free estimates.",
};

const faqItems = [
  {
    question: "How much does it cost to paint a house in Port Coquitlam?",
    answer: "Interior painting in Port Coquitlam ranges from $3-8 per square foot, while exterior work runs $4-12 per square foot. PoCo's mix of established Shaughnessy homes and newer Citadel Heights properties means pricing varies by condition and prep needed. Shape of Paint provides free on-site estimates with firm pricing.",
  },
  {
    question: "What exterior paint handles Port Coquitlam weather?",
    answer: "Premium acrylic latex with mildew inhibitors works best for Port Coquitlam exteriors. PoCo gets similar rainfall to Coquitlam, so Shape of Paint uses professional-grade coatings rated for heavy moisture exposure. Proper surface prep and primer selection are critical for long-lasting results in this climate.",
  },
  {
    question: "How do I find reliable painters in Port Coquitlam?",
    answer: "Look for licensed, insured painters with a strong review history. Shape of Paint has over 200 five-star reviews from homeowners across the Tri-Cities, including Port Coquitlam. Check for detailed written estimates, proof of insurance, and references from your specific neighbourhood.",
  },
  {
    question: "When should I paint my Port Coquitlam home exterior?",
    answer: "The best window for exterior painting in Port Coquitlam is May through September when rain is minimal and temperatures stay above 10 degrees Celsius. Book early with Shape of Paint — summer schedules fill fast across the Tri-Cities. Interior painting can be done year-round.",
  },
];

export default function PortCoquitlamAreaPage() {
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Areas", url: `${siteConfig.url}/areas` },
      { name: "Port Coquitlam", url: `${siteConfig.url}/areas/port-coquitlam` },
    ])
  );
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "House Painting Port Coquitlam",
      description: "Trusted house painters in Port Coquitlam, BC. Interior, exterior, and cabinet painting with precision craftsmanship. 200+ PoCo homes transformed. Free estimates.",
      url: `${siteConfig.url}/areas/port-coquitlam`,
      areaServed: "Port Coquitlam",
    })
  );
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      {/* Schema markup - content generated from static config, not user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="House Painters in Port Coquitlam, BC"
        description="Your PoCo home deserves painters who match your pride in this community. Precision craftsmanship for every neighbourhood."
        image="/images/exterior-portfolio-7.webp"
        imageAlt="House painting in Port Coquitlam"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Community Roots, Craftsmanship That Endures
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Port Coquitlam — or PoCo as locals call it — has heart. It's family-focused, community-minded, and full of homes with character. Houses from the 1970s and 80s sit next to newer builds. The Traboulay PoCo Trail brings people together. Families gather for the May Day Parade. The Coquitlam River runs through your backyard. Your homes need painters who get it — painters who know how Vancouver's damp climate wears on siding, how older trim needs patient prep, and how new homes need clean, precise finishes.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            You're hiring house painters who actually know PoCo. We've painted living rooms in Citadel Heights, refreshed exteriors in Mary Hill, and tackled kitchen cabinets in Birchland Manor. Your project gets punctual arrivals, prep like it's our own home, and clear communication every step. Your space ends up looking better than you expected — on time and to the highest standard.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Ready to give your PoCo home the attention it deserves? Request your free estimate. No hidden charges, no surprises — just honest painters who care about your neighbourhood as much as you do.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Port Coquitlam Painters"
        heading="Painting That Honors Your Home"
        description="Whether your Port Coquitlam home was built in the 70s or last year, it deserves expert care. We handle interior walls, ceilings, and cabinets with smooth finishes that change how your home feels. For exteriors, we use professional-grade coatings that stand up to heavy rain and BC sun — protecting your home for years. From Citadel Heights to Shaughnessy to Downtown PoCo, we bring quality to every neighborhood."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting in Port Coquitlam"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Port Coquitlam Neighborhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              <span className="font-medium text-foreground">Citadel Heights:</span> Great views and proud homes. We've finished interior and exterior projects here that homeowners love.
            </p>
            <p>
              <span className="font-medium text-foreground">Oxford Heights:</span> Established, tree-lined, and stable. We understand how to prep and protect the character homes that make this neighborhood special.
            </p>
            <p>
              <span className="font-medium text-foreground">Mary Hill:</span> Diverse and dynamic. We've handled everything from young family homes to estates, respecting the unique mix that makes Mary Hill PoCo's backbone.
            </p>
            <p>
              <span className="font-medium text-foreground">Birchland Manor:</span> A close-knit pocket where cabinets and interior updates have earned us repeat clients and neighborhood word-of-mouth.
            </p>
            <p>
              <span className="font-medium text-foreground">Shaughnessy:</span> Quality and care. Homeowners here value craftsmanship, and we deliver it on every trim piece and wall.
            </p>
            <p>
              <span className="font-medium text-foreground">Downtown PoCo:</span> The heart of the community. We've painted apartments, townhomes, and businesses that keep the downtown vibrant.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <div className="space-y-4">
            <p className="text-lg font-normal leading-relaxed text-text-secondary">
              Whatever your Port Coquitlam home needs, we have the expertise and materials to deliver:
            </p>
            <ul className="space-y-3 text-lg font-normal text-text-secondary">
              <li>
                <Link
                  href="/services/interior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Interior Painting
                </Link>
                — Walls, ceilings, trim, baseboards, and feature walls with precision prep and flawless finishes.
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Exterior Painting
                </Link>
                — Siding, stucco, trim, soffits, and decks with professional-grade coatings built for BC weather.
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Cabinet Painting
                </Link>
                — Kitchen and bathroom cabinets sprayed to a showroom finish. Designer-quality results without the renovation.
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions About Painting in Port Coquitlam
          </h2>
          <div className="divide-y divide-border-subtle">
            {faqItems.map((item, i) => (
              <div key={item.question} className={i === 0 ? "pb-8" : "py-8"}>
                <h3 className="mb-3 text-xl font-medium text-foreground">{item.question}</h3>
                <p className="text-lg font-normal leading-relaxed text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to Transform Your Port Coquitlam Home?"
        description="Request your no-obligation estimate today. We'll walk through your project, discuss colours and finishes, answer your questions, and give you a firm price before we start. That's our promise to PoCo homeowners."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Professional interior painting in Port Coquitlam"
      />
    </>
  );
}
