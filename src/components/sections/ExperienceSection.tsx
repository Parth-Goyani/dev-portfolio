"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/Card";
import { experiences } from "@/content/experience";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-[#0b0f14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering Impactful Solutions
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            A chronological look at my journey building automation systems,
            predictive AI models, and optimizing data workflows.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                className="relative pl-12"
              >
                <span className="absolute left-2 top-8 h-4 w-4 rounded-full border border-amber-300/40 bg-amber-300/20 shadow-[0_0_18px_rgba(251,191,36,0.35)]" />
                <Card className="bg-[#0f141b]/80">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {experience.role}
                      </h3>
                      <p className="text-sm text-amber-100/80">
                        {experience.company}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {experience.duration}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {experience.description.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
