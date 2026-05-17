"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { contactSchema, type ContactFormValues } from "@/lib/validators";

const inputBaseStyles =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-amber-300/40 focus:outline-none focus:ring-2 focus:ring-amber-300/20";

const errorStyles = "border-amber-300/70 focus:border-amber-300/70 focus:ring-amber-300/30";

export default function ContactSection() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setSubmitError(null);

    try {
      const mailtoUrl =
        `mailto:parthgoyani777@gmail.com?subject=Portfolio Message from ${values.name}` +
        `&body=Name: ${values.name}%0D%0AEmail: ${values.email}` +
        `%0D%0A%0D%0AMessage:%0D%0A${values.message}`;

      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.click();
      setStatus("success");
      reset();
    } catch (_error) {
      console.error(_error);
      setStatus("error");
      setSubmitError("Unable to open your email client. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-[#0b0f14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let us build something that feels effortless.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Tell me about the product, the timeline, and where you want the
              experience to land. I will follow up with next steps and a tailored
              approach.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Email</p>
                <a
                  href="mailto:hello@devstudio.co"
                  className="text-sm text-amber-200"
                >
                  hello@devstudio.co
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Availability</p>
                <p className="text-sm text-white/60">
                  Booking new product partnerships for Q3.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-[#0f141b]/80">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={`${inputBaseStyles} ${errors.name ? errorStyles : ""} mt-2`}
                    placeholder="Your name"
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-2 text-xs text-amber-200">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={`${inputBaseStyles} ${errors.email ? errorStyles : ""} mt-2`}
                    placeholder="you@email.com"
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-2 text-xs text-amber-200">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    {...register("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${inputBaseStyles} ${errors.message ? errorStyles : ""} mt-2 resize-none`}
                    placeholder="Tell me about the project..."
                  />
                  {errors.message ? (
                    <p id="contact-message-error" className="mt-2 text-xs text-amber-200">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b0f14] border-t-transparent" />
                      Sending
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {status === "success" ? (
                  <p className="text-sm text-amber-200">
                    Thanks for reaching out. I will reply within 2 business days.
                  </p>
                ) : null}
                {status === "error" && submitError ? (
                  <p className="text-sm text-rose-300">{submitError}</p>
                ) : null}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
