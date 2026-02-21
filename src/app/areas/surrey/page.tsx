import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painters Surrey BC | Shape of Paint",
  description:
    "Hundreds of Surrey homes painted across Fleetwood, Newton, and Cloverdale. Interior, exterior, and cabinet finishes built for BC weather. Free consultation.",
};

export default function SurreyAreaPage() {
  const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Areas", url: `${siteConfig.url}/areas` },
    { name: "Surrey", url: `${siteConfig.url}/areas/surrey` },
  ]));
  const serviceJsonLd = JSON.stringify(generateServiceSchema({
    name: "House Painting in Surrey",
    description: "Professional interior, exterior, and cabinet painting services in Surrey, BC by Shape of Paint.",
    url: `${siteConfig.url}/areas/surrey`,
    areaServed: "Surrey",
  }));
  const faqItems = [
    {
      question: "How much does it cost to paint a house in Surrey?",
      answer: "Pricing varies across Surrey's diverse neighbourhoods. Interior painting runs $3-8 per square foot, and exterior ranges from $4-12 per square foot. South Surrey waterfront homes require different prep than Fleetwood family homes. Shape of Paint provides firm quotes after an in-home assessment.",
    },
    {
      question: "What is the best paint for Surrey homes?",
      answer: "Acrylic latex exterior coatings perform best in Surrey. Surrey gets slightly less rain than the North Shore but more sun exposure, so UV-resistant formulations are essential. Shape of Paint selects professional-grade products matched to your home's specific exposure and surface type.",
    },
    {
      question: "How do I choose a reliable painter in Surrey?",
      answer: "Look for licensed and insured painters with strong local reviews. Shape of Paint has 200+ five-star reviews, serves every Surrey neighbourhood, and provides references from homeowners in your area. Ask for a firm written quote and clear timeline before committing.",
    },
    {
      question: "When is the best time to paint a house in Surrey?",
      answer: "May through September is the ideal window. Surrey's drier climate compared to North Vancouver gives you a slightly longer painting season. Shape of Paint monitors weather closely and schedules your exterior work during the best conditions for lasting results.",
    },
  ];
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="House Painters in Surrey, BC"
        description="Your Surrey home faces tough weather across every season. You need painters who know Fleetwood, Newton, and Cloverdale inside out. Licensed, insured, and trusted by hundreds of homeowners."
        image="/images/hero-3.webp"
        imageAlt="House painting services in Surrey BC"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Growing Families, Enduring Finishes
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Surrey is the largest city in the Lower Mainland. Your home needs painters who understand exactly what that means. More humidity. More rain. Weather that changes fast. You need results that last — and that starts with the right painter.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Whether you live in Fleetwood, Newton, Cloverdale, South Surrey, Guildford, or Panorama Ridge, your home faces the same tough conditions. Your exterior takes a beating from constant dampness and salt air. Your interior needs durable, beautiful finishes that handle moisture without peeling or cracking. We paint every room and every surface. Walls, ceilings, trim, baseboards, decks, siding, stucco, and more. You pick the colours. We handle the prep, application, and cleanup.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Your project benefits from hundreds of Surrey homes already completed. You get finishes proven to stand up to this climate. Prep steps that prevent future problems. Scheduling that works around Surrey's weather so your project stays on track. No surprises. No delays. Just solid craftsmanship.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Surrey Painters"
        heading="Why Local Knowledge Matters"
        description="Surrey homes have specific needs. Your exterior paint has to resist persistent dampness and freeze-thaw cycles. Your interior needs coatings that handle humidity without bubbling or peeling. We've painted Surrey homes in every neighbourhood — Fleetwood, Newton, Cloverdale, and beyond. We know the challenges your roof, deck, and siding face. We know which primers seal properly in Surrey's climate. And we know how to deliver professional results on time and to the highest standard. When you hire Shape of Paint, you're hiring painters who live and work in the same communities you do."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting in Surrey BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
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
                These neighbourhoods host some of Surrey's most beautiful homes. We bring the same attention to detail on every project. Clean finishes. No shortcuts.
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
        <div className="mx-auto max-w-content px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint delivers three core services to Surrey homeowners. Our{" "}
            <Link
              href="/services/interior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              interior painting
            </Link>{" "}
            service covers walls, ceilings, trim, baseboards, and specialty finishes. If you're ready to transform your home's exterior, check out our{" "}
            <Link
              href="/services/exterior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              exterior painting in Vancouver
            </Link>{" "}
            service — the same expertise and techniques we bring to every Surrey project. And if your kitchen or bathroom cabinets need a refresh, our{" "}
            <Link
              href="/services/cabinets"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              cabinet painting services
            </Link>{" "}
            can give your cabinets an artisan finish rivaling factory new. Every service includes a firm quote, daily updates, and a final walkthrough where we don't leave until every detail is right.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions About Painting in Surrey
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
        heading="Ready to transform your Surrey home?"
        description="You deserve painters who understand your neighbourhood. Your free, no-pressure estimate covers your interior, exterior, or cabinet project. You walk through options, ask questions, and get a firm price with no surprises."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting in Surrey BC"
      />
    </>
  );
}
