"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setSubmitted(true);
  };

  return (
    <section className="bg-warm-light py-12 md:py-16">
      <div className="mx-auto max-w-[500px] px-6 text-center md:px-8">
        {!submitted ? (
          <>
            <AnimateOnScroll>
              <h4 className="mb-3 text-xl font-semibold">Get painting tips and project ideas</h4>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="mb-6 text-base font-normal text-text-secondary">
                Colour trends, prep advice, and before-and-after transformations — straight to your inbox. No spam. Unsubscribe anytime.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-none border-border-subtle bg-background text-base"
                />
                <Button
                  type="submit"
                  className="bg-cta text-cta-foreground hover:bg-cta-hover rounded-none px-6 text-xs font-medium uppercase tracking-[0.15em]"
                >
                  Subscribe
                </Button>
              </form>
            </AnimateOnScroll>
          </>
        ) : (
          <AnimateOnScroll>
            <h4 className="mb-2 text-xl font-semibold">Thank you!</h4>
            <p className="text-base font-normal text-text-secondary">
              You have successfully joined our subscriber list.
            </p>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
