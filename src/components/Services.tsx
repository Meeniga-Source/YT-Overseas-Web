import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Home,
  Plane,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Study Abroad',
      description:
        'Pursue your education dreams in top universities worldwide with our comprehensive guidance.',
      features: [
        'University Selection',
        'Application Support',
        'Visa Assistance',
        'Scholarship Guidance',
        'Loan Assistance',
        'Part-time Job Assistance',
      ],
      color: 'from-blue-500 to-blue-600',
      image:
        'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Briefcase,
      title: 'Work Abroad',
      description:
        'Advance your career internationally with our expert work visa and job placement services.',
      features: [
        'Job Search Support',
        'Work Visa Processing',
        'Resume Enhancement',
        'Interview Preparation',
      ],
      color: 'from-green-500 to-green-600',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },

    {
      icon: Plane,
      title: 'Visit Abroad',
      description:
        'Explore the world with our tourist and visitor visa services for seamless travel.',
      features: [
        'Tourist Visas',
        'Business Visas',
        'Transit Visas',
        'Travel Insurance',
      ],
      color: 'from-orange-500 to-orange-600',
      image:
        'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Our <span className="text-red-600">Immigration Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your unique goals
            and aspirations. Let us guide you through every step of your
            international journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative p-8">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="flex items-center space-x-2 text-red-600 font-semibold group-hover:text-red-700 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-200 rounded-2xl transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
