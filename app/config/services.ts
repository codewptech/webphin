export type ServiceIcon =
  | "website"
  | "application"
  | "data"
  | "infrastructure"
  | "automation"
  | "support";

export type ServiceLayer =
  "Experience" | "Application" | "Systems" | "Operations" | "Cross-layer";

export interface ServiceItem {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  capabilities: readonly string[];
  whenUseful: string;
  icon: ServiceIcon;
  layer: ServiceLayer;
}

export const services: readonly ServiceItem[] = [
  {
    title: "Websites & Digital Presence",
    shortTitle: "Websites",
    slug: "/services/websites-digital-presence",
    description:
      "Professional websites and digital experiences designed around clarity, performance, maintainability and real business goals.",
    capabilities: [
      "Corporate websites",
      "Institutional websites",
      "Redesigns",
      "Performance",
      "SEO foundations",
    ],
    whenUseful:
      "Useful when the existing website no longer represents the business, the digital presence needs to be rebuilt, or a clearer and more maintainable web experience is required.",
    icon: "website",
    layer: "Experience",
  },

  {
    title: "Applications & Software",
    shortTitle: "Applications",
    slug: "/services/applications-software",
    description:
      "Custom applications and software workflows built when an ordinary website is no longer enough for the requirement.",
    capabilities: [
      "Web applications",
      "Internal tools",
      "Portals",
      "Custom workflows",
      "Product development",
    ],
    whenUseful:
      "Useful when a business process needs custom behaviour, users need dedicated workflows, or the requirement has grown beyond what a conventional website can handle.",
    icon: "application",
    layer: "Application",
  },

  {
    title: "Backend, Data & Integrations",
    shortTitle: "Backend & Data",
    slug: "/services/backend-data-integrations",
    description:
      "The systems behind the interface — APIs, databases, business logic and integrations that keep information moving reliably.",
    capabilities: [
      "Backend systems",
      "Databases",
      "APIs",
      "Third-party integrations",
      "Data workflows",
    ],
    whenUseful:
      "Useful when information needs to move between systems, applications require dependable business logic, or disconnected tools and data need to work together.",
    icon: "data",
    layer: "Systems",
  },

  {
    title: "Infrastructure & Deployment",
    shortTitle: "Infrastructure",
    slug: "/services/infrastructure-deployment",
    description:
      "Practical hosting, deployment and infrastructure decisions designed around reliability, control, cost and operational needs.",
    capabilities: [
      "VPS deployment",
      "Docker",
      "CI/CD",
      "Cloud infrastructure",
      "Monitoring",
    ],
    whenUseful:
      "Useful when deployment has become fragile or manual, infrastructure costs need attention, or the system needs a more reliable operating environment.",
    icon: "infrastructure",
    layer: "Operations",
  },

  {
    title: "Automation & AI",
    shortTitle: "Automation & AI",
    slug: "/services/automation-ai",
    description:
      "Automation and AI applied where they can genuinely reduce repetitive work, improve workflows or create useful new capabilities.",
    capabilities: [
      "Workflow automation",
      "AI integration",
      "Process automation",
      "Data processing",
      "System orchestration",
    ],
    whenUseful:
      "Useful when people repeatedly move information, perform predictable manual steps, or could benefit from carefully applied automation or AI assistance.",
    icon: "automation",
    layer: "Cross-layer",
  },

  {
    title: "Maintenance & Support",
    shortTitle: "Maintenance & Support",
    slug: "/services/maintenance-support",
    description:
      "Ongoing technical support for systems that need to remain secure, stable, useful and adaptable after their initial launch.",
    capabilities: [
      "Maintenance",
      "Updates",
      "Monitoring",
      "Improvements",
      "Technical support",
    ],
    whenUseful:
      "Useful when an existing system needs dependable updates, monitoring, fixes, improvements or ongoing technical ownership after launch.",
    icon: "support",
    layer: "Operations",
  },
];
