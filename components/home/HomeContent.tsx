"use client";

import { useState } from "react";
import SplashScreen from "@/components/home/SplashScreen";
import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyMindstorm from "@/components/home/WhyMindstorm";
import CountriesOverview from "@/components/home/CountriesOverview";
import StatsBar from "@/components/home/StatsBar";
import CTASection from "@/components/home/CTASection";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export default function HomeContent() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashComplete(true)} />
      <div
        style={{
          opacity: splashComplete ? 1 : 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Hero />
        <ValueProposition />
        <WhoWeHelp />
        <WhyMindstorm />
        <CountriesOverview />
        <StatsBar />
        <CTASection />
        <TestimonialsMasonry />
        <FAQAccordion />
      </div>
    </>
  );
}
