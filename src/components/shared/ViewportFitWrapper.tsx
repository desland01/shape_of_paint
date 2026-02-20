import { cn } from "@/lib/utils";

interface ViewportFitWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}

export function ViewportFitWrapper({
  children,
  className,
  as: Tag = "section",
  id,
}: ViewportFitWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "scroll-mt-[var(--header-h,72px)] h-[calc(100svh-var(--header-h,72px))] flex flex-col overflow-hidden",
        className
      )}
    >
      {children}
    </Tag>
  );
}
