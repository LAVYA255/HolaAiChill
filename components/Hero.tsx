
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleCTA = () => {
    onNavigate('home', 'cta');
  };

  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 px-4 md:px-6 grid-bg border-b-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#A0E8AF] border-2 border-black px-3 py-1 rounded-full font-bold text-[10px] md:text-xs uppercase mb-6 neo-shadow">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            VOTED #1 SMART VOICEMAIL
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tighter">
            <span className="block mb-2 text-black">Skip the spam.</span>
            <div className="inline-block bg-[#FFE66D] border-[3px] md:border-4 border-black px-3 md:px-6 py-2 md:py-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <span className="text-indigo-600 block">Catch every opportunity.</span>
            </div>
          </h1>
          
          <p className="text-base md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-medium">
            Hola AI answers your calls like a human. No dumb recordings, just real conversations. It filters spam and sends you instant summaries of what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={handleCTA}
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 neo-shadow hover:bg-gray-800 transition-all active:translate-y-1 active:shadow-none"
            >
              Get Hola AI <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase text-gray-400">
               <span className="flex items-center gap-1 whitespace-nowrap"><ShieldCheck className="w-4 h-4 text-green-500" /> Secure</span>
               <span className="flex items-center gap-1 whitespace-nowrap"><Zap className="w-4 h-4 text-yellow-500" /> Instant</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative w-full flex justify-center mt-8 lg:mt-0">
          {/* Main Visual: AI Voice Interaction */}
          <div className="relative w-full max-w-[320px] md:max-w-md">
            {/* Call UI */}
            <div className="bg-[#1A1A1A] text-white border-4 border-black p-5 md:p-6 rounded-[28px] md:rounded-[32px] neo-shadow-lg relative z-20 overflow-hidden">
               <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center font-bold">H</div>
                  <div>
                    <div className="font-bold text-base md:text-lg">Hola AI</div>
                    <div className="text-[8px] md:text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Answering for you</div>
                  </div>
                  <div className="ml-auto w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
               </div>
               
               <div className="space-y-4">
                  <div className="bg-white/10 p-3 md:p-4 rounded-2xl rounded-tl-none text-xs md:text-sm font-medium border border-white/5 max-w-[90%]">
                    "Hi! This is Sarah's assistant. She's busy. How can I help?"
                  </div>
                  <div className="bg-indigo-600/20 p-3 md:p-4 rounded-2xl rounded-tr-none text-xs md:text-sm font-medium border border-indigo-500/30 ml-auto max-w-[90%] text-right">
                    "I'm calling about the apartment lease signing tomorrow at 10 AM."
                  </div>
               </div>
               
               <div className="mt-6 md:mt-8 flex justify-between items-center bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10">
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Captured Intent:</div>
                  <div className="bg-green-500 text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded font-black uppercase">Urgent Meeting</div>
               </div>
            </div>

            {/* Spam Filter Decoration */}
            <div className="absolute -top-4 -right-4 md:-top-5 md:-right-8 bg-[#FFADAD] border-2 md:border-4 border-black p-2 md:p-4 rounded-xl md:rounded-2xl neo-shadow rotate-12 z-10 w-32 md:w-48 text-center hidden sm:block">
               <div className="text-xl md:text-2xl mb-1">🚫</div>
               <div className="font-black text-[10px] md:text-sm uppercase">Spam Blocked</div>
            </div>

            {/* Background shape for extra depth */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#FFADAD] border-4 border-black rounded-[28px] md:rounded-[32px] -z-10 translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
