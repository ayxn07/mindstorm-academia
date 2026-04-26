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
  title: "Study in Canada",
  description:
    "Complete guide to studying in Canada — top universities, admission requirements, visa process, costs, and work rights. Expert guidance from Mindstorm.",
  keywords: [
    "study in Canada",
    "Canada student visa",
    "Canadian universities",
    "study permit Canada",
    "undergraduate Canada",
    "postgraduate Canada",
    "study abroad Canada",
    "Canadian education",
    "work while studying Canada",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/canada`,
  },
  openGraph: {
    title: "Study in Canada | Mindstorm Strategic Consulting",
    description:
      "Top universities, admission requirements, visa process, costs, and work rights — everything you need to study in Canada.",
    url: `${BASE_URL}/study/canada`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in Canada with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Canada | Mindstorm Strategic Consulting",
    description:
      "Top universities, admission requirements, visa process, costs, and work rights — everything you need to study in Canada.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.canada;

export default function CanadaPage() {
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
      <FloatingApplyButton countrySlug="canada" countryName="Canada" />
    </>
  );
}
