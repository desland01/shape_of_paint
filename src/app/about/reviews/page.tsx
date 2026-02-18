import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Reviews | Vancouver Painters",
  description:
    "Read real reviews from Vancouver homeowners about Shape of Paint. Interior, exterior & cabinet painting — see why families across the Lower Mainland trust us.",
};

const instagramImages = [
  { src: "/images/ig-1.jpg", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.jpg", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.jpg", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.jpg", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.jpg", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.jpg", alt: "Shape of Paint project 6" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        heading="What Vancouver Homeowners Say"
        description="Real reviews from real families. See why homeowners and designers across the Lower Mainland trust Shape of Paint for interior, exterior, and cabinet painting."
      />

      <SectionWrapper>
        {siteConfig.testimonials.map((testimonial, index) => (
          <AnimateOnScroll key={index} delay={index * 0.1}>
            <div className="mx-auto mb-16 max-w-[700px] text-center last:mb-0">
              <DecorativeIcon variant="leaf" className="mb-6" />
              <blockquote className="mb-4 text-xl font-normal leading-relaxed italic text-foreground md:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary">
                — {testimonial.author}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            See Us on Google
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Read more reviews from Vancouver homeowners on our Google Business
            Profile.
          </p>
          {/* <!-- GOOGLE_REVIEWS_EMBED --> */}
          <a
            href={siteConfig.socialLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
          >
            View on Google Maps →
          </a>
        </div>
      </SectionWrapper>

      <CTABanner
        headline="Ready to be our next happy customer?"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
