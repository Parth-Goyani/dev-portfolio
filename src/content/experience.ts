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
    id: "weetech-solution-2025",
    role: "Python Developer",
    company: "Weetech Solution, Surat",
    duration: "June 2025 - Feb 2026",
    description: [
      "Developed intelligent analytics dashboards and automated reporting workflows using Python and SQL.",
      "Built backend automation scripts and optimized data processing workflows.",
      "Applied NLP techniques including text preprocessing, sentiment analysis, and entity recognition.",
      "Integrated APIs and developed scalable Python-based automation solutions.",
      "Collaborated with cross-functional teams to improve operational efficiency through software solutions.",
    ],
    skillsUsed: [
      "Python",
      "NLP",
      "API Integration",
      "Automation",
      "Analytics",
    ],
  },
  {
    id: "webito-infotech-2025",
    role: "Python Automation Analyst",
    company: "Webito Infotech Pvt Ltd., Surat",
    duration: "May 2025 - June 2025",
    description: [
      "Gathered and analyzed client requirements to create workflow documentation and technical specifications.",
      "Worked closely with developers and stakeholders to build automation-oriented technical solutions.",
      "Designed process flows, automation workflows, and analytical reports.",
      "Assisted in optimizing operational workflows using Python-based analytical approaches.",
    ],
    skillsUsed: [
      "Python",
      "Workflow Automation",
      "Requirements Analysis",
      "Process Design",
      "Reporting",
    ],
  },
  {
    id: "coder-infosys-2023",
    role: "Python Developer Intern",
    company: "Coder Infosys, Surat",
    duration: "June 2023 - May 2025",
    description: [
      "Worked on Python-based machine learning and automation projects under the guidance of a Senior Data Scientist.",
      "Built predictive models and automated workflows using Python, Pandas, NumPy, and Scikit-learn.",
      "Automated data preprocessing and analytical workflows, improving processing efficiency by 20%.",
      "Assisted in backend scripting, API integration, feature engineering, and performance optimization.",
      "Performed exploratory data analysis and generated insights for business solutions.",
    ],
    skillsUsed: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Automation",
    ],
  },
];
