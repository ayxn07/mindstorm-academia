import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import HowItWorks from "@/components/services/HowItWorks";
import ServicesCTA from "@/components/services/ServicesCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Our Services | Mindstorm Strategic Consulting",
  description:
    "Explore Mindstorm's complete suite of education consulting services — from profile assessment and university selection to visa processing, documentation, and pre-departure support.",
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
