"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

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
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/your-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
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
