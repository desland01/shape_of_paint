import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SlideUp } from "@/components/ui/motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "200+ Reviews | Vancouver Painters | Shape of Paint",
  description:
    "4.9 stars across 200+ reviews. Vancouver homeowners share exactly what happened when Shape of Paint transformed their homes. Read their stories.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth — artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        heading="200+ Five-Star Reviews from Vancouver Homeowners"
        description="4.9-star average. Zero shortcuts. Every review below is from a real Vancouver family who trusted us with their home. Read what they said — then decide for yourself."
      />

      <SectionWrapper>
        {siteConfig.testimonials.map((testimonial, index) => (
          <SlideUp key={index} delay={index * 0.1}>
            <div className="mx-auto mb-16 max-w-content text-center last:mb-0">
              <DecorativeIcon variant="leaf" className="mb-6" />
              <blockquote className="mb-4 text-xl font-normal leading-relaxed italic text-foreground md:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary">
                — {testimonial.author}
              </p>
            </div>
          </SlideUp>
        ))}
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-normal leading-[1.2] md:text-4xl">
            See Us on Google
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Every review is verified. See what Vancouver homeowners wrote about
            their experience on Google.
          </p>
          {/* <!-- GOOGLE_REVIEWS_EMBED --> */}
          <a
            href={siteConfig.socialLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium uppercase tracking-[0.15em] text-foreground hover:text-link-hover transition-colors duration-300"
          >
            View on Google Maps →
          </a>
        </div>
      </SectionWrapper>

      <CTABanner
        headline="47 families joined last year. Ready to see what we do for yours?"
        ctaText="Start Your Project"
        ctaHref="/contact#contact-form"
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
