import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, Globe, CheckCircle } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '1M+', label: 'Dreams Fulfilled' },
    { number: '50+', label: 'Countries Served' },
    { number: '25+', label: 'Years Experience' },
    { number: '99%', label: 'Success Rate' },
  ];

  const benefits = [
    'Expert Immigration Guidance',
    'End-to-End Support',
    'Transparent Process',
    'Proven Track Record',
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block bg-red-600/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            ></motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Your Gateway to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                Global Dreams
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Transform your aspirations into reality with our expert
              immigration services. Study, work, and settle abroad with
              confidence backed by years of excellence.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 text-lg shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                className="aspect-square bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Immigration Success"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-red-600" />
                  <div>
                    <div className="font-bold text-gray-900">Top Rated</div>
                    <div className="text-sm text-gray-600">
                      Immigration Firm
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900">2K+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 bg-white rounded-xl p-4 shadow-2xl"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900">20+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
