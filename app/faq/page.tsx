import type { Metadata } from "next";
import FAQHero from "@/components/faq/FAQHero";
import FAQAccordion from "@/components/faq/FAQAccordion";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "FAQ | Mindstorm Strategic Consulting",
  description:
    "Find answers to frequently asked questions about our admission services, visa processing, scholarship guidance, and more.",
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
