import type { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import AboutCTA from "@/components/about/AboutCTA";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Student Testimonials",
  description:
    "Hear from students who achieved their dreams of studying abroad with Mindstorm. Real stories, real success — across Canada, Australia, Europe, Russia, and UAE.",
  keywords: [
    "student testimonials",
    "study abroad success stories",
    "Mindstorm reviews",
    "student experiences",
    "overseas education reviews",
    "study in Canada reviews",
    "study in Australia reviews",
  ],
  alternates: {
    canonical: `${BASE_URL}/testimonials`,
  },
  openGraph: {
    title: "Student Testimonials | Mindstorm Strategic Consulting",
    description:
      "Real stories from students who studied abroad with Mindstorm — Canada, Australia, Europe, Russia, and UAE.",
    url: `${BASE_URL}/testimonials`,
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
    title: "Student Testimonials | Mindstorm Strategic Consulting",
    description:
      "Real stories from students who studied abroad with Mindstorm — Canada, Australia, Europe, Russia, and UAE.",
    images: ["/MindStorm Global 256x256.png"],
  },
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
