export const backendDataIntegrationsContent = {
  seo: {
    title: "Backend, Data & Integrations | Webphin",
    description:
      "Webphin builds backend systems, APIs, databases and integrations that help applications, data and external services work together reliably.",
  },
  usefulSituations: [
    {
      title: "The frontend needs persistent data",
      description:
        "Forms, accounts, records or application behaviour may need a dependable backend and database behind the interface.",
    },
    {
      title: "Several systems need to exchange information",
      description:
        "Data may need to move between applications, external services, internal tools or third-party platforms.",
    },
    {
      title: "People are moving data manually",
      description:
        "Repeated copying, exporting and re-entering information often signals that the systems are not connected well enough.",
    },
    {
      title: "An API is required",
      description:
        "Applications may need a controlled way to request, create or update information across system boundaries.",
    },
    {
      title: "Business logic has become more complex",
      description:
        "Rules, validation and processing may need a clear backend layer rather than being scattered through the interface.",
    },
    {
      title: "Data ownership is unclear",
      description:
        "Information may exist in several places without a clear model for where it belongs, how it changes or which system controls it.",
    },
  ],
  backendScope: [
    {
      title: "Backend systems",
      description:
        "Server-side application logic and services that support the behaviour required by the frontend or wider product.",
    },
    {
      title: "Database design",
      description:
        "Structuring information, relationships and constraints around what the application actually needs to store and retrieve.",
    },
    {
      title: "APIs",
      description:
        "Interfaces that allow applications and services to exchange information in a controlled and maintainable way.",
    },
    {
      title: "Authentication integration",
      description:
        "Connecting identity and access systems when users, roles or protected application behaviour require them.",
    },
    {
      title: "Third-party integrations",
      description:
        "Connecting external platforms or services when important workflows depend on information outside the application.",
    },
    {
      title: "Webhooks",
      description:
        "Event-driven connections that allow systems to react when relevant activity occurs elsewhere.",
    },
    {
      title: "Data workflows",
      description:
        "Moving, validating, transforming and processing information through the system in a dependable way.",
    },
    {
      title: "Storage integration",
      description:
        "Connecting object or file storage when applications need to manage documents, media or other assets.",
    },
    {
      title: "Backend refactoring",
      description:
        "Reworking existing backend logic when the current structure has become difficult to maintain or extend.",
    },
    {
      title: "Operational visibility",
      description:
        "Supporting logging and monitoring so important backend behaviour can be observed after deployment.",
    },
  ],
  dataFlow: [
    {
      label: "Capture",
      title: "Information enters the system",
      description:
        "Users, applications or integrations provide data through forms, APIs or events.",
    },
    {
      label: "Validate",
      title: "The system checks what it received",
      description:
        "Required fields, formats, permissions and business constraints are verified before information is trusted.",
    },
    {
      label: "Process",
      title: "Business rules are applied",
      description:
        "The backend decides what should happen with the information according to the application requirement.",
    },
    {
      label: "Store",
      title: "The right information is persisted",
      description:
        "Databases or storage systems keep the data the application will need later.",
    },
    {
      label: "Exchange",
      title: "Systems communicate when required",
      description:
        "APIs, webhooks and integrations move relevant information across system boundaries.",
    },
    {
      label: "Use",
      title: "Applications turn the data into useful behaviour",
      description:
        "The frontend, reports, workflows or other services use the processed information to support real work.",
    },
  ],
  systemRoles: [
    {
      title: "Interface",
      description: "Where people see information and interact with the system.",
    },
    {
      title: "Backend",
      description:
        "Where business logic, validation and system behaviour are coordinated.",
    },
    {
      title: "Database",
      description: "Where structured information is stored and related.",
    },
    {
      title: "Integration",
      description:
        "How information crosses from one system or service to another.",
    },
  ],
  deliverySteps: [
    {
      title: "Understand the data",
      description:
        "Identify what information exists, who uses it and what the system needs to do with it.",
    },
    {
      title: "Map the flows",
      description:
        "Trace where information enters, moves, changes and leaves the system.",
    },
    {
      title: "Design the model",
      description:
        "Define relationships, responsibilities, validation and system boundaries.",
    },
    {
      title: "Build the services",
      description: "Implement backend logic, APIs, storage and data behaviour.",
    },
    {
      title: "Integrate",
      description:
        "Connect external systems and services where the workflow requires them.",
    },
    {
      title: "Test",
      description:
        "Verify data integrity, permissions, failures and important integration paths.",
    },
    {
      title: "Monitor",
      description:
        "Observe the deployed system and improve areas that become visible through real operation.",
    },
  ],
  relatedServiceSlugs: [
    "/services/applications-software",
    "/services/infrastructure-deployment",
    "/services/automation-ai",
    "/services/maintenance-support",
  ],
  relatedProjectSlugs: ["/work/collegefaqs"],
  sections: {
    hero: {
      link: "Services",
      title: "Make the systems behind the interface",
      accent: "work together.",
      description:
        "Backend work creates the structure behind what users see — how information is validated, processed, stored and exchanged across the wider system.",
      contactAction: "Discuss Your Project",
      backendScopeAction: "Explore What We Do",
      principle: {
        description:
          "Information should have a clear path through the system rather than being moved and duplicated without clear ownership.",
      },
      backendVisual: {
        label: "System flow",
        statement: "Behind the interface",
        status: "Connected systems",
        items: [
          {
            label: "Application",
            description: "User actions & requests",
          },
          {
            label: "API · Business logic",
            description: "Validate · process · coordinate",
          },
          {
            label: "Data",
            description: "Store",
          },
          {
            label: "Services",
            description: "Use",
          },
          {
            label: "Integrations",
            description: "Exchange",
          },
        ],
      },
      outcome: {
        label: "Outcome",
        statement: "Clear system responsibilities.",
      },
    },
    whenUseful: {
      eyebrow: "When this service is useful",
      title: "When information needs",
      accent: "a better path.",
      description:
        "Backend problems are often first noticed as manual work, inconsistent information or systems that cannot communicate reliably.",
    },
    scope: {
      eyebrow: "What we can work on",
      title: "The systems",
      accent: "behind the experience.",
      description:
        "The backend should support the application requirement without creating unnecessary complexity or unclear ownership between systems.",
    },
    dataFlow: {
      eyebrow: "How information moves",
      title: "Data should have",
      accent: "a clear journey.",
      description:
        "Good backend architecture makes it easier to understand what happens to information at each stage rather than treating the backend as one invisible block.",
    },
    delivery: {
      eyebrow: "How we approach the work",
      title: "Understand the information",
      accent: "before designing the backend.",
      description:
        "Data models and APIs make more sense when the flows, responsibilities and system boundaries are understood first.",
    },
    relatedServices: {
      eyebrow: "Connected services",
      title: "Backend work connects",
      accent: "the wider system.",
      description:
        "Applications use the backend, infrastructure operates it, automation can move work through it, and ongoing support helps it remain dependable.",
      action: "Explore service",
    },
    relatedWork: {
      eyebrow: "Related work",
      title: "Data and workflows",
      accent: "behind the interface.",
      description:
        "CollegeFAQs is being developed with form workflows and structured student journeys that require more than static page delivery.",
      workAction: "Explore all Work",
      action: "View project",
    },
    cta: {
      eyebrow: "Start a conversation",
      title: "Data stuck between systems?",
      accent: "Start by mapping where it needs to go.",
      description:
        "Tell us what information exists, where it comes from, where it needs to go and what the system should do with it. We can work through the backend requirement from there.",
      contactAction: "Discuss Your Project",
      note: {
        description:
          "You do not need to arrive with a database schema or API specification.",
      },
    },
  },
} as const;
