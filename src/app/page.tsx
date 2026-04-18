import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TryNowBanner from "@/components/sections/TryNowBanner";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import TheClaw from "@/components/sections/TheClaw";
import WhyFashionFirst from "@/components/sections/WhyFashionFirst";
import Compliance from "@/components/sections/Compliance";
import SpeedyGSection from "@/components/sections/SpeedyGSection";
import PricingPreview from "@/components/sections/PricingPreview";
import RoadmapPreview from "@/components/sections/RoadmapPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Nav />
      <main>
        <TryNowBanner />
        <Hero />
        <Problem />
        <TheClaw />
        <WhyFashionFirst />
        <Compliance />
        <SpeedyGSection />
        <PricingPreview />
        <RoadmapPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
