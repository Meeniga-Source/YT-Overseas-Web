import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, X, Phone, Mail, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Career Counselling',
    'Test Preparation',
    'Application Process',
    'Loan Assistance',
    'Mock Interviews',
    'Visa Guidance',
    'Pre-Departure Orientation',
    'Free-Tranings',
  ];

  const countries = [
    'Canada',
    'Australia',
    'USA',
    'UK',
    'Germany',
    'New Zealand',
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 6300138602</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span> ytoverseas.hyd@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="h-4 w-4" />
            <span>Offices In NRT & HYD</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="text-3xl font-bold">
                <div className="flex items-center gap-2 text-3xl font-bold">
                  <img
                    src="/src/components/logo.jpeg"
                    alt="Logo"
                    className="h-10 w-10 object-contain"
                  />
                  <span className="text-red-600">YT</span>
                  <span className="text-blue-900">Overseas</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {service}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>

              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown('countries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 font-medium transition-colors">
                  <span>Countries</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'countries' && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {countries.map((country) => (
                      <a
                        key={country}
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {country}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>

              <a
                href="#about-us"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors "
              >
                About Us
              </a>

              <a
                href="#success-stories"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Assessment
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Header;
