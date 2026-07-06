import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ResultsGrid from "@/components/ResultsGrid";
import FounderSection from "@/components/FounderSection";
import AgencyCases from "@/components/AgencyCases";
import LeadFormSection from "@/components/LeadFormSection";
import PodcastsSection from "@/components/PodcastsSection";
import ResourcesSection from "@/components/ResourcesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <StatsSection />
      <ResultsGrid />
      <FounderSection />
      <AgencyCases />
      <PodcastsSection />
      <ResourcesSection />
      <LeadFormSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
