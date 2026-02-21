import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { ScrollZoom } from "@/components/ui/motion";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Vancouver's Master Painters | About Shape of Paint",
  description: "Gabe Penner and the Shape of Paint crew have finished 400+ Vancouver homes. Licensed, insured, and obsessed with the details you'll actually notice.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Vancouver home interior freshly painted by Shape of Paint" },
  { src: "/images/ig-2.webp", alt: "Kitchen cabinet spray finish in matte white" },
  { src: "/images/ig-3.webp", alt: "Exterior painting detail on Vancouver craftsman home" },
  { src: "/images/ig-4.webp", alt: "Hand-finished accent wall with designer colour palette" },
  { src: "/images/ig-5.webp", alt: "Cabinet door drying in spray booth — artisan finish process" },
  { src: "/images/ig-6.webp", alt: "Before and after interior painting transformation" },
];

const portfolioCategories = [
  {
    title: "Interiors",
    href: "/services/interior",
    image: "/images/interior.webp",
  },
  {
    title: "Exteriors",
    href: "/services/exterior",
    image: "/images/exterior.webp",
  },
  {
    title: "Cabinets",
    href: "/services/cabinets",
    image: "/images/cabinets.webp",
  },
  {
    title: "Custom Projects",
    href: "/contact#contact-form",
    image: "/images/custom-project.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading="Vancouver Painters Who Do It Right"
        description="400+ projects. On time. On quote. A finish you can see from across the room."
        image="/images/about-team.webp"
        imageAlt="The Shape of Paint team"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            You shouldn't have to babysit your painters
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            You don't want a painter. You want the result. Floors protected, not spattered. A final bill that matches the quote. A crew that shows up when they said they would. That's what 400+ Vancouver homeowners hired us for — and why most of them call back.
          </p>
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            A finish you can feel, not just see
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Every wall, cabinet, and trim piece in your home says something. Your project doesn't get a one-size-fits-all formula. We listen first. Then we match colours and sheens to your light, your materials, and how you actually use each room. Matte walls, crisp satin trim — everything works together on purpose.
          </p>
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Clear pricing. No surprises.
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Before a single brush touches your wall, you'll know the start date, the timeline, and the exact cost. Firm quotes — your price doesn't change. Daily updates so you're never guessing. A final walkthrough where we check every edge and every detail together. That's how we've earned repeat clients across 15 years in Vancouver.
          </p>
        </div>
      </section>

      <FeatureSection
        eyebrow="Meet the Founder"
        heading="Gabe Penner — Master Painter & Finishing Specialist"
        description="15+ years of coatings, faux finishes, and spray work. 400+ Vancouver homes finished. Gabe started Shape of Paint with one belief: good painting starts long before the first coat. Every project gets thorough prep, clear communication, and finishes that hold up to close inspection. We don't take every project. If your priority is the lowest price, we're not the right fit. But if you want it done right — designers and homeowners across Vancouver call Gabe first."
        ctaText="Talk to Gabe"
        ctaHref="/contact#contact-form"
        image="/images/about-founder.webp"
        imageAlt="Gabe Penner, Co-Founder of Shape of Paint"
      />

      <section className="bg-warm py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 text-center md:px-8">
          <h2 className="mb-12 text-3xl font-normal leading-[1.2] md:text-4xl lg:text-[60px]">
            Recent work across Vancouver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioCategories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="group">
                <ScrollZoom>
                  <div className="relative mb-3 aspect-[3/2]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </ScrollZoom>
                <p className="text-sm font-medium">{cat.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InstagramGrid
        instagramUrl={siteConfig.socialLinks.instagram}
        images={instagramImages}
      />
    </>
  );
}
