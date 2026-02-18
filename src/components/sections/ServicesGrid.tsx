"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

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
            <AnimateOnScroll key={service.title} delay={i * 0.15}>
              <div className="group flex flex-col md:block">
                {/* Mobile: title + description first, then image */}
                <h3 className="mb-3 text-2xl font-semibold md:hidden">
                  {service.title}
                </h3>
                <p className="mb-4 text-lg font-normal leading-relaxed text-text-secondary md:hidden">
                  {service.description}
                </p>
                <Link href={service.href} className="relative mb-6 block aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                {/* Desktop: title + description + link below image */}
                <h3 className="mb-3 hidden text-2xl font-semibold md:block">
                  {service.title}
                </h3>
                <p className="mb-4 hidden text-lg font-normal leading-relaxed text-text-secondary md:block">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="hidden text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-60 md:inline-block"
                >
                  {service.title}
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
