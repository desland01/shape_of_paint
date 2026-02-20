"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SlideUp } from "@/components/ui/motion";

interface BlogPostLayoutProps {
  title: string;
  date: string;
  readingTime: string;
  category?: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  title,
  date,
  readingTime,
  category,
  children,
}: BlogPostLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-background">
      <div className="mx-auto max-w-[780px] px-4 pb-8 pt-16 md:px-8 md:pt-24">
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-sm font-normal text-text-secondary"
        >
          <ol className="flex flex-wrap items-center gap-2">
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
            {category && (
              <>
                <li>
                  <span className="text-text-secondary">{category}</span>
                </li>
                <li aria-hidden="true" className="text-text-muted">
                  &gt;
                </li>
              </>
            )}
            <li>
              <span className="text-foreground">{title}</span>
            </li>
          </ol>
        </nav>

        <SlideUp>
          <header className="mb-12">
            <h1 className="mb-4 text-5xl font-normal leading-[1.15] md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-normal text-text-secondary">
              <span>{siteConfig.ownerName}</span>
              <span aria-hidden="true" className="text-text-muted">
                |
              </span>
              <time dateTime={date}>{formattedDate}</time>
              <span aria-hidden="true" className="text-text-muted">
                |
              </span>
              <span>{readingTime}</span>
            </div>
          </header>
        </SlideUp>

        <div className="prose-custom space-y-6 text-xl font-normal leading-relaxed text-text-secondary md:text-2xl [&_blockquote]:border-l-4 [&_blockquote]:border-foreground/20 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-foreground [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-normal [&_h2]:leading-[1.2] [&_h2]:text-foreground md:[&_h2]:text-4xl [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-foreground [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto max-w-[780px] px-4 py-12 md:px-8 md:py-16">
          <SlideUp>
            <div className="mb-12 text-base font-normal leading-relaxed text-text-secondary">
              <p>
                I&apos;m {siteConfig.ownerName}, the founder of{" "}
                <Link
                  href="/"
                  className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  {siteConfig.name}
                </Link>
                . Through this blog, I share the advice I give homeowners every
                day — honest answers about costs, timelines, and what actually
                matters when it comes to painting your home.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.1}>
            <div className="rounded-sm bg-warm px-8 py-10 text-center md:px-12 md:py-14">
              <h2 className="mb-3 text-3xl font-normal leading-[1.2] text-foreground md:text-4xl">
                Request an estimate
              </h2>
              <p className="mx-auto mb-6 max-w-md text-lg font-normal text-text-secondary">
                Want a free estimate? Tell us about your project and
                we&apos;ll get back to you within 2 business days.
              </p>
              <Link
                href="/contact#contact-form"
                className="inline-block rounded-[9px] bg-cta px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cta-foreground transition-colors hover:bg-cta-hover"
              >
                Get Your Free Estimate
              </Link>
            </div>
          </SlideUp>

          <div className="mt-12 text-center text-base font-normal text-text-secondary">
            <p>
              Questions? Call us at{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-medium text-foreground hover:text-link-hover transition-colors duration-300"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
