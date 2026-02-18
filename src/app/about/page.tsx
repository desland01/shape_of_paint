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
  { src: "/images/ig-1.jpg", alt: "Shape of Paint Instagram post 1" },
  { src: "/images/ig-2.jpg", alt: "Shape of Paint Instagram post 2" },
  { src: "/images/ig-3.jpg", alt: "Shape of Paint Instagram post 3" },
  { src: "/images/ig-4.jpg", alt: "Shape of Paint Instagram post 4" },
  { src: "/images/ig-5.jpg", alt: "Shape of Paint Instagram post 5" },
  { src: "/images/ig-6.jpg", alt: "Shape of Paint Instagram post 6" },
];

const portfolioCategories = [
  {
    title: "Interiors",
    href: "/services/interior",
    image: "/images/interior.jpg",
  },
  {
    title: "Exteriors",
    href: "/services/exterior",
    image: "/images/exterior.jpg",
  },
  {
    title: "Cabinets",
    href: "/services/cabinets",
    image: "/images/cabinets.jpg",
  },
  {
    title: "Custom Projects",
    href: "/contact/estimate",
    image: "/images/custom-project.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        heading="Our Story"
        description="Licensed, insured, and obsessed with the details that most painters skip."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[800px] px-6 md:px-8">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            You shouldn't have to babysit your painters
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Most homeowners don't hire a painter because they want a painter. They hire one because they want the result — without the headaches. That means no paint drips on your hardwood. No mysterious charges on the final bill. And no scrambling to figure out if someone is actually showing up tomorrow. Our team is built around one idea: you should enjoy the transformation without worrying about the process.
          </p>
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Your home. Your vision. Our expertise.
          </h2>
          <p className="mb-8 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Every wall, cabinet, and trim piece in your home tells a story about how you live. We don't push cookie-cutter solutions. We listen first, then offer expert colour advice and finishing options tailored to your style, your light, and your budget. The goal isn't just a fresh coat — it's a home that feels like yours.
          </p>
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Schedules, updates, and zero surprises
          </h2>
          <p className="text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
            Before we touch a brush, you'll know exactly when we start, how long it takes, and what it costs. Firm quotes — the price doesn't change. Daily updates so you're never guessing. And a final walkthrough where we don't leave until you're happy. That's how we've earned repeat clients and designer referrals across Vancouver.
          </p>
        </div>
      </section>

      <FeatureSection
        eyebrow="Meet the Founder"
        heading="Gabe Penner — Master Painter & Finishing Specialist"
        description="Gabe started Shape of Paint with a simple belief: homeowners deserve craftsmanship, not shortcuts. After years perfecting coatings, faux finishes, and spray application, he built a company around meticulous prep, transparent communication, and results that speak for themselves. Today, designers and homeowners across Vancouver trust Gabe and his crew with their most detailed projects."
        ctaText="Get Your Free Estimate"
        ctaHref="/contact/estimate"
        image="/images/about-founder.jpg"
        imageAlt="Gabe Penner, Co-Founder of Shape of Paint"
      />

      <section className="bg-warm py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <h2 className="mb-12 text-3xl font-semibold md:text-4xl lg:text-5xl">
            See what we can do for your home
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
