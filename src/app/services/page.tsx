import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ScrollZoom } from "@/components/ui/motion";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painting Services Vancouver | Shape of Paint",
  description:
    "Interior, exterior & cabinet painting in Vancouver. Licensed, insured house painters delivering flawless finishes across the Lower Mainland. Free estimates.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Painting Services in Vancouver"
        description="Interior, exterior, and cabinet painting. Every job done right, on time, on budget."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3 md:gap-8">
            {siteConfig.services.map((service) => (
              <Link key={service.title} href={service.href} className="group rounded-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta-hover">
                <ScrollZoom>
                  <div className="relative mb-6 aspect-[4/3] hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)] transition-shadow duration-700">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </ScrollZoom>
                <h2 className="mb-3 text-2xl font-normal leading-[1.2] md:text-3xl">
                  {service.title}
                </h2>
                <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.15em] text-foreground group-hover:text-link-hover group-hover:underline underline-offset-4 transition-colors duration-300" aria-hidden="true">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        heading="Not sure where to start?"
        description="Share a few details about your home and we'll recommend the right approach. Most estimates are ready within 24 hours."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/about-team.webp"
        imageAlt="Shape of Paint team at work in Vancouver"
      />
    </>
  );
}
