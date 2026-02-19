import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "House Painters Vancouver BC | Shape of Paint",
  description: "Professional house painters in Vancouver & the Lower Mainland. Interior, exterior & cabinet painting. Licensed, insured. Get your free estimate.",
};

const heroImages = [
  {
    src: "/images/hero-1.webp",
    alt: "Beautiful interior painting by Shape of Paint",
  },
  {
    src: "/images/hero-2.webp",
    alt: "Kitchen cabinet refinishing",
  },
  {
    src: "/images/hero-3.webp",
    alt: "Elegant entryway painting",
  },
];

const galleryImages = [
  { src: "/images/interior-portfolio-1.webp", alt: "Bright living room with designer paint finish" },
  { src: "/images/cabinet-portfolio-5.webp", alt: "Staircase railing with hand-stained dark handrail and crisp white spindles" },
  { src: "/images/exterior-portfolio-1.webp", alt: "Exterior home painting — classic Vancouver craftsman" },
  { src: "/images/interior-portfolio-3.webp", alt: "Elegant hallway with hand-finished walls" },
  { src: "/images/exterior-portfolio-2.webp", alt: "Modern exterior with fresh trim paint" },
  { src: "/images/interior-portfolio-2.webp", alt: "Modern bathroom with crisp white walls" },
  { src: "/images/cabinet-portfolio-1.webp", alt: "Kitchen transformation — cabinet refinishing" },
  { src: "/images/cabinet-portfolio-4.webp", alt: "Spray-finished kitchen cabinets in matte white" },
];

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint Instagram post 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint Instagram post 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint Instagram post 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint Instagram post 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint Instagram post 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint Instagram post 6" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Vancouver's Trusted House Painters"
        headline="Vancouver house painters who care about the finish as much as you do"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        images={heroImages}
      />

      <FounderQuote
        quote="Every homeowner deserves painters who show up on time, protect your floors, and do work you're proud of. That's not a tagline. It's how we've built our name — one Vancouver home at a time."
        author="Gabe Penner, Founder"
      />

      <VideoTestimonial
        eyebrow="Featured Project"
        heading="Elevating a West Coast fireplace with hand-applied Marmorino plaster"
        videoId="8lwJrnkJRXc"
      />

      <ServicesGrid services={[...siteConfig.services]} />

      <CTABanner
        headline="Every project begins with a conversation"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
      />

      <FeatureSection
        eyebrow="Design Expertise"
        heading="More than painters — finishing specialists"
        description="Interior, exterior, cabinets, or custom finishes — our team brings years of hands-on experience to every surface we touch. We work with designers and specialty trades so you get honest advice, not guesswork. Finishes that look better and last longer than you expected."
        ctaText="See Our Interior Work"
        ctaHref="/services/interior"
        image="/images/design-services.webp"
        imageAlt="Shape of Paint design consulting"
      />

      <PortfolioGallery
        eyebrow="Our Work"
        heading="The details speak for themselves"
        subtitle="Meticulously prepared surfaces. Carefully chosen colours. Long-lasting finishes. See what master craftsmanship looks like in real Vancouver homes."
        images={galleryImages}
      />

      <FeatureSection
        eyebrow="Cabinet Painting"
        heading="Your kitchen, reimagined — without a full renovation"
        description="Spray-finished cabinet painting gives your kitchen a smooth, factory-quality feel at a fraction of the replacement cost. Most projects wrap in 5–7 days with minimal disruption to your daily routine."
        ctaText="Explore Cabinet Refinishing"
        ctaHref="/contact/estimate"
        image="/images/cabinet-finish.webp"
        imageAlt="Cabinet spray finish by Shape of Paint"
        reversed
      />

      <Testimonials
        heading="Heard from homeowners we've worked with"
        testimonials={[...siteConfig.testimonials]}
      />

      <FeatureSection
        heading="Let's talk about what your home could feel like"
        description="Reach out and we'll get back to you within 2 business days with a firm quote. No surprises, no hidden fees. The price we quote is the price you pay."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/about-team.webp"
        imageAlt="Contact Shape of Paint"
      />

      <CTABanner
        headline="47 families on the North Shore trusted us with their homes last year. Yours could be next."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />

      <NewsletterSignup />
    </>
  );
}
