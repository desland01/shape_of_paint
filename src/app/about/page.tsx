import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { InstagramGrid } from "@/components/sections/InstagramGrid";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Shape of Paint | Vancouver Painters",
  description: "Meet Gabe Penner and the Shape of Paint team. Licensed, insured house painters serving Vancouver and the Lower Mainland with master craftsmanship on every project.",
};

const instagramImages = [
  { src: "/images/ig-1.webp", alt: "Shape of Paint Instagram post 1" },
  { src: "/images/ig-2.webp", alt: "Shape of Paint Instagram post 2" },
  { src: "/images/ig-3.webp", alt: "Shape of Paint Instagram post 3" },
  { src: "/images/ig-4.webp", alt: "Shape of Paint Instagram post 4" },
  { src: "/images/ig-5.webp", alt: "Shape of Paint Instagram post 5" },
  { src: "/images/ig-6.webp", alt: "Shape of Paint Instagram post 6" },
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
    href: "/contact/estimate",
    image: "/images/custom-project.webp",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading="Our Story"
        description="We show up on time. We protect your home. We do work you can see from across the room."
        image="/images/about-team.webp"
        imageAlt="The Shape of Paint team"
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            You shouldn't have to babysit your painters
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            You don't want a painter. You want the result. Floors protected, not spattered. A final bill that matches the quote. A crew that shows up when they said they would. That's what we built this company around.
          </p>
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            A finish you can feel, not just see
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Every wall, cabinet, and trim piece in your home says something. We don't do one-size-fits-all. We listen first. Then we pick colours and sheens that work with your light, your materials, and how you use each room. Matte walls, crisp satin trim — everything works together on purpose.
          </p>
          <h2 className="mb-6 text-3xl font-normal leading-[1.2] md:text-4xl">
            Clear pricing. No surprises.
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Before we touch a brush, you'll know when we start, how long it takes, and what it costs. Firm quotes — the price doesn't change. Daily updates so you're never guessing. A final walkthrough where we check every edge and every detail together. That's how we've earned repeat clients across Vancouver.
          </p>
        </div>
      </section>

      <FeatureSection
        eyebrow="Meet the Founder"
        heading="Gabe Penner — Master Painter & Finishing Specialist"
        description="Gabe started Shape of Paint with one belief: good painting starts long before the first coat. After years perfecting coatings, faux finishes, and spray work, he built a company around thorough prep, clear communication, and finishes that hold up to close inspection. Today, designers and homeowners across Vancouver trust Gabe and his crew with their most detailed projects."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/about-founder.webp"
        imageAlt="Gabe Penner, Co-Founder of Shape of Paint"
      />

      <section className="bg-warm py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <h2 className="mb-12 text-3xl font-normal leading-[1.2] md:text-4xl lg:text-[60px]">
            Recent work across Vancouver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioCategories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="group">
                <div className="relative mb-3 aspect-[3/2] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
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
