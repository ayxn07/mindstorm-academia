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
  title: "Study in Europe",
  description:
    "Complete guide to studying in Europe — top universities in Germany, France, Italy & more. Admission requirements, visa process, costs, and Schengen mobility.",
  keywords: [
    "study in Europe",
    "European universities",
    "study in Germany",
    "study in France",
    "study in Italy",
    "Schengen student visa",
    "Europe study abroad",
    "tuition-free Europe",
    "European education",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/europe`,
  },
  openGraph: {
    title: "Study in Europe | Mindstorm Strategic Consulting",
    description:
      "Top universities in Germany, France, Italy & more — admission requirements, visa process, costs, and Schengen mobility.",
    url: `${BASE_URL}/study/europe`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in Europe with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Europe | Mindstorm Strategic Consulting",
    description:
      "Top universities in Germany, France, Italy & more — admission requirements, visa process, costs, and Schengen mobility.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.europe;

export default function EuropePage() {
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
      <FloatingApplyButton countrySlug="europe" countryName="Europe" />
    </>
  );
}
