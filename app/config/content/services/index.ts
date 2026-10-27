export const servicesContent = {
  seo: {
    title: "Technology Services | Webphin",
    description:
      "Explore Webphin services across websites, applications, backend and data, infrastructure, automation, AI, maintenance and ongoing technical support.",
  },
  systemLayers: [
    {
      label: "Experience",
      title: "What people see and use",
      description:
        "Websites, interfaces, content, journeys and the digital experience around the system.",
      examples: ["Websites", "Interfaces", "User journeys"],
    },
    {
      label: "Application",
      title: "What the product does",
      description:
        "Software, workflows and business logic that turn the requirement into useful behaviour.",
      examples: ["Applications", "Workflows", "Business logic"],
    },
    {
      label: "Systems",
      title: "What keeps information moving",
      description:
        "Backend services, databases, APIs and integrations connecting the application to its data and tools.",
      examples: ["Backend", "Data", "APIs", "Integrations"],
    },
    {
      label: "Operations",
      title: "What keeps the system running",
      description:
        "Infrastructure, deployment, monitoring, maintenance and the operational decisions behind the product.",
      examples: ["Infrastructure", "Deployment", "Monitoring", "Support"],
    },
  ],
  typicalSituations: [
    {
      label: "Digital presence",
      statement: "Our current website no longer represents the business.",
      response:
        "The work may begin with strategy, structure, design, content architecture, frontend development and a more maintainable web foundation.",
    },
    {
      label: "Custom software",
      statement: "We need a system that a normal website cannot handle.",
      response:
        "The requirement may need an application, portal, internal tool or custom workflow instead of adding more pages to a website.",
    },
    {
      label: "Connected systems",
      statement: "Our data and tools do not work together.",
      response:
        "Backend services, APIs, databases and integrations can connect the systems and create a more dependable flow of information.",
    },
    {
      label: "Infrastructure",
      statement: "Hosting and deployment have become difficult or expensive.",
      response:
        "The operating setup can be reviewed around reliability, deployment, storage, monitoring, maintainability and actual workload.",
    },
    {
      label: "Automation",
      statement: "Our team keeps repeating work that should be automated.",
      response:
        "The process can be examined first, then automation or AI can be introduced where it creates practical value.",
    },
    {
      label: "Ongoing support",
      statement: "The system is live, but it still needs technical ownership.",
      response:
        "Maintenance, monitoring, fixes and improvements can continue after launch without treating the project as permanently finished.",
    },
  ],
  approachSteps: [
    {
      title: "Understand",
      description: "Clarify the problem, people, goals and existing situation.",
    },
    {
      title: "Define",
      description:
        "Turn the requirement into a practical scope and priorities.",
    },
    {
      title: "Design",
      description:
        "Choose an architecture and experience appropriate for the work.",
    },
    {
      title: "Build",
      description:
        "Implement the required parts as a maintainable working system.",
    },
    {
      title: "Operate",
      description:
        "Consider deployment, monitoring, improvement and ongoing ownership.",
    },
  ],
  sections: {
    hero: {
      eyebrow: "Services",
      title: "Technology services shaped around what the business",
      accent: "actually needs.",
      description:
        "Webphin works across websites, software, backend systems, infrastructure, automation and ongoing technical support. A project may need one of these areas or several working together.",
      contactAction: "Discuss Your Project",
      serviceAreasAction: "Explore Services",
      principle: {
        description:
          "We recommend the parts of the system the requirement actually needs — not every service Webphin offers.",
      },
      frameworkHeader: {
        frameworkLabel: "Before choosing the service",
        frameworkStatus: "Requirement first",
      },
      framework: {
        frameworkTitle: "Start with the problem. Then define the system.",
      },
      frameworkOutcome: {
        label: "Outcome",
        statement: "The service mix follows from those answers.",
      },
      questions: [
        "What are you trying to achieve?",
        "Who will use the system?",
        "What already exists today?",
        "What constraints actually matter?",
      ],
    },
    serviceAreas: {
      eyebrow: "What we do",
      title: "Six service areas.",
      accent: "One connected system.",
      intro:
        "These categories make the work easier to understand, but real projects do not always fit neatly inside one category. The right combination depends on the requirement.",
      detailLabel: "When this is useful",
      label: "Explore service",
    },
    serviceSystem: {
      eyebrow: "How the services connect",
      title: "One project can cross",
      accent: "several layers.",
      descriptions: [
        "A website may need a backend. An application may need integrations. Infrastructure supports all of them. Automation can connect work across several parts of the system.",
        "Applied across workflows and system boundaries where automation creates genuine operational value.",
      ],
      principle: {
        description:
          "A project may involve one layer or several. The architecture should follow the requirement.",
      },
      crossLabel: "Across the system",
      statement: "Automation & AI",
    },
    serviceSituations: {
      eyebrow: "Start with the situation",
      title: "You do not need to know",
      accent: "which service to ask for.",
      intro:
        "Business problems are usually described in business language first. The technical category can be worked out afterwards.",
      statements: ["“", "”"],
    },
    servicesApproach: {
      eyebrow: "How we work",
      title: "From requirement",
      accent: "to working system.",
      intro:
        "The exact process changes with the project, but the decision sequence should remain understandable.",
      principle: {
        description:
          "We recommend only the parts of the system that the requirement actually needs.",
      },
    },
    servicesWork: {
      eyebrow: "Selected work",
      title: "Different projects use different",
      accent: "combinations of these services.",
      description:
        "The service structure helps explain the work. The project requirement determines how those capabilities are actually combined.",
      workAction: "Explore our work",
      label: "View project",
    },
    cta: {
      eyebrow: "Start a conversation",
      title: "Not sure which service you need?",
      accent: "Start with the problem.",
      description:
        "You do not need to identify the technology before contacting us. Tell us what you are trying to build, improve or solve, and we can work through the requirement with you.",
      contactAction: "Discuss Your Project",
      note: {
        description:
          "No package selection required. No technical specification required to begin.",
      },
    },
  },
} as const;
