import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai → Toronto',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'YT Overseas made my Canadian PR dream come true! Their expert guidance through the Express Entry process was invaluable. I received my PR within 8 months.',
      service: 'Canada PR',
      flag: '🇨🇦',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore → Sydney',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Exceptional service for my Australia migration. The team handled everything professionally, from skills assessment to visa lodgment. Highly recommended!',
      service: 'Australia PR',
      flag: '🇦🇺',
    },
    {
      name: 'Sarah Johnson',
      location: 'Delhi → London',
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Got my UK work visa through YT Overseas. Their knowledge of immigration laws and attention to detail is outstanding. Thank you for making my dreams reality!',
      service: 'UK Work Visa',
      flag: '🇬🇧',
    },
    {
      name: 'Michael Chen',
      location: 'Chennai → New York',
      image:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'YT Overseas helped me secure my H-1B visa and later my Green Card. Their expertise in US immigration is unmatched. Grateful for their support throughout.',
      service: 'USA Green Card',
      flag: '🇺🇸',
    },
    {
      name: 'Emma Wilson',
      location: 'Hyderabad → Berlin',
      image:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Moved to Germany for work with YT Overseas assistance. They made the complex process simple and stress-free. Excellent communication throughout the journey.',
      service: 'Germany Work Visa',
      flag: '🇩🇪',
    },
    {
      name: 'David Martinez',
      location: 'Pune → Auckland',
      image:
        'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'New Zealand residency achieved with YT Overseas! Their personalized approach and deep knowledge of NZ immigration policies made all the difference.',
      service: 'New Zealand PR',
      flag: '🇳🇿',
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
            Success <span className="text-red-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who achieved their immigration dreams
            with YT Overseas. Join thousands of satisfied clients who trusted us
            with their future.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 right-6 text-red-200"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Quote className="h-8 w-8" />
              </motion.div>

              {/* Profile */}
              <div className="flex items-center mb-6 relative z-10">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm flex items-center">
                    {testimonial.location}{' '}
                    <span className="ml-2 text-lg">{testimonial.flag}</span>
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Service Badge */}
              <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mb-4 relative z-10">
                {testimonial.service}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed relative z-10 mb-4">
                "{testimonial.text}"
              </p>

              {/* Hover Effect */}
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
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied clients who achieved their immigration
              dreams with YT Overseas.
            </p>
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
