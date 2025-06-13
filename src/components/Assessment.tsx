import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, User, GraduationCap, Briefcase, Globe } from 'lucide-react';

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    experience: '',
    country: '',
    service: ''
  });

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Education', icon: GraduationCap },
    { number: 3, title: 'Experience', icon: Briefcase },
    { number: 4, title: 'Preferences', icon: Globe }
  ];

  const countries = ['Canada', 'Australia', 'USA', 'UK', 'Germany', 'New Zealand'];
  const services = ['Study Abroad', 'Work Abroad', 'Migrate Abroad', 'Visit Abroad', 'Invest Abroad'];
  const educationLevels = ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certification'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <select
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select your age range</option>
                <option value="18-25">18-25</option>
                <option value="26-30">26-30</option>
                <option value="31-35">31-35</option>
                <option value="36-40">36-40</option>
                <option value="40+">40+</option>
              </select>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Highest Education Level</label>
              <select
                value={formData.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select your education level</option>
                {educationLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience</label>
              <select
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select your experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-5">4-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Country</label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select preferred country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
              <select
                value={formData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Free Immigration <span className="text-yellow-400">Assessment</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get personalized guidance for your immigration journey. Our experts will evaluate your profile 
            and recommend the best pathway for your goals.
          </p>
        </motion.div>

        {/* Assessment Form */}
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Progress Steps */}
          <div className="bg-gray-50 px-8 py-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <motion.div 
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      currentStep >= step.number 
                        ? 'bg-red-600 border-red-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </motion.div>
                  <div className="ml-3 hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-red-600' : 'text-gray-400'
                    }`}>
                      Step {step.number}
                    </div>
                    <div className={`text-xs ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-red-600' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {steps[currentStep - 1].title}
              </h3>
              <p className="text-gray-600">
                Please provide the following information to continue.
              </p>
            </div>

            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <motion.button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStep === 1 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
                whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
                whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
              >
                Previous
              </motion.button>

              {currentStep < 4 ? (
                <motion.button
                  onClick={nextStep}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              ) : (
                <motion.button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get My Assessment</span>
                  <CheckCircle className="h-4 w-4" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Free Consultation', desc: 'No hidden charges or fees' },
            { title: 'Expert Guidance', desc: 'Certified immigration consultants' },
            { title: 'Personalized Report', desc: 'Detailed assessment within 24 hours' }
          ].map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
              <p className="text-blue-100">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Assessment;