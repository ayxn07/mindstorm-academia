import type { Metadata } from "next";
import CareerHero from "@/components/career/CareerHero";
import CareerServices from "@/components/career/CareerServices";
import CareerPathways from "@/components/career/CareerPathways";
import ServicesCTA from "@/components/services/ServicesCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Career Guidance",
  description:
    "Expert career guidance services — from psychometric assessments and course selection to interview prep and post-graduation planning. Navigate your career path with confidence.",
  keywords: [
    "career guidance",
    "career counselling abroad",
    "psychometric assessment",
    "course selection guidance",
    "post-graduation planning",
    "interview preparation",
    "international career advice",
    "study abroad career",
  ],
  alternates: {
    canonical: `${BASE_URL}/career-guidance`,
  },
  openGraph: {
    title: "Career Guidance | Mindstorm Strategic Consulting",
    description:
      "Expert career guidance — psychometric assessments, course selection, interview prep, and post-graduation planning.",
    url: `${BASE_URL}/career-guidance`,
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
    title: "Career Guidance | Mindstorm Strategic Consulting",
    description:
      "Expert career guidance — psychometric assessments, course selection, interview prep, and post-graduation planning.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function CareerGuidancePage() {
  return (
    <>
      <CareerHero />
      <CareerServices />
      <CareerPathways />
      <ServicesCTA />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}
