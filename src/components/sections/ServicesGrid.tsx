"use client";

import Image from "next/image";
import Link from "next/link";
import { SlideUp } from "@/components/ui/motion";

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
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((service, i) => (
            <SlideUp key={service.title} delay={i * 0.15}>
              <div className="group flex flex-col md:block">
                {/* Mobile: title + description first, then image */}
                <h3 className="mb-3 text-2xl font-normal md:hidden">
                  {service.title}
                </h3>
                <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary md:hidden">
                  {service.description}
                </p>
                <Link href={service.href} className="relative mb-6 block aspect-[4/3] overflow-hidden hover:shadow-[0_50px_80px_-50px_rgba(222,150,125,1)] transition-shadow duration-700">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                {/* Desktop: title + description + link below image */}
                <h3 className="mb-3 hidden text-2xl font-normal md:block">
                  {service.title}
                </h3>
                <p className="mb-4 hidden text-lg font-normal leading-relaxed text-text-secondary md:block">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center py-3 min-h-[48px] text-sm font-medium uppercase tracking-[0.15em] text-foreground hover:text-link-hover transition-colors duration-300"
                >
                  {service.title}
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
