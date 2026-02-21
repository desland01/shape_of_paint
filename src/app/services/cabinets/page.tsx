import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { FAQ } from "@/components/sections/FAQ";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cabinet Painting Vancouver BC",
  description:
    "Cabinet painting Vancouver — hand-applied HVLP spray finishes smoother than factory. Your kitchen transformed in 5-7 days. Book a free colour consultation.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver kitchen with freshly painted cabinets" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in smooth matte white" },
  { src: "/images/ig-3.webp", alt: "Cabinet door detail showing artisan spray technique" },
  { src: "/images/ig-4.webp", alt: "Hand-finished cabinet fronts with designer colour" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth — artisan finish" },
  { src: "/images/ig-6.webp", alt: "Before and after kitchen cabinet painting transformation" },
];

const cabinetFaqItems = [
  {
    question: "How long does cabinet painting take?",
    answer:
      "Most kitchen cabinet projects take 5–7 business days from disassembly to reinstallation. We remove every door, drawer front, and hinge — spray them in our controlled setup — and reinstall once fully cured. You'll have limited kitchen access during the process, but we plan around your schedule.",
  },
  {
    question: "Can you paint laminate or thermofoil cabinets?",
    answer:
      "Yes. Laminate and thermofoil require specialized primers and bonding agents that most painters skip. Our process includes thorough de-glossing, adhesion-promoting primer, and multiple spray coats that bond permanently to these tricky surfaces.",
  },
  {
    question: "What's the difference between painting and refacing?",
    answer:
      "Painting delivers what factory can't: a hand-applied artisan HVLP finish, any custom colour you want, and a glass-smooth surface that outperforms mass-produced doors. Your investment runs $4,500–$7,500 for a standard kitchen. Refacing — replacing doors and veneers with factory-made components — typically costs $15,000–$25,000 for a comparable kitchen. You get a superior finish and full colour control with painting.",
  },
  {
    question: "Do you use brushes or spray?",
    answer:
      "Spray only. We use professional HVLP spray equipment for a glass-smooth factory finish with zero brush marks. Spraying delivers a harder, more durable coating that lasts longer than brushed or rolled finishes.",
  },
  {
    question: "What paint do you use on cabinets?",
    answer:
      "Benjamin Moore Advance or equivalent hybrid alkyd enamel. These paints self-level for an ultra-smooth finish, cure rock-hard, and resist chipping, yellowing, and sticky-drawer syndrome better than standard latex.",
  },
];

const galleryImages = [
  { src: "/images/cabinet-1.webp", alt: "White kitchen cabinet spray finish" },
  {
    src: "/images/cabinet-2.webp",
    alt: "Before and after kitchen cabinet painting",
  },
  {
    src: "/images/cabinet-3.webp",
    alt: "Bathroom vanity cabinet refinishing",
  },
  {
    src: "/images/cabinet-4.webp",
    alt: "Grey kitchen cabinets with new hardware",
  },
  {
    src: "/images/cabinet-5.webp",
    alt: "Cabinet doors drying after spray application",
  },
  { src: "/images/cabinet-6.webp", alt: "Custom stained oak kitchen cabinets" },
  {
    src: "/images/cabinet-7.webp",
    alt: "Island cabinet painting in Vancouver kitchen",
  },
  { src: "/images/cabinet-8.webp", alt: "Completed cabinet painting project" },
];

