import type { Metadata } from "next";
import CareerHero from "@/components/career/CareerHero";
import CareerServices from "@/components/career/CareerServices";
import CareerPathways from "@/components/career/CareerPathways";
import ServicesCTA from "@/components/services/ServicesCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Career Guidance | Mindstorm Strategic Consulting",
  description:
    "Expert career guidance services — from psychometric assessments and course selection to interview prep and post-graduation planning. Navigate your career path with confidence.",
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
