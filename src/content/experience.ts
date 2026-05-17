export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  skillsUsed: string[];
};

export const experiences: Experience[] = [
  {
    id: "atlas-labs-2023",
    role: "Senior Frontend Engineer",
    company: "Atlas Labs",
    duration: "2023 - Present",
    description: [
      "Led a design system rebuild to unify 6 product surfaces and reduce UI debt.",
      "Shipped a new Next.js app router migration with focus on performance budgets.",
      "Partnered with product and design to prototype motion-driven onboarding flows.",
    ],
    skillsUsed: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Accessibility",
    ],
  },
  {
    id: "northwind-2021",
    role: "Full Stack Engineer",
    company: "Northwind Systems",
    duration: "2021 - 2023",
    description: [
      "Built internal admin tooling for customer support workflows and analytics.",
      "Designed REST APIs with clear contracts, validation, and role-based access.",
      "Introduced CI pipelines and release checklists to stabilize deployments.",
    ],
    skillsUsed: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "React",
      "Zod",
      "Docker",
    ],
  },
  {
    id: "studio-k-2019",
    role: "Frontend Engineer",
    company: "Studio K",
    duration: "2019 - 2021",
    description: [
      "Crafted marketing sites and product launches for B2B SaaS clients.",
      "Implemented reusable UI patterns with attention to accessibility details.",
      "Collaborated with designers to translate high-fidelity mockups into code.",
    ],
    skillsUsed: [
      "React",
      "TypeScript",
      "CSS",
      "Responsive Design",
      "Web Performance",
    ],
  },
];
