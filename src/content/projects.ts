export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "aurora-portfolio",
    title: "Aurora Portfolio",
    description: "A cinematic portfolio experience with dynamic sections and motion-led storytelling.",
    longDescription:
      "Aurora is a portfolio template focused on bold typography, ambient gradients, and smooth scroll storytelling. It includes reusable content sections, motion-safe animations, and a polished layout system designed for quick iteration.",
    thumbnail: "/images/projects/aurora-portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com/aurora",
    githubUrl: "https://github.com/your-handle/aurora-portfolio",
  },
  {
    slug: "cascade-crm",
    title: "Cascade CRM",
    description: "A client management platform with rich pipelines, smart filters, and reporting.",
    longDescription:
      "Cascade CRM streamlines sales workflows with configurable pipelines, activity timelines, and analytics dashboards. The system emphasizes fast data entry, inline editing, and validation-driven forms for reliable data capture.",
    thumbnail: "/images/projects/cascade-crm.jpg",
    tags: ["React", "Next.js", "Zod", "React Hook Form"],
    liveUrl: "https://example.com/cascade",
    githubUrl: "https://github.com/your-handle/cascade-crm",
  },
  {
    slug: "signalboard-analytics",
    title: "Signalboard Analytics",
    description: "A real-time product analytics suite with live KPI tiles and alerts.",
    longDescription:
      "Signalboard provides live KPI tracking with custom alerting, retention funnels, and cohort views. The UI balances data density with clarity using layered cards, adaptive grids, and compact filters.",
    thumbnail: "/images/projects/signalboard-analytics.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://example.com/signalboard",
    githubUrl: "https://github.com/your-handle/signalboard-analytics",
  },
  {
    slug: "nimbus-docs",
    title: "Nimbus Docs",
    description: "A documentation platform with MDX support, search, and versioned guides.",
    longDescription:
      "Nimbus Docs delivers structured documentation with MDX content, table of contents generation, and instant search. It is built to scale across teams with reusable content blocks and themeable layout primitives.",
    thumbnail: "/images/projects/nimbus-docs.jpg",
    tags: ["Next.js", "MDX", "TypeScript", "Contentlayer"],
    liveUrl: "https://example.com/nimbus",
    githubUrl: "https://github.com/your-handle/nimbus-docs",
  },
];
