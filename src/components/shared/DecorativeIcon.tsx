import { cn } from "@/lib/utils";

interface DecorativeIconProps {
  variant?: "leaf" | "feather";
  className?: string;
  size?: number;
}

export function DecorativeIcon({
  variant = "leaf",
  className,
  size = 100,
}: DecorativeIconProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src="/images/logo-icon.png"
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
        className={cn(variant === "feather" && "opacity-60")}
      />
    </div>
  );
}
