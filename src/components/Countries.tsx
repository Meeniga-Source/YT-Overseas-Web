import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, TrendingUp, Award } from 'lucide-react';

const Countries = () => {
  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      description:
        'Experience world-class education and quality of life in the land of opportunities.',
      highlights: [
        'Student Visa',
        'Visitor Visa',
        'Work Permit',
        'Dependent Visa',
        'Tourist Visa',
      ],
      stats: { immigrants: '1K+', programs: '60+', success: '96%' },
      image:
        'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      description:
        'Discover endless possibilities in Australia with its robust economy and lifestyle.',
      stats: { immigrants: '1K+', programs: '60+', success: '96%' },
      highlights: [
        'Student Visa',
        'Visitor Visa',
        'Work Permit',
        'Dependent Visa',
        'Tourist Visa',
      ],
      image:
        'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      description:
        'Pursue the American Dream with diverse opportunities across all sectors.',
      stats: { immigrants: '2K+', programs: '50+', success: '94%' },
      highlights: [
        'Student Visa',
        'Visitor Visa',
        'Work Permit',
        'Dependent Visa',
        'Tourist Visa',
      ],
      image:
        'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      description:
        'Access world-renowned education and career opportunities in the UK.',
      stats: { immigrants: '5K+', programs: '40+', success: '95%' },
      highlights: [
        'Student Visa',
        'Visitor Visa',
        'Work Permit',
        'Dependent Visa',
        'Tourist Visa',
      ],
      image:
        'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      description:
        "Join Europe's economic powerhouse with excellent work-life balance.",
      stats: { immigrants: '2K+', programs: '35+', success: '93%' },
      highlights: [
        'Student Visa',
        'Visitor Visa',
        'Work Permit',
        'Dependent Visa',
        'Tourist Visa',
      ],
      image:
        'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      description:
        'Experience pristine nature and progressive society in New Zealand.',
      stats: { immigrants: '1K+', programs: '25+', success: '97%' },
      highlights: [
        'Skilled Migrant',
        'Work to Residence',
        'Student Visas',
        'Investor Visas',
      ],
      image:
        'https://images.pexels.com/photos/552779/pexels-photo-552779.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-red-600">Destination</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore immigration opportunities across the world's most
            sought-after destinations. Each country offers unique pathways to
            achieve your dreams.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Country Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${country.color} opacity-80`}
                ></div>

                {/* Country Info Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{country.flag}</div>
                    <h3 className="text-2xl font-bold">{country.name}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {country.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">
                      {country.stats.immigrants}
                    </div>
                    <div className="text-xs text-gray-500">Immigrants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {country.stats.programs}
                    </div>
                    <div className="text-xs text-gray-500">Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {country.stats.success}
                    </div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {country.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-gray-100 hover:bg-red-600 text-gray-700 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore {country.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-900 to-red-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-blue-100">Countries Served</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Users className="h-8 w-8 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold mb-1">5K+</div>
              <div className="text-blue-100">Success Stories</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-orange-400" />
              <div className="text-3xl font-bold mb-1">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Award className="h-8 w-8 mx-auto mb-3 text-purple-400" />
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;
