
import React from 'react';
import { Mail, Scale, Clock, ChevronLeft } from 'lucide-react';
import { ViewState } from '../App';

interface TermsOfServiceProps {
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

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white pb-24">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-[#BEE3F8] border-b-4 border-black text-center relative overflow-hidden">
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 flex items-center gap-1 font-black text-xs uppercase hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-4 h-4" /> Back Home
        </button>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white border-4 border-black rounded-full mx-auto mb-8 flex items-center justify-center neo-shadow">
            <Scale className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight text-black">Terms of Use</h1>
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
            Welcome to <span className="text-black font-black">Hola AI</span>, a product by <span className="text-black font-black">Herpenza Technologies Pvt Ltd</span> ("we," "us," or "our"). By accessing or using Hola AI (the "Service"), you agree to these Terms and Conditions ("Terms"). If you do not agree, please do not use the Service.
          </div>

          <Section number="1" title="About Hola AI">
            <p>Hola AI is an AI-powered voicemail assistant that answers calls on your behalf, engages with callers, and provides you with summaries and transcripts. The Service helps users manage missed calls, filter spam, and capture opportunities through intelligent voice interactions.</p>
          </Section>

          <Section number="2" title="Eligibility">
            <p>You must be at least 18 years old to use Hola AI. By using the Service, you represent that you have the legal capacity to enter into this agreement.</p>
          </Section>

          <Section number="3" title="Subscriptions & Billing">
            <ul className="list-disc pl-6 space-y-2">
              <li>Hola AI offers a 7-day free trial to new users.</li>
              <li>After the trial, your chosen plan will automatically renew unless canceled before the trial ends.</li>
              <li>You can select between monthly or yearly subscription options.</li>
              <li>Subscription fees are charged in advance and are non-refundable, except where required by law.</li>
              <li>You may cancel anytime from your account dashboard. Your subscription will remain active until the end of the current billing period.</li>
            </ul>
          </Section>

          <Section number="4" title="Use of Service">
            <ul className="list-disc pl-6 space-y-2">
              <li>Hola AI works by forwarding unanswered calls from your existing number to our smart voicemail system.</li>
              <li>You are responsible for setting up call forwarding correctly and ensuring your carrier supports it.</li>
              <li>Hola AI is available globally, but certain telecommunication or carrier restrictions may apply.</li>
              <li>You agree not to use Hola AI for illegal, fraudulent, or spam activities, or to impersonate any person or business.</li>
            </ul>
          </Section>

          <Section number="5" title="Recordings, Transcripts & Data">
            <p>By using Hola AI, you consent to the recording and processing of calls that are forwarded to our system.</p>
            <p>You own your data and may delete recordings or transcripts anytime from your dashboard or by contacting us. We may retain limited metadata (timestamps, duration, etc.) for billing and diagnostic purposes. Check our <button onClick={() => onNavigate('delete')} className="text-indigo-600 underline">Delete Data</button> page for more info.</p>
          </Section>

          <Section number="6" title="Privacy & Security">
            <p>We take privacy seriously. All recordings and personal information are encrypted in transit and at rest. Please review our <button onClick={() => onNavigate('privacy')} className="text-indigo-600 hover:underline">Privacy Policy</button> to understand how we collect, use, and protect your data.</p>
          </Section>

          <Section number="7" title="AI Conversations & Accuracy">
            <p>Hola AI uses large language models to engage with callers. While we strive for accuracy, we cannot guarantee perfect transcription or summarization. You acknowledge that automated AI responses may occasionally contain errors or omissions.</p>
          </Section>

          <Section number="8" title="No Guarantee of Call Delivery">
            <p>Hola AI depends on third-party telecommunication networks and APIs (e.g., Twilio, AWS). We do not guarantee uninterrupted service, call delivery, or message reception. We are not liable for any missed, failed, or delayed calls, or resulting losses.</p>
          </Section>

          <Section number="9" title="Intellectual Property">
            <p>You may not copy, modify, reverse engineer, or resell any part of Hola AI.</p>
          </Section>

          <Section number="10" title="Payment & Billing">
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments are processed securely via third-party providers.</li>
              <li>Pricing and plans are displayed within the app or website and may be updated from time to time.</li>
              <li>Taxes (if applicable) are charged in accordance with Indian law.</li>
              <li>Failed payments may result in temporary suspension of service.</li>
            </ul>
          </Section>

          <Section number="11" title="Termination">
            <p>You may stop using Hola AI at any time. We reserve the right to suspend or terminate your account if you violate these Terms, use the Service unlawfully, or engage in behavior that disrupts other users or our infrastructure.</p>
          </Section>

          <Section number="12" title="Limitation of Liability">
            <div className="bg-[#FFADAD]/10 border-2 border-black p-6 rounded-2xl">
              <p className="font-black mb-2">To the fullest extent permitted by law:</p>
              <p>Our total liability for any claim shall not exceed the subscription amount paid by you in the 3 months preceding the event.</p>
            </div>
          </Section>

          <Section number="13" title="Indemnification">
            <p>You agree to indemnify and hold Herpenza Technologies Pvt Ltd, its officers, and employees harmless from any claims, losses, or damages resulting from your use of the Service, violation of these Terms, or infringement of third-party rights.</p>
          </Section>

          <Section number="14" title="Changes to Terms">
            <p>We may modify these Terms from time to time. When changes are made, we'll update the date above and notify you via email or in-app notice. Continued use after such changes constitutes your acceptance of the revised Terms.</p>
          </Section>

          <Section number="15" title="Governing Law">
            <p>These Terms are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan, India.</p>
          </Section>

          <Section number="16" title="Contact Us">
            <p>If you have any questions about these Terms, please reach out to us at:</p>
            <div className="flex items-center gap-2 mt-4 text-indigo-600 font-black">
              <Mail className="w-5 h-5" /> hello@holavoicemail.com
            </div>
          </Section>

          <div className="mt-20 pt-12 border-t-4 border-black text-center">
             <div className="flex items-center justify-center gap-3 mb-8">
               <div className="bg-black p-0 rounded-xl border-2 border-black neo-shadow flex items-center justify-center overflow-hidden w-12 h-12">
                 <img 
                   src="logo.png" 
                   alt="Hola AI Logo" 
                   className="w-full h-full object-cover"
                 />
               </div>
               <span className="text-3xl font-black tracking-tighter">Hola AI</span>
             </div>
             <p className="text-gray-500 font-bold mb-4">Hola AI is a registered brand of Herpenza Technologies Pvt Ltd.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
