"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import { projects } from "@/content/projects";

const tagOptions = [
  "All",
  ...Array.from(new Set(projects.flatMap((project) => project.tags))),
];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = React.useState<string>("All");

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <section id="projects" className="relative bg-[#0f141b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">
            Projects
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured work with measurable impact.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            A selection of product initiatives spanning design systems, analytics
            platforms, and content-rich experiences.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {tagOptions.map((tag) => (
            <Chip
              key={tag}
              active={tag === activeTag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </Chip>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="flex h-full flex-col bg-[#0b0f14]/80">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-sky-500/20" />
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70"
                      style={{ backgroundImage: `url(${project.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
                        {project.tags[0]}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-white/70">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm text-white/60">
                      {project.longDescription}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3 text-sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/30 hover:bg-white/10"
                      >
                        Live
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/30 hover:bg-white/10"
                      >
                        GitHub
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.19 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.467-1.11-1.467-.909-.62.069-.608.069-.608 1.003.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.025 10.025 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
