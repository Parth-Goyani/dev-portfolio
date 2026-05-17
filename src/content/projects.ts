export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "biometric-attendance-system",
    title: "Distributed AI-Powered Biometric Attendance System",
    description:
      "A full-stack, edge-computed facial recognition attendance system featuring low-latency vector embeddings, offline resilience, and automatic background data synchronization.",
    longDescription:
      "Engineered a distributed Client-Server architecture utilizing:\n- Edge Client (Gate): Captures video feeds, executes real-time AI inference via InsightFace, and handles local data persistence with SQLite.\n- Vector Search Pipeline: Transforms face data into mathematical vectors, utilizing FAISS (Facebook AI Similarity Search) to perform ultra-low-latency matching on standard CPU hardware.\n- Offline Sync Protocol: Uses background multi-threading to continuously check local SQLite caches and automatically push logged data to the central server via REST API once network connectivity is restored.\n- Central Server (Admin): Aggregates telemetry via a Flask REST API wrapped in a Tkinter GUI dashboard, using Pandas to automatically format and deduplicate Excel attendance reports.",
    thumbnail: "/images/projects/aurora-portfolio.jpg",
    tags: [
      "Python",
      "OpenCV",
      "InsightFace",
      "FAISS",
      "Flask",
      "SQLite",
      "Pandas",
      "Tkinter",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Parth-Goyani/AI-Powered-Biometric-Attendance-System",
  },
  {
    slug: "designcarat-engine",
    title: "DesignCarat Engine",
    description:
      "A high-conversion Single-Page Application e-commerce engine for premium digital assets, featuring a custom frictionless UPI checkout architecture and advanced marketing event tracking analytics.",
    longDescription:
      "Engineered a production-ready digital asset delivery application featuring:\n- Custom UPI Gateway Architecture: Built a zero-friction checkout flow executing dynamic QR code rendering, collecting UTR numbers via a Python backend, and routing users to automated WhatsApp verification flows.\n- Advanced Marketing Analytics: Injected Meta Pixel tracking with rich-data ecommerce telemetry (InitiateCheckout, Purchase) dynamically mapping product values to optimize ad-platform targeting and campaign ROAS.\n- Conversion-Rate Optimization (CRO) Core: Architected a mobile-first funnel using floating CTAs, infinite marquee asset displays, dynamic discount calculators, and safe analytics execution loops that prevent strict ad-blockers from disrupting checkout tasks.\n- Production DevOps: Provisioned end-to-end cloud infrastructure using Vercel, automated GitHub CI/CD pipelines, handled custom GoDaddy .in DNS routing, enforced SSL configurations, and structurally optimized SVG asset delivery.",
    thumbnail: "/images/projects/cascade-crm.jpg",
    tags: ["React.js", "Python", "Vercel", "Meta Analytics", "UPI API", "UI/UX"],
    liveUrl: "https://www.designcarat.in/",
    githubUrl: null,
  },
  {
    slug: "aerial-combat-engine",
    title: "High-Performance 2D Aerial Combat Engine",
    description:
      "An intelligent game engine built using Unity and C#, featuring Finite State Machine (FSM) AI logic and highly optimized runtime gameplay monitoring tools.",
    longDescription:
      "Engineered an interactive combat engine showcasing:\n- Finite State Machine (FSM) AI: Implemented deterministic decision-making logic for enemy aerial behaviors, pathfinding routines, and reactive combat states.\n- Performance Optimization: Profiled scripts and managed runtime allocations to ensure consistent rendering speeds and fluid frame timing under peak resource loads.\n- Custom Gameplay Tooling: Built an modular UI framework and a background monitoring console allowing developers to track frame rates, state changes, and combat telemetry in real time.",
    thumbnail: "/images/projects/signalboard-analytics.jpg",
    tags: [
      "Unity",
      "C#",
      "FSM AI",
      "Game Mechanics",
      "Performance Optimization",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];
