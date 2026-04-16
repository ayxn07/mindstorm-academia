import type { Metadata } from "next";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessSteps from "@/components/process/ProcessSteps";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ServicesCTA from "@/components/services/ServicesCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Our Process | Mindstorm Strategic Consulting",
  description:
    "Discover Mindstorm's proven 6-step process — from initial consultation to pre-departure support. We manage every detail of your international education journey.",
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
