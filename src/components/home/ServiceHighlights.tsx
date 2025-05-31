// src/components/home/ServiceHighlights.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Sparkles, ShieldCheck } from 'lucide-react'; // Example icons

interface HighlightItemProps {
  to: string;
  IconComponent: React.ElementType;
  title: string;
  description: string;
  linkLabel: string;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ to, IconComponent, title, description, linkLabel }) => (
  <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center items-center h-full">
    <IconComponent className="h-16 w-16 text-blue-600 mb-6" strokeWidth={1.5} />
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <Link
      to={to}
      className="mt-auto inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
    >
      {linkLabel} &rarr;
    </Link>
  </div>
);

const ServiceHighlights: React.FC = () => {
  const highlights: HighlightItemProps[] = [
    {
      to: "/services#interior", // Links to services page, potentially an anchor
      IconComponent: Car,
      title: "Expert Interior Cleaning",
      description: "From quick tidy-ups to full resets, we rejuvenate your car's interior. Specialized in tackling everyday messes, salt, and pet fur.",
      linkLabel: "View Interior Services"
    },
    {
      to: "/services#exterior", // Links to services page, potentially an anchor
      IconComponent: Sparkles,
      title: "Exterior Decon & Protect",
      description: "Seasonal exterior service (Spring-Fall) to decontaminate your paint and protect it with a quality wax or sealant. Wheels, tires, and jambs included.",
      linkLabel: "View Exterior Service"
    },
    {
      to: "/lp/pet-lovers", // Links to the pet landing page
      IconComponent: ShieldCheck, // Could use a PawPrint icon from react-icons if preferred
      title: "Pet Owners' Choice",
      description: "Specialized pet hair removal and deep cleaning to make your vehicle fresh and fur-free. We understand pets are family!",
      linkLabel: "Pet-Focused Detailing"
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Signature Mobile Detailing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We bring professional detailing to your doorstep in Timmins, focusing on what your vehicle truly needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"> {/* items-stretch for equal height cards if content varies */}
          {highlights.map((highlight) => (
            <HighlightItem
              key={highlight.title}
              to={highlight.to}
              IconComponent={highlight.IconComponent}
              title={highlight.title}
              description={highlight.description}
              linkLabel={highlight.linkLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;