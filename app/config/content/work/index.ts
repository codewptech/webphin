export const workContent = {
  seo: {
    title: "Work | Webphin",
    description:
      "Explore Webphin work across websites, applications, backend systems, infrastructure and digital platforms shaped around real project requirements.",
  },
  projectNarratives: {
    CollegeFAQs: {
      summary:
        "An education counselling platform being developed around MBA, Engineering and Study Abroad journeys, student enquiries and structured guidance.",
      systemAreas: [
        "Counselling experience",
        "Program journeys",
        "Forms & student data",
        "Deployment",
      ],
    },
    Skillor: {
      summary:
        "A learning and career platform being developed around practical skill-building, career guidance and student-to-professional development.",
      systemAreas: [
        "Learning & career experience",
        "Content & guidance",
        "Platform capabilities",
        "Future tools & workflows",
      ],
    },
    Skyinnk: {
      summary:
        "An online learning platform designed to help students study complete courses across Class 11, Class 12, school boards and graduation-level subjects.",
      systemAreas: [
        "Online learning",
        "Course structure",
        "Academic content",
        "Student experience",
      ],
    },
  },
  projectDimensions: [
    {
      title: "Requirement",
      question: "What problem is the project trying to solve?",
      description:
        "The project should begin with the actual business, user or operational requirement rather than a predetermined technology stack.",
    },
    {
      title: "Users",
      question: "Who needs to use the system?",
      description:
        "Different audiences can require different journeys, access patterns, information and interactions.",
    },
    {
      title: "Experience",
      question: "How should the system feel and behave?",
      description:
        "Structure, interface, content and responsive behaviour shape how people understand and use the product.",
    },
    {
      title: "Systems",
      question: "What needs to happen behind the interface?",
      description:
        "Applications may require data, business logic, authentication, APIs, storage or integrations behind what users see.",
    },
    {
      title: "Operations",
      question: "How will the system be deployed and maintained?",
      description:
        "Infrastructure, monitoring, deployment and ongoing technical ownership influence how the product operates after launch.",
    },
    {
      title: "Evolution",
      question: "What may need to change later?",
      description:
        "A useful architecture should make room for realistic future requirements without trying to build every possibility on day one.",
    },
  ],
  engineeringStack: [
    "Nuxt",
    "PostgreSQL",
    "Cloudflare R2",
    "VPS",
    "Docker",
    "Nginx",
  ],
  engineeringCapabilities: [
    "Analytics",
    "Monitoring",
    "Database-backed forms",
    "Object storage",
    "Deployment workflow",
  ],
  sections: {
    hero: {
      eyebrow: "Work",
      title: "Real projects. Different requirements.",
      accent: "Practical technology decisions.",
      description:
        "Webphin works across websites, applications, backend systems, infrastructure and digital platforms. The combination changes depending on what each project actually needs.",
      contactAction: "Discuss Your Project",
      projectsAction: "Explore Projects",
      principle: {
        description:
          "The work is presented around real requirements, decisions and implementation — not invented outcomes or generic portfolio language.",
      },
      anatomy: {
        status: "Requirement first",
        label: "Project anatomy",
        requirement: {
          label: "Project requirement",
          points: ["Users", "Business goal", "Constraints", "Existing system"],
        },
        needs: {
          label: "What the project needs",
          points: [
            "Experience",
            "Application",
            "Backend",
            "Infrastructure",
            "Operations",
          ],
        },
      },
      outcome: {
        label: "Result",
        statement: "A system shaped around the requirement.",
      },
    },
    projectsSection: {
      eyebrow: "Selected work",
      title: "Different projects.",
      accent: "Different systems.",
      description:
        "Each project below begins with a different audience, problem and operating context. The technology follows from those differences.",
      label: "View project",
    },
    projectSystems: {
      eyebrow: "Different requirements",
      title: "The technology should change",
      accent: "when the requirement changes.",
      description:
        "Using the same technical template for every project can create unnecessary complexity or force the requirement into the wrong shape.",
      principle: {
        description:
          "Webphin does not begin every project with the same architecture, feature list or implementation plan.",
      },
    },
    projectDimensions: {
      eyebrow: "How we look at a project",
      title: "A project is more than",
      accent: "the final interface.",
      description:
        "Screens show only one layer of the work. The decisions behind the project often matter just as much as the interface people eventually see.",
    },
    engineeringOutcome: {
      eyebrow: "One engineering outcome",
      title: "One project.",
      accent: "A different infrastructure decision.",
      descriptions: [
        "For one website project, the infrastructure was redesigned around the actual operating requirement instead of continuing with unnecessary recurring services.",
        "The resulting setup combined Nuxt, PostgreSQL, Cloudflare R2 and a VPS-based deployment while retaining the operational capabilities the project required.",
      ],
      servicesInfrastructureDeploymentAction:
        "Explore Infrastructure & Deployment",
      engineeringPanel: {
        label: "Requirement-led architecture",
        title: "Leaner infrastructure. Useful operational capability.",
        groupLabels: ["Architecture", "Operational capability"],
        note: "Infrastructure requirements, costs and potential savings vary by project, workload and architecture.",
      },
    },
    workServices: {
      eyebrow: "Work across service areas",
      title: "The project defines",
      accent: "the combination.",
      description:
        "A project may use one Webphin service or several. The service structure helps explain the work; the requirement determines what is actually needed.",
    },
    presentation: {
      eyebrow: "How work is presented",
      statement:
        "Work is presented around what has actually been designed, built or implemented.",
      description:
        "Planned features, future ideas and work that is still evolving should not be presented as completed outcomes.",
    },
    cta: {
      eyebrow: "Start a conversation",
      title: "Have a project with its own requirements?",
      accent: "Start with what you are trying to build.",
      description:
        "Tell us the problem, the users, the current situation and what you need the system to achieve. The technology can be worked out afterwards.",
      contactAction: "Discuss Your Project",
      note: {
        description:
          "You do not need a completed technical brief before starting the conversation.",
      },
    },
  },
} as const;
