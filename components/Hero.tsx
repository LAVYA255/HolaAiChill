
import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCTA = () => {
    window.open('https://play.google.com/store/apps/details?id=com.holavoicemail.app', '_blank');
  };

  return (
    <section className="relative pt-20 pb-32 px-6 grid-bg border-b-2 border-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 bg-[#A0E8AF] border-2 border-black px-3 py-1 rounded-full font-bold text-xs uppercase mb-6 neo-shadow">
            <Sparkles className="w-4 h-4" />
            VOTED #1 SMART VOICEMAIL
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 tracking-tighter">
            Skip the spam. <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-indigo-600">Catch every opportunity.</span>
              <span className="absolute inset-x-0 bottom-0 h-36 bg-[#FFE66D] border-2 border-black -z-0 -rotate-1"></span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-800 max-w-xl mb-10 leading-relaxed font-bold">
            Hola AI answers your calls like a human. No dumb recordings, just real conversations. It filters spam and sends you instant summaries of what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCTA}
              className="bg-black text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 neo-shadow hover:bg-gray-800 transition-all active:translate-y-1 active:shadow-none"
            >
              Get Hola AI Voicemail <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 text-xs font-black uppercase text-gray-400 sm:ml-4">
               <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-500" /> Secure</span>
               <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" /> Instant</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative w-full flex justify-center">
          {/* Main Visual: AI Voice Interaction */}
          <div className="relative w-full max-w-md">
            {/* Call UI */}
            <div className="bg-[#1A1A1A] text-white border-4 border-black p-6 rounded-[32px] neo-shadow-lg relative z-20 overflow-hidden">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center font-bold">H</div>
                  <div>
                    <div className="font-bold text-lg">Hola AI</div>
                    <div className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Answering for you</div>
                  </div>
                  <div className="ml-auto w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
               </div>
               
               <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm font-medium border border-white/5 max-w-[85%]">
                    "Hi! This is Sarah's assistant. She's busy. How can I help?"
                  </div>
                  <div className="bg-indigo-600/20 p-4 rounded-2xl rounded-tr-none text-sm font-medium border border-indigo-500/30 ml-auto max-w-[85%]">
                    "I'm calling about the apartment lease signing tomorrow at 10 AM."
                  </div>
               </div>
               
               <div className="mt-8 flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs font-bold text-gray-400">Captured Intent:</div>
                  <div className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">Urgent Meeting</div>
               </div>
            </div>

            {/* Spam Filter Decoration */}
            <div className="absolute top-[-20px] right-[-30px] bg-[#FFADAD] border-4 border-black p-4 rounded-2xl neo-shadow rotate-12 z-10 w-48 text-center">
               <div className="text-2xl mb-1">🚫</div>
               <div className="font-black text-sm uppercase">Spam Blocked</div>
               <div className="text-[10px] font-bold text-gray-700">Telemarketer #0283</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
