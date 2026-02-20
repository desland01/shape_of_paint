"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "warm" | "warm-light";
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  variant = "default",
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
        "py-16 md:py-24 lg:py-32",
        bgClasses[variant],
        className
      )}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">{children}</div>
    </section>
  );
}
