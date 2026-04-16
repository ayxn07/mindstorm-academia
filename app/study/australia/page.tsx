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

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Study in Australia",
  description:
    "Complete guide to studying in Australia — top universities, admission requirements, visa process, costs, and work rights. Expert guidance from Mindstorm.",
  keywords: [
    "study in Australia",
    "Australia student visa",
    "Australian universities",
    "student visa subclass 500",
    "study abroad Australia",
    "undergraduate Australia",
    "postgraduate Australia",
    "Australian education",
    "work while studying Australia",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/australia`,
  },
  openGraph: {
    title: "Study in Australia | Mindstorm Strategic Consulting",
    description:
      "Top universities, admission requirements, visa process, costs, and work rights — everything you need to study in Australia.",
    url: `${BASE_URL}/study/australia`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in Australia with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Australia | Mindstorm Strategic Consulting",
    description:
      "Top universities, admission requirements, visa process, costs, and work rights — everything you need to study in Australia.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.australia;

export default function AustraliaPage() {
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
    </>
  );
}
