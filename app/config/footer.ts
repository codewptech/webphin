import { services } from "~~/app/config/services";

export interface FooterLink {
  label: string;
  to: string;
}

export interface FooterGroup {
  title: string;
  links: readonly FooterLink[];
}

const serviceLinks: readonly FooterLink[] = services.map((service) => ({
  label: service.title,
  to: service.slug,
}));

export const footerGroups: readonly FooterGroup[] = [
  {
    title: "Services",
    links: serviceLinks,
  },
  {
    title: "Company",
    links: [
      {
        label: "Work",
        to: "/work",
      },
      {
        label: "Pricing",
        to: "/pricing",
      },
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Careers",
        to: "/careers",
      },
    ],
  },
  {
    title: "Learn",
    links: [
      {
        label: "Insights",
        to: "/insights",
      },
      {
        label: "Resources",
        to: "/resources",
      },
    ],
  },
];

export const footerLegalLinks: readonly FooterLink[] = [
  {
    label: "Privacy Policy",
    to: "/privacy",
  },
  {
    label: "Terms & Conditions",
    to: "/terms",
  },
];
