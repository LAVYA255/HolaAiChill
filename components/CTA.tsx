
import React from 'react';
import { Play } from 'lucide-react';

const CTA: React.FC = () => {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.holavoicemail.app';
  const appStoreUrl = 'https://apps.apple.com/app/6753683585';

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="cta" className="py-32 px-6 bg-[#FFE66D] text-black overflow-hidden relative border-y-4 border-black scroll-mt-20">
      {/* Decorative background element */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-yellow-400 rounded-full border-4 border-black -rotate-12 opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter text-black">
          Never Miss What <br /> Matters Again.
        </h2>
        <p className="text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed text-gray-800">
          Ready to join the AI voicemail revolution? Download Hola AI now and let your smart assistant handle the noise.
        </p>
        
        {/* Dual App Store and Play Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* App Store Button */}
          <button 
            onClick={() => handleDownload(appStoreUrl)}
            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-black group"
          >
            {/* Custom SVG Apple Logo for higher fidelity */}
            <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Download on the</div>
              <div className="text-xl font-black leading-none">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button 
            onClick={() => handleDownload(googlePlayUrl)}
            className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-4 border-black group"
          >
            <Play className="w-8 h-8 fill-current" />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Get it on</div>
              <div className="text-xl font-black leading-none">Google Play</div>
            </div>
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-bold text-xs uppercase tracking-wider text-gray-600">
          <span>7-Day Free Trial</span>
          <span>•</span>
          <span>No Credit Card Required</span>
          <span>•</span>
          <span>Bank-Level Encryption</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
