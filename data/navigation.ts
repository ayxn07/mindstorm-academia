export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Study Abroad",
    href: "#",
    children: [
      { label: "Canada", href: "/study/canada" },
      { label: "Australia", href: "/study/australia" },
      { label: "Europe", href: "/study/europe" },
      { label: "Russia", href: "/study/russia" },
      { label: "UAE", href: "/study/uae" },
    ],
  },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];
