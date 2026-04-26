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
  title: "Study in the UK",
  description:
    "Complete guide to studying in the United Kingdom — Russell Group universities, the 2-year Graduate Route post-study work visa, admission requirements, and costs.",
  keywords: [
    "study in UK",
    "study in United Kingdom",
    "UK universities",
    "Russell Group",
    "Oxford Cambridge admissions",
    "Graduate Route visa",
    "UK student visa",
    "Tier 4 visa",
    "study abroad UK",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/uk`,
  },
  openGraph: {
    title: "Study in the UK | Mindstorm Strategic Consulting",
    description:
      "World-renowned UK universities with the 2-year Graduate Route — admissions, costs, and visa process.",
    url: `${BASE_URL}/study/uk`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in the UK with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in the UK | Mindstorm Strategic Consulting",
    description:
      "World-renowned UK universities with the 2-year Graduate Route — admissions, costs, and visa process.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.uk;

export default function UKPage() {
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
      <FloatingApplyButton countrySlug="uk" countryName="United Kingdom" />
    </>
  );
}
