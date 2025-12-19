
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetApp = () => {
    onNavigate('home', 'cta');
  };

  const navItem = (label: string, view: ViewState, sectionId?: string) => (
    <button 
      onClick={() => {
        onNavigate(view, sectionId);
        setIsMenuOpen(false);
      }} 
      className={`hover:text-indigo-600 transition-colors py-2 lg:py-0 text-left lg:text-center ${currentView === view && !sectionId ? 'text-indigo-600' : ''}`}
    >
      {label}
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black px-4 md:px-6 py-4 flex justify-between items-center">
      <div 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 md:gap-3 font-bold text-xl text-black cursor-pointer group shrink-0"
      >
        <div className="bg-black p-0 rounded-xl border-2 border-black neo-shadow flex items-center justify-center overflow-hidden w-8 h-8 md:w-10 md:h-10 group-hover:-translate-y-1 transition-transform">
          <img 
            src="logo.png"
            alt="Hola AI Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="tracking-tighter text-xl md:text-2xl font-black">Hola AI</span>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6 font-bold text-sm">
        {navItem('Features', 'home', 'features')}
        {navItem('Testimonials', 'home', 'testimonials')}
        {navItem('Comparison', 'home', 'comparison')}
        {navItem('Pricing', 'pricing')}
        {navItem('FAQs', 'home', 'faq')}
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={handleGetApp}
          className="bg-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold hover:bg-gray-800 transition-all neo-shadow active:translate-y-1 active:shadow-none text-xs md:text-sm"
        >
          Get App
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 border-2 border-black rounded-xl bg-white neo-shadow ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b-4 border-black p-6 flex flex-col gap-4 font-black text-lg animate-in slide-in-from-top lg:hidden">
          {navItem('Features', 'home', 'features')}
          {navItem('Testimonials', 'home', 'testimonials')}
          {navItem('Comparison', 'home', 'comparison')}
          {navItem('Pricing', 'pricing')}
          {navItem('FAQs', 'home', 'faq')}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
