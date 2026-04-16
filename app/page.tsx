import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyMindstorm from "@/components/home/WhyMindstorm";
import CountriesOverview from "@/components/home/CountriesOverview";
import StatsBar from "@/components/home/StatsBar";
import CTASection from "@/components/home/CTASection";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <WhoWeHelp />
      <WhyMindstorm />
      <CountriesOverview />
      <StatsBar />
      <CTASection />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}
