
import React from 'react';
import { Mail, Phone, MapPin, Clock, ChevronLeft, Send } from 'lucide-react';
import { ViewState } from '../App';

interface ContactUsProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white pb-24">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-[#D1D5DB] border-b-4 border-black text-center relative overflow-hidden">
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 flex items-center gap-1 font-black text-xs uppercase hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-4 h-4" /> Back Home
        </button>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white border-4 border-black rounded-full mx-auto mb-8 flex items-center justify-center neo-shadow">
            <Mail className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight text-black">Contact Us</h1>
          <p className="text-sm md:text-lg font-bold text-gray-800 flex items-center justify-center gap-2 max-w-xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white border-4 border-black p-8 rounded-[32px] neo-shadow flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#BEE3F8] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-2">Email Us</h3>
                <p className="font-bold text-indigo-600 mb-1">hello@holavoicemail.com</p>
                <p className="text-sm text-gray-500 font-bold">For Hola AI support and inquiries</p>
              </div>

              <div className="bg-white border-4 border-black p-8 rounded-[32px] neo-shadow flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#FFE66D] border-2 border-black rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-2">Call Us</h3>
                <p className="font-bold text-black mb-1">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500 font-bold">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div className="bg-indigo-600 text-white border-4 border-black p-8 rounded-[32px] neo-shadow flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/20 border-2 border-white rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black mb-2">Response Time</h3>
                <p className="font-black text-xl mb-1">Within 24 hours</p>
                <p className="text-sm text-indigo-200 font-bold">Average response time</p>
              </div>

              <div className="bg-gray-50 border-4 border-black p-8 rounded-[32px] flex items-center gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black">Our Office</h4>
                  <p className="text-sm text-gray-600 font-bold">123 AI Street, Tech Valley, CA 94000</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-4 border-black p-8 md:p-10 rounded-[32px] neo-shadow-lg">
              <h3 className="text-3xl font-black mb-8 tracking-tighter">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="What is this regarding?"
                    className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 neo-shadow hover:translate-y-1 hover:shadow-none transition-all">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
