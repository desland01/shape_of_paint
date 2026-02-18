"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

interface InstagramGridProps {
  instagramUrl: string;
  images: { src: string; alt: string }[];
}

export function InstagramGrid({ instagramUrl, images }: InstagramGridProps) {
  return (
    <section className="bg-background py-8">
      <AnimateOnScroll>
        <div className="grid grid-cols-3 md:grid-cols-6">
          {images.slice(0, 6).map((img, i) => (
            <Link
              key={i}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </Link>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
