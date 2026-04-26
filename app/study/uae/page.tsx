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
  title: "Study in UAE",
  description:
    "Complete guide to studying in the UAE — international degrees in Dubai & Abu Dhabi, top universities, admission requirements, visa process, and costs.",
  keywords: [
    "study in UAE",
    "study in Dubai",
    "study in Abu Dhabi",
    "UAE universities",
    "Dubai student visa",
    "international degree UAE",
    "study abroad UAE",
    "higher education Dubai",
    "UAE education system",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/uae`,
  },
  openGraph: {
    title: "Study in UAE | Mindstorm Strategic Consulting",
    description:
      "International degrees in Dubai & Abu Dhabi — top universities, admission requirements, visa process, and costs in the UAE.",
    url: `${BASE_URL}/study/uae`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in UAE with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in UAE | Mindstorm Strategic Consulting",
    description:
      "International degrees in Dubai & Abu Dhabi — top universities, admission requirements, visa process, and costs in the UAE.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.uae;

export default function UAEPage() {
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
      <FloatingApplyButton countrySlug="uae" countryName="UAE" />
    </>
  );
}
