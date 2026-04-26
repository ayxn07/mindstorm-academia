export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CountryMeta {
  name: string;
  href: string;
  tagline: string;
  image: string;
  fees: string;
  workRights: string;
  visaType: string;
  topUniversities: string[];
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
      { label: "Germany", href: "/study/germany" },
      { label: "UK", href: "/study/uk" },
      { label: "USA", href: "/study/usa" },
      { label: "New Zealand", href: "/study/new-zealand" },
      { label: "Singapore", href: "/study/singapore" },
    ],
  },
  { label: "Process", href: "/process" },
  { label: "Career Guidance", href: "/career-guidance" },
];

export const countryMeta: CountryMeta[] = [
  {
    name: "Canada",
    href: "/study/canada",
    tagline: "World-class education & immigration pathways",
    image:
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "CAD 15K–35K / yr",
    workRights: "20 hrs/week during study, full-time PGWP",
    visaType: "Study Permit",
    topUniversities: ["U of Toronto", "UBC", "McGill", "Waterloo"],
  },
  {
    name: "Australia",
    href: "/study/australia",
    tagline: "Globally ranked universities & work rights",
    image:
      "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "AUD 20K–45K / yr",
    workRights: "48 hrs/fortnight during study, full-time post-study",
    visaType: "Student Visa (500)",
    topUniversities: ["U of Melbourne", "ANU", "UNSW", "U of Sydney"],
  },
  {
    name: "Europe",
    href: "/study/europe",
    tagline: "Affordable education with Schengen mobility",
    image:
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "EUR 0–15K / yr",
    workRights: "20 hrs/week, post-study job-seeker visa",
    visaType: "Student Residence Permit",
    topUniversities: ["TU Munich", "Sorbonne", "Politecnico Milano", "KTH"],
  },
  {
    name: "Russia",
    href: "/study/russia",
    tagline: "Affordable STEM & medical education",
    image:
      "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "USD 2K–8K / yr",
    workRights: "20 hrs/week with work permit",
    visaType: "Study Visa",
    topUniversities: ["MSU", "ITMO", "SPbPU", "Kazan Federal"],
  },
  {
    name: "UAE",
    href: "/study/uae",
    tagline: "International degrees in a global hub",
    image:
      "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "AED 30K–80K / yr",
    workRights: "Part-time allowed, post-study work visa",
    visaType: "Student Residence Visa",
    topUniversities: ["Khalifa Univ", "AUS", "UAEU", "Heriot-Watt Dubai"],
  },
  {
    name: "Germany",
    href: "/study/germany",
    tagline: "Tuition-free public universities & engineering excellence",
    image:
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "EUR 0–3K / yr (public)",
    workRights: "20 hrs/week, 18-month Job Seeker Visa",
    visaType: "Student Visa (National D)",
    topUniversities: ["TU Munich", "LMU Munich", "RWTH Aachen", "Heidelberg"],
  },
  {
    name: "UK",
    href: "/study/uk",
    tagline: "Russell Group prestige & 2-year Graduate Route",
    image:
      "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "GBP 12K–38K / yr",
    workRights: "20 hrs/week, 2-year Graduate Route",
    visaType: "Student Route Visa",
    topUniversities: ["Oxford", "Cambridge", "Imperial", "UCL"],
  },
  {
    name: "USA",
    href: "/study/usa",
    tagline: "Ivy League prestige with OPT & STEM extension",
    image:
      "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "USD 25K–60K / yr",
    workRights: "On-campus + OPT (12 mo) + STEM ext (24 mo)",
    visaType: "F-1 Visa",
    topUniversities: ["MIT", "Stanford", "Harvard", "UC Berkeley"],
  },
  {
    name: "New Zealand",
    href: "/study/new-zealand",
    tagline: "Quality education & generous post-study work",
    image:
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "NZD 22K–45K / yr",
    workRights: "20 hrs/week, 1-3 yr Post-Study Work Visa",
    visaType: "Fee-Paying Student Visa",
    topUniversities: ["U of Auckland", "Otago", "Victoria Wellington", "Canterbury"],
  },
  {
    name: "Singapore",
    href: "/study/singapore",
    tagline: "Asia's education hub — NUS, NTU & global gateway",
    image:
      "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=400",
    fees: "SGD 17K–50K / yr (post-grant)",
    workRights: "16 hrs/week during term",
    visaType: "Student Pass",
    topUniversities: ["NUS", "NTU", "SMU", "SUTD"],
  },
];
