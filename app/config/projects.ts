export interface WorkProject {
  name: string;
  category: string;
  slug: string;
  description: string;
  capabilities: readonly string[];
  logoText: string;
  logoUrl?: string;
  logoAlt?: string;
  status?: string;
}

export const workProjects: readonly WorkProject[] = [
  {
    name: "CollegeFAQs",
    status: "In development",
    category: "Education counselling platform",
    slug: "/work/collegefaqs",
    description:
      "A digital experience being developed around education counselling, program discovery, student enquiries and practical admission-support journeys.",
    capabilities: [
      "Responsive frontend",
      "Student journeys",
      "Form workflows",
      "Content architecture",
    ],
    logoText: "CF",
  },

  {
    name: "Skillor",
    status: "In development",
    category: "Learning & career platform",
    slug: "/work/skillor",
    description:
      "A platform being developed around practical learning, career readiness and structured student-to-professional development.",
    capabilities: [
      "Product architecture",
      "Learning experience",
      "Content systems",
      "Platform development",
    ],
    logoText: "S",
  },

  {
    name: "Skyinnk",
    category: "Online learning platform",
    slug: "/work/skyinnk",
    description:
      "An online learning platform designed to help students study complete courses across Class 11, Class 12, CBSE, ICSE, other school boards and graduation-level subjects.",
    capabilities: [
      "Learning platform",
      "Course structure",
      "Academic content",
      "Student experience",
    ],
    logoText: "SK",
  },
];
