export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type Skill = {
  name: string;
  icon: string;
  level: SkillLevel;
  tags?: string[];
};

export type SkillGroup = {
  category: "Frontend" | "Backend" | "Tools/DevOps";
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: "Code2",
        level: "Expert",
        tags: ["components", "hooks", "performance"],
      },
      {
        name: "Next.js",
        icon: "LayoutGrid",
        level: "Advanced",
        tags: ["app router", "routing", "data fetching"],
      },
      {
        name: "TypeScript",
        icon: "Type",
        level: "Advanced",
        tags: ["types", "DX", "safety"],
      },
      {
        name: "Tailwind CSS",
        icon: "Palette",
        level: "Advanced",
        tags: ["design systems", "responsive"],
      },
      {
        name: "Framer Motion",
        icon: "Sparkles",
        level: "Advanced",
        tags: ["motion", "microinteractions"],
      },
      {
        name: "Accessibility",
        icon: "Accessibility",
        level: "Advanced",
        tags: ["aria", "keyboard", "focus"],
      },
      {
        name: "Responsive UI",
        icon: "Smartphone",
        level: "Advanced",
        tags: ["layout", "adaptive"],
      },
      {
        name: "Web Performance",
        icon: "Gauge",
        level: "Advanced",
        tags: ["core web vitals", "bundle"],
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "Server",
        level: "Advanced",
        tags: ["apis", "runtime"],
      },
      {
        name: "REST APIs",
        icon: "Webhook",
        level: "Advanced",
        tags: ["contracts", "versioning"],
      },
      {
        name: "Authentication",
        icon: "ShieldCheck",
        level: "Advanced",
        tags: ["sessions", "tokens"],
      },
      {
        name: "PostgreSQL",
        icon: "Database",
        level: "Intermediate",
        tags: ["queries", "indexes"],
      },
      {
        name: "Data Modeling",
        icon: "Binary",
        level: "Intermediate",
        tags: ["schema", "migrations"],
      },
      {
        name: "Caching",
        icon: "Layers",
        level: "Intermediate",
        tags: ["edge", "in-memory"],
      },
      {
        name: "Security",
        icon: "Lock",
        level: "Intermediate",
        tags: ["rate limits", "headers"],
      },
    ],
  },
  {
    category: "Tools/DevOps",
    skills: [
      {
        name: "Git",
        icon: "GitBranch",
        level: "Advanced",
        tags: ["flows", "reviews"],
      },
      {
        name: "CI/CD",
        icon: "Workflow",
        level: "Advanced",
        tags: ["pipelines", "automation"],
      },
      {
        name: "Docker",
        icon: "Boxes",
        level: "Intermediate",
        tags: ["containers", "compose"],
      },
      {
        name: "Vercel",
        icon: "Cloud",
        level: "Advanced",
        tags: ["deploy", "edge"],
      },
      {
        name: "Testing",
        icon: "TestTube2",
        level: "Intermediate",
        tags: ["unit", "integration"],
      },
      {
        name: "Observability",
        icon: "LineChart",
        level: "Intermediate",
        tags: ["logs", "metrics"],
      },
      {
        name: "Developer Tooling",
        icon: "Wrench",
        level: "Advanced",
        tags: ["linting", "formatting"],
      },
    ],
  },
];
