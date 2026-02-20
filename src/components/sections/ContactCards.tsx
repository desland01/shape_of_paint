"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import { SlideUp } from "@/components/ui/motion";
import { siteConfig } from "@/config/site";

export function ContactCards() {
  const cards = [
    {
      icon: MapPin,
      title: "Address",
      lines: [
        siteConfig.address.street,
        `${siteConfig.address.city} ${siteConfig.address.state} ${siteConfig.address.zip}`,
      ],
    },
    {
      icon: Mail,
      title: "Email",
      lines: [siteConfig.email],
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      lines: [siteConfig.phone],
      href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`,
    },
  ];

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <SlideUp key={card.title} delay={i * 0.1}>
              <div className="text-center">
                <card.icon
                  className="mx-auto mb-4 h-8 w-8 text-accent-gold"
                  strokeWidth={1.5}
                />
                <h2 className="mb-2 text-3xl font-normal">{card.title}</h2>
                {card.lines.map((line, j) =>
                  card.href ? (
                    <a
                      key={j}
                      href={card.href}
                      className="block text-lg font-normal text-text-secondary hover:text-link-hover transition-colors duration-300"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-lg font-normal text-text-secondary">
                      {line}
                    </p>
                  )
                )}
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
