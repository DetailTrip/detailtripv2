// src/components/layout/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react'; // Using Lucide for icons

// Assuming your logo for the footer might be different or you want to use the one with a tagline
// If it's the same as the header, you can import the same one.
// import footerLogo from '../../assets/DetailTrip-logo-tagline.svg'; // Example if you have a specific footer logo

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <Link to="/" title="DetailTrip Home" className="inline-block">
            {/* USER: Replace this src with your imported logo image from src/assets/ */}
            {/* You might use a different logo version for the footer (e.g., with a tagline) */}
            <img 
              src="https://placehold.co/250x60/FFFFFF/000000?text=DetailTrip+Tagline&font=script" 
              alt="DetailTrip Logo with Tagline" 
              className="h-12 md:h-14 w-auto mx-auto" 
            />
          </Link>
        </div>
        <p className="text-gray-300 text-sm sm:text-base">
          Your Premier Mobile Detailing Service in Timmins, Ontario.
        </p>
        <p className="mt-1 text-gray-400 text-xs sm:text-sm">
          Serving Timmins and surrounding areas.
        </p>
        <div className="mt-6">
          <a 
            href="#" // Replace with your actual Facebook page URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center text-sm"
            aria-label="Find us on Facebook"
          >
            Find us on Facebook <Facebook size={18} className="ml-2" />
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} DetailTrip. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;