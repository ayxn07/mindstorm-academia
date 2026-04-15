import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import WhyMindstorm from "@/components/home/WhyMindstorm";
import CountriesOverview from "@/components/home/CountriesOverview";
import StatsBar from "@/components/home/StatsBar";
import CTASection from "@/components/home/CTASection";

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
    </>
  );
}
