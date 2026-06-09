export type SkillGroup = {
  category:
    | "Programming Languages"
    | "AI & Machine Learning"
    | "Backend & Databases"
    | "Computer Vision & Tools";
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    tags: ["Python", "Java", "C", "C++"],
  },
  {
    category: "AI & Machine Learning",
    tags: [
      "Machine Learning",
      "NLP",
      "TensorFlow",
      "Scikit-learn",
      "FAISS",
    ],
  },
  {
    category: "Backend & Databases",
    tags: ["Flask", "REST APIs", "SQLite"],
  },
  {
    category: "Computer Vision & Tools",
    tags: [
      "OpenCV",
      "InsightFace",
      "MediaPipe",
      "Git",
      "GitHub",
    ],
  },
];
