import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Removed static Swiper CSS imports for performance

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeOut' },
  }),
};

function useOnScreen(ref: React.RefObject<Element | null>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

const HeroSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(swiperRef, '0px');

  useEffect(() => {
    if (isVisible) {
      import('swiper/css');
      import('swiper/css/navigation');
      import('swiper/css/pagination');
    }
  }, [isVisible]);

  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-24 pb-28">
      {/* SVG swirl background */}
      <svg
        className="absolute top-[-80px] left-[-40px] w-[500px] h-[500px] opacity-50 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="primarySwirl" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#primarySwirl)" />
      </svg>

      <svg
        className="hidden lg:block absolute bottom-[-120px] right-[-150px] w-[400px] h-[400px] opacity-20 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="secondarySwirl" cx="70%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#ffffff" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#secondarySwirl)" />
      </svg>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="relative z-10 lg:col-span-7 text-center lg:text-left will-change-[transform,opacity]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200 shadow-sm mb-1"
              variants={fadeUp}
              custom={0}
            >
              <MapPin size={14} className="text-blue-600" />
              <span>Mobile Detailing in Timmins & Area</span>
            </motion.p>

            <motion.h1
              className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 text-balance mb-0.5"
              variants={fadeUp}
              custom={0.1}
            >
              Mobile Detailing in Timmins — <span className="text-blue-600">Done Properly</span>
            </motion.h1>

            <motion.h2
              className="mt-2 mb-2 text-base sm:text-lg text-gray-600 font-medium text-balance"
              variants={fadeUp}
              custom={0.2}
            >
              Inside & Out, with <span className="text-gray-900 font-semibold">real care</span> and{' '}
              <span className="text-gray-900 font-semibold">honest service</span>.
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base text-gray-700 leading-normal max-w-2xl mx-auto lg:mx-0"
              variants={fadeUp}
              custom={0.3}
            >
              Everyday messes — cleaned properly, with care that protects your vehicle.
            </motion.p>

            <motion.p
              className="mt-4 text-base text-blue-800 font-medium max-w-2xl mx-auto lg:mx-0"
              variants={fadeUp}
              custom={0.4}
            >
              Over 1,400+ details done properly — now mobile in Timmins.
            </motion.p>

            <motion.p
              className="mt-0.5 text-sm text-gray-500 text-center lg:text-left"
              variants={fadeUp}
              custom={0.5}
            >
              Free quote • No payment required to book.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              role="group"
              aria-label="Call to action buttons"
              variants={fadeUp}
              custom={0.6}
            >
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
            </motion.div>
          </motion.div>

          {/* Image Swiper */}
          <div ref={swiperRef} className="mt-12 lg:mt-0 lg:col-span-5" style={{ minHeight: '20rem' }}>
            {isVisible && (
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
                    decoding="async"
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
                    decoding="async"
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
