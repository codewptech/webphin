export const infrastructureDeploymentContent = {
  seo: {
    title: "Infrastructure & Deployment | Webphin",
    description:
      "Webphin helps design, deploy and operate practical application infrastructure across VPS, Docker, CI/CD, Nginx, storage, monitoring and related systems.",
  },
  usefulSituations: [
    {
      title: "Deployment is manual or fragile",
      description:
        "Releases depend on repeated manual steps, individual knowledge or processes that are difficult to reproduce safely.",
    },
    {
      title: "Hosting costs are difficult to understand",
      description:
        "The operating setup may contain services or choices that no longer match what the application actually requires.",
    },
    {
      title: "A VPS or server environment needs to be established",
      description:
        "The application needs a controlled runtime environment, networking, web server and deployment setup.",
    },
    {
      title: "Several services need coordination",
      description:
        "Application containers, databases, storage and supporting services may need to operate together reliably.",
    },
    {
      title: "Monitoring and operational visibility are weak",
      description:
        "The team may not know quickly enough when the system becomes unhealthy or important services stop behaving as expected.",
    },
    {
      title: "The environment needs restructuring",
      description:
        "An existing deployment may work today but be unnecessarily difficult to maintain, update or understand.",
    },
  ],
  infrastructureScope: [
    {
      title: "VPS deployment",
      description:
        "Preparing and operating virtual server infrastructure around the needs of the application.",
    },
    {
      title: "Docker",
      description:
        "Packaging services into controlled environments that can be deployed and operated more consistently.",
    },
    {
      title: "Nginx",
      description:
        "Configuring web serving, reverse proxy behaviour and application routing where appropriate.",
    },
    {
      title: "CI/CD",
      description:
        "Automating repeatable build and deployment steps so releases depend less on fragile manual procedures.",
    },
    {
      title: "DNS & SSL",
      description:
        "Connecting domains and secure HTTPS delivery as part of the deployment environment.",
    },
    {
      title: "Database infrastructure",
      description:
        "Connecting applications with suitable database services and deployment environments.",
    },
    {
      title: "Object storage",
      description:
        "Using dedicated storage systems for files and media where that separation improves the architecture.",
    },
    {
      title: "Environment configuration",
      description:
        "Managing application settings, secrets and environment-specific behaviour carefully across deployments.",
    },
    {
      title: "Monitoring",
      description:
        "Observing system health and important operational signals after the application is running.",
    },
    {
      title: "Deployment workflows",
      description:
        "Designing a practical path from code changes to a running production system.",
    },
  ],
  releasePath: [
    {
      label: "Code",
      title: "The application changes",
      description:
        "Development produces a version of the application that needs to reach a controlled runtime environment.",
    },
    {
      label: "Build",
      title: "The deployable system is prepared",
      description:
        "Dependencies and application assets are assembled into the form required by the production environment.",
    },
    {
      label: "Deploy",
      title: "The release reaches the runtime",
      description:
        "A repeatable deployment process moves the application into its operating environment.",
    },
  ],
  operatingResponsibilities: [
    {
      label: "Serve",
      title: "Traffic reaches the right service",
      description:
        "Networking and web-server configuration route requests to the application appropriately.",
    },
    {
      label: "Store",
      title: "Persistent services remain available",
      description:
        "Databases and object storage preserve the information the application needs beyond individual deployments.",
    },
    {
      label: "Monitor",
      title: "Operational health becomes visible",
      description:
        "Monitoring helps identify failures and important changes in system behaviour.",
    },
    {
      label: "Maintain",
      title: "The environment continues evolving",
      description:
        "Infrastructure requires updates, operational decisions and improvements after launch.",
    },
  ],
  stackItems: [
    "VPS",
    "Docker",
    "Nginx",
    "CI/CD",
    "DNS / SSL",
    "Database",
    "Object storage",
    "Monitoring",
  ],
  deliverySteps: [
    {
      title: "Assess",
      description:
        "Understand the application, workload, current environment and operational constraints.",
    },
    {
      title: "Design",
      description:
        "Choose a practical deployment architecture around the actual system requirement.",
    },
    {
      title: "Configure",
      description:
        "Prepare runtime, network, storage and supporting service configuration.",
    },
    {
      title: "Deploy",
      description:
        "Move the application through a controlled and repeatable release process.",
    },
    {
      title: "Verify",
      description:
        "Check that the application and supporting services behave correctly in the production environment.",
    },
    {
      title: "Monitor",
      description: "Observe system health and important operational signals.",
    },
    {
      title: "Improve",
      description:
        "Refine the infrastructure as real operating needs become clearer.",
    },
  ],
  relatedServiceSlugs: [
    "/services/applications-software",
    "/services/backend-data-integrations",
    "/services/automation-ai",
    "/services/maintenance-support",
  ],
  sections: {
    hero: {
      link: "Services",
      title: "Infrastructure designed for how the system",
      accent: "actually needs to run.",
      description:
        "Deployment is part of the product lifecycle. The runtime, storage, networking and monitoring decisions behind an application influence how reliably and efficiently it can operate.",
      contactAction: "Discuss Your Project",
      infrastructureScopeAction: "Explore What We Do",
      principle: {
        description:
          "Infrastructure should fit the application, workload and operating requirement rather than becoming a collection of unnecessary services.",
      },
      infraVisual: {
        label: "Operating architecture",
        statement: "Application to runtime",
        status: "Requirement-led",
        items: [
          {
            label: "Application",
            description: "What runs",
          },
          {
            label: "Data",
            description: "What persists",
          },
          {
            label: "Storage",
            description: "What is retained",
          },
          {
            label: "Runtime",
            description: "Where it operates",
          },
          {
            label: "Network",
            description: "How traffic reaches it",
          },
          {
            label: "Monitoring",
            description: "How health is observed",
          },
        ],
      },
      outcome: {
        label: "Outcome",
        statement: "A system that can be deployed and operated.",
      },
    },
    whenUseful: {
      eyebrow: "When this service is useful",
      title: "When operating the system",
      accent: "becomes part of the problem.",
      description:
        "Infrastructure problems often appear after software already exists — when deploying, operating or maintaining it becomes unnecessarily difficult.",
    },
    scope: {
      eyebrow: "What we can work on",
      title: "From deployment",
      accent: "to ongoing operation.",
      description:
        "The exact infrastructure depends on the application. A smaller, well-chosen architecture can be more useful than an unnecessarily complicated environment.",
    },
    operations: {
      eyebrow: "How software becomes an operating service",
      accent: "is not the final step.",
      description:
        "A production system needs a path from source code to a running environment, plus the operational services that keep it available after deployment.",
      title: "Writing the code",
      releasePathTitle: "Release path",
      operatingResponsibilitiesTitle: "Operating responsibilities",
    },
    delivery: {
      eyebrow: "How we approach the work",
      title: "Design the environment",
      accent: "around the workload.",
      description:
        "Infrastructure decisions should begin with the application, traffic, data and operating requirement rather than a predetermined cloud architecture.",
    },
    engineeringOutcome: {
      eyebrow: "A practical engineering outcome",
      title: "Lower recurring overhead.",
      accent: "Keep the capability that matters.",
      descriptions: [
        "In one website project, the infrastructure was reworked around the actual operating requirement rather than continuing with unnecessary recurring services.",
        "The resulting architecture retained the application, database, object storage, monitoring, analytics and deployment capabilities required by the project while operating with a leaner infrastructure setup.",
      ],
      outcomePanel: {
        labels: [
          "One project outcome",
          "Nuxt",
          "PostgreSQL",
          "Cloudflare R2",
          "VPS",
          "Docker",
          "Nginx",
          "Analytics",
          "Monitoring",
          "Forms",
          "Object storage",
          "Deployment workflow",
        ],
        title: "Leaner infrastructure. Strong operational capability.",
        note: "Infrastructure requirements, operating costs and potential savings vary by project.",
      },
    },
    relatedServices: {
      eyebrow: "Connected services",
      title: "Infrastructure supports",
      accent: "the wider application.",
      description:
        "Applications and backend systems run on the infrastructure, automation can participate in deployment and operations, and maintenance continues after release.",
      action: "Explore service",
    },
    cta: {
      eyebrow: "Start a conversation",
      title: "Need a cleaner way to deploy and operate your system?",
      accent: "Start with the workload.",
      description:
        "Tell us what is running today, how it is deployed, what is becoming difficult and what the system needs to support. We can work through the infrastructure requirement from there.",
      contactAction: "Discuss Your Project",
      note: {
        description:
          "You do not need to arrive with a cloud architecture or server specification.",
      },
    },
  },
} as const;
