// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStats from '../components/home/TrustStats';
import RealProblemsSection from '../components/home/RealProblemsSection';
import HowItWorksSummary from '../components/home/HowItWorksSummary'; // ✅ Use correct name
import ServiceHighlights from '../components/home/ServiceHighlights';
import WhyChooseUsHighlights from '../components/home/WhyChooseUsHighlights';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustStats />
      <RealProblemsSection />
      <HowItWorksSummary /> {/* ✅ Updated version with map inside */}
      <ServiceHighlights />
      <WhyChooseUsHighlights />

      {/* Placeholder for the rest of the homepage sections */}
      {/* We will build these out next:
        - FAQTeaser
        - Testimonials
        - FinalCTA
      */}
      <div className="py-10 text-center border-t border-dashed mt-12">
        <p className="text-lg text-gray-500 italic">
          (More amazing homepage sections coming soon below!)
        </p>
      </div>
    </div>
  );
};

export default HomePage;
