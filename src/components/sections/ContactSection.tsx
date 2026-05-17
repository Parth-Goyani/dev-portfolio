"use client";

import * as React from "react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const inputBaseStyles =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-amber-300/40 focus:outline-none focus:ring-2 focus:ring-amber-300/20";

const errorStyles = "border-amber-300/70 focus:border-amber-300/70 focus:ring-amber-300/30";

export default function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [fieldErrors, setFieldErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("idle");
      setSubmitError(null);

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      const nextErrors = {
        name: name.trim() ? "" : "Name is required.",
        email: email.trim() ? "" : "Email is required.",
        message: message.trim() ? "" : "Message is required.",
      };

      if (!nextErrors.email && !emailPattern.test(email.trim())) {
        nextErrors.email = "Please enter a valid email address.";
      }

      setFieldErrors(nextErrors);

      if (nextErrors.name || nextErrors.email || nextErrors.message) {
        setStatus("error");
        setSubmitError("Please complete all fields before sending.");
        return;
      }

      setIsSubmitting(true);

      try {
        const subject = `Inquiry: Python & AI/ML Engineering Opportunities - ${name}`;
        const body =
          `Name: ${name}\r\n` +
          `Email: ${email}\r\n\r\n` +
          `Message:\r\n${message}`;
        const mailtoUrl =
          `mailto:parthgoyani777@gmail.com?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setFieldErrors({ name: "", email: "", message: "" });
      } catch (_error) {
        console.error(_error);
        setStatus("error");
        setSubmitError("Unable to open your email client. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [name, email, message]
  );

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
              Have an engineering challenge or a full-time opportunity? Drop your
              details below to directly initiate a conversation.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Email</p>
                <a
                  href="mailto:parthgoyani777@gmail.com"
                  className="text-sm text-amber-200"
                >
                  parthgoyani777@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Availability</p>
                <p className="text-sm text-white/60">
                  Open to full-time opportunities in Python Development, AI/ML,
                  and Backend Engineering.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-[#0f141b]/80">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      if (status !== "idle") {
                        setStatus("idle");
                        setSubmitError(null);
                      }
                      if (fieldErrors.name) {
                        setFieldErrors((prev) => ({ ...prev, name: "" }));
                      }
                    }}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                    className={`${inputBaseStyles} ${fieldErrors.name ? errorStyles : ""} mt-2`}
                    placeholder="Your name"
                  />
                  {fieldErrors.name ? (
                    <p id="contact-name-error" className="mt-2 text-xs text-amber-200">
                      {fieldErrors.name}
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
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (status !== "idle") {
                        setStatus("idle");
                        setSubmitError(null);
                      }
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: "" }));
                      }
                    }}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                    className={`${inputBaseStyles} ${fieldErrors.email ? errorStyles : ""} mt-2`}
                    placeholder="you@email.com"
                  />
                  {fieldErrors.email ? (
                    <p id="contact-email-error" className="mt-2 text-xs text-amber-200">
                      {fieldErrors.email}
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
                    value={message}
                    onChange={(event) => {
                      setMessage(event.target.value);
                      if (status !== "idle") {
                        setStatus("idle");
                        setSubmitError(null);
                      }
                      if (fieldErrors.message) {
                        setFieldErrors((prev) => ({ ...prev, message: "" }));
                      }
                    }}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                    className={`${inputBaseStyles} ${fieldErrors.message ? errorStyles : ""} mt-2 resize-none`}
                    placeholder="Tell me about the project..."
                  />
                  {fieldErrors.message ? (
                    <p id="contact-message-error" className="mt-2 text-xs text-amber-200">
                      {fieldErrors.message}
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
