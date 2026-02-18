import { Hero } from "@/components/sections/Hero";
import { FounderQuote } from "@/components/sections/FounderQuote";
import { VideoTestimonial } from "@/components/sections/VideoTestimonial";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { siteConfig } from "@/config/site";

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
  { src: "/images/portfolio-1.webp", alt: "Shape of Paint portfolio project 1" },
  { src: "/images/portfolio-2.webp", alt: "Shape of Paint portfolio project 2" },
  { src: "/images/portfolio-3.webp", alt: "Shape of Paint portfolio project 3" },
  { src: "/images/portfolio-4.webp", alt: "Shape of Paint portfolio project 4" },
  { src: "/images/portfolio-5.webp", alt: "Shape of Paint portfolio project 5" },
  { src: "/images/portfolio-6.webp", alt: "Shape of Paint portfolio project 6" },
  { src: "/images/portfolio-7.webp", alt: "Shape of Paint portfolio project 7" },
  { src: "/images/portfolio-8.webp", alt: "Shape of Paint portfolio project 8" },
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
        headline="Your home deserves more than a coat of paint — it deserves master craftsmanship"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        images={heroImages}
      />

      <FounderQuote
        quote="Every homeowner deserves a painting team that shows up on time, respects your space, and delivers results you can see from the street. That's not a promise — it's how we've built our reputation with hundreds of Vancouver families."
        author="Gabe Penner, Founder"
      />

      <VideoTestimonial
        eyebrow="Featured Project"
        heading="Elevating a West Coast fireplace with hand-applied Marmorino plaster"
        videoId="8lwJrnkJRXc"
      />

      <ServicesGrid services={[...siteConfig.services]} />

      <CTABanner
        headline="Your free estimate is 2 minutes away"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
      />

      <FeatureSection
        eyebrow="Design Expertise"
        heading="More than painters — we're finishing specialists"
        description="Interior, exterior, cabinets, or custom finishes — our team brings years of hands-on experience to every project. We work alongside designers and specialty trades so you get expert advice, not guesswork. The result? A finish that looks better and lasts longer than you expected."
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
        heading="New-looking cabinets without the $30,000 renovation"
        description="Why rip out perfectly good cabinets? Our spray-finished cabinet painting gives your kitchen a factory-fresh look at a fraction of the replacement cost. Most projects are done in 5–7 days with minimal disruption to your daily life."
        ctaText="See Cabinet Transformations"
        ctaHref="/contact/estimate"
        image="/images/cabinet-finish.webp"
        imageAlt="Cabinet spray finish by Shape of Paint"
        reversed
      />

      <Testimonials
        heading="Vancouver homeowners trust Shape of Paint"
        testimonials={[...siteConfig.testimonials]}
      />

      <ContactCTA
        heading="Ready to love your home again?"
        description="Tell us about your project and we'll get back to you within 2 business days with a firm quote — no surprises, no hidden fees. The price we quote is the price you pay."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/about-team.webp"
        imageAlt="Contact Shape of Paint"
      />

      <CTABanner
        headline="Hundreds of Vancouver homes painted. Yours could be next."
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
