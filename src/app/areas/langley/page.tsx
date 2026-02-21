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
  title: "Painters Langley BC | Shape of Paint",
  description: "Langley's trusted painters for Walnut Grove, Willoughby, and Fort Langley. Interior, exterior, and cabinet finishes that last. Book your free consultation.",
};

const faqItems = [
  {
    question: "How much does it cost to paint a house in Langley?",
    answer:
      "Interior painting in Langley typically runs $3-8 per square foot, while exterior projects range $4-12 per square foot. Langley's mix of newer Willoughby builds and heritage Fort Langley homes means pricing varies by surface condition and detail work. Shape of Paint provides a firm quote after an in-home visit — no surprises.",
  },
  {
    question: "What paint is best for Langley's climate?",
    answer:
      "Premium acrylic latex works best for Langley exteriors. While Langley gets slightly less rain than Vancouver proper, moisture and temperature swings still demand coatings with strong adhesion and mildew resistance. Shape of Paint selects professional-grade products matched to your home's specific exposure and substrate.",
  },
  {
    question: "Do I need to prep my house before painters arrive in Langley?",
    answer:
      "Basic clearing of furniture away from walls and removing wall hangings helps, but Shape of Paint handles all surface preparation. That includes washing, sanding, caulking, priming, and protecting floors and fixtures. Thorough prep is what separates a 2-year paint job from one that lasts 8-10 years.",
  },
  {
    question: "How long does a professional paint job last in Langley?",
    answer:
      "With quality materials and proper preparation, interior paint lasts 8-12 years and exterior paint lasts 8-10 years in Langley. Shape of Paint uses professional-grade coatings and thorough prep on every project, so your finish holds up against BC's seasonal weather without peeling, cracking, or fading.",
  },
];

export default function LangleyAreaPage() {
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Areas", url: `${siteConfig.url}/areas` },
      { name: "Langley", url: `${siteConfig.url}/areas/langley` },
    ])
  );
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "House Painting in Langley",
      description:
        "Professional interior, exterior, and cabinet painting for Langley homes. From Fort Langley heritage to Willoughby new builds. Licensed and insured.",
      url: `${siteConfig.url}/areas/langley`,
      areaServed: "Langley",
    })
  );
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="House Painters in Langley, BC"
        description="Your Langley home deserves painters who know Fort Langley heritage, Willoughby new builds, and Walnut Grove family homes. Licensed, insured, and built for BC weather."
        image="/images/exterior-portfolio-4.webp"
        imageAlt="House painting in Langley"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            From Fort Langley Heritage to Willoughby New Builds
          </h2>
          <div className="space-y-6 text-lg font-normal leading-relaxed text-text-secondary">
            <p>
              If you live in Langley, you know the challenge. Your home faces Vancouver's unpredictable weather. Rain, moisture, and temperature swings wear down exterior paint faster than most regions. Your home deserves painters who know this. Shape of Paint brings professional, licensed house painting to every corner of Langley — from Walnut Grove's family neighbourhoods to the heritage charm of Fort Langley.
            </p>
            <p>
              Whether you're painting a bedroom, refreshing your front exterior, or transforming kitchen cabinets, you get thorough prep and professional-grade coatings on every surface. You share your vision. You get honest colour advice. And you get results that match Langley's standards. Every step done right. No surprises.
            </p>
            <p>
              Your home is your biggest investment. The paint job is the first thing people see. It should make the right impression — and last 8-10 years, not months. From Brookswood's horse country estates to Aldergrove's rural developments, over 100 Langley homeowners have trusted us to get it right.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Langley Painters"
        heading="Professional Interior & Exterior Painting for Every Home"
        description="Your walls, ceilings, trim, siding, stucco, and cabinets all get the same level of craftsmanship. From a single-room update to a full-house transformation, you get attention to detail on every surface. You pick the colours and style. You get the prep, application, and cleanup handled — and a home that looks brand new."
        ctaText="Start Your Project"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Professional exterior painting in Langley, BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Langley Neighbourhoods We Serve
          </h2>
          <div className="space-y-4 text-lg font-normal text-text-secondary">
            <p className="font-medium text-foreground">We paint homes throughout Langley, including:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Walnut Grove</strong> — Growing family neighbourhoods with new and established homes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Willoughby</strong> — Rapid residential growth with mixed development and family properties</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Murrayville</strong> — Quiet, established neighbourhood with well-maintained homes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Fort Langley</strong> — Heritage community with charming character homes and river proximity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Brookswood</strong> — Horse country with rural estates and large properties</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Aldergrove</strong> — Mix of rural farms, estates, and new suburban developments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0"></span>
                <span><strong>Langley City</strong> — Urban core with diverse housing styles and property types</span>
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
              Whether you need interior walls refreshed, exterior protection from BC weather, or beautiful cabinet finishes, we've got you covered.
            </p>
            <div className="space-y-3 pt-2">
              <Link
                href="/services/interior"
                className="text-base font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Interior Painting
              </Link>
              <br />
              <Link
                href="/services/exterior"
                className="text-base font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Exterior Painting
              </Link>
              <br />
              <Link
                href="/services/cabinets"
                className="text-base font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                Cabinet Painting
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions About Painting in Langley
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
        heading="Ready to Transform Your Langley Home?"
        description="Your free, no-obligation estimate starts with a home visit. You share your vision. You get a firm quote with no hidden charges. From colour consultation to final walkthrough, every step is built around your timeline and your goals."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting project in Langley, BC"
      />
    </>
  );
}
