
import React, { useEffect, useMemo, useState } from 'react';
import { Check, Sparkles, Zap, Shield } from 'lucide-react';
import FAQ from './FAQ';
import { ViewState } from '../App';

interface PricingProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const detectIndia = () => {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        const locales = navigator.languages && navigator.languages.length > 0
          ? navigator.languages
          : navigator.language
            ? [navigator.language]
            : [];

        const localeMatch = locales.some((locale) => locale.toLowerCase().includes('-in'));
        const timeZoneMatch = tz.toLowerCase() === 'asia/kolkata';

        setIsIndia(localeMatch || timeZoneMatch);
      } catch (error) {
        setIsIndia(false);
      }
    };

    detectIndia();
  }, []);

  const pricingConfig = useMemo(
    () =>
      isIndia
        ? { locale: 'en-IN', currency: 'INR', monthly: 499, yearly: 4999 }
        : { locale: 'en-US', currency: 'USD', monthly: 9.99, yearly: 99.99 },
    [isIndia],
  );

  const currencyFormatter = useMemo(() => {
    return new Intl.NumberFormat(pricingConfig.locale, {
      style: 'currency',
      currency: pricingConfig.currency,
      minimumFractionDigits: pricingConfig.currency === 'INR' ? 0 : 2,
      maximumFractionDigits: pricingConfig.currency === 'INR' ? 0 : 2,
    });
  }, [pricingConfig]);

  const formatCurrency = (value: number) => currencyFormatter.format(value);

  const yearlyEquivalent = isIndia
    ? Math.round(pricingConfig.yearly / 12)
    : Number((pricingConfig.yearly / 12).toFixed(2));

  const savingsPercentage = Math.max(
    0,
    Math.round(
      ((pricingConfig.monthly * 12 - pricingConfig.yearly) / (pricingConfig.monthly * 12)) * 100,
    ),
  );

  const handlePricingCTA = () => {
    onNavigate('home', 'cta');
  };

  return (
    <div className="animate-fade-in overflow-x-hidden">
      {/* Pricing Hero */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#FFE66D] border-b-4 border-black text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white border-2 border-black px-4 py-1 rounded-full font-black text-[10px] md:text-xs uppercase mb-6 neo-shadow">
            Start your 7-day free trial
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-tight text-black">Simple, Honest Pricing.</h1>
          <p className="text-lg md:text-xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto">
            Experience the magic of smart voicemail. No hidden fees, no commitment during trial.
          </p>
          <p className="text-xs md:text-sm font-bold text-gray-600 max-w-xl mx-auto">
            {isIndia ? "You're seeing prices in INR based on your region." : "You're seeing prices in USD. Rates adjust automatically for customers in India."}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Monthly Plan */}
          <div className="bg-white border-4 border-black p-8 md:p-10 rounded-[32px] md:rounded-[40px] neo-shadow-lg flex flex-col hover:-translate-y-2 transition-transform">
            <div className="mb-6 md:mb-8 text-black">
              <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2">Hola AI Plus</h3>
              <p className="text-gray-500 font-bold text-sm md:text-base">Billed monthly</p>
            </div>
            <div className="flex items-baseline gap-1 mb-6 md:mb-8 text-black">
              <span className="text-4xl md:text-5xl font-black">{formatCurrency(pricingConfig.monthly)}</span>
              <span className="text-gray-400 font-bold text-sm">/month</span>
            </div>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1 text-black">
              {[
                "AI Answering for all missed calls",
                "Advanced Spam Filtering",
                "Instant Summaries (App & SMS)",
                "Customizable AI Personalities",
                "End-to-End Encryption"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 font-bold text-xs md:text-sm">
                  <div className="bg-[#A0E8AF] border-2 border-black rounded-md p-0.5 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handlePricingCTA}
              className="w-full bg-white text-black border-4 border-black py-4 rounded-2xl font-black text-base md:text-lg neo-shadow hover:bg-gray-50 active:translate-y-1 active:shadow-none transition-all"
            >
              Start Free Trial
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-[#6366f1] text-white border-4 border-black p-8 md:p-10 rounded-[32px] md:rounded-[40px] neo-shadow-lg flex flex-col relative overflow-hidden hover:-translate-y-2 transition-transform">
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#FFE66D] text-black border-2 border-black px-2 md:px-3 py-1 rounded-lg font-black text-[8px] md:text-[10px] uppercase rotate-6 shadow-md z-10">
              Best Value
            </div>
            
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2">Annual Pro</h3>
              <p className="text-indigo-200 font-bold text-sm md:text-base">Billed yearly — Save {savingsPercentage}%</p>
            </div>
            <div className="flex items-baseline gap-1 mb-1 md:mb-2">
              <span className="text-4xl md:text-5xl font-black">{formatCurrency(pricingConfig.yearly)}</span>
              <span className="text-indigo-200 font-bold text-sm">/year</span>
            </div>
            <p className="text-[10px] md:text-xs font-black text-indigo-300 mb-8">Equivalent to {formatCurrency(yearlyEquivalent)}/month</p>
            
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
              {[
                "Everything in Plus",
                "Priority AI Processing",
                "Early Access to Voice Models",
                "Premium Support",
                "Unlimited Call History"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 font-bold text-xs md:text-sm">
                  <div className="bg-white border-2 border-black rounded-md p-0.5 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#6366f1]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handlePricingCTA}
              className="w-full bg-[#FFE66D] text-black border-4 border-black py-4 rounded-2xl font-black text-base md:text-lg neo-shadow hover:bg-yellow-300 active:translate-y-1 active:shadow-none transition-all"
            >
              Claim Annual Deal
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid for Trust */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50 border-y-4 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center text-black">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Zap className="w-5 h-5 md:w-6 md:h-6" /></div>
             <p className="font-black text-[10px] md:text-sm">Instant Setup</p>
          </div>
          <div className="flex flex-col items-center text-center text-black">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Shield className="w-5 h-5 md:w-6 md:h-6" /></div>
             <p className="font-black text-[10px] md:text-sm">Safe & Private</p>
          </div>
          <div className="flex flex-col items-center text-center text-black">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Sparkles className="w-5 h-5 md:w-6 md:h-6" /></div>
             <p className="font-black text-[10px] md:text-sm text-center">No CC Required</p>
          </div>
          <div className="flex flex-col items-center text-center text-black">
             <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-black rounded-xl neo-shadow flex items-center justify-center mb-4"><Check className="w-5 h-5 md:w-6 md:h-6" /></div>
             <p className="font-black text-[10px] md:text-sm">Cancel Anytime</p>
          </div>
        </div>
      </section>

      {/* Shared FAQs specifically for Pricing */}
      <FAQ />
    </div>
  );
};

export default Pricing;
