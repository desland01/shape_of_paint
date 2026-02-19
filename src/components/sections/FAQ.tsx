"use client";

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
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[700px] px-6 md:px-8">
        <div className="mb-12 text-center">
          <SlideUp>
            <DecorativeIcon variant="leaf" className="mb-6" />
          </SlideUp>
          <SlideUp delay={0.1}>
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          </SlideUp>
          <SlideUp delay={0.15}>
            <h2 className="text-3xl font-normal leading-[1.2] md:text-4xl lg:text-[60px]">{heading}</h2>
          </SlideUp>
        </div>

        <SlideUp delay={0.2}>
          <Accordion type="single" collapsible>
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg font-normal leading-relaxed text-text-secondary">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SlideUp>
      </div>
    </section>
  );
}
