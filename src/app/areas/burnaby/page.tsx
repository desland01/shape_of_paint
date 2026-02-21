import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

export const metadata: Metadata = {
  title: "Painters Burnaby BC | Shape of Paint",
  description: "Over 200 Burnaby homes painted. Interior, exterior, and cabinet painters trusted across Metrotown, Brentwood, and Burnaby Heights. Book your free consultation.",
};

export default function BurnabyAreaPage() {
  return (
    <>
      <PageHero
        heading="House Painters in Burnaby, BC"
        description="Your Burnaby home deserves painters who understand every neighbourhood — from Burnaby Heights heritage to Metrotown condos. Interior, exterior, and cabinet painting. Licensed and insured."
        image="/images/exterior-portfolio-1.webp"
        imageAlt="Exterior house painting in Burnaby"
      />

      <SectionWrapper>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Heritage to Modern — Every Burnaby Home, Understood
          </h2>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            You might own a heritage character home in Burnaby Heights with original trim that deserves careful restoration. Or you live in a modern condo in Metrotown that needs a fresh palette. Maybe you're in Brentwood with a mid-century home, or near Deer Lake with a family property. Whatever your Burnaby home looks like, we've painted it — over 200 times across every neighbourhood in this city.
          </p>
          <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary">
            Your interior gets walls, ceilings, trim, and baseboards done right. Your exterior gets siding, stucco, soffits, and decks built for Vancouver rain. Your kitchen and bathroom cabinets get a hand-sprayed finish that looks factory fresh. And because Burnaby's weather patterns — rain, fog, salt air near the mountain — demand it, every surface gets professional-grade coatings that don't peel, fade, or crack. Your home gets protection that lasts 8-10 years.
          </p>
          <p className="text-lg font-normal leading-relaxed text-text-secondary">
            You pick the colours. You set the timeline. We handle prep, protection, and cleanup without surprises. Firm quotes. Daily updates. One final walkthrough where we don't leave until every detail is right.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        eyebrow="Burnaby Painters"
        heading="Expert Painters for Every Burnaby Home"
        description="Your Burnaby Heights heritage home with original wood trim gets a different approach than your Metrotown condo or Brentwood mid-century property. That's the point. You get painters who know your neighbourhood and your housing style. Every surface prepped right, painted right, and finished with care."
        ctaText="Book Your Free Consultation"
        ctaHref="/contact#contact-form"
        image="/images/interior.webp"
        imageAlt="Interior painting service in Burnaby BC"
      />

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-content">
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
        <div className="mx-auto max-w-content">
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
            that give your cabinets an artisan finish rivaling factory new. Every service includes a free colour consultation, firm pricing, and a satisfaction guarantee.
          </p>
        </div>
      </SectionWrapper>

      <FeatureSection
        heading="Ready to transform your Burnaby home?"
        description="Your free estimate starts with a visit to your home. You share the vision. We listen, answer questions, and give you a firm quote — no pressure, no surprises. Call 604-353-7378 or fill out the form to get started."
        ctaText="Request Your Estimate"
        ctaHref="/contact#contact-form"
        image="/images/exterior.webp"
        imageAlt="Exterior painting in Burnaby BC"
      />
    </>
  );
}
