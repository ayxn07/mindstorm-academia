import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import CoreStrengths from "@/components/about/CoreStrengths";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mindstorm Strategic Consulting FZ-LLC — our mission, vision, and why thousands of students trust us to guide their international education journey.",
  keywords: [
    "about Mindstorm",
    "education consultancy Dubai",
    "study abroad consultants",
    "Mindstorm Strategic Consulting",
    "overseas education experts",
    "international education UAE",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Mindstorm Strategic Consulting",
    description:
      "Learn about Mindstorm Strategic Consulting FZ-LLC — our mission, vision, and why thousands of students trust us.",
    url: `${BASE_URL}/about`,
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
    title: "About Us | Mindstorm Strategic Consulting",
    description:
      "Learn about Mindstorm Strategic Consulting FZ-LLC — our mission, vision, and why thousands of students trust us.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      <CoreStrengths />
      <AboutStats />
      <AboutCTA />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}
