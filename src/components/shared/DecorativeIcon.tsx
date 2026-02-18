import { cn } from "@/lib/utils";
import { PaintBucket } from "lucide-react";

interface DecorativeIconProps {
  variant?: "leaf" | "feather";
  className?: string;
  size?: number;
}

export function DecorativeIcon({
  variant = "leaf",
  className,
  size = 20,
}: DecorativeIconProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <PaintBucket
        size={size}
        strokeWidth={1.5}
        aria-hidden="true"
        className={cn(
          variant === "leaf" ? "text-accent-gold" : "text-accent-sage"
        )}
      />
    </div>
  );
}
