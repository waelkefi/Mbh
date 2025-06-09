
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import KeyFiguresSection from '../components/KeyFiguresSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
import WhyUsSection from '../components/WhyUsSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollAnimator from '../components/ScrollAnimator';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    document.title = 'MBH Modern Irrigation Technique';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KeyFiguresSection />
      <ServicesSection />
      {/* <ClientsSection /> */}
      <WhyUsSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollAnimator />
    </div>
  );
};

export default Index;
