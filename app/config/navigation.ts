export interface NavigationItem {
  label: string;
  to: string;
}

export const primaryNavigation: readonly NavigationItem[] = [
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Work",
    to: "/work",
  },
  {
    label: "Pricing",
    to: "/pricing",
  },
  {
    label: "Insights",
    to: "/insights",
  },
  {
    label: "Resources",
    to: "/resources",
  },
  {
    label: "About",
    to: "/about",
  },
];
