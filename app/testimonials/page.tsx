import type { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Testimonials | Mindstorm Strategic Consulting",
  description:
    "Hear from students who achieved their dreams of studying abroad with Mindstorm. Real stories, real success — across Canada, Australia, Europe, Russia, and UAE.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsMasonry />
      <AboutCTA />
    </>
  );
}
