import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Vancouver Painters",
  description: "Contact Shape of Paint for professional painting services. Request a quote for interior or exterior painting across Vancouver and the Lower Mainland. Call 604-353-7378.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint project 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint project 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint project 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint project 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint project 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint project 6" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        heading="Get in Touch"
      />

      <ContactCards />

      <SectionWrapper>
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
            Tell us about your project
          </h2>
          <ContactForm />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="warm">
        <div className="mx-auto max-w-[700px]">
          <p className="text-lg md:text-xl font-normal leading-relaxed text-text-secondary">
            We respond to every inquiry within 2 business days — usually faster. Shape of Paint serves homeowners throughout Vancouver and the Lower Mainland, including Burnaby, North Vancouver, Coquitlam, Surrey, Langley, White Rock, and Abbotsford. Call us directly at 604-353-7378 or fill out the form above.
          </p>
        </div>
      </SectionWrapper>

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