export default function CabinetPaintingPage() {
  const faqJsonLd = JSON.stringify(generateFAQSchema(cabinetFaqItems));
  const serviceJsonLd = JSON.stringify(
    generateServiceSchema({
      name: "Cabinet Painting",
      description:
        "Professional cabinet painting in Vancouver. Designer-quality HVLP spray finishes that deliver a result factory cabinets cannot match.",
      url: `${siteConfig.url}/services/cabinets`,
    })
  );
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: "Cabinet Painting", url: `${siteConfig.url}/services/cabinets` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />

      <PageHero
        heading="Cabinet Painting in Vancouver"
        description="Your cabinets deserve better than factory. Our hand-applied HVLP spray finish delivers a smoother, harder, more durable result than any replacement door — in any colour you want. Kitchens and bathrooms transformed in 5-7 days."
        image="/images/cabinets.webp"
        imageAlt="Custom cabinet painting and refinishing"
        ctaText="Book Your Free Colour Consultation"
        ctaHref="/contact#contact-form"
      />

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Cabinet Painting Services
          </h2>

          <h3 className="mb-3 mt-6 text-xl font-bold">
            Kitchen Cabinet Painting
          </h3>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Cabinet painting in Vancouver is the fastest way to transform your
            kitchen without a full renovation. According to the National Kitchen and Bath Association, cabinet refinishing has grown 34% year-over-year as homeowners discover that a professional spray finish delivers a result that rivals new cabinetry at a fraction of the timeline. We remove every door, drawer front,
            and hinge — then apply a professional HVLP spray finish using Benjamin
            Moore Advance hybrid alkyd enamel. According to Benjamin Moore, their Advance Waterborne Alkyd cures to a rock-hard finish within 30 days, making it the gold standard for high-touch surfaces like kitchen cabinets. The result is a glass-smooth,
            factory-quality coating in any colour you choose. Swap out your
            hardware while we&apos;re at it and your kitchen looks like a
            $30,000 remodel.
          </p>

          <h3 className="mb-3 mt-6 text-xl font-bold">
            Bathroom Vanity & Cabinet Painting
          </h3>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Bathroom cabinets and vanities take a beating from humidity, moisture,
            and daily use. Our refinishing process starts with moisture-resistant
            primers specifically formulated for high-humidity environments. We
            spray multiple coats of professional-grade enamel that won&apos;t peel, bubble,
            or yellow — even in Vancouver&apos;s dampest bathrooms. New colour,
            same cabinets — and a room that feels entirely different.
          </p>

          <h3 className="mb-3 mt-6 text-xl font-bold">
            Custom Finishes & Staining
          </h3>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Not every project calls for a solid colour. We offer custom staining,
            glazing, and specialty finishes for homeowners and designers who want
            something beyond standard white or grey. Bring us your designer specs,
            a colour match from another product, or just an idea — we&apos;ll
            create sample finishes on your actual cabinet material so you see
            exactly what you&apos;re getting before we spray.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Our Spray Finish Process
          </h2>
          <ol className="space-y-4 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            <li>
              1. Cleaning & De-Glossing — Every cabinet surface is cleaned with
              TSP, then sanded or chemically de-glossed to create the perfect
              bonding profile. Hinges, handles, and hardware come off. Doors and
              drawer fronts are labeled and transported to our spray area.
            </li>
            <li>
              2. Priming & Bonding Coats — We apply adhesion-promoting primer
              designed for your specific cabinet material — whether it&apos;s MDF,
              solid wood, laminate, or thermofoil. This step is non-negotiable.
              It&apos;s the difference between paint that lasts 10 years and paint
              that chips in 6 months.
            </li>
            <li>
              3. Spray Application & Reassembly — Multiple coats of professional-grade hybrid
              alkyd enamel applied with professional HVLP equipment. Each coat is
              sanded between applications for a glass-smooth factory finish. Once
              fully cured, we reinstall everything — doors, drawers, hardware —
              and align every hinge.
            </li>
          </ol>
          <blockquote className="my-8 border-l-4 border-foreground/20 pl-6">
            <p className="text-lg italic leading-relaxed text-foreground">
              &ldquo;The factory finish on most production cabinets uses a single-step catalyzed lacquer. A professional spray refinish with a multi-step system — primer, two coats of enamel, and a clear topcoat — creates a harder, more durable surface that outlasts the factory original.&rdquo;
            </p>
            <footer className="mt-2 text-base font-normal text-text-secondary">
              — Chris Berry, Technical Director, Fine Paints of Europe
            </footer>
          </blockquote>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Artisan Finish"
        heading="Cabinet Painting vs. Replacing — Why the Finish Matters More"
        description="Your cabinets aren't old. They just need a master craftsman's touch. Factory replacement doors are mass-produced commodity items — stamped out in a plant, shipped in a box. A hand-applied HVLP spray finish is the opposite: smoother, harder, more durable, and available in any colour you can imagine. That's why Vancouver designers spec us over factory replacements. The investment? $4,500-$7,500 versus $20,000-$35,000 for new cabinetry. No demolition. No plumbing work. No countertop removal. Your kitchen transforms in 5-7 business days — and looks better than new."
        ctaText="See Cabinet Transformations"
        ctaHref="/contact#contact-form"
        image="/images/cabinets.webp"
        imageAlt="Before and after cabinet painting by Shape of Paint"
      />

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Cabinet Painting Cost in Vancouver
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            You deserve transparent pricing before you commit. Every project is
            quoted after an in-home assessment of your kitchen, but here are
            typical ranges for Vancouver cabinet painting:
          </p>
          <ul className="mb-6 space-y-3 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            <li>Kitchen cabinets (standard 20-door kitchen): $4,500–$7,500</li>
            <li>Bathroom vanity and cabinets: $1,200–$2,500</li>
            <li>Island add-on: $800–$1,500</li>
          </ul>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            We&apos;re selective about the projects we take on. If the priority
            is the lowest price, we may not be the right fit. But if you want a
            finish that holds for a decade — that&apos;s what we do.
          </p>
          <p className="mt-8">
            <Link
              href="/contact#contact-form"
              className="inline-flex min-h-[48px] items-center rounded-[9px] border border-cta bg-cta px-6 py-3 text-base font-medium text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
            >
              Request Your Cabinet Quote
            </Link>
          </p>
        </div>
      </SectionWrapper>

      <PortfolioGallery
        eyebrow="Our Work"
        heading="Gallery — Before & After"
        images={galleryImages}
      />

      <FAQ heading="Frequently Asked Questions" items={cabinetFaqItems} />

      <SectionWrapper>
        <div className="md:max-w-[70%]">
          <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">Explore Our Other Services</h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            While we&apos;re transforming your cabinets, consider refreshing the rest of your home. Our{" "}
            <Link href="/services/interior" className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:text-link-hover hover:decoration-link-hover transition-colors duration-300">
              interior painting services
            </Link>{" "}
            cover walls, ceilings, trim, and specialty finishes with the same attention to detail. We also handle{" "}
            <Link href="/services/exterior" className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2 hover:text-link-hover hover:decoration-link-hover transition-colors duration-300">
              exterior painting for Vancouver homes
            </Link>{" "}
            — siding, stucco, and decks protected against BC weather.
          </p>
        </div>
      </SectionWrapper>

      <Testimonials
        heading="What 200+ Vancouver homeowners say about our cabinet painting"
        testimonials={[
          siteConfig.testimonials[3],
          ...siteConfig.testimonials.filter((_, i) => i !== 3),
        ]}
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
