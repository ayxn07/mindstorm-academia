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
  title: "Study in the USA",
  description:
    "Complete guide to studying in the USA — Ivy League universities, F-1 visa, OPT and STEM extension, admission requirements, and living costs.",
  keywords: [
    "study in USA",
    "US universities",
    "F-1 visa",
    "OPT STEM extension",
    "Ivy League admissions",
    "MIT Stanford Harvard",
    "USA student visa",
    "study abroad USA",
    "I-20 form",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/usa`,
  },
  openGraph: {
    title: "Study in the USA | Mindstorm Strategic Consulting",
    description:
      "Top US universities, the F-1 visa process, and OPT + STEM extension pathways — full guide.",
    url: `${BASE_URL}/study/usa`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in the USA with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in the USA | Mindstorm Strategic Consulting",
    description:
      "Top US universities, the F-1 visa process, and OPT + STEM extension pathways — full guide.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.usa;

export default function USAPage() {
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
      <FloatingApplyButton countrySlug="usa" countryName="United States" />
    </>
  );
}
