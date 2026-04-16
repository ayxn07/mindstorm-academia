import type { Metadata } from "next";
import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import AboutCTA from "@/components/about/AboutCTA";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about our admission services, visa processing, scholarship guidance, and more.",
  keywords: [
    "study abroad FAQ",
    "visa processing questions",
    "university admission FAQ",
    "scholarship guidance questions",
    "overseas education questions",
    "Mindstorm FAQ",
    "international student questions",
  ],
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions | Mindstorm Strategic Consulting",
    description:
      "Answers to common questions about admission services, visa processing, scholarships, and international education.",
    url: `${BASE_URL}/faq`,
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
    title: "Frequently Asked Questions | Mindstorm Strategic Consulting",
    description:
      "Answers to common questions about admission services, visa processing, scholarships, and international education.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
      <AboutCTA />
    </>
  );
}
