import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Sparkles } from 'lucide-react';

interface HighlightItemProps {
  to: string;
  IconComponent: React.ElementType;
  title: string;
  description: string;
  linkLabel: string;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ to, IconComponent, title, description, linkLabel }) => (
  <article
    className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between text-center items-center h-full"
    aria-label={title}
  >
    <IconComponent className="h-16 w-16 text-blue-600 mb-6" strokeWidth={1.5} />
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <Link
      to={to}
      className="mt-auto inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      aria-label={linkLabel}
    >
      {linkLabel} &rarr;
    </Link>
  </article>
);

const ServiceHighlights: React.FC = () => {
  const highlights: HighlightItemProps[] = [
    {
      to: "/services#interior",
      IconComponent: Car,
      title: "Expert Interior Cleaning",
      description: "From light refreshes to full resets, we clean with care — tackling salt, crumbs, and pet fur safely.",
      linkLabel: "View Interior Services"
    },
    {
      to: "/services#exterior",
      IconComponent: Sparkles,
      title: "Exterior Decon & Protect",
      description: "A full exterior service that removes stuck-on grime and adds protection with wax or sealant. Includes wheels, tires, and door jambs.",
      linkLabel: "View Exterior Service"
    }
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
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
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
