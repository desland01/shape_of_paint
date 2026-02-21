"use client";

import * as React from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { useKeyboardHeight } from "@/hooks/useKeyboardHeight";

interface TextInputSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
  onChange: (value: string) => void;
  label: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  error?: string;
}

const INPUT_MODE_MAP: Record<string, React.HTMLAttributes<HTMLInputElement>["inputMode"]> = {
  tel: "tel",
  email: "email",
  text: "text",
};

const TextInputSheet = ({
  open,
  onOpenChange,
  value,
  onChange,
  label,
  type = "text",
  autoComplete,
  placeholder = " ",
  multiline = false,
  rows = 3,
  error,
}: TextInputSheetProps) => {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const errorId = useId();
  const { keyboardHeight } = useKeyboardHeight();

  // Sync local state when parent value changes or sheet opens
  useEffect(() => {
    if (open) {
      setLocalValue(value);
    }
  }, [open, value]);

  // Auto-focus the input after sheet open animation completes
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      if (multiline) {
        textareaRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [open, multiline]);

  const handleDone = useCallback(() => {
    onChange(localValue);
    onOpenChange(false);
  }, [localValue, onChange, onOpenChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !multiline) {
        e.preventDefault();
        handleDone();
      }
    },
    [multiline, handleDone]
  );

  const inputClasses =
    "w-full rounded-xl border border-border-subtle bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent-gold";

  const hasError = Boolean(error);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="rounded-t-2xl px-5 pb-5 pt-4"
        style={{ paddingBottom: keyboardHeight > 0 ? keyboardHeight + 20 : 20 }}
      >
        <SheetTitle className="text-lg font-semibold text-foreground">
          {label}
        </SheetTitle>
        <SheetDescription className="sr-only">
          Enter your {label.toLowerCase()}
        </SheetDescription>

        <div className="flex flex-col gap-3">
          {multiline ? (
            <textarea
              ref={textareaRef}
              value={localValue}
              onChange={(e) => setLocalValue(e.target.value)}
              rows={rows}
              placeholder={placeholder}
              autoComplete={autoComplete}
              aria-label={label}
              aria-invalid={hasError}
              aria-describedby={hasError ? errorId : undefined}
              className={`${inputClasses} resize-none ${hasError ? "border-red-500 focus:border-red-500" : ""}`}
            />
          ) : (
            <input
              ref={inputRef}
              type={type}
              inputMode={INPUT_MODE_MAP[type]}
              value={localValue}
              onChange={(e) => setLocalValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              autoComplete={autoComplete}
              aria-label={label}
              aria-invalid={hasError}
              aria-describedby={hasError ? errorId : undefined}
              className={`${inputClasses} min-h-12 ${hasError ? "border-red-500 focus:border-red-500" : ""}`}
            />
          )}

          {hasError && (
            <p id={errorId} className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleDone}
            className="min-h-12 w-full rounded-[9px] border border-cta bg-cta text-base font-semibold text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)]"
          >
            Done
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { TextInputSheet };
export type { TextInputSheetProps };
