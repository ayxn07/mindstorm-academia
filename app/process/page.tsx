import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessSteps from "@/components/process/ProcessSteps";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ServicesCTA from "@/components/services/ServicesCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Discover Mindstorm's proven 6-step process — from initial consultation to pre-departure support. We manage every detail of your international education journey.",
  keywords: [
    "study abroad process",
    "university admission steps",
    "how to apply abroad",
    "visa application process",
    "international education steps",
    "Mindstorm process",
    "student consultation process",
  ],
  alternates: {
    canonical: `${BASE_URL}/process`,
  },
  openGraph: {
    title: "Our Process | Mindstorm Strategic Consulting",
    description:
      "Proven 6-step process from initial consultation to pre-departure support — managing every detail of your international education journey.",
    url: `${BASE_URL}/process`,
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
    title: "Our Process | Mindstorm Strategic Consulting",
    description:
      "Proven 6-step process from initial consultation to pre-departure support — managing every detail of your international education journey.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <ProcessSteps />
      <ProcessTimeline />
      <ServicesCTA />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}
