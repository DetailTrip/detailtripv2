// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Using Lucide icons for menu toggle

// It's good practice to define types for your navigation links
interface NavLinkItem {
  to: string;
  label: string;
  external?: boolean; // In case you have external links later
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Define your navigation links here
  // The 'to' paths will match the routes you set up in App.tsx
  const navLinks: NavLinkItem[] = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/process', label: 'How It Works' },
    { to: '/why-us', label: 'Why Us' },
    // Example for the pet landing page, if you want it in main nav (usually not for landing pages)
    // { to: '/lp/pet-lovers', label: 'Pet Owners' } 
  ];

  const isActive = (path: string) => {
    // For the homepage, we want an exact match. For others, startsWith might be okay if you have sub-routes.
    return path === '/' ? location.pathname === path : location.pathname.startsWith(path) && path.length > 1;
  };
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" title="DetailTrip Home">
              {/* USER: Replace this src with your imported logo image from src/assets/ */}
              <img 
                src="/DetailTrip-05-29-2025.svg" 
                alt="DetailTrip Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${isActive(link.to) 
                    ? 'text-blue-700 font-semibold bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center">
            <Link
              to="/booking" // This will be a dedicated booking page/flow
              className="hidden md:inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
            >
              Book Now
            </Link>
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="md:hidden ml-3 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200 absolute w-full bg-white shadow-lg z-40`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                ${isActive(link.to) 
                  ? 'bg-blue-100 text-blue-700 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="block w-full text-left bg-blue-600 text-white mt-2 px-3 py-3 rounded-md text-base font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;