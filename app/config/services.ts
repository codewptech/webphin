export interface ServiceItem {
  number: string;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  capabilities: readonly string[];
}

export const services: readonly ServiceItem[] = [
  {
    number: "01",
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
  },
  {
    number: "02",
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
  },
  {
    number: "03",
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
  },
  {
    number: "04",
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
  },
  {
    number: "05",
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
  },
  {
    number: "06",
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
  },
];
