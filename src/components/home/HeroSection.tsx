// src/components/home/HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react'; // Example icon
// import siteLogo from '../../assets/DetailTrip-05-29-2025.svg'; // Assuming it's in src/assets/

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <MapPin size={14} className="text-blue-600" /> 
              <span>Mobile Detailing in Timmins & Area</span>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Spotless Car Interiors, <br /> Delivered to Your Driveway.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              DetailTrip brings professional interior cleaning to your everyday vehicle right here in Timmins. We use real skill and fair, honest pricing to tackle the salt, fur, and crumbs effectively. Get a truly clean car, conveniently.
            </p>
            <p className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto lg:mx-0">
              Trusted for over 1,400 details in the local community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/booking" // This should lead to your booking page/flow
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 transform hover:scale-105"
              >
                Get Your Honest Quote
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-100 text-gray-700 px-8 py-3.5 rounded-lg text-lg font-semibold shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 border border-gray-300"
              >
                See Our Services
              </Link>
            </div>
             <p className="mt-3 text-xs text-gray-500 text-center lg:text-left sm:ml-1">
                Free quote • No payment required to book.
            </p>
          </div>

          {/* Image Content (remains the same) */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="w-full h-80 sm:h-96 lg:h-[480px] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <img 
                // src={siteLogo} // Use imported image, assuming your logo is an SVG that can be used as a general image here
                                // Or a dedicated hero image: import heroImage from '../../assets/your-hero-image.jpg';
                src="https://placehold.co/800x600/e2e8f0/334155?text=Clean+Everyday+Vehicle+Interior" 
                alt="Clean interior of an everyday vehicle after DetailTrip service"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x600/e2e8f0/334155?text=Image+Coming+Soon')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;