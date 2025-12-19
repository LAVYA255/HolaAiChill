
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
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import DeleteMyData from './components/DeleteMyData';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Cancellation from './components/Cancellation';

export type ViewState = 'home' | 'pricing' | 'privacy' | 'terms' | 'delete' | 'contact' | 'about' | 'cancellation';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  // Simple scroll-to-id effect when switching back to home
  const navigateTo = (newView: ViewState, sectionId?: string) => {
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
      
      {view === 'home' && (
        <>
          <Hero onNavigate={navigateTo} />
          <HowItWorks onNavigate={navigateTo} />
          <Features />
          <Testimonials />
          <Comparison onNavigate={navigateTo} />
          <FAQ />
          <CTA />
        </>
      )}

      {view === 'pricing' && <Pricing onNavigate={navigateTo} />}
      
      {view === 'privacy' && <PrivacyPolicy onNavigate={navigateTo} />}

      {view === 'terms' && <TermsOfService onNavigate={navigateTo} />}

      {view === 'delete' && <DeleteMyData onNavigate={navigateTo} />}

      {view === 'contact' && <ContactUs onNavigate={navigateTo} />}

      {view === 'about' && <AboutUs onNavigate={navigateTo} />}

      {view === 'cancellation' && <Cancellation onNavigate={navigateTo} />}
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
