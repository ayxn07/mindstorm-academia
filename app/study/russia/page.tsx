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
  title: "Study in Russia",
  description:
    "Complete guide to studying in Russia — affordable STEM & medical education, top universities, admission requirements, visa process, and costs.",
  keywords: [
    "study in Russia",
    "Russian universities",
    "study medicine Russia",
    "affordable university Russia",
    "STEM education Russia",
    "Russia student visa",
    "study abroad Russia",
    "Moscow universities",
    "Russian education system",
  ],
  alternates: {
    canonical: `${BASE_URL}/study/russia`,
  },
  openGraph: {
    title: "Study in Russia | Mindstorm Strategic Consulting",
    description:
      "Affordable STEM & medical education at top Russian universities — admission requirements, visa process, and costs.",
    url: `${BASE_URL}/study/russia`,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Study in Russia with Mindstorm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Russia | Mindstorm Strategic Consulting",
    description:
      "Affordable STEM & medical education at top Russian universities — admission requirements, visa process, and costs.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

const country = countries.russia;

export default function RussiaPage() {
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
