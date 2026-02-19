"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideUp } from "@/components/ui/motion";
import type { BlogPost } from "@/config/blog";
import { formatBlogDate } from "@/config/blog";

const categoryColors: Record<string, string> = {
  "Interior Painting": "text-accent-sage",
  "Exterior Painting": "text-accent-sage",
  "Cabinet Painting": "text-accent-sage",
  "Expert Advice": "text-accent-gold",
};

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <SlideUp delay={Math.min(index * 0.05, 0.2)}>
      <article className="group border-b border-border-subtle py-10 first:pt-0 last:border-b-0 md:py-12">
        <Link href={post.href} className="grid gap-6 md:grid-cols-[1fr_320px] md:gap-10 lg:gap-14">
          <div className="flex flex-col justify-center">
            <time
              dateTime={post.date}
              className="mb-3 text-sm font-normal tracking-wide text-text-muted"
            >
              {formatBlogDate(post.date)}
            </time>

            <h2 className="mb-3 text-2xl font-normal leading-[1.2] text-foreground group-hover:text-link-hover transition-colors duration-300 md:text-3xl">
              {post.title}
            </h2>

            <p className="mb-5 line-clamp-3 text-base font-normal leading-relaxed text-text-secondary md:text-lg">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-foreground group-hover:text-link-hover transition-colors duration-300">
                Read more
              </span>

              <span
                className={`text-sm font-medium uppercase tracking-[0.15em] ${categoryColors[post.category] ?? "text-text-secondary"}`}
              >
                {post.category}
              </span>
            </div>
          </div>

          <div className="relative order-first aspect-4/3 overflow-hidden rounded-sm md:order-last">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
      </article>
    </SlideUp>
  );
}
