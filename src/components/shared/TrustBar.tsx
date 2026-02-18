import { cn } from "@/lib/utils";

interface TrustBarProps {
  className?: string;
  variant?: "light" | "dark";
}

const StarIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-accent-gold"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function TrustBar({ className, variant = "dark" }: TrustBarProps) {
  const isLight = variant === "light";

  return (
    <div
      role="status"
      aria-label="4.9 out of 5 stars from 200+ Google Reviews. Licensed and Insured."
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm",
        className
      )}
    >
      {/* Stars + Rating */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <span
          className={cn(
            "font-semibold",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          4.9/5
        </span>
      </div>

      {/* Separator */}
      <span
        aria-hidden="true"
        className={cn(
          "hidden sm:inline",
          isLight ? "text-white/50" : "text-text-muted"
        )}
      >
        &middot;
      </span>

      {/* Google Reviews */}
      <span className={cn(isLight ? "text-white/90" : "text-text-secondary")}>
        200+ Google Reviews
      </span>

      {/* Separator */}
      <span
        aria-hidden="true"
        className={cn(
          "hidden sm:inline",
          isLight ? "text-white/50" : "text-text-muted"
        )}
      >
        &middot;
      </span>

      {/* Licensed & Insured */}
      <span className={cn(isLight ? "text-white/90" : "text-text-secondary")}>
        Licensed &amp; Insured
      </span>
    </div>
  );
}
