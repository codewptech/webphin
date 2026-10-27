export const pricingContent = {
  seo: {
    title: "Pricing | Webphin",
    description:
      "Understand how Webphin approaches custom project pricing, scope, proposals, budgets, operating costs and changes without fixed packages.",
  },

  hero: {
    eyebrow: "Pricing",
    title: "A useful price starts with",
    accent: "understanding the work.",
    description:
      "Custom technology projects can look similar on the surface while requiring very different decisions underneath. We price after we understand enough of the requirement to define what should actually be built.",
    policy: "No fixed project packages. No invented starting price.",
    primaryAction: {
      label: "Discuss Your Project",
      to: "/contact",
    },
    secondaryAction: {
      label: "See how pricing works",
      to: "/pricing#proposal-process",
    },
    context: {
      label: "Before a proposal",
      title: "The useful questions come before the number.",
      questions: [
        "What outcome should the project create?",
        "Who will use it, and how?",
        "What already exists today?",
        "What constraints — budget, time, systems or operations — matter?",
      ],
    },
  },

  comparison: {
    eyebrow: "Why pricing varies",
    title: "Similar on the surface. Different underneath.",
    description:
      "Two projects can both be called “a website” or “an application” while carrying very different work behind the interface. Page count or category alone is not enough to price them responsibly.",
    examples: [
      {
        key: "content-led",
        label: "Content-led digital presence",
        title: "Most of the work may sit in structure, content and experience.",
        description:
          "A project could involve clear information architecture, prepared content, standard forms, limited integrations and a relatively straightforward deployment model.",
        considerations: [
          "Information architecture",
          "Responsive interface",
          "Content presentation",
          "Standard enquiry flows",
        ],
      },
      {
        key: "connected-system",
        label: "Connected digital system",
        title: "The visible interface may be only one part of the work.",
        description:
          "Another project could involve custom workflows, data, integrations, permissions, migrations, infrastructure or operational requirements behind a similar-looking interface.",
        considerations: [
          "Custom workflows",
          "Data and integrations",
          "Infrastructure decisions",
          "Operational requirements",
        ],
      },
    ],
    principle:
      "The visible interface is only one part of the project. The work underneath it can materially change the scope.",
  },

  factors: {
    eyebrow: "What shapes the project",
    title: "Cost follows the work that the requirement creates.",
    description:
      "These factors have an intentional reading order, but they are not a rigid process. They work together to determine the size and shape of a project.",
    items: [
      {
        label: "Scope",
        title: "How much needs to be designed and built?",
        description:
          "The number of journeys, screens, features, content areas and deliverables affects the amount of work required.",
      },
      {
        label: "Complexity",
        title: "How much behaviour sits behind the interface?",
        description:
          "Business rules, permissions, workflows, edge cases and custom interactions can make two visually similar projects very different to implement.",
      },
      {
        label: "Experience",
        title: "How much custom interaction and refinement is needed?",
        description:
          "Responsive behaviour, accessibility, interaction detail and the amount of custom interface work all influence implementation effort.",
      },
      {
        label: "Systems & integrations",
        title: "What other systems need to connect?",
        description:
          "Databases, APIs, third-party platforms, authentication and external services introduce dependencies that need to be understood and tested.",
      },
      {
        label: "Content & data",
        title: "What already exists, and what has to be prepared or moved?",
        description:
          "Content readiness, data quality, migrations and restructuring can become meaningful parts of the work even when they are not obvious in the interface.",
      },
      {
        label: "Infrastructure",
        title: "How does the system need to be deployed and operated?",
        description:
          "Hosting, environments, deployment, storage, monitoring and operational requirements can change both the initial work and the ongoing cost.",
      },
      {
        label: "Ongoing needs",
        title: "What happens after the initial launch?",
        description:
          "Maintenance, monitoring, iterative improvements and future operating responsibilities should be considered before they become afterthoughts.",
      },
    ],
  },

  proposalProcess: {
    eyebrow: "From requirement to proposal",
    title: "A proposal should be the result of understanding, not guessing.",
    description:
      "The amount of discovery should match the project, but the commercial decision should still follow a clear understanding of what is being proposed.",
    steps: [
      {
        label: "Understand",
        description:
          "Clarify the goal, users, current situation, constraints and the outcome the project is expected to create.",
      },
      {
        label: "Define scope",
        description:
          "Separate what belongs in the project from what does not, and identify the journeys, systems and deliverables that matter.",
      },
      {
        label: "Evaluate",
        description:
          "Consider complexity, integrations, infrastructure, dependencies and the trade-offs between different implementation approaches.",
      },
      {
        label: "Recommend",
        description:
          "Shape an approach that fits the requirement rather than adding technology, process or cost that does not earn its place.",
      },
      {
        label: "Agree",
        description:
          "Confirm the scope, assumptions, commercial estimate and important boundaries before implementation begins.",
      },
    ],
    note: "A small, clear requirement should not be forced through a heavy process. The objective is enough clarity to make a responsible decision.",
  },

  engagement: {
    eyebrow: "How work can be structured",
    title: "The engagement should follow the shape of the requirement.",
    description:
      "Different requirements do not need to be forced into the same commercial format. The work can be structured differently when that makes the scope, decisions and delivery easier to manage.",
    models: [
      {
        title: "Defined project",
        description:
          "A clearly bounded piece of work with an understood outcome, agreed scope and a defined delivery responsibility.",
        fit: "Useful when the requirement is already clear enough to scope responsibly.",
      },
      {
        title: "Phased build",
        description:
          "A larger requirement can be divided into useful stages so important decisions can be validated before later work is committed.",
        fit: "Useful when the product should evolve through meaningful milestones rather than one large release.",
      },
      {
        title: "Ongoing technical work",
        description:
          "Some systems need continued maintenance, monitoring, improvements or technical involvement after the initial delivery.",
        fit: "Useful when the operational life of the system matters as much as the first launch.",
      },
    ],
  },

  estimateContext: {
    eyebrow: "No public rate card",
    title: "A useful estimate needs context.",
    description:
      "We would rather explain why a project costs what it does than publish a number that may have little relationship to the requirement in front of us.",
    principle: {
      title: "No public rate card. No vague pricing.",
      description:
        "Not publishing fixed project prices should not mean leaving the commercial side unclear. Once the requirement is understood well enough, the estimate should be tied to a visible scope and set of assumptions.",
    },
    budgetNotes: [
      {
        title: "Have a budget in mind? Share it early.",
        description:
          "Budget is a real project constraint, just like time, users, systems or operations. Sharing it helps us judge whether the requirement and available budget fit — and whether the scope should be simplified, phased or reconsidered.",
      },
      {
        title: "Not sure what the budget should be?",
        description:
          "Start with the requirement. The first useful question is what the project actually needs, not what number should be attached to it before the work is understood.",
      },
    ],
  },

  proposalClarity: {
    eyebrow: "What the proposal should clarify",
    title: "You should know what the estimate is based on.",
    description:
      "Before work begins, the important commercial and technical boundaries should be visible. A useful proposal makes it easier to see what is included, what is assumed and what may sit outside the project.",
    items: [
      {
        title: "Scope of work",
        description:
          "The parts of the requirement that the project is expected to cover.",
      },
      {
        title: "Deliverables & boundaries",
        description:
          "What will be delivered and where the responsibility of the current scope ends.",
      },
      {
        title: "Key assumptions",
        description:
          "The conditions the estimate depends on, including information, access, content, data or external dependencies.",
      },
      {
        title: "Delivery approach",
        description:
          "How the work is expected to move from definition through implementation, testing and release.",
      },
      {
        title: "Technical dependencies",
        description:
          "Infrastructure, integrations or third-party services that materially affect implementation or operation.",
      },
      {
        title: "Commercial estimate",
        description:
          "The project cost attached to the agreed scope rather than an unexplained headline number.",
      },
      {
        title: "Ongoing or external costs",
        description:
          "Recurring infrastructure, third-party services or continuing support where those costs are relevant.",
      },
    ],
  },

  costOverTime: {
    eyebrow: "Beyond the first build",
    title: "Build cost and operating cost are different decisions.",
    description:
      "The choices that affect implementation can also affect what the system costs to run and change later. Keeping those categories visible makes the commercial picture easier to understand.",
    groups: [
      {
        label: "Build",
        title: "Project work",
        description:
          "The work required to define, design, implement, test and prepare the agreed solution for use.",
        items: [
          "Scoping and technical decisions",
          "Interface and application work",
          "Backend or integration work where required",
          "Testing and initial deployment",
        ],
      },
      {
        label: "Run",
        title: "Operating costs",
        description:
          "Costs that may continue after launch depending on the architecture and services the system relies on.",
        items: [
          "Hosting or infrastructure",
          "Domains and external services",
          "API or platform usage where applicable",
          "Monitoring or ongoing support where required",
        ],
      },
      {
        label: "Change",
        title: "Future evolution",
        description:
          "New requirements can create new work after the original scope has been delivered.",
        items: [
          "New features or workflows",
          "Additional integrations",
          "Larger content or data changes",
          "Changing operational requirements",
        ],
      },
    ],
    changeTitle: "What can change an estimate?",
    changeDescription:
      "An estimate is tied to the information and assumptions available when the scope is agreed. Material changes should be discussed rather than quietly absorbed into a different project.",
    changeTriggers: [
      "Material scope changes",
      "New integrations or dependencies",
      "Larger-than-expected migration work",
      "Changed delivery constraints",
      "Assumptions that need revisiting",
    ],
    note: "Not every project has every cost. The point is to separate the categories instead of hiding recurring or future work inside one headline figure.",
  },

  principles: {
    eyebrow: "Pricing principles",
    title: "Commercial clarity matters as much as technical clarity.",
    description:
      "These principles guide how we think about project cost without turning custom work into a package menu.",
    items: [
      {
        title: "Understand before estimating",
        description:
          "A number becomes more useful when it is attached to a requirement that both sides understand.",
      },
      {
        title: "Fit the architecture to the requirement",
        description:
          "Technology should earn its place through the problem it solves, not through how impressive the stack appears.",
      },
      {
        title: "Separate build cost from operating cost",
        description:
          "The initial project and the ongoing life of the system should be considered as related but different commercial questions.",
      },
      {
        title: "Keep unnecessary complexity out",
        description:
          "More infrastructure, integrations or custom behaviour should not be added unless the requirement benefits from them.",
      },
      {
        title: "Make material scope changes visible",
        description:
          "When the requirement meaningfully changes, the commercial effect should be discussed instead of becoming an invisible assumption.",
      },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    title: "Questions clients often have about project pricing.",
    description:
      "The answers below explain the commercial approach without pretending every project can be reduced to the same price table.",
    items: [
      {
        question: "Why does Webphin not publish starting prices?",
        answer:
          "A starting price can become an anchor even when the underlying work is materially different. We would rather connect the estimate to the actual scope, complexity and operating requirements of the project.",
      },
      {
        question: "Can we discuss price before a detailed project discussion?",
        answer:
          "Yes. Budget and feasibility can be discussed early. A meaningful project estimate, however, comes once there is enough context to define the scope and the assumptions behind it.",
      },
      {
        question: "What if I already have a fixed budget?",
        answer:
          "Share it early. We can evaluate the requirement and the budget together, then identify whether the scope fits, needs simplification, should be phased or may not be realistic within that constraint.",
      },
      {
        question:
          "Are hosting and third-party costs included in the project price?",
        answer:
          "That depends on the project. Where they are relevant, recurring infrastructure and external-service costs should be distinguished from Webphin’s project work so the ongoing commercial picture is clear.",
      },
      {
        question: "Can a larger project be delivered in phases?",
        answer:
          "Yes, when the requirement can be divided into useful stages without creating unnecessary rework. Phasing should make decisions and delivery clearer, not simply split one invoice into several pieces.",
      },
      {
        question: "What happens if the scope changes after the proposal?",
        answer:
          "If a material requirement changes, the effect on scope, approach and cost should be discussed before that additional work is treated as part of the original project.",
      },
      {
        question: "Can Webphin continue supporting a system after launch?",
        answer:
          "Maintenance & Support is one of Webphin’s service areas. Whether ongoing involvement is useful, and how it should be structured, depends on the system and its operational needs.",
      },
    ],
  },

  cta: {
    eyebrow: "Have a project in mind?",
    title: "Start with the requirement.",
    accent: "Then make the commercial decision.",
    description:
      "Tell us what you are trying to build, what already exists and any budget, timeline or technical constraints you already know. That context is more useful than choosing a package before the problem is understood.",
    primaryAction: {
      label: "Discuss Your Project",
      to: "/contact",
    },
    secondaryAction: {
      label: "Explore Our Work",
      to: "/work",
    },
  },
} as const;
