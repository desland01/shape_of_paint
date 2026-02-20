"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideUp, ScrollZoom } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((service, i) => (
            <SlideUp key={service.title} delay={i * 0.15}>
              <div className="group flex flex-col md:block">
                {/* Mobile: title + description first, then image */}
                <h3 className="mb-3 text-4xl font-normal md:hidden">
                  {service.title}
                </h3>
                <p className="mb-4 text-xl font-normal leading-relaxed text-text-secondary md:hidden">
                  {service.description}
                </p>
                <ScrollZoom className="-mx-4 md:mx-0">
                  <Link href={service.href} className="relative mb-6 block aspect-[4/3] hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)] transition-shadow duration-700">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                </ScrollZoom>
                {/* Desktop: title + description + link below image */}
                <h3 className="mb-3 hidden text-4xl font-normal md:block">
                  {service.title}
                </h3>
                <p className="mb-4 hidden text-xl md:text-2xl font-normal leading-relaxed text-text-secondary md:block">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 py-3 min-h-[48px] text-sm font-medium uppercase tracking-[0.15em] text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  {service.title}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
