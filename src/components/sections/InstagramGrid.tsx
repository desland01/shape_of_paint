"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideUp, ScrollZoom } from "@/components/ui/motion";

interface InstagramGridProps {
  instagramUrl: string;
  images: { src: string; alt: string }[];
}

const aspectRatios = [
  "aspect-[4/5]",     // slightly tall
  "aspect-[5/5.5]",   // slightly taller than square
  "aspect-[4/5]",     // slightly tall
  "aspect-[4/5.5]",   // tallest
  "aspect-[5/5.5]",   // slightly taller than square
  "aspect-[4/4.5]",   // nearly square
];

export function InstagramGrid({ instagramUrl, images }: InstagramGridProps) {
  return (
    <section className="bg-background py-12 md:py-16">
      <SlideUp>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-3 md:grid-cols-6 items-center gap-2 md:gap-3">
            {images.slice(0, 6).map((img, i) => (
              <ScrollZoom key={i} className={`${aspectRatios[i] || "aspect-square"} transition-shadow duration-700 hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)]`}>
                <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </Link>
              </ScrollZoom>
            ))}
          </div>
        </div>
      </SlideUp>
    </section>
  );
}
