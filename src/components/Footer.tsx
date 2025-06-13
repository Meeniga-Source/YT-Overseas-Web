import { motion } from 'framer-motion';

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Study Abroad',
    'Work Abroad',
    'Migrate Abroad',
    'Visit Abroad',
    'Invest Abroad',
  ];

  const countries = [
    'Canada',
    'Australia',
    'USA',
    'UK',
    'Germany',
    'New Zealand',
  ];

  const quickLinks = [
    'About Us',
    'Success Stories',
    'Free Assessment',
    'Contact Us',
    'Blog',
    'Career',
  ];

  const offices = [
    {
      city: 'Hyderabad',
      address:
        ' Plot No 503A Vamshi Estates, Pillar Number 1079 Opposite to Sitara Grand Ameerpet Hyderabad 500016',
      email: 'ytoverseas.hyd@gmail.com',
      phone: 'Call +91 6300138602',
    },
    {
      city: 'Narasaraopet',
      address:
        ' 10-7-1A Next to AmeerSports Narasaraopet Andhra Pradesh 522601',
      email: 'ytoverseas.nrt@gmail.com',
      phone: 'Call +91 8885664749',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Immigration News
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest updates on immigration policies, success stories,
              and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <motion.button
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold mb-4">
                  <div className="flex items-center gap-2 text-3xl font-bold">
                    <img
                      src="/src/components/logo.jpeg"
                      alt="Logo"
                      className="w-24 h-24 object-cover rounded-full border-4 border-purple-500 shadow-lg"
                    />
                    <span className="text-red-600">YT</span>
                    <span className="text-white">Overseas</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  World's leading immigration consultancy with 10+ years of
                  experience. We've helped over 10 thousand people achieve their
                  dreams of studying, working, and settling abroad.
                </p>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-red-400">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Countries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-red-400">
                Countries
              </h3>
              <ul className="space-y-3">
                {countries.map((country) => (
                  <li key={country}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {country}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-red-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full bg-gray-900 text-white px-4 py-12">
              <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-8">Our Offices</h3>

                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offices.map((office, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors w-[300px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <MapPin className="h-5 w-5 text-red-400" />
                          <h4 className="font-semibold">{office.city}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {office.address}
                        </p>
                        <div className="mt-3 text-sm text-gray-300">
                          📞 {office.phone} <br />
                          📧 {office.email}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-400" />
              <span className="text-gray-400">+91 6300138602</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-red-400" />
              <span className="text-gray-400">ytoverseas.hyd@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 YT Overseas. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
