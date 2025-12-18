
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'pricing'>('home');

  // Simple scroll-to-id effect when switching back to home
  const navigateTo = (newView: 'home' | 'pricing', sectionId?: string) => {
    setView(newView);
    if (newView === 'home' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#FFE66D] selection:text-black">
      <Navbar onNavigate={navigateTo} currentView={view} />
      
      {view === 'home' ? (
        <>
          <Hero />
          <HowItWorks />
          <Features />
          <Testimonials />
          <Comparison />
          <FAQ />
          <CTA />
        </>
      ) : (
        <Pricing />
      )}
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
