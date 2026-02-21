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
  title: "Interior Painting Vancouver BC",
  description: "97% of interior painting vancouver clients never call us back — for touch-ups. Walls, ceilings, trim, and more by licensed painters. 200+ five-star reviews.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted in warm neutral tones" },
  { src: "/images/ig-2.webp", alt: "Crisp white ceiling and trim detail by Shape of Paint" },
  { src: "/images/ig-3.webp", alt: "Living room accent wall with artisan colour application" },
  { src: "/images/ig-4.webp", alt: "Hand-finished interior wall in designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Hallway and staircase interior painting transformation" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting in Vancouver home" },
];

const faqItems = [
  {
    question: "How much does interior painting cost in Vancouver?",
    answer: "$3-8/sqft depending on scope. A typical 1,500 sq ft home costs $2,000-$5,000. Shape of Paint provides a firm quote after an in-home assessment.",
  },
  {
    question: "How long does it take to paint the interior of a house?",
    answer: "A single room takes 1-2 days. A full 3-bedroom home takes 4-7 days depending on prep work, ceilings, and trim scope.",
  },
  {
    question: "What interior paint does Shape of Paint use?",
    answer: "We use Benjamin Moore Regal Select on 90% of projects. It self-levels to a smooth finish, covers in two coats, and holds its colour for 8-12 years.",
  },
  {
    question: "Do I need to move furniture before painters arrive?",
    answer: "We handle furniture protection with drop cloths and plastic sheeting. Clearing small items from shelves and walls speeds up the process and gives painters unobstructed access.",
  },
  {
    question: "How long does interior paint last?",
    answer: "Quality interior paint lasts 8-12 years on walls and 5-7 years on high-traffic trim. Proper surface prep and premium paint extend the lifespan significantly.",
  },
];

export default function InteriorPaintingPage() {
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "Interior Painting",
      description:
        "Expert interior painting in Vancouver. Walls, ceilings, trim, baseboards, fireplaces and staircases with clean, lasting finishes.",
      url: `${siteConfig.url}/services/interior`,
    })
  );
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: "Interior Painting", url: `${siteConfig.url}/services/interior` },
    ])
  );
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="Interior Painting in Vancouver"
        description="Your home deserves interior painting that looks flawless 5 years from now — not 5 weeks. Vancouver homeowners trust us with every surface because we never cut corners."
        image="/images/interior.webp"
        imageAlt="Professional interior painting in progress"
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">Why Our Process Takes 5 Steps (When Most Painters Skip 3)</h2>
          <ol className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary">
            <li>1. You pick the colours — We bring 12+ curated samples to your home and test them against your lighting. You choose with confidence, not guesswork.</li>
            <li>2. Your home stays spotless — Every piece of furniture, every floor, every fixture is sealed and protected before a single brush comes out.</li>
            <li>3. Prep that 90% of painters skip — Your walls are cleaned, sanded, patched, caulked, and primed. This invisible step is why our finishes last 8-10 years.</li>
            <li>4. You get the right technique for each surface — Brush for trim, roller for walls, spray for ceilings. Your project gets the method that delivers the smoothest result.</li>
            <li>5. You approve every detail — We walk through the finished space together. You point out anything. We fix it before we leave. Zero punch-list surprises.</li>
          </ol>
          <blockquote className="my-8 border-l-4 border-foreground/20 pl-6">
            <p className="text-lg italic leading-relaxed text-foreground">
              &ldquo;The difference between a good paint job and a great one is always in the preparation. A properly primed and sanded surface allows the topcoat to bond at the molecular level, delivering the colour depth and durability that homeowners expect from a premium product like Regal Select.&rdquo;
            </p>
            <footer className="mt-2 text-base font-normal text-text-secondary">
              — Andrea Magno, Director of Colour Marketing, Benjamin Moore
            </footer>
          </blockquote>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Vancouver Interior Painters"
        heading="Results you'll notice the moment you walk in"
        description="Your accent wall should look as good on the wall as it did on the swatch. Your trim lines should be razor-sharp. Your ceilings should look seamless. That's exactly what 200+ Vancouver homeowners have gotten from us — and why 4 out of 5 come back for another room. According to the Canada Mortgage and Housing Corporation, a fresh interior paint job is one of the highest-ROI home improvements, with homeowners recouping 60-80% of the investment at resale."
        ctaText="See Our Interior Portfolio"
        ctaHref="/services/portfolio"
        image="/images/interior-work.webp"
        imageAlt="Interior painting project by Shape of Paint"
      />

      <SectionWrapper variant="warm">
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Every Interior Surface, One Expert Team
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li>Walls and ceilings — Your rooms get smooth, uniform coverage in the exact sheen you want. Eggshell, satin, or matte — you choose, we perfect it. According to Benjamin Moore, their Regal Select line provides up to 25% better hide than standard paints, reducing the need for additional coats.</li>
            <li>Trim and baseboards — Your spaces look finished with razor-sharp lines that most painters can't deliver freehand.</li>
            <li>Fireplaces — Your fireplace becomes the focal point it should be. Brick, stone, or mantel — you get a finish that draws every eye.</li>
            <li>Staircases and railings — Your spindles, risers, and handrails get the detailed attention that 9 out of 10 painters skip entirely.</li>
            <li>Kitchens and bathrooms — Your wet areas get moisture-resistant coatings engineered for Vancouver's 1,200mm of annual rain. No peeling. No bubbling.</li>
            <li>Bedrooms and living areas — Your daily spaces get colours and textures matched to how you actually live in each room.</li>
            <li>Accent walls and level 5 finishes — Your boldest design ideas get the smoothest finish available. Zero imperfections visible at any angle.</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">Explore Our Other Services</h2>
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            Looking for more than interior work? We also specialize in{" "}
            <Link href="/services/exterior" className="font-medium text-foreground hover:text-link-hover transition-colors duration-300">
              exterior painting in Vancouver
            </Link>{" "}
            — siding, stucco, trim, and decks built to withstand BC weather. Need a kitchen refresh? Our{" "}
            <Link href="/services/cabinets" className="font-medium text-foreground hover:text-link-hover transition-colors duration-300">
              cabinet painting services
            </Link>{" "}
            deliver a designer-quality spray finish that outperforms factory replacements.
          </p>
          <p className="mt-5 text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            If you want a quick ballpark before booking, try our{" "}
            <Link
              href="/tools/cost-calculator"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              interior painting cost calculator
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>

      <Testimonials
        heading="200+ Five-Star Reviews from Vancouver Homeowners"
        testimonials={[...siteConfig.testimonials]}
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions
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

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
