import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Painters Burnaby BC | Interior & Exterior | Shape of Paint",
  description: "Professional painters in Burnaby BC. Interior and exterior painting for homes and condos. Free estimates. Serving Metrotown, Brentwood, and all Burnaby neighbourhoods.",
};

export default function BurnabyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Burnaby, BC"
        description="Professional painters Burnaby residents trust for interior, exterior, and cabinet painting. Licensed, insured, and serving all Burnaby neighbourhoods."
      />

      <SectionWrapper>
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Interior & Exterior Painting Services in Burnaby
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Burnaby is a diverse community. You might own a heritage character home in Burnaby Heights with original trim that deserves careful restoration. Or you live in a modern condo in Metrotown that needs a fresh palette. Maybe you're in Brentwood with a mid-century home, or near Deer Lake with a family property. Whatever your Burnaby home looks like, we've painted it.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            We handle interior walls, ceilings, trim, and baseboards. We paint exterior siding, stucco, soffits, and decks built for Vancouver rain. We refinish kitchen and bathroom cabinets. And we know Burnaby's weather patterns — rain, fog, salt air near the mountain. That means we use premium coatings that don't peel, fade, or crack. Your home gets protection that lasts.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            You pick the colours. You set the timeline. We handle prep, protection, and cleanup without surprises. Firm quotes. Daily updates. One final walkthrough where we don't leave until you're happy.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Burnaby Painters"
        heading="Expert Painters for Every Burnaby Home"
        description="From charming Burnaby Heights heritage homes with heritage wood trim to modern Metrotown condos to Brentwood's mid-century character properties — we understand Burnaby's diverse neighbourhoods and housing styles. We prep like professionals, apply like artists, and finish with precision on every project."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/interior.jpg"
        imageAlt="Interior painting service in Burnaby BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
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
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Explore Our Painting Services
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            Shape of Paint offers three core services for Burnaby homes. Choose{" "}
            <Link
              href="/services/interior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              interior painting
            </Link>{" "}
            to refresh living rooms, bedrooms, kitchens, and entryways with colours that feel right. Select{" "}
            <Link
              href="/services/exterior"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              exterior painting
            </Link>{" "}
            to protect your home's siding, stucco, trim, and decks with premium weatherproof coatings. Or upgrade your kitchen and bathrooms with{" "}
            <Link
              href="/services/cabinets"
              className="font-semibold text-foreground transition-opacity hover:opacity-70"
            >
              cabinet painting services
            </Link>{" "}
            that transform old cabinetry into stunning focal points — at a fraction of replacement cost. Every service includes free design consultation, firm pricing, and a satisfaction guarantee.
          </p>
        </div>
      </SectionWrapper>

      <ContactCTA
        heading="Ready to transform your Burnaby home?"
        description="Request a free painting estimate. We'll visit your home, listen to your vision, answer questions, and provide a firm quote — no pressure, no surprises. Call 604-353-7378 or fill out our online form to get started."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/exterior.jpg"
        imageAlt="Exterior painting in Burnaby BC"
      />
    </>
  );
}
