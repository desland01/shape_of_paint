"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { SlideUp } from "@/components/ui/motion";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[800px] px-4 text-center md:px-8">
        {!submitted ? (
          <>
            <SlideUp>
              <h4 className="mb-3 text-4xl font-normal italic">Newsletter Signup</h4>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="mb-6 text-base font-normal leading-relaxed text-text-secondary">
                Colour trends, prep advice, and before-and-after transformations — straight to your inbox. No spam. Unsubscribe anytime.
              </p>
            </SlideUp>
            <SlideUp delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                <div className="flex flex-col gap-1 text-left">
                  <label htmlFor="newsletter-email" className="text-sm font-medium text-text-secondary">
                    Email address
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="rounded-none border-border-subtle bg-transparent text-base h-12"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-newsletter-btn text-newsletter-btn-text hover:bg-cta-hover hover:text-foreground transition-all duration-[400ms] rounded-[12px] text-base px-4 py-3 font-normal tracking-wide min-h-12"
                >
                  Subscribe
                </button>
              </form>
            </SlideUp>
          </>
        ) : (
          <SlideUp>
            <h4 className="mb-2 text-4xl font-normal italic">Thank you!</h4>
            <p className="text-lg font-normal text-text-secondary">
              You have successfully joined our subscriber list.
            </p>
          </SlideUp>
        )}
      </div>
    </section>
  );
}
