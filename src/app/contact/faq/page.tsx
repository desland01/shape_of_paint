import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { siteConfig } from "@/config/site";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Painting FAQ Vancouver | Shape of Paint",
  description: "Answers to every question Vancouver homeowners ask before hiring a painter. Quotes, timelines, licensing — all covered.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth — artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
];

const faqItems = [
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Fully licensed, fully insured — general liability and workers' compensation. Your home is protected from day one. We also hold industry-recognized certifications and renew them every year.",
  },
  {
    question: "How do you ensure a clean and organized project site?",
    answer:
      "Every crew follows a 12-point daily checklist. Protective barriers go up before a single can opens. Floors covered. Furniture wrapped. Your home gets cleaned at the end of every work day — not just the last one. If your family is living in the space, we keep every room we're not touching completely untouched.",
  },
  {
    question: "Do you provide estimates or firm quotes?",
    answer:
      "Firm quotes only. The number you see is the number you pay — no surprises, no change orders. The only exceptions: popcorn ceiling removal and specialty finishes priced on time + materials. We'll explain that upfront before any work starts.",
  },
  {
    question: "When do you take payment?",
    answer:
      "30% deposit when you accept the quote. The remaining 70% is due only after the work is done and you're 100% happy with the results. Cash, credit, or e-transfer — your choice.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Vancouver and the entire Lower Mainland. That includes Burnaby, North Vancouver, West Vancouver, Coquitlam, Port Moody, Surrey, New Westminster, Langley, Richmond, and surrounding communities.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Interior painting, exterior painting, cabinet painting and refinishing, spray finishes, staining, faux finishes, and custom projects. We also partner with interior designers and specialty trades to deliver complex finishing work from start to finish.",
  },
];

export default function FAQPage() {
  const faqJsonLd = JSON.stringify(generateFAQSchema(faqItems));
  const breadcrumbJsonLd = JSON.stringify(generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contact", url: `${siteConfig.url}/contact` },
    { name: "FAQ", url: `${siteConfig.url}/contact/faq` },
  ]));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqJsonLd}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: breadcrumbJsonLd}} />
      <PageHero heading="Vancouver Painting Questions, Answered" />

      <FAQ
        heading="Common questions from Vancouver homeowners"
        items={faqItems}
      />

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
