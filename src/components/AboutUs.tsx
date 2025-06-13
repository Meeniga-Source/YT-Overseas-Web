// src/components/AboutUs.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Globe, number: '50+', label: 'Countries Served', color: 'text-blue-500' },
    { icon: Users, number: '10K+', label: 'Happy Clients', color: 'text-green-500' },
    { icon: Award, number: '25+', label: 'Years Experience', color: 'text-purple-500' },
    { icon: TrendingUp, number: '99%', label: 'Success Rate', color: 'text-red-500' },
  ];

  return (
    <section
      id="about-us"
      className="scroll-mt-24 relative py-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/travel-concept-with-worldwide-landmarks.jpg"
          alt="World landmarks representing global opportunities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-red-600/95"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">YT Overseas</span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg leading-relaxed text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Choose <span className="text-yellow-400 font-semibold">YT OVERSEAS</span> Visa Abroad Education Consultants for your path to
              success! Our dedicated team ensures personalized guidance, simplifying
              the complex process of pursuing advanced studies overseas.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Benefit from our expert advice on university selection, visa processing, and
              seamless transitions. We prioritize your academic goals, offering
              comprehensive support that extends beyond conventional consultancy
              services.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              Trust <span className="text-yellow-400 font-semibold">YT OVERSEAS</span> Visa Abroad Education Consultants for a
              tailored approach, unwavering commitment, and a proven track record in
              shaping successful global academic journeys. 
              <span className="text-red-300 font-semibold"> Your aspirations, our expertise – a winning combination.</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl border border-red-500/30"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(220, 38, 38, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey Today
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-full bg-white/20 mb-4 ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Mission Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-blue-100 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              To bridge the gap between dreams and reality by providing world-class immigration 
              and education consultancy services. We believe every individual deserves the opportunity 
              to explore global horizons and achieve their fullest potential.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;