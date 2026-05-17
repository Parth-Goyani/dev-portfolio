import Card from "@/components/ui/Card";
import { skillGroups } from "@/content/skills";
import {
  Accessibility,
  Binary,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers,
  LayoutGrid,
  LineChart,
  Lock,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Type,
  Webhook,
  Wrench,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Accessibility,
  Binary,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers,
  LayoutGrid,
  LineChart,
  Lock,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Type,
  Webhook,
  Wrench,
  Workflow,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#0f141b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-12 top-12 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Deep expertise across the modern stack.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            I build product experiences end-to-end, from interface systems and
            motion design to API contracts and deployment pipelines.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.category}
              className="flex h-full flex-col bg-[#0b0f14]/80"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                  {group.skills.length} skills
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? Code2;

                  return (
                    <div
                      key={skill.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/10 text-amber-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {skill.name}
                          </p>
                          <p className="text-xs text-amber-100/70">
                            {skill.level}
                          </p>
                        </div>
                      </div>
                      {skill.tags?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-100/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
