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
  showHeader?: boolean;
}

export function FAQ({
  eyebrow = "Frequently Asked Questions",
  heading,
  items,
  showHeader = true,
}: FAQProps) {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-content px-4 md:px-8">
        {showHeader && (
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
        )}

        <dl className="divide-y divide-border-subtle">
          {items.map((item, i) => (
            <div key={i} className="py-8 first:pt-0 last:pb-0">
              <dt className="text-xl font-medium md:text-2xl">{item.question}</dt>
              <dd className="mt-3 text-lg font-normal leading-relaxed text-text-secondary md:text-xl">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
