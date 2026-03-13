import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "warm" | "warm-light";
  layout?: "flow" | "wide";
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  variant = "default",
  layout = "wide",
  id,
}: SectionWrapperProps) {
  const bgClasses = {
    default: "bg-background",
    warm: "bg-warm",
    "warm-light": "bg-warm-light",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-[var(--space-section)]",
        bgClasses[variant],
        className
      )}
    >
      <div
        className={
          layout === "flow"
            ? "breakout-grid"
            : "mx-auto max-w-[1440px] px-4 md:px-8"
        }
      >
        {children}
      </div>
    </section>
  );
}
