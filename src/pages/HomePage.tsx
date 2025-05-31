// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStats from '../components/home/TrustStats';
import ServiceHighlights from '../components/home/ServiceHighlights';
import OurWorkGallery from '../components/home/OurWorkGallery';
import HowItWorksSummary from '../components/home/HowItWorksSummary';
import WhyChooseUsHighlights from '../components/home/WhyChooseUsHighlights'; // Import the new component
// Import other section components here as we build them

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustStats />
      <ServiceHighlights />
      <OurWorkGallery />
      <HowItWorksSummary />
      <WhyChooseUsHighlights /> {/* Add the WhyChooseUsHighlights component here */}

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