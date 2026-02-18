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
    "Professional cabinet painting in Vancouver. Designer-quality spray finishes for kitchens that deserve better than factory. Free estimate.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
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
      "Refacing replaces the doors and veneers — typically $15,000–$25,000 for a standard kitchen. Painting keeps your existing doors and boxes, transforming them with a master spray finish for $4,500–$7,500. Same visual impact, superior customization, and a finer finish than factory.",
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
        description="Professional cabinet painting in Vancouver that transforms tired kitchens and bathrooms. HVLP spray finishes that deliver a smoother, more refined result than factory replacements."
      />

      <SectionWrapper>
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
          Cabinet Painting Services
        </h2>

        <h3 className="mb-3 mt-6 text-xl font-medium">
          Kitchen Cabinet Painting
        </h3>
        <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
          Cabinet painting in Vancouver is the fastest way to transform your
          kitchen without a full renovation. We remove every door, drawer front,
          and hinge — then apply a professional HVLP spray finish using Benjamin
          Moore Advance hybrid alkyd enamel. The result is a glass-smooth,
          factory-quality coating in any colour you choose. Swap out your
          hardware while we&apos;re at it and your kitchen looks like a
          $30,000 remodel — with a finish quality that often surpasses factory.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-medium">
          Bathroom Vanity & Cabinet Painting
        </h3>
        <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
          Bathroom cabinets and vanities take a beating from humidity, moisture,
          and daily use. Our refinishing process starts with moisture-resistant
          primers specifically formulated for high-humidity environments. We
          spray multiple coats of premium enamel that won&apos;t peel, bubble,
          or yellow — even in Vancouver&apos;s dampest bathrooms. New colour,
          same cabinets, completely different room.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-medium">
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
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
            3. Spray Application & Reassembly — Multiple coats of premium hybrid
            alkyd enamel applied with professional HVLP equipment. Each coat is
            sanded between applications for a glass-smooth factory finish. Once
            fully cured, we reinstall everything — doors, drawers, hardware —
            and align every hinge.
          </li>
        </ol>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Artisan Finish"
        heading="Cabinet Painting vs. Replacing — Why the Finish Matters More"
        description="Your cabinets aren't old. They just look old. A full kitchen cabinet replacement runs $20,000–$35,000 in Vancouver and gives you mass-produced factory doors. Our HVLP spray finish delivers a smoother, more refined result for $4,500–$7,500 — with unlimited custom colours and a glass-smooth surface that factory simply cannot replicate. No demolition. No plumbing disconnections. No countertop removal. Just a master-quality finish that transforms your kitchen in 5–7 business days. Our spray finish is why designers spec us by name."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/cabinets.webp"
        imageAlt="Before and after cabinet painting by Shape of Paint"
      />

      <SectionWrapper>
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
          Cabinet Painting Cost in Vancouver
        </h2>
        <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
          Transparent pricing so you know what to expect. Every project is
          quoted after an in-home assessment, but here are typical ranges for
          Vancouver cabinet painting projects:
        </p>
        <ul className="mb-6 space-y-3 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
          <li>Kitchen cabinets (standard 20-door kitchen): $4,500–$7,500</li>
          <li>Bathroom vanity and cabinets: $1,200–$2,500</li>
          <li>Island add-on: $800–$1,500</li>
        </ul>
        <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
          We&apos;re not the cheapest option. If price is your only factor,
          we&apos;re probably not the right fit. But if you want a finish that
          looks factory-sprayed and lasts a decade — that&apos;s what we do.
        </p>
      </SectionWrapper>

      <PortfolioGallery
        eyebrow="Our Work"
        heading="Gallery — Before & After"
        images={galleryImages}
      />

      <FAQ heading="Frequently Asked Questions" items={cabinetFaqItems} />

      <SectionWrapper>
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">Explore Our Other Services</h2>
        <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
          While we&apos;re transforming your cabinets, consider refreshing the rest of your home. Our{" "}
          <Link href="/services/interior" className="font-semibold text-foreground transition-opacity hover:opacity-70">
            interior painting services
          </Link>{" "}
          cover walls, ceilings, trim, and specialty finishes with the same attention to detail. We also handle{" "}
          <Link href="/services/exterior" className="font-semibold text-foreground transition-opacity hover:opacity-70">
            exterior painting for Vancouver homes
          </Link>{" "}
          — siding, stucco, and decks protected against BC weather.
        </p>
      </SectionWrapper>

      <Testimonials
        heading="What Vancouver homeowners say about our cabinet painting"
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
