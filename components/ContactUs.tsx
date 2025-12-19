
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronLeft, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ViewState } from '../App';

interface ContactUsProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');

    try {
      const response = await fetch("https://holavoicemail.com/api/support-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

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
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 border-4 border-green-500 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-black">Message Sent!</h4>
                  <p className="font-bold text-gray-600">Thanks for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-indigo-600 font-black hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div className="bg-red-50 border-2 border-red-500 p-4 rounded-xl flex items-center gap-3 text-red-700 font-bold animate-in slide-in-from-top duration-300">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm">Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Subject</label>
                    <input 
                      required
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Message</label>
                    <textarea 
                      required
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full bg-white border-2 border-black p-4 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full bg-black text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 neo-shadow hover:translate-y-1 hover:shadow-none transition-all ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'submitting' ? (
                      <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
