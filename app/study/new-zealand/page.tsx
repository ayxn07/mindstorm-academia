import type { Metadata } from "next";
import { countries } from "@/data/countries";
import CountryHero from "@/components/study/CountryHero";
import CountryOverview from "@/components/study/CountryOverview";
import WhyStudyHere from "@/components/study/WhyStudyHere";
import TopUniversities from "@/components/study/TopUniversities";
import AdmissionRequirements from "@/components/study/AdmissionRequirements";
import CostOfLiving from "@/components/study/CostOfLiving";
import VisaProcess from "@/components/study/VisaProcess";
import CountryCTA from "@/components/study/CountryCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";
import FloatingApplyButton from "@/components/study/FloatingApplyButton";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Study in New Zealand",
  description:
    "Complete guide to studying in New Zealand — top-ranked universities, post-study work visa up to 3 years, skilled migrant residency pathway, and a world-class lifestyle.",
  keywords: [
    "study in New Zealand",
    "NZ universities",
    "Post-Study Work Visa NZ",
    "University of Auckland",
    "New Zealand student visa",
    "Skilled Migrant Category",
    "study abroad New Zealand",
    "Manaaki NZ scholarship",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/new-zealand`,
  },
  openGraph: {
    title: "Study in New Zealand | Mindstorm Strategic Consulting",
    description:
      "Top-ranked NZ universities and the Post-Study Work Visa — admissions, costs, and visa process.",
    url: `${BASE_URL}/study/new-zealand`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in New Zealand with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in New Zealand | Mindstorm Strategic Consulting",
    description:
      "Top-ranked NZ universities and the Post-Study Work Visa — admissions, costs, and visa process.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries["new-zealand"];

export default function NewZealandPage() {
  return (
    <>
      <CountryHero country={country} />
      <CountryOverview country={country} />
      <WhyStudyHere country={country} />
      <TopUniversities country={country} />
      <AdmissionRequirements country={country} />
      <CostOfLiving country={country} />
      <VisaProcess country={country} />
      <CountryCTA country={country} />
      <TestimonialsMasonry />
      <FAQAccordion />
      <FloatingApplyButton countrySlug="new-zealand" countryName="New Zealand" />
    </>
  );
}
