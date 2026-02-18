import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium uppercase tracking-[0.2em] text-text-secondary",
        className
      )}
    >
      {children}
    </p>
  );
}
