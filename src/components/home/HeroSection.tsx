import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white pt-10 sm:pt-14 lg:pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Location Badge */}
            <p className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200 shadow-sm mb-1">
              <MapPin size={14} className="text-blue-600" />
              <span>Mobile Detailing in Timmins & Area</span>
            </p>

            {/* Headline */}
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 text-balance mb-0.5">
              Mobile Detailing in Timmins — Done Properly
            </h1>

            {/* Subheadline */}
            <h2 className="mt-2 mb-2 text-base sm:text-lg text-gray-600 font-medium text-balance">
              Inside & Out, with real care and honest service.
            </h2>

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base text-gray-700 leading-normal max-w-2xl mx-auto lg:mx-0">
              Everyday messes. Long-lasting protection. Always cleaned with skill — not shortcuts.
            </p>

            {/* Experience-based trust cue */}
            <p className="mt-4 text-base text-blue-800 font-medium max-w-2xl mx-auto lg:mx-0">
              Backed by 1,400+ professional details — now serving Timmins with real care.
            </p>

            {/* CTA Microcopy */}
            <p className="mt-0.5 text-sm text-gray-500 text-center lg:text-left">
              Free quote • No payment required to book.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" role="group" aria-label="Call to action buttons">
              <Link
                to="/booking"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-200 transform hover:scale-105"
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
          </div>

          {/* Image Swiper */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              aria-label="Before and After Gallery"
              className="h-64 sm:h-80 lg:h-[480px] rounded-2xl shadow-xl overflow-hidden relative"
            >
              <SwiperSlide aria-label="Before detailing">
                <img
                  src="/BnA1.jpg"
                  alt="Vehicle interior before DetailTrip service"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.currentTarget.src = 'https://placehold.co/800x600/e2e8f0/334155?text=Before+Image+Missing')
                  }
                />
                <span className="absolute bottom-2 left-2 text-xs bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                  Before
                </span>
              </SwiperSlide>
              <SwiperSlide aria-label="After detailing">
                <img
                  src="/BnA2.jpg"
                  alt="Clean vehicle interior after DetailTrip service"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.currentTarget.src = 'https://placehold.co/800x600/10b981/ffffff?text=After+Image+Clean!')
                  }
                />
                <span className="absolute bottom-2 left-2 text-xs bg-black bg-opacity-60 text-white px-2 py-1 rounded">
                  After
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
