
import React from 'react';
import { Check, Sparkles, Zap, Shield } from 'lucide-react';
import FAQ from './FAQ';

const Pricing: React.FC = () => {
  const handlePricingCTA = () => {
    window.open('https://play.google.com/store/apps/details?id=com.holavoicemail.app', '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* Pricing Hero */}
      <section className="py-20 px-6 bg-[#FFE66D] border-b-4 border-black text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white border-2 border-black px-4 py-1 rounded-full font-black text-xs uppercase mb-6 neo-shadow">
            Start your 7-day free trial
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Simple, Honest Pricing.</h1>
          <p className="text-xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto">
            Experience the magic of smart voicemail. No hidden fees, no commitment during trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Monthly Plan */}
          <div className="bg-white border-4 border-black p-10 rounded-[40px] neo-shadow-lg flex flex-col hover:-translate-y-2 transition-transform">
            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2">Hola AI Plus</h3>
              <p className="text-gray-500 font-bold">Billed monthly</p>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black">$12.99</span>
              <span className="text-gray-400 font-bold">/month</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "AI Answering for all missed calls",
                "Advanced Spam Filtering",
                "Instant Summaries (App & SMS)",
                "Customizable AI Personalities",
                "End-to-End Encryption"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-sm">
                  <div className="bg-[#A0E8AF] border-2 border-black rounded-md p-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handlePricingCTA}
              className="w-full bg-white border-4 border-black py-4 rounded-2xl font-black text-lg neo-shadow hover:bg-gray-50 active:translate-y-1 active:shadow-none transition-all"
            >
              Start Free Trial
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-[#6366f1] text-white border-4 border-black p-10 rounded-[40px] neo-shadow-lg flex flex-col relative overflow-hidden hover:-translate-y-2 transition-transform">
            <div className="absolute top-6 right-6 bg-[#FFE66D] text-black border-2 border-black px-3 py-1 rounded-lg font-black text-[10px] uppercase rotate-6 shadow-md">
              Best Value
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-black mb-2">Annual Pro</h3>
              <p className="text-indigo-200 font-bold">Billed yearly — Save 35%</p>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-black">$99.99</span>
              <span className="text-indigo-200 font-bold">/year</span>
            </div>
            <p className="text-xs font-black text-indigo-300 mb-8">Equivalent to $8.33/month</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Everything in Plus",
                "Priority AI Processing",
                "Early Access to Voice Models",
                "Premium Support",
                "Unlimited Call History"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-sm">
                  <div className="bg-white border-2 border-black rounded-md p-0.5">
                    <Check className="w-4 h-4 text-[#6366f1]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handlePricingCTA}
              className="w-full bg-[#FFE66D] text-black border-4 border-black py-4 rounded-2xl font-black text-lg neo-shadow hover:bg-yellow-300 active:translate-y-1 active:shadow-none transition-all"
            >
              Claim Annual Deal
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid for Trust */}
      <section className="py-20 px-6 bg-gray-50 border-y-4 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Zap className="w-6 h-6" /></div>
             <p className="font-black text-sm">Instant Setup</p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Shield className="w-6 h-6" /></div>
             <p className="font-black text-sm">Safe & Private</p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Sparkles className="w-6 h-6" /></div>
             <p className="font-black text-sm">No Credit Card Required</p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Check className="w-6 h-6" /></div>
             <p className="font-black text-sm">Cancel Anytime</p>
          </div>
        </div>
      </section>

      {/* Shared FAQs specifically for Pricing */}
      <FAQ />
    </div>
  );
};

export default Pricing;
