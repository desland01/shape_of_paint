import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Painters Burnaby BC | Shape of Paint",
  description: "Professional painters in Burnaby BC. Interior and exterior painting for homes and condos. Free estimates. Serving Metrotown, Brentwood, and all Burnaby neighbourhoods.",
};

export default function BurnabyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Burnaby, BC"
        description="Professional painters Burnaby residents trust for interior, exterior, and cabinet painting. Licensed, insured, and serving all Burnaby neighbourhoods."
        image="/images/exterior-portfolio-1.webp"
        imageAlt="Exterior house painting in Burnaby"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Heritage to Modern — Every Burnaby Home, Understood
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            As painters in Burnaby, we've seen the full range of homes this community has to offer. You might own a heritage character home in Burnaby Heights with original trim that deserves careful restoration. Or you live in a modern condo in Metrotown that needs a fresh palette. Maybe you're in Brentwood with a mid-century home, or near Deer Lake with a family property. Whatever your Burnaby home looks like, we've painted it.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            We handle interior walls, ceilings, trim, and baseboards. We paint exterior siding, stucco, soffits, and decks built for Vancouver rain. We refinish kitchen and bathroom cabinets. And we know Burnaby's weather patterns — rain, fog, salt air near the mountain. That means we use professional-grade coatings that don't peel, fade, or crack. Your home gets protection that lasts.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            You pick the colours. You set the timeline. We handle prep, protection, and cleanup without surprises. Firm quotes. Daily updates. One final walkthrough where we don't leave until every detail is right.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Burnaby Painters"
        heading="Expert Painters for Every Burnaby Home"
        description="From Burnaby Heights heritage homes with original wood trim to modern Metrotown condos to Brentwood's mid-century character properties — we know Burnaby's neighbourhoods and housing styles. We prep right, paint right, and finish with care on every project."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting service in Burnaby BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-normal leading-[1.2] md:text-4xl">
            Burnaby Neighbourhoods We Serve
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-medium">North Burnaby</h3>
              <ul className="space-y-2 text-lg font-normal leading-relaxed text-text-secondary">
                <li>• Burnaby Heights — heritage homes, character</li>
                <li>• Capitol Hill — views, established homes</li>
                <li>• Lougheed — family properties, mix of styles</li>
                <li>• Brentwood — mid-century character</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">Central & South Burnaby</h3>
              <ul className="space-y-2 text-lg font-normal leading-relaxed text-text-secondary">
                <li>• Metrotown — condos, townhomes, newer builds</li>
                <li>• Edmonds — residential, SkyTrain close</li>
                <li>• Deer Lake area — family neighbourhoods</li>
                <li>• All surrounding streets & communities</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-lg font-normal leading-relaxed text-text-secondary">
            Most Burnaby neighbourhoods connect to the SkyTrain, making access easy for our team. We schedule jobs that fit your life — early starts, flexible timing, whatever works for your home.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint offers three core services for Burnaby homes. Choose{" "}
            <Link
              href="/services/interior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              interior painting
            </Link>{" "}
            to refresh living rooms, bedrooms, kitchens, and entryways with colours that feel right. Select{" "}
            <Link
              href="/services/exterior"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              exterior painting
            </Link>{" "}
            to protect your home's siding, stucco, trim, and decks with tough weatherproof coatings. Or upgrade your kitchen and bathrooms with{" "}
            <Link
              href="/services/cabinets"
              className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
            >
              cabinet painting services
            </Link>{" "}
            that make old cabinets look brand new — at a fraction of replacement cost. Every service includes a free colour consultation, firm pricing, and a satisfaction guarantee.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to transform your Burnaby home?"
        description="Request a free painting estimate. We'll visit your home, listen to your vision, answer questions, and provide a firm quote — no pressure, no surprises. Call 604-353-7378 or fill out our online form to get started."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting in Burnaby BC"
      />
    </>
  );
}
