
import React from 'react';
import { ViewState } from '../App';
import logo from '../logo.png';
interface FooterProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t-2 border-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-6">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 font-bold text-xl cursor-pointer"
          >
            <div className="bg-black p-0 rounded-xl border-2 border-black neo-shadow flex items-center justify-center overflow-hidden w-10 h-10">
              <img 
                src={logo} 
                alt="Hola AI Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter">Hola AI</span>
          </div>
          <p className="font-bold text-gray-500 max-w-sm leading-relaxed">
            Revolutionizing how the world handles phone calls. Stop being a slave to your ringing phone and let AI do the heavy lifting.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-widest text-gray-400">Links</h4>
          <ul className="space-y-2 font-bold text-sm">
            <li><button onClick={() => onNavigate('home', 'features')} className="hover:text-indigo-600 transition-colors">Features</button></li>
            <li><button onClick={() => onNavigate('home', 'testimonials')} className="hover:text-indigo-600 transition-colors">Testimonials</button></li>
            <li><button onClick={() => onNavigate('home', 'comparison')} className="hover:text-indigo-600 transition-colors">Comparison</button></li>
            <li><button onClick={() => onNavigate('pricing')} className="hover:text-indigo-600 transition-colors">Pricing</button></li>
            <li><button onClick={() => onNavigate('home', 'faq')} className="hover:text-indigo-600 transition-colors">FAQs</button></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-widest text-gray-400">Company</h4>
          <ul className="space-y-2 font-bold text-sm text-left">
            <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-600 transition-colors">About Us</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
          </ul>
        </div>

        {/* Support/Legal Section */}
        <div className="space-y-4">
          <h4 className="font-black text-sm uppercase tracking-widest text-gray-400">Support</h4>
          <ul className="space-y-2 font-bold text-sm text-left">
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-indigo-600 transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('terms')} className="hover:text-indigo-600 transition-colors">Terms of Use</button></li>
            <li><button onClick={() => onNavigate('cancellation')} className="hover:text-indigo-600 transition-colors">Cancellation</button></li>
            <li><button onClick={() => onNavigate('delete')} className="hover:text-indigo-600 transition-colors">Delete My Data</button></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-xs font-black uppercase tracking-widest">
          © 2025 Herpenza Technologies Pvt Ltd. All rights reserved.
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-gray-100 border-2 border-black rounded-lg neo-shadow flex items-center justify-center cursor-pointer hover:bg-[#FFE66D] transition-colors">
            <span className="font-black text-xs">𝕏</span>
          </div>
          <div className="w-8 h-8 bg-gray-100 border-2 border-black rounded-lg neo-shadow flex items-center justify-center cursor-pointer hover:bg-[#FFE66D] transition-colors">
            <span className="font-black text-xs">f</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
