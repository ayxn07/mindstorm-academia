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
  title: "Study in Germany",
  description:
    "Complete guide to studying in Germany — tuition-free public universities, world-class engineering, post-study Job Seeker Visa, and admission requirements.",
  keywords: [
    "study in Germany",
    "tuition free universities Germany",
    "German universities",
    "TU Munich",
    "Germany student visa",
    "study engineering Germany",
    "DAAD scholarship",
    "study abroad Germany",
    "APS certificate",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/germany`,
  },
  openGraph: {
    title: "Study in Germany | Mindstorm Strategic Consulting",
    description:
      "Tuition-free public universities, engineering excellence, and an 18-month Job Seeker Visa post-study.",
    url: `${BASE_URL}/study/germany`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in Germany with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Germany | Mindstorm Strategic Consulting",
    description:
      "Tuition-free public universities, engineering excellence, and an 18-month Job Seeker Visa post-study.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.germany;

export default function GermanyPage() {
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
      <FloatingApplyButton countrySlug="germany" countryName="Germany" />
    </>
  );
}
