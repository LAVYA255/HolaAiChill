
import React from 'react';
import { XCircle, CreditCard, Calendar, ChevronLeft, HelpCircle, RefreshCw } from 'lucide-react';
import { ViewState } from '../App';

interface CancellationProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const PolicySection = ({ title, children, icon: Icon }: { title: string; children: React.ReactNode; icon: any }) => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 tracking-tighter">
      <div className="bg-black text-white p-2 rounded-lg border-2 border-black">
        <Icon className="w-5 h-5" />
      </div>
      {title}
    </h2>
    <div className="space-y-4 text-gray-700 font-bold leading-relaxed ml-0 md:ml-12">
      {children}
    </div>
  </div>
);

const Cancellation: React.FC<CancellationProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white pb-24">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-[#FFD6A5] border-b-4 border-black text-center relative overflow-hidden">
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 flex items-center gap-1 font-black text-xs uppercase hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-4 h-4" /> Back Home
        </button>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white border-4 border-black rounded-full mx-auto mb-8 flex items-center justify-center neo-shadow">
            <XCircle className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight text-black">Cancellation Policy</h1>
          <p className="text-sm md:text-xl font-bold text-gray-800 max-w-xl mx-auto">
            We're sad to see you go, but we make leaving just as easy as joining.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Summary Box */}
          <div className="bg-white border-4 border-black p-8 rounded-[32px] neo-shadow mb-16 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-[#A0E8AF] p-6 border-2 border-black rounded-2xl rotate-3">
              <span className="text-4xl">🕊️</span>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2 tracking-tight">Zero-Hassle Cancellation</h3>
              <p className="font-bold text-gray-600 leading-relaxed">
                No complex forms, no hidden phone calls to retention agents. You can stop your subscription at any time with a few taps in the app.
              </p>
            </div>
          </div>

          <PolicySection title="7-Day Free Trial" icon={Calendar}>
            <p>New users are eligible for a 7-day free trial. If you cancel at any point before the 7th day ends (23:59 UTC), your payment method will not be charged.</p>
            <p className="text-sm italic">Note: Any features used during the trial remain free, and no partial usage fee is applied.</p>
          </PolicySection>

          <PolicySection title="How to Cancel" icon={HelpCircle}>
            <p>You can cancel your subscription through two primary methods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-black font-black">In-App:</span> Go to Settings → Subscription → Manage → Subscription → Cancel. Follow the prompts to confirm.</li>
              <li><span className="text-black font-black">App Store/Play Store:</span> If you subscribed via a mobile store, you must manage and cancel the subscription through your device's native subscription manager (Apple ID or Google Account settings).</li>
              <li><span className="text-black font-black">Email:</span> If you experience technical issues, email <span className="text-indigo-600">hello@holavoicemail.com</span> with "CANCELLATION" in the subject line from your registered email address.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Billing & Refunds" icon={CreditCard}>
            <p>Hola AI is a prepaid service. When you cancel, you are canceling the <span className="text-black font-black">next</span> scheduled payment.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="text-black font-black">Access:</span> You will retain full access to all Hola AI Plus features until the end of your current billing cycle (monthly or annual).</li>
              <li><span className="text-black font-black">No Partial Refunds:</span> We do not offer prorated refunds for partial months or years of service once a payment has been processed.</li>
              <li><span className="text-black font-black">Annual Plans:</span> Annual plans are billed upfront at a discount. Cancellation stops the renewal for the following year.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Post-Cancellation" icon={RefreshCw}>
            <p>Upon the expiration of your final billing period:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your account will be downgraded to the Free tier (if available) or deactivated.</li>
              <li>Recordings and transcripts may be kept for a grace period of 30 days before being permanently deleted to allow for reactivation.</li>
              <li>To immediately purge all data, please follow the steps on our <button onClick={() => onNavigate('delete')} className="text-indigo-600 underline">Delete My Data</button> page.</li>
            </ul>
          </PolicySection>

          {/* Re-activation CTA */}
          <div className="mt-20 p-10 bg-indigo-600 text-white rounded-[40px] border-4 border-black neo-shadow-lg text-center">
            <h3 className="text-3xl font-black mb-4 tracking-tighter">Changing your mind?</h3>
            <p className="font-bold text-indigo-100 mb-8 max-w-lg mx-auto leading-relaxed">
              If you accidentally cancelled or want to resume your smart voicemail service, you can reactivate instantly from your dashboard.
            </p>
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-[#FFE66D] text-black px-8 py-4 rounded-2xl font-black neo-shadow hover:translate-y-1 hover:shadow-none transition-all"
            >
              Back to Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cancellation;
