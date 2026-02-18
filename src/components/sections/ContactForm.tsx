"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  if (submitted) {
    return (
      <AnimateOnScroll>
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-semibold">Thank you!</h3>
          <p className="text-base font-normal text-text-secondary">
            We&apos;ll be in touch soon.
          </p>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <AnimateOnScroll>
        <div>
          <Input
            {...register("name")}
            placeholder="Your Name"
            className="rounded-none border-border-subtle bg-background text-base"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.05}>
        <div>
          <Input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="rounded-none border-border-subtle bg-background text-base"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <div>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Phone (optional)"
            className="rounded-none border-border-subtle bg-background text-base"
          />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.15}>
        <div>
          <Textarea
            {...register("message")}
            placeholder="Tell us about your project"
            rows={5}
            className="rounded-none border-border-subtle bg-background text-base"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.2}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-8 py-3 text-xs font-medium uppercase tracking-[0.2em]"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </AnimateOnScroll>
    </form>
  );
}
