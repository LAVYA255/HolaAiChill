
import React from 'react';
import { Mail, Shield, Clock, ChevronLeft } from 'lucide-react';
import { ViewState } from '../App';

interface PrivacyPolicyProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Section = ({ title, children, number }: { title: string; children: React.ReactNode; number?: string }) => (
  <div className="mb-12">
    <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-baseline gap-3 tracking-tighter">
      {number && <span className="text-indigo-600 text-xl">{number}.</span>}
      {title}
    </h2>
    <div className="space-y-4 text-gray-700 font-bold leading-relaxed">
      {children}
    </div>
  </div>
);

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white pb-24">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-[#A0E8AF] border-b-4 border-black text-center relative overflow-hidden">
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 flex items-center gap-1 font-black text-xs uppercase hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-4 h-4" /> Back Home
        </button>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white border-4 border-black rounded-full mx-auto mb-8 flex items-center justify-center neo-shadow">
            <Shield className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight text-black">Privacy Policy</h1>
          <p className="text-sm md:text-base font-black text-gray-800 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> Last updated: October 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Box */}
          <div className="bg-gray-50 border-4 border-black p-8 rounded-[32px] neo-shadow mb-16 italic font-bold text-gray-600 leading-relaxed">
            This Privacy Policy explains how <span className="text-black">Herpenza Technologies Pvt Ltd</span> ("we," "us," or "our") collects, uses, and protects your information when you use <span className="text-black">Hola AI</span>, our AI-powered voicemail assistant. By using Hola AI, you agree to this Policy. If you do not agree, please discontinue use of the Service.
          </div>

          <Section number="1" title="Who We Are">
            <div className="bg-white border-4 border-black p-6 rounded-2xl neo-shadow-sm mb-6">
              <p className="font-black text-lg mb-2">Herpenza Technologies Pvt Ltd</p>
              <p className="text-gray-500 text-sm mb-4">19 Shankar Vihar Vistar, Charan Nadi 2, Murlipura, Jaipur — 302039, India</p>
              <div className="space-y-2">
                <a href="mailto:hello@holavoicemail.com" className="flex items-center gap-2 text-indigo-600 hover:underline">
                  <Mail className="w-4 h-4" /> hello@holavoicemail.com
                </a>
                <a href="mailto:rahul@holavoicemail.com" className="flex items-center gap-2 text-indigo-600 hover:underline">
                  <Mail className="w-4 h-4" /> rahul@holavoicemail.com
                </a>
              </div>
            </div>
            <p>Hola AI turns missed calls into conversations. We record, transcribe, and summarize calls so you never miss what matters.</p>
          </Section>

          <Section number="2" title="What We Collect">
            <p className="mb-4">We collect only the data necessary to deliver and improve the Service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-black rounded-xl bg-[#FFE66D]/10">
                <h4 className="font-black mb-1">a. Account Information</h4>
                <p className="text-sm text-gray-500 font-bold">Name, email address, phone number, password, subscription and billing details.</p>
              </div>
              <div className="p-4 border-2 border-black rounded-xl bg-[#A0E8AF]/10">
                <h4 className="font-black mb-1">b. Call & Voicemail Data</h4>
                <p className="text-sm text-gray-500 font-bold">Caller numbers, timestamps, durations, recordings of forwarded calls, AI-generated transcripts, summaries, and optional labels.</p>
              </div>
              <div className="p-4 border-2 border-black rounded-xl bg-[#BEE3F8]/10">
                <h4 className="font-black mb-1">c. Device & Usage Data</h4>
                <p className="text-sm text-gray-500 font-bold">Device type, OS version, browser type, IP address, time zone, diagnostic logs, and analytics data.</p>
              </div>
              <div className="p-4 border-2 border-black rounded-xl bg-[#FFADAD]/10">
                <h4 className="font-black mb-1">d. Tracking & Analytics</h4>
                <p className="text-sm text-gray-500 font-bold">Privacy-respecting tools (GA4, etc.). You can opt-out via settings. We do not use interest-based advertising.</p>
              </div>
            </div>
          </Section>

          <Section number="3" title="How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain Hola AI's call-handling, transcription, and summary features.</li>
              <li>Send call summaries, alerts, and updates by email or SMS.</li>
              <li>Detect spam and improve AI accuracy.</li>
              <li>Support billing, troubleshooting, and customer service.</li>
              <li>Comply with legal obligations and ensure security.</li>
            </ul>
          </Section>

          <Section number="5" title="Messaging & Notifications">
            <p>We use messaging providers to deliver summaries and alerts. We share only the data required for delivery. No mobile information is shared with third parties for marketing purposes. Text-messaging opt-in data and consent are never shared.</p>
          </Section>

          <Section number="6" title="AI Processing & Sub-processors">
            <p className="mb-4">Hola AI uses trusted AI and cloud providers to process data securely, including but not limited to:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 p-3 border-2 border-black rounded-xl bg-gray-50">
                <span className="font-black w-24">OpenAI</span>
                <span className="text-gray-500 text-sm italic">— natural-language processing</span>
              </li>
              <li className="flex items-center gap-3 p-3 border-2 border-black rounded-xl bg-gray-50">
                <span className="font-black w-24">ElevenLabs</span>
                <span className="text-gray-500 text-sm italic">— speech synthesis and transcription</span>
              </li>
              <li className="flex items-center gap-3 p-3 border-2 border-black rounded-xl bg-gray-50">
                <span className="font-black w-24">AWS (US)</span>
                <span className="text-gray-500 text-sm italic">— encrypted hosting and storage</span>
              </li>
            </ul>
          </Section>

          <Section number="8" title="Call Recording Consent & Caller Notice">
            <p>Hola AI records forwarded calls to generate transcripts and summaries. Call-recording laws differ by jurisdiction. You are responsible for ensuring required consent from callers. Hola AI provides tools such as optional pre-call disclosure greetings to help you comply.</p>
          </Section>

          <Section number="9" title="Data Storage & Security">
            <ul className="list-disc pl-6 space-y-2">
              <li>Stored on AWS servers in the United States.</li>
              <li>Encrypted in transit and at rest (TLS + AES-256).</li>
              <li>Access restricted to authorized personnel.</li>
            </ul>
            <p className="mt-4 italic">If a data incident occurs, we will notify affected users and regulators in accordance with law.</p>
          </Section>

          <Section number="11" title="International Transfers & Safeguards">
            <p>Data may be processed in the United States and India. Where required, we apply Standard Contractual Clauses (SCCs) and other adequate safeguards to protect your information.</p>
          </Section>

          <Section number="13" title="User Rights">
            <p className="mb-2">You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, rectify, or delete your data.</li>
              <li>Export your data in a portable format.</li>
              <li>Withdraw consent for processing.</li>
              <li>Lodge a complaint with your data-protection authority.</li>
            </ul>
          </Section>

          <Section number="15" title="Grievance Officer (India)">
            <div className="bg-[#BEE3F8] border-4 border-black p-6 rounded-2xl neo-shadow-sm">
              <p className="font-black mb-1">Herpenza Technologies Pvt Ltd</p>
              <p className="text-indigo-600 font-black">hello@holavoicemail.com</p>
              <p className="text-xs mt-4 text-gray-500">We will acknowledge requests within 7 business days and endeavour to resolve them within 30 days.</p>
            </div>
          </Section>
          
          <div className="mt-20 pt-12 border-t-4 border-black text-center">
            <p className="font-black text-lg mb-8 tracking-tighter">Ready to take back control of your phone calls?</p>
            <button 
              onClick={() => onNavigate('home', 'cta')}
              className="bg-black text-white px-8 py-4 rounded-2xl font-black neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
