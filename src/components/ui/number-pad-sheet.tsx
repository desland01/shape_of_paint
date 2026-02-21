"use client"

import * as React from "react"
import { Delete } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

interface NumberPadSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  value: number | string
  onChange: (value: number) => void
  label: string
  suffix?: string
  allowDecimal?: boolean
  maxValue?: number
  maxLength?: number
}

const KEY_SPRING = { type: "spring" as const, stiffness: 500, damping: 30 }

const KEYS = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  [".", "0", "backspace"],
] as const

type KeyValue = (typeof KEYS)[number][number]

const getAriaLabel = (key: KeyValue): string => {
  if (key === ".") return "decimal point"
  if (key === "backspace") return "backspace"
  return key
}

const NumberPadSheet = ({
  open,
  onOpenChange,
  value,
  onChange,
  label,
  suffix,
  allowDecimal = true,
  maxValue,
  maxLength,
}: NumberPadSheetProps) => {
  const shouldReduceMotion = useReducedMotion()
  const [internalValue, setInternalValue] = React.useState("")

  // Sync internal string state when sheet opens
  React.useEffect(() => {
    if (open) {
      const numVal = typeof value === "string" ? parseFloat(value) : value
      if (isNaN(numVal) || numVal === 0) {
        setInternalValue("")
      } else {
        setInternalValue(String(numVal))
      }
    }
  }, [open, value])

  const displayValue = internalValue || "0"

  const hasDecimal = internalValue.includes(".")

  const isDecimalDisabled = !allowDecimal || hasDecimal

  const handleKeyPress = React.useCallback(
    (key: KeyValue) => {
      if (key === "backspace") {
        setInternalValue((prev) => {
          const next = prev.slice(0, -1)
          return next
        })
        return
      }

      if (key === ".") {
        if (!allowDecimal || hasDecimal) return
        setInternalValue((prev) => {
          // If empty, start with "0."
          if (prev === "") return "0."
          return prev + "."
        })
        return
      }

      // Digit key
      setInternalValue((prev) => {
        const candidate = prev + key

        // Enforce maxLength (count only digits, not decimal point)
        if (maxLength !== undefined) {
          const digitCount = candidate.replace(".", "").length
          if (digitCount > maxLength) return prev
        }

        // Enforce maxValue
        if (maxValue !== undefined) {
          const parsed = parseFloat(candidate)
          if (!isNaN(parsed) && parsed > maxValue) return prev
        }

        return candidate
      })
    },
    [allowDecimal, hasDecimal, maxLength, maxValue]
  )

  const handleDone = React.useCallback(() => {
    const parsed = parseFloat(internalValue)
    onChange(isNaN(parsed) ? 0 : parsed)
    onOpenChange(false)
  }, [internalValue, onChange, onOpenChange])

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" showCloseButton={false} className="p-5">
        <SheetTitle className="text-center text-base font-semibold text-foreground">
          {label}
        </SheetTitle>
        <SheetDescription className="sr-only">
          Use the number pad to enter a value for {label}
        </SheetDescription>

        {/* Value display */}
        <div className="flex items-baseline justify-center gap-2 py-3">
          <span className="text-3xl font-semibold tabular-nums text-foreground">
            {displayValue}
          </span>
          {suffix && (
            <span className="text-lg text-text-secondary">{suffix}</span>
          )}
        </div>

        {/* Number pad grid */}
        <div className="grid grid-cols-3 gap-2">
          {KEYS.flat().map((key) => {
            if (key === "backspace") {
              return (
                <PadKey
                  key="backspace"
                  onPress={() => handleKeyPress("backspace")}
                  ariaLabel="backspace"
                  shouldReduceMotion={shouldReduceMotion}
                >
                  <Delete className="mx-auto h-5 w-5" />
                </PadKey>
              )
            }

            if (key === ".") {
              return (
                <PadKey
                  key="decimal"
                  onPress={() => handleKeyPress(".")}
                  ariaLabel="decimal point"
                  disabled={isDecimalDisabled}
                  shouldReduceMotion={shouldReduceMotion}
                >
                  .
                </PadKey>
              )
            }

            return (
              <PadKey
                key={key}
                onPress={() => handleKeyPress(key)}
                ariaLabel={getAriaLabel(key)}
                shouldReduceMotion={shouldReduceMotion}
              >
                {key}
              </PadKey>
            )
          })}
        </div>

        {/* Done button */}
        <button
          type="button"
          onClick={handleDone}
          className="mt-3 w-full rounded-[9px] border border-cta bg-cta py-3.5 text-base font-semibold text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-hover"
          aria-label={`Done editing ${label}`}
        >
          Done
        </button>
      </SheetContent>
    </Sheet>
  )
}

interface PadKeyProps {
  children: React.ReactNode
  onPress: () => void
  ariaLabel: string
  disabled?: boolean
  shouldReduceMotion: boolean | null
}

const PadKey = ({
  children,
  onPress,
  ariaLabel,
  disabled = false,
  shouldReduceMotion,
}: PadKeyProps) => {
  const MotionButton = motion.button

  if (shouldReduceMotion) {
    return (
      <button
        type="button"
        onClick={onPress}
        disabled={disabled}
        aria-label={ariaLabel}
        className={`flex h-14 items-center justify-center rounded-xl text-xl font-semibold text-foreground transition-colors ${
          disabled
            ? "pointer-events-none opacity-30"
            : "bg-warm-light hover:bg-border-subtle active:bg-border-subtle"
        }`}
      >
        {children}
      </button>
    )
  }

  return (
    <MotionButton
      type="button"
      onClick={onPress}
      disabled={disabled}
      aria-label={ariaLabel}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      transition={KEY_SPRING}
      className={`flex h-14 items-center justify-center rounded-xl text-xl font-semibold text-foreground transition-colors ${
        disabled
          ? "pointer-events-none opacity-30"
          : "bg-warm-light hover:bg-border-subtle active:bg-border-subtle"
      }`}
    >
      {children}
    </MotionButton>
  )
}

export { NumberPadSheet }
export type { NumberPadSheetProps }
