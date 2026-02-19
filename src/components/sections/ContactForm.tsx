"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SlideUp } from "@/components/ui/motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Please tell us a bit more about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(
          "Something went wrong. Please call us at 604-353-7378."
        );
      }
    } catch {
      setSubmitError("Something went wrong. Please call us at 604-353-7378.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="mb-3 text-2xl font-normal">Thank you!</h3>
        <p className="text-base text-text-secondary mb-2">
          We&apos;ll call you within 2 hours during business hours.
        </p>
        <p className="text-sm text-text-muted">
          Or call us now:{" "}
          <a
            href="tel:6043537378"
            className="text-foreground font-medium hover:underline"
          >
            604-353-7378
          </a>
        </p>
      </div>
    );
  }

  return (
    <SlideUp>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder=" "
              autoComplete="name"
              aria-invalid={errors.name ? "true" : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="peer block w-full rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground"
              {...register("name")}
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground"
            >
              Your Name
            </label>
          </div>
          {errors.name && (
            <p id="name-error" className="text-xs text-red-600 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              placeholder=" "
              autoComplete="tel"
              className="peer block w-full rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground"
              {...register("phone")}
            />
            <label
              htmlFor="phone"
              className="pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground"
            >
              Phone (recommended)
            </label>
          </div>
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder=" "
              autoComplete="email"
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={
                errors.email ? "email-error" : "email-trust-copy"
              }
              className="peer block w-full rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground"
              {...register("email")}
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground"
            >
              Email Address
            </label>
          </div>
          {errors.email ? (
            <p id="email-error" className="text-xs text-red-600 mt-1">
              {errors.email.message}
            </p>
          ) : (
            <p id="email-trust-copy" className="text-xs text-text-muted mt-1">
              🔒 We never share your info
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              rows={5}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="peer block w-full rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground resize-y"
              {...register("message")}
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground"
            >
              Tell us about your project
            </label>
          </div>
          {errors.message && (
            <p id="message-error" className="text-xs text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full min-h-[48px] items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? "Sending..." : "Get My Free Estimate \u2192"}
        </button>

        {submitError && (
          <p className="text-xs text-red-600 mt-1">{submitError}</p>
        )}
      </form>
    </SlideUp>
  );
}
