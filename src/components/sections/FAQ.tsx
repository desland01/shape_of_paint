"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SlideUp } from "@/components/ui/motion";
import { DecorativeIcon } from "@/components/shared/DecorativeIcon";
import { Eyebrow } from "@/components/shared/Eyebrow";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  eyebrow?: string;
  heading: string;
  items: FAQItem[];
}

export function FAQ({
  eyebrow = "Frequently Asked Questions",
  heading,
  items,
}: FAQProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = items.length > 4 && !showAll ? items.slice(0, 3) : items;

  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-content px-4 md:px-8">
        <div className="mb-12 text-center">
          <SlideUp>
            <DecorativeIcon variant="leaf" className="mb-6" />
          </SlideUp>
          <SlideUp delay={0.1}>
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          </SlideUp>
          <SlideUp delay={0.15}>
            <h2 className="text-5xl font-normal leading-[1.2] md:text-6xl lg:text-[72px]">{heading}</h2>
          </SlideUp>
        </div>

        <SlideUp delay={0.2}>
          <Accordion type="single" collapsible>
            {visibleItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-xl font-medium md:text-2xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl font-normal leading-relaxed text-text-secondary md:text-2xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {items.length > 4 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-6 mx-auto flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Show All {items.length} Questions
            </button>
          )}
        </SlideUp>

        {/* SSR-rendered plain HTML for AI crawlers that cannot expand accordions */}
        <div className="sr-only">
          {items.map((item, i) => (
            <div key={i}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
