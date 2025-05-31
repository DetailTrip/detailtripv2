// src/components/home/OurWorkGallery.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface GalleryItemProps {
  src: string;
  alt: string;
  description: string; // Short description for the type of work shown
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, description }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x450/e2e8f0/334155?text=Image+Error')}
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end justify-center p-4">
      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>
  </div>
);

const OurWorkGallery: React.FC = () => {
  const galleryItems: GalleryItemProps[] = [
    {
      src: "https://placehold.co/600x450/e0e7ff/3730a3?text=Spotless+SUV+Interior",
      alt: "Spotless SUV interior after detailing",
      description: "Full Interior Reset - SUV"
    },
    {
      src: "https://placehold.co/600x450/dbeafe/1e40af?text=Clean+Sedan+Dashboard",
      alt: "Clean sedan dashboard and console",
      description: "Quick Interior Clean - Sedan"
    },
    {
      src: "https://placehold.co/600x450/ccfbf1/047857?text=Shining+Exterior+Paint",
      alt: "Shining car exterior after decon and protect service",
      description: "Decon + Protect - Exterior"
    },
    {
      src: "https://placehold.co/600x450/fef3c7/b45309?text=Pet+Hair+Free+Seats",
      alt: "Car seats free of pet hair",
      description: "Interior with Pet Hair Removal"
    },
    {
      src: "https://placehold.co/600x450/fce7f3/be185d?text=Clean+Pickup+Truck+Cabin",
      alt: "Immaculate pickup truck cabin",
      description: "Full Interior Reset - Pickup"
    },
    {
      src: "https://placehold.co/600x450/e5e7eb/1f2937?text=Detailed+Door+Jambs",
      alt: "Clean and detailed car door jambs",
      description: "Attention to Detail"
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50"> {/* Alternating background color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Transformations: A Glimpse of Our Craft
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            While these are representative images, they showcase the level of clean and care we bring to every vehicle. We look forward to adding your DetailTrip transformation here soon!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.alt} // Using alt for key as src might change but alt should be unique description
              src={item.src}
              alt={item.alt}
              description={item.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link
              to="/services" // Or a dedicated gallery page if you create one
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-md font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
                Explore All Services
            </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWorkGallery;