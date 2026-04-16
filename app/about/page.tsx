import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVisionValues from "@/components/about/MissionVisionValues";
import CoreStrengths from "@/components/about/CoreStrengths";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "About Us | Mindstorm Strategic Consulting",
  description:
    "Learn about Mindstorm Strategic Consulting FZ-LLC — our mission, vision, and why thousands of students trust us to guide their international education journey.",
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
