
import React from 'react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const handleUpgrade = () => {
    window.open('https://play.google.com/store/apps/details?id=com.holavoicemail.app', '_blank');
  };

  return (
    <section className="py-24 px-6 bg-[#f8f9fa] border-b-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">When Voicemail Starts Talking, It’s Hola AI!</h2>
          <p className="text-lg font-bold text-gray-600">Old voicemail records everything and filters nothing. We're different.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Old Way */}
          <div className="bg-white border-4 border-black p-8 rounded-[32px] neo-shadow group grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-3 text-red-500 font-black text-sm uppercase mb-6">
              <XCircle className="w-5 h-5" /> Old Voicemail
            </div>
            <h3 className="text-2xl font-black mb-4">Passive and Robotic</h3>
            <p className="text-gray-600 font-bold mb-8">Records every cold pitch, robocall, and telemarketer. You're left guessing who called until you listen through minutes of static audio.</p>
            <div className="bg-gray-100 border-2 border-black p-4 rounded-2xl italic text-gray-400 text-sm">
              "Beep... [Silence for 3 minutes] ... Please leave a message..."
            </div>
          </div>

          {/* Hola Way */}
          <div className="bg-indigo-600 text-white border-4 border-black p-8 rounded-[32px] neo-shadow-lg flex flex-col">
            <div className="flex items-center gap-3 text-white font-black text-sm uppercase mb-6">
              <CheckCircle className="w-5 h-5 text-green-400" /> Hola AI
            </div>
            <h3 className="text-2xl font-black mb-4">Proactive and Human</h3>
            <p className="text-indigo-100 font-bold mb-8">Listens & talks like a human, filtering the noise, understanding intent, and sending you only what’s worth your attention.</p>
            <div className="mt-auto">
               <button 
                 onClick={handleUpgrade}
                 className="w-full bg-white text-black border-2 border-black py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-gray-100 transition-all neo-shadow active:translate-y-1 active:shadow-none"
               >
                 Upgrade to Hola AI Voicemail <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
