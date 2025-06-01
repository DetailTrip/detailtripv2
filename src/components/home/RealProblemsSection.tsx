// src/components/home/RealProblemsSection.tsx
import React from 'react';

const RealProblemsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          What I’ve Cleaned in Over 1,400 Details
        </h3>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Before launching DetailTrip, I detailed over 1,400 vehicles professionally. These are the real-world messes I’ve cleaned again and again — carefully, thoroughly, and without shortcuts.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm sm:text-base text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">🧂</span>
            Salt-stained mats and white crust in footwells
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">🐾</span>
            Pet hair in trunks, creases, and under seats
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">☕</span>
            Spilled drinks on fabric and center consoles
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">🍿</span>
            Food crumbs and sticky cup holders
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">🪵</span>
            Dog hair, sand, and forest debris from rural drives
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 mt-1">🛻</span>
            Work trucks with deep grime and daily buildup
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RealProblemsSection;
