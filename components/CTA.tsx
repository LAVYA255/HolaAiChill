
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const handleStartTrial = () => {
    window.open('https://play.google.com/store/apps/details?id=com.holavoicemail.app', '_blank');
  };

  return (
    <section className="py-32 px-6 bg-[#FFE66D] text-black overflow-hidden relative border-y-4 border-black">
      {/* Decorative background element updated to a darker yellow/orange for subtle depth */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-yellow-400 rounded-full border-4 border-black -rotate-12 opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Never miss what <br /> matters again.
        </h2>
        <p className="text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed text-gray-800">
          Ready to join the AI voicemail revolution? Get started for free and see how a smart assistant can transform your daily calls.
        </p>
        
        {/* Swapped button to black for maximum impact on yellow background */}
        <button 
          onClick={handleStartTrial}
          className="bg-black text-white px-12 py-5 rounded-2xl text-2xl font-black neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-black mb-8 flex items-center gap-4 mx-auto"
        >
          Start 7-Day Free Trial <ArrowRight className="w-6 h-6" />
        </button>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-xs uppercase tracking-wider text-gray-600">
          <span>7-Day Free Trial</span>
          <span>•</span>
          <span>No Credit Card</span>
          <span>•</span>
          <span>Encrypted</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
