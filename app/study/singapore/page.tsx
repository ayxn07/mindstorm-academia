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
  title: "Study in Singapore",
  description:
    "Complete guide to studying in Singapore — NUS and NTU global rankings, MOE Tuition Grant, Student Pass, and Asia's leading career gateway.",
  keywords: [
    "study in Singapore",
    "NUS NTU admissions",
    "Singapore universities",
    "MOE Tuition Grant",
    "Student Pass Singapore",
    "ASEAN scholarship",
    "study abroad Singapore",
    "Asia education hub",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/singapore`,
  },
  openGraph: {
    title: "Study in Singapore | Mindstorm Strategic Consulting",
    description:
      "NUS and NTU world-top-20 universities, MOE Tuition Grant, and Asia's career gateway.",
    url: `${BASE_URL}/study/singapore`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in Singapore with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Singapore | Mindstorm Strategic Consulting",
    description:
      "NUS and NTU world-top-20 universities, MOE Tuition Grant, and Asia's career gateway.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.singapore;

export default function SingaporePage() {
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
      <FloatingApplyButton countrySlug="singapore" countryName="Singapore" />
    </>
  );
}
