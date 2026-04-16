import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import HowItWorks from "@/components/services/HowItWorks";
import ServicesCTA from "@/components/services/ServicesCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Mindstorm's complete suite of education consulting services — from profile assessment and university selection to visa processing, documentation, and pre-departure support.",
  keywords: [
    "study abroad services",
    "university application help",
    "profile assessment",
    "visa processing service",
    "SOP drafting",
    "education consulting services",
    "pre-departure support",
    "scholarship guidance",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Our Services | Mindstorm Strategic Consulting",
    description:
      "Complete suite of education consulting services — profile assessment, university selection, visa processing, and more.",
    url: `${BASE_URL}/services`,
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
    title: "Our Services | Mindstorm Strategic Consulting",
    description:
      "Complete suite of education consulting services — profile assessment, university selection, visa processing, and more.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <HowItWorks />
      <ServicesCTA />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}
