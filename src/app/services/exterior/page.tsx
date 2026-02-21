import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

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

const faqItems = [
  {
    question: "How much does exterior painting cost in Vancouver?",
    answer: "$4-12/sqft depending on home size, siding type, and condition. A typical 2-storey home costs $5,000-$12,000. Shape of Paint provides a firm quote after assessment.",
  },
  {
    question: "What is the best time to paint a house exterior in Vancouver?",
    answer: "May through September when temperatures stay above 10\u00B0C and rain is minimal. Shape of Paint monitors weather daily and schedules work during dry windows.",
  },
  {
    question: "How long does exterior paint last in Vancouver?",
    answer: "8-10 years with proper prep and quality coatings. According to Sherwin-Williams, professional-grade acrylic latex resists Vancouver\u2019s rain and UV for up to 15 years on well-maintained surfaces.",
  },
  {
    question: "What exterior paint does Shape of Paint use?",
    answer: "We use Sherwin-Williams Duration and Benjamin Moore Aura Exterior. Both are 100% acrylic formulas built for coastal BC\u2019s rain, UV, and temperature swings.",
  },
  {
    question: "How do you prepare a house for exterior painting?",
    answer: "Power washing, scraping loose paint, sanding, caulking gaps, and priming bare wood. This 5-step prep process is what separates a 3-year paint job from a 10-year one.",
  },
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
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
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
        description="Here is the truth most painters will not tell you: they spray and pray. One coat over dirty siding and call it done. Your home peels in 18 months. We do the opposite. Every surface gets power washed, scraped, sanded, caulked, and primed before a single drop of finish goes on. Then we apply 2 coats of professional-grade coatings built for Vancouver rain, UV, and 5°C swings. According to Environment Canada, Vancouver receives an average of 166 rain days per year — more than any other major Canadian city — making coating selection critical for exterior longevity. Your home stays protected for 8-10 years."
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
            <li>Siding — Your home's largest surface gets the most attention. Wood, Hardie board, vinyl, and composite siding prepped and coated for years of curb appeal. According to Sherwin-Williams, their Duration Exterior line maintains colour and sheen retention for up to 15 years in coastal environments when applied over properly prepared surfaces.</li>
            <li>Stucco — Your stucco flexes with BC temperature swings. So do our elastomeric and acrylic coatings. No cracking. No peeling.</li>
            <li>Trim and fascia — Your trim is the first place moisture sneaks in. We seal every edge with weather-resistant finishes that hold up season after season.</li>
            <li>Soffits — The overhead surfaces most painters skip. Your soffits get the same prep and care as every visible face of your home.</li>
            <li>Decks and porches — Your wood takes a beating from Vancouver rain. We stain and seal it to hold through every season.</li>
            <li>Front doors and garage doors — Your entryway sets the tone. We match colors and finishes so your home looks great from the street.</li>
          </ul>
          <blockquote className="my-10 rounded-sm border-l-4 border-accent-gold bg-warm-light py-8 px-8 md:my-12 md:px-10">
            <p className="text-lg italic leading-relaxed text-foreground md:text-xl">
              &ldquo;In coastal climates like Vancouver, the enemy is not just rain — it is the combination of moisture, UV exposure, and temperature cycling. A 100% acrylic latex formula with mildew-resistant additives is the only coating system that consistently performs in these conditions.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-normal text-text-muted">
              <span className="font-medium text-text-secondary">Rick Watson</span>, Director of Product Information, Sherwin-Williams
            </footer>
          </blockquote>
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

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-border-subtle">
            {faqItems.map((item, i) => (
              <div key={i} className={i === 0 ? "pb-8" : "py-8"}>
                <h3 className="mb-3 text-xl font-medium text-foreground">{item.question}</h3>
                <p className="text-lg font-normal leading-relaxed text-text-secondary">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
