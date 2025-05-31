// src/components/home/WhyChooseUsHighlights.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, Users, Smile } from 'lucide-react'; // Example icons

interface BenefitItemProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ IconComponent, title, description }) => (
  <div className="text-center p-4">
    <IconComponent 
      className="mx-auto h-12 w-12 text-blue-500 mb-4" 
      strokeWidth={1.5} 
    />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const WhyChooseUsHighlights: React.FC = () => {
  const benefits: BenefitItemProps[] = [
    {
      IconComponent: Award,
      title: "Proven Expertise",
      description: "With over 1,400 vehicles detailed in Timmins, we bring real experience and skill to every job, focusing on quality interior work."
    },
    {
      IconComponent: MapPin,
      title: "Ultimate Mobile Convenience",
      description: "We come directly to your home or office. No drop-offs, no waiting rooms – just professional detailing at your doorstep."
    },
    {
      IconComponent: Users, // Or a PriceTag icon, Eye icon for transparency
      title: "Honest & Clear Service",
      description: "Transparent pricing by vehicle type and clear photo reviews for heavy messes. No upsells, no surprises – just the clean you expect."
    },
     {
      IconComponent: Smile,
      title: "Respectful & Professional",
      description: "Friendly, reliable service from a skilled tradesperson who treats your vehicle and property with care. We aim for your complete satisfaction."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-900 text-white"> {/* Dark background for contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            The DetailTrip Difference
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Experience mobile detailing in Timmins that's built on trust, skill, and convenience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {benefits.map((benefit) => (
            <BenefitItem
              key={benefit.title}
              IconComponent={benefit.IconComponent}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        <div className="text-center mt-16">
            <Link
              to="/why-us" // Links to the dedicated "Why Us" page
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-md font-semibold shadow-md hover:bg-blue-600 transition-colors"
            >
                Learn More About Why DetailTrip
            </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHighlights;