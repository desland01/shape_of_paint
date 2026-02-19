"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/*  Schema                                                                     */
/* -------------------------------------------------------------------------- */

const contactSchema = z.object({
  projectType: z.string().min(1, "Please select a project type"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Valid email required"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const EASING: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const STEP_DURATION = 0.3;
const SLIDE_OFFSET = 60;

const PROJECT_TYPES = [
  { value: "interior", label: "Interior Painting", image: "/images/interior.webp" },
  { value: "exterior", label: "Exterior Painting", image: "/images/exterior.webp" },
  { value: "cabinets", label: "Cabinet Painting", image: "/images/cabinets.webp" },
  { value: "other", label: "Something Else", image: null },
] as const;

/* -------------------------------------------------------------------------- */
/*  Floating label classes (preserved from original)                           */
/* -------------------------------------------------------------------------- */

const INPUT_CLASS =
  "peer block w-full min-h-12 rounded-none border border-border-subtle bg-background px-3 pb-2 pt-5 text-base outline-none transition-colors focus:border-foreground";

const LABEL_CLASS =
  "pointer-events-none absolute left-3 top-2 origin-[0] -translate-y-0 text-xs font-medium text-text-secondary transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-foreground";

const CTA_CLASS =
  "w-full min-h-[48px] flex items-center justify-center rounded-[9px] border border-cta bg-cta px-8 py-3 text-base font-semibold uppercase tracking-[0.2em] text-cta-foreground transition-[background-color,box-shadow,border-color] duration-[400ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-cta-hover hover:bg-cta-hover hover:shadow-[0_12px_50px_-5px_rgb(192,164,135)] disabled:opacity-50 disabled:pointer-events-none";

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function ContactForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      projectType: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const selectedProject = watch("projectType");

  /* ------ Navigation helpers ------ */

  const goForward = useCallback(() => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 3));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }, []);

  const handleProjectSelect = useCallback(
    (value: string) => {
      setValue("projectType", value, { shouldValidate: true });
      goForward();
    },
    [setValue, goForward]
  );

  const handleStep2Continue = useCallback(async () => {
    const isValid = await trigger(["name", "phone", "email"]);
    if (isValid) {
      goForward();
    }
  }, [trigger, goForward]);

  /* ------ Submit ------ */

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
        setSubmitError("Something went wrong. Please call us at 604-353-7378.");
      }
    } catch {
      setSubmitError("Something went wrong. Please call us at 604-353-7378.");
    }
  };

  /* ------ Animation variants ------ */

  const variants = shouldReduceMotion
    ? {
        enter: { opacity: 1, x: 0 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: 0 },
      }
    : {
        enter: (d: number) => ({
          x: d * SLIDE_OFFSET,
          opacity: 0,
        }),
        center: {
          x: 0,
          opacity: 1,
        },
        exit: (d: number) => ({
          x: d * -SLIDE_OFFSET,
          opacity: 0,
        }),
      };

  /* ------ Success state ------ */

  if (submitted) {
    const name = getValues("name");
    const phone = getValues("phone");
    const email = getValues("email");
    const contactMethod = phone ? phone : email;
    const contactLabel = phone ? "call you at" : "reach you at";

    return (
      <div className="text-center py-8">
        <h3 className="mb-3 text-2xl font-normal">
          Thank you, {name}!
        </h3>
        <p className="text-base text-text-secondary mb-4">
          We&apos;ll {contactLabel} {contactMethod} within 2 hours during
          business hours.
        </p>
        <p className="text-sm text-text-secondary mb-6">
          While you wait, browse our{" "}
          <Link
            href="/services/portfolio"
            className="font-medium text-foreground underline underline-offset-2 hover:text-accent-gold"
          >
            recent projects
          </Link>
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

  /* ------ Progress bar ------ */

  const progressBar = (
    <div className="mb-6">
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary mb-2">
        Step {step} of 3
      </p>
      <div className="h-0.5 w-full rounded-full bg-border-subtle">
        <motion.div
          className="h-full rounded-full bg-accent-gold"
          initial={false}
          animate={{ width: `${(step / 3) * 100}%` }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: EASING,
          }}
        />
      </div>
    </div>
  );

  /* ------ Render ------ */

  return (
    <div>
      {/* Heading */}
      <div className="mb-6">
        <h3 className="text-2xl font-normal mb-1">Tell Us About Your Project</h3>
        <p className="text-sm text-text-secondary">
          We respond within 2 hours during business hours
        </p>
      </div>

      {progressBar}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Hidden projectType for form submission */}
        <input type="hidden" {...register("projectType")} />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {/* ---- STEP 1: Project Type ---- */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: shouldReduceMotion ? 0 : STEP_DURATION,
                  ease: EASING,
                }}
              >
                <p className="text-sm font-medium text-text-secondary mb-4">
                  What type of project do you have in mind?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => handleProjectSelect(type.value)}
                      aria-pressed={selectedProject === type.value}
                      className={`group min-h-[48px] rounded-[9px] border text-left transition-all duration-300 overflow-hidden ${
                        selectedProject === type.value
                          ? "border-accent-gold shadow-sm"
                          : "border-border-subtle hover:border-text-muted"
                      } ${type.image ? "" : "flex items-center justify-center"}`}
                    >
                      {type.image ? (
                        <div>
                          <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                              src={type.image}
                              alt={type.label}
                              fill
                              sizes="(max-width: 640px) 45vw, 200px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              unoptimized
                            />
                          </div>
                          <p className="px-3 py-2.5 text-sm font-medium text-foreground">
                            {type.label}
                          </p>
                        </div>
                      ) : (
                        <p className="px-3 py-4 text-sm font-medium text-text-secondary group-hover:text-foreground transition-colors">
                          {type.label}
                        </p>
                      )}
                    </button>
                  ))}
                </div>

                {errors.projectType && (
                  <p className="text-xs text-red-600 mt-2">
                    {errors.projectType.message}
                  </p>
                )}
              </motion.div>
            )}

            {/* ---- STEP 2: Contact Info ---- */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: shouldReduceMotion ? 0 : STEP_DURATION,
                  ease: EASING,
                }}
                className="space-y-5"
              >
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
                      className={INPUT_CLASS}
                      {...register("name")}
                    />
                    <label htmlFor="name" className={LABEL_CLASS}>
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
                      className={INPUT_CLASS}
                      {...register("phone")}
                    />
                    <label htmlFor="phone" className={LABEL_CLASS}>
                      Phone -- fastest way to reach you
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
                      className={INPUT_CLASS}
                      {...register("email")}
                    />
                    <label htmlFor="email" className={LABEL_CLASS}>
                      Email Address
                    </label>
                  </div>
                  {errors.email ? (
                    <p id="email-error" className="text-xs text-red-600 mt-1">
                      {errors.email.message}
                    </p>
                  ) : (
                    <p
                      id="email-trust-copy"
                      className="text-xs text-text-muted mt-1"
                    >
                      We never share your info
                    </p>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between pt-2">
                  <button
                    type="button"
                    onClick={goBack}
                    className="min-h-[48px] text-base text-text-secondary hover:text-foreground transition-colors"
                    aria-label="Go back to project type selection"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleStep2Continue}
                    className={`${CTA_CLASS} md:w-auto`}
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* ---- STEP 3: Project Details (Optional) ---- */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: shouldReduceMotion ? 0 : STEP_DURATION,
                  ease: EASING,
                }}
                className="space-y-5"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-muted">
                      Optional
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder=" "
                      rows={5}
                      className={`${INPUT_CLASS} resize-y`}
                      {...register("message")}
                    />
                    <label htmlFor="message" className={LABEL_CLASS}>
                      Tell us about your project
                    </label>
                  </div>
                  <p className="text-xs text-text-muted mt-1">
                    Rooms, square footage, timeline -- whatever you know so far
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between pt-2">
                  <button
                    type="button"
                    onClick={goBack}
                    className="min-h-[48px] text-base text-text-secondary hover:text-foreground transition-colors"
                    aria-label="Go back to contact information"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${CTA_CLASS} md:w-auto`}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Get My Free Estimate \u2192"}
                  </button>
                </div>

                {submitError && (
                  <p className="text-xs text-red-600 mt-1">{submitError}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
