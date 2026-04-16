import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyMindstorm from "@/components/home/WhyMindstorm";
import CountriesOverview from "@/components/home/CountriesOverview";
import StatsBar from "@/components/home/StatsBar";
import CTASection from "@/components/home/CTASection";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Mindstorm Strategic Consulting | Global Education Excellence",
  description:
    "Your gateway to global education. Study in Canada, Australia, Europe, Russia & UAE with complete professional guidance. University admissions, visa processing, and pre-departure support.",
  keywords: [
    "study abroad",
    "overseas education consultancy",
    "university admissions Dubai",
    "visa processing UAE",
    "study in Canada",
    "study in Australia",
    "study in Europe",
    "study in Russia",
    "study in UAE",
    "Mindstorm Strategic Consulting",
    "international education",
    "education consultancy Dubai",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Mindstorm Strategic Consulting | Global Education Excellence",
    description:
      "Your gateway to global education. Study in Canada, Australia, Europe, Russia & UAE with expert guidance on admissions, visas, and more.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Mindstorm Strategic Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindstorm Strategic Consulting | Global Education Excellence",
    description:
      "Your gateway to global education. Study in Canada, Australia, Europe, Russia & UAE with expert guidance on admissions, visas, and more.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <WhoWeHelp />
      <WhyMindstorm />
      <CountriesOverview />
      <StatsBar />
      <CTASection />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}
