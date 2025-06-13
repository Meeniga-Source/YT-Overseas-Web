import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';
import Assessment from './components/Assessment';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <EnquiryModal /> {/* Auto popup */}
      <Header />
      <Hero />
      <Services />
      <Countries />
      <AboutUs />
      <Testimonials />
      <Assessment />
      <Footer />
    </div>
  );
}

export default App;
