
import React from 'react';
import { Trash2, Mail, Info, ChevronLeft, AlertCircle } from 'lucide-react';
import { ViewState } from '../App';

interface DeleteMyDataProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const DeleteMyData: React.FC<DeleteMyDataProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white pb-24">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-[#FFADAD] border-b-4 border-black text-center relative overflow-hidden">
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 flex items-center gap-1 font-black text-xs uppercase hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-4 h-4" /> Back Home
        </button>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white border-4 border-black rounded-full mx-auto mb-8 flex items-center justify-center neo-shadow">
            <Trash2 className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight text-black">Delete My Data</h1>
          <p className="text-sm md:text-base font-black text-gray-800 flex items-center justify-center gap-2">
            Your right to be forgotten is our priority.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFE66D]/20 border-4 border-black p-8 rounded-[32px] neo-shadow mb-12 flex flex-col md:flex-row items-center gap-6">
             <div className="bg-white p-4 border-2 border-black rounded-2xl shrink-0">
               <AlertCircle className="w-12 h-12 text-red-500" />
             </div>
             <div>
               <h3 className="text-xl font-black mb-2">Important Notice</h3>
               <p className="font-bold text-gray-700 leading-relaxed">
                 Deleting your account is permanent. Once your data is purged, we cannot recover your recordings, transcripts, or call history. 
               </p>
             </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tighter flex items-center gap-3">
                <span className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg">1</span>
                Via the Hola AI App
              </h2>
              <div className="bg-gray-50 border-4 border-black p-8 rounded-[32px] font-bold text-gray-700 leading-relaxed">
                <p className="mb-4">The fastest way to delete your data is directly within the app:</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Open the <span className="text-black">Hola AI</span> app on your mobile device.</li>
                  <li>Navigate to the <span className="text-black font-black">Settings</span> or <span className="text-black font-black">Profile</span> tab.</li>
                  <li>Tap on <span className="text-black font-black">Account Security</span>.</li>
                  <li>Select <span className="text-red-500 font-black underline">Delete Account</span>.</li>
                  <li>Confirm your choice. Your data will be scheduled for immediate deletion.</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tighter flex items-center gap-3">
                <span className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg">2</span>
                Manual Request (Email)
              </h2>
              <div className="bg-white border-4 border-black p-8 rounded-[32px] font-bold text-gray-700 leading-relaxed neo-shadow-sm">
                <p className="mb-4">If you no longer have access to the app, you can request data deletion via email:</p>
                <div className="bg-indigo-50 border-2 border-black p-6 rounded-2xl mb-6">
                  <p className="flex items-center gap-2 text-indigo-700 mb-2">
                    <Mail className="w-5 h-5" /> <strong>hello@holavoicemail.com</strong>
                  </p>
                  <p className="text-sm italic">Subject: Data Deletion Request - [Your Registered Phone Number]</p>
                </div>
                <p>Please include your registered phone number so we can verify your identity. Our team will process your request within 7 business days.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tighter flex items-center gap-3">
                <span className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center text-lg">3</span>
                What Data is Deleted?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#A0E8AF]/20 border-2 border-black p-6 rounded-2xl font-bold">
                  <h4 className="font-black mb-3 underline">Purged Data</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Audio Recordings</li>
                    <li>Call Transcripts</li>
                    <li>AI Summaries</li>
                    <li>Contact Information</li>
                    <li>Call Logs</li>
                  </ul>
                </div>
                <div className="bg-gray-100 border-2 border-black p-6 rounded-2xl font-bold">
                  <h4 className="font-black mb-3 underline">Retained Data</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Anonymized Billing Records (as required by law)</li>
                    <li>Subscription Transaction IDs</li>
                    <li>Encrypted support tickets (for legal defense)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-20 pt-12 border-t-4 border-black text-center">
            <h3 className="font-black text-xl mb-6">Need help with something else?</h3>
            <div className="flex flex-wrap justify-center gap-4">
               <button 
                 onClick={() => onNavigate('home', 'faq')}
                 className="bg-white text-black border-2 border-black px-6 py-2 rounded-xl font-black neo-shadow hover:translate-y-1 hover:shadow-none transition-all"
               >
                 View FAQs
               </button>
               <a 
                 href="mailto:hello@holavoicemail.com"
                 className="bg-black text-white border-2 border-black px-6 py-2 rounded-xl font-black neo-shadow hover:translate-y-1 hover:shadow-none transition-all"
               >
                 Contact Support
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteMyData;
