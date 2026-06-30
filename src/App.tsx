import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TickerSection from "./components/TickerSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ClassesSection from "./components/ClassesSection";
import TrainersSection from "./components/TrainersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";
import CTABannerSection from "./components/CTABannerSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col bg-[#0D0D0D] text-white min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TickerSection />
        <HowItWorksSection />
        <ClassesSection />
        <TrainersSection />
        <TestimonialsSection />
        <PricingSection />
        <LocationSection />
        <FAQSection />
        <CTABannerSection />
      </main>
      <Footer />
    </div>
  );
}

