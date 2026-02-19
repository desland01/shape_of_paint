import type { Metadata } from "next";
import Link from "next/link";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { BlogCard } from "@/components/sections/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { blogPosts } from "@/config/blog";

export const metadata: Metadata = {
  title: "Painting Tips & Guides | Shape of Paint Blog",
  description:
    "Expert painting tips, cost guides, and colour advice from Vancouver house painters. Interior, exterior, and cabinet painting insights for homeowners.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-background pb-4 pt-16 md:pt-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-sm font-normal text-text-secondary"
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-text-muted">
                &gt;
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-text-muted">
                &gt;
              </li>
              <li>
                <span className="text-foreground">All Articles</span>
              </li>
            </ol>
          </nav>

          <div className="mb-12 text-center md:mb-16">
            <DecorativeIcon variant="leaf" className="mb-6" />
            <h1 className="text-4xl font-normal leading-[1.15] md:text-5xl lg:text-6xl">
              Painting tips &amp; expert guides
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="divide-y divide-border-subtle">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.href} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Your free estimate is 2 minutes away"
        ctaText="Get Your Free Estimate"
        ctaHref="/contact#contact-form"
      />
    </>
  );
}
