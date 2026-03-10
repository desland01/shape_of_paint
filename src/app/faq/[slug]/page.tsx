import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { faqCategories, getFAQBySlug, getAllFAQSlugs } from "@/config/faq";

export function generateStaticParams() {
  return getAllFAQSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getFAQBySlug(slug);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

export default async function FAQCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getFAQBySlug(slug);

  if (!category) {
    notFound();
  }

  const faqJsonLd = JSON.stringify(generateFAQSchema(category.items));
  const breadcrumbJsonLd = JSON.stringify(
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "FAQ", url: `${siteConfig.url}/faq` },
      { name: category.title, url: `${siteConfig.url}/faq/${category.slug}` },
    ])
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />

      <PageHero heading={category.title} description={category.description} />

      <FAQ heading={category.title} items={category.items} />

      <SectionWrapper>
        <div className="mx-auto max-w-content text-center">
          <h2 className="mb-6 text-2xl font-normal md:text-3xl">
            Related Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={category.primaryServiceLink.href}
              className="inline-flex min-h-[48px] items-center rounded-[9px] border border-cta bg-cta px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
            >
              {category.primaryServiceLink.label}
            </Link>
            {category.relatedFAQs.map((relatedSlug) => {
              const related = getFAQBySlug(relatedSlug);
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/faq/${relatedSlug}`}
                  className="inline-flex min-h-[48px] items-center rounded-[9px] border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors duration-300 hover:border-foreground/40 hover:bg-foreground/5"
                >
                  {related.title}
                </Link>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        headline="Ready to start your project?"
        ctaText="Get a Free Estimate"
        ctaHref="/contact#contact-form"
      />
    </>
  );
}
