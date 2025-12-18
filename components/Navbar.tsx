
import React from 'react';
import logo from '../logo.png';
interface NavbarProps {
  onNavigate: (view: 'home' | 'pricing', sectionId?: string) => void;
  currentView: 'home' | 'pricing';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const handleGetApp = () => {
    window.open('https://play.google.com/store/apps/details?id=com.holavoicemail.app', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-black px-6 py-4 flex justify-between items-center">
      <div 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-3 font-bold text-xl text-black cursor-pointer group"
      >
        <div className="bg-black p-0 rounded-xl border-2 border-black neo-shadow flex items-center justify-center overflow-hidden w-10 h-10 group-hover:-translate-y-1 transition-transform">
          <img 
            src={logo}
            alt="Hola AI Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <span className="tracking-tighter text-2xl font-black">Hola AI</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-6 font-bold text-sm">
        <button onClick={() => onNavigate('home', 'features')} className="hover:text-indigo-600 transition-colors">Features</button>
        <button onClick={() => onNavigate('home', 'testimonials')} className="hover:text-indigo-600 transition-colors">Testimonials</button>
        <button onClick={() => onNavigate('home', 'comparison')} className="hover:text-indigo-600 transition-colors">Comparison</button>
        <button className="hover:text-indigo-600 transition-colors">Blog</button>
        <button 
          onClick={() => onNavigate('pricing')} 
          className={`${currentView === 'pricing' ? 'text-indigo-600' : ''} hover:text-indigo-600 transition-colors`}
        >
          Pricing
        </button>
        <button onClick={() => onNavigate('home', 'faq')} className="hover:text-indigo-600 transition-colors">FAQs</button>
      </div>

      <button 
        onClick={handleGetApp}
        className="bg-black text-white px-6 py-2.5 rounded-full font-bold hover:bg-gray-800 transition-all neo-shadow active:translate-y-1 active:shadow-none text-sm"
      >
        Get App
      </button>
    </nav>
  );
};

export default Navbar;
