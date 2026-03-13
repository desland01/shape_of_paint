import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SlideUp, StaggerContainer } from "@/components/ui/motion";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { faqCategories } from "@/config/faq";

export const metadata: Metadata = {
  title: "Painting FAQ | Vancouver House Painters | Shape of Paint",
  description:
    "Answers to every question Vancouver homeowners ask before hiring a painter. Interior, exterior, cabinets, pricing, process, and materials - all covered.",
};

export default function FAQHubPage() {
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "FAQ", url: `${siteConfig.url}/faq` },
    ])
  );

  const allFaqItems = faqCategories.flatMap((category) => category.items);
  const faqJsonLd = JSON.stringify(generateFAQSchema(allFaqItems));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />

      <PageHero heading="Vancouver Painting Questions, Answered" />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faqCategories.map((category) => (
              <SlideUp key={category.slug}>
                <Link
                  href={`/faq/${category.slug}`}
                  className="group flex h-full flex-col rounded-[9px] border border-foreground/10 bg-background p-8 transition-[border-color,box-shadow] duration-300 hover:border-foreground/25 hover:shadow-lg"
                >
                  <h2 className="mb-3 text-2xl font-normal leading-tight md:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mb-6 flex-1 text-base leading-relaxed text-text-secondary">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors group-hover:text-cta-hover">
                    View Answers
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </SlideUp>
            ))}
          </StaggerContainer>
        </div>
      </SectionWrapper>

      <CTABanner
        headline="Still have questions? We are happy to help."
        ctaText="Get a Free Estimate"
        ctaHref="/contact#contact-form"
      />
    </>
  );
}
