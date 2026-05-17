"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingStyle = {
  fontFamily: '"Space Grotesk", var(--font-geist-sans), sans-serif',
};

export default function HeroSection() {
  const handleScroll = React.useCallback((id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0b0f14] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 sm:py-28 lg:flex-row lg:items-center lg:gap-16 lg:py-32"
      >
        <div className="flex-1">
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200"
          >
            Available for select builds
          </motion.p>

          <motion.h1
            variants={itemVariants}
            style={headingStyle}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Designing and building digital products with cinematic clarity.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-lg text-white/70 sm:text-xl"
          >
            I am a full stack engineer focused on expressive interfaces, accessible
            systems, and resilient performance. I translate product vision into
            immersive, production-ready experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button onClick={() => handleScroll("projects")}>View Projects</Button>
            <Button
              variant="secondary"
              onClick={() => handleScroll("contact")}
            >
              Let us Collaborate
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/your-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              aria-label="GitHub profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.19 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.467-1.11-1.467-.909-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.025 10.025 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.352V9h3.414v1.561h.046c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.764 20.452H3.91V9h2.854v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between text-sm text-white/60">
            <span>Focus Areas</span>
            <ArrowUpRight className="h-4 w-4 text-amber-200" />
          </div>
          <div className="mt-4 space-y-4">
            {[
              {
                title: "Product Strategy",
                detail: "Aligning vision, scope, and shipping cadence.",
              },
              {
                title: "Design Systems",
                detail: "Reusable UI foundations with consistent motion.",
              },
              {
                title: "Performance",
                detail: "Optimized experiences that feel instantaneous.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#11161D]/80 p-4"
              >
                <p className="text-base font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
            Currently partnering with product teams to refine onboarding,
            storytelling, and growth experiments.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
