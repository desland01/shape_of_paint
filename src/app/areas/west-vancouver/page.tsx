import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painters West Vancouver BC | Shape of Paint",
  description:
    "Designer-grade finishes for West Vancouver's finest homes. Artisan interior, exterior, and cabinet painting trusted by 200+ homeowners. Request your consultation.",
};

export default function WestVancouverAreaPage() {
  const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Areas", url: `${siteConfig.url}/areas` },
    { name: "West Vancouver", url: `${siteConfig.url}/areas/west-vancouver` },
  ]));
  const serviceJsonLd = JSON.stringify(generateServiceSchema({
    name: "House Painting in West Vancouver",
    description: "Designer-grade interior, exterior, and cabinet painting services in West Vancouver, BC by Shape of Paint.",
    url: `${siteConfig.url}/areas/west-vancouver`,
    areaServed: "West Vancouver",
  }));
  const faqItems = [
    {
      question: "How much does house painting cost in West Vancouver?",
      answer: "West Vancouver's luxury homes, steep lots, and ocean-facing exposures require specialized access equipment and premium coatings, so costs run higher than the regional average. Shape of Paint provides detailed quotes after an on-site assessment of your specific property and conditions.",
    },
    {
      question: "What paint handles West Vancouver's coastal conditions?",
      answer: "Marine-grade acrylic with UV and salt-air resistance is essential. Oceanfront homes in West Vancouver face relentless salt spray and intense sun exposure that break down standard coatings fast. Shape of Paint selects professional-grade products engineered for coastal durability.",
    },
    {
      question: "How often should West Vancouver homes be repainted?",
      answer: "Ocean-facing exteriors need repainting every 6-8 years, while sheltered sides last 8-10 years. Salt spray accelerates paint breakdown significantly on West Vancouver waterfront properties. Shape of Paint uses thorough prep and premium coatings to extend the life of every finish.",
    },
    {
      question: "Does Shape of Paint work on West Vancouver's steep-lot homes?",
      answer: "Yes. Shape of Paint is fully equipped with professional scaffolding and access systems for West Vancouver's hillside properties. From Ambleside waterfront to British Properties estates, we handle steep grades, multi-level exteriors, and challenging access with safe, expert execution.",
    },
  ];
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <PageHero
        heading="House Painters in West Vancouver, BC"
        description="Designer-grade finishes for waterfront estates and architectural homes across West Vancouver"
        image="/images/interior-portfolio-1.webp"
        imageAlt="Premium painting in West Vancouver"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Where the View Deserves the Interior
          </h2>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            West Vancouver isn't like anywhere else in the Lower Mainland. This is where ocean views, towering cedars, and multi-million-dollar custom homes meet Cypress Mountain peaks and Lighthouse Park trails. You live in one of BC's most beautiful communities — and you expect painters who understand that your home isn't just a residence, it's an investment in your lifestyle. When you paint a custom home in Ambleside, a beachfront property in Dundarave, or an estate in British Properties, every detail matters. The finish quality. The colour accuracy. The timeline. The respect for your space.
          </p>
          <p className="mb-6 text-lg font-normal leading-relaxed text-text-secondary">
            West Vancouver's waterfront exposure means your paint takes a beating. Salt air, intense UV, and rapid weather changes demand designer-grade coatings and expert application. Interior work needs the same precision — whether you're refreshing a high-ceilinged great room or refinishing custom cabinetry. Shape of Paint is the trusted choice for West Vancouver homeowners who want results that match the quality of their homes.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            When you hire painters in West Vancouver, you're hiring for quality, reliability, and uncompromising professionalism. Shape of Paint brings that expertise to every project — firm timelines, clear communication, designer-grade materials, and a walkthrough where every detail is reviewed together.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="West Vancouver Painters"
        heading="Designer-Grade Finishes for West Vancouver Homes"
        description="Your West Vancouver home deserves painters who understand artisan finishes, designer-grade coatings, and flawless application. Whether it's interior walls and trim with thorough prep, exterior paint built for coastal exposure, or spray-finished cabinetry that looks brand new, every detail gets the same meticulous care. Your design vision drives the project — and you get the finish quality that West Vancouver homeowners expect. Exceptional results. On time. To the highest standard."
        ctaText="Request Your Consultation"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting for West Vancouver homes"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            West Vancouver Neighbourhoods We Serve
          </h2>
          <ul className="space-y-3 text-lg font-normal leading-relaxed text-text-secondary">
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Ambleside:</strong> Iconic waterfront village with ocean views, boutique shops, and beachfront properties
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Dundarave:</strong> Coastal community with heritage homes, modern estates, and park access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Caulfeild:</strong> Upscale residential enclave with architectural homes and tree-lined streets
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>British Properties:</strong> Premier neighbourhood with custom estates and panoramic views
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Eagle Harbour:</strong> Quiet waterfront community with secluded homes and ocean access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Horseshoe Bay:</strong> Gateway village with historic character, modern renovations, and ferry access
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Panorama Village:</strong> Elevated residential area with mountain views and spacious properties
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gold">•</span>
              <span>
                <strong>Altamont:</strong> Quiet neighbourhood with mature homes and established character
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
              Your West Vancouver home demands the finest craftsmanship. We specialize in:
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/interior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Interior Painting
                </Link>
                {" — Clean, smooth finishes for beautiful homes, custom trim, and accent walls"}
              </li>
              <li>
                <Link
                  href="/services/exterior"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Exterior Painting
                </Link>
                {" — Coastal-rated coatings that protect against salt air and UV exposure"}
              </li>
              <li>
                <Link
                  href="/services/cabinets"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  Cabinet Painting
                </Link>
                {" — Professional spray finishes for kitchens and bathrooms"}
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Frequently Asked Questions About Painting in West Vancouver
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
        heading="Transform Your West Vancouver Home with Artisan Painters"
        description="From Ambleside waterfront to British Properties estates, your home deserves artisan painters who deliver designer-grade results. Schedule your complimentary consultation — we'll discuss your vision and craft a plan worthy of your property."
        ctaText="Schedule Your Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting for West Vancouver homes"
      />
    </>
  );
}
