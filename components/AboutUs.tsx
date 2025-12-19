
import React from 'react';
import { Sparkles, Target, History, Users, Shield, Zap, ChevronLeft, Mic } from 'lucide-react';
import { ViewState } from '../App';

interface AboutUsProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const ValueCard = ({ icon: Icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="flex gap-4 p-4 border-2 border-black rounded-2xl bg-white hover:neo-shadow transition-all">
    <div className="bg-[#FFE66D] w-10 h-10 rounded-lg border-2 border-black flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-black text-lg mb-1">{title}</h4>
      <p className="text-sm font-bold text-gray-600 leading-tight">{text}</p>
    </div>
  </div>
);

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-white pb-24">
      {/* Header Section */}
      <section className="py-20 px-4 md:px-6 bg-[#A5B4FC] border-b-4 border-black text-center relative overflow-hidden">
        <button 
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 flex items-center gap-1 font-black text-xs uppercase hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft className="w-4 h-4" /> Back Home
        </button>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white border-4 border-black rounded-full mx-auto mb-8 flex items-center justify-center neo-shadow">
            <Sparkles className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight text-black">About Us</h1>
          <p className="text-sm md:text-xl font-bold text-gray-800 max-w-xl mx-auto">
            Revolutionizing voicemail with the power of AI.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Welcome section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Welcome to Hola AI Voicemail</h2>
            <div className="bg-gray-50 border-4 border-black p-8 md:p-12 rounded-[32px] neo-shadow">
              <p className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed">
                We're on a mission to transform the way people manage their voicemail. By combining cutting-edge artificial intelligence with intuitive design, we've created a service that answers calls like a human, filters spam automatically, and sends you instant summaries of what matters most.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="relative">
             <div className="absolute -top-6 -left-6 bg-[#A0E8AF] border-2 border-black px-4 py-1 rounded-lg font-black text-xs uppercase rotate-[-3deg] z-10">
                Our Purpose
             </div>
             <div className="bg-white border-4 border-black p-8 md:p-10 rounded-[32px] neo-shadow-sm">
                <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-indigo-600" /> Our Mission
                </h3>
                <p className="text-lg font-bold text-gray-600 leading-relaxed">
                  At <span className="text-black font-black">Hola AI</span>, we believe that voicemail should work for you, not the other way around. Our mission is to eliminate the hassle of traditional voicemail by providing intelligent call answering, automatic spam filtering, and instant summaries—all powered by advanced AI technology.
                </p>
             </div>
          </div>

          {/* What Makes Us Different */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tighter">What Makes Us Different</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mic, title: "Human-like Responses", desc: "Hola AI talks to your callers like a human, understanding why they called and making them feel heard." },
                { icon: Shield, title: "Spam Filtering", desc: "Automatically filters out robocalls and cold pitches before they reach you. No more wasted time on junk calls." },
                { icon: Zap, title: "Instant Summaries", desc: "Get concise, readable summaries of your voicemails delivered instantly to your phone." },
                { icon: Sparkles, title: "Always Available", desc: "Works even when your phone is off or in flight mode. Never miss what matters, no matter where you are." }
              ].map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 rounded-2xl neo-shadow hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-[#BEE3F8] border-2 border-black rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black mb-2">{item.title}</h4>
                  <p className="text-sm font-bold text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-black text-white p-8 md:p-12 rounded-[40px] neo-shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
             <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
               <History className="w-8 h-8 text-[#FFE66D]" /> Our Story
             </h3>
             <div className="space-y-6 font-bold text-indigo-100 leading-relaxed">
               <p>
                 <span className="text-white font-black">Hola AI</span> was founded in 2024 by a team of AI enthusiasts and communication experts who were frustrated with the outdated voicemail systems still in use today. We knew there had to be a better way.
               </p>
               <p>
                 After months of research and development, we created a solution that combines natural language processing, machine learning, and modern cloud infrastructure to deliver a voicemail experience that answers calls like a human and filters spam automatically.
               </p>
               <p>
                 Today, thousands of users trust <span className="text-white font-black">Hola AI</span> to manage their calls, and we're just getting started. We're constantly innovating and improving our service based on user feedback and the latest advances in AI technology.
               </p>
             </div>
          </div>

          {/* Our Values */}
          <div>
            <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
              <Users className="w-8 h-8 text-indigo-600" /> Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ValueCard icon={Zap} title="Innovation First" text="We continuously push the boundaries of what's possible with AI and voice technology." />
              <ValueCard icon={Shield} title="Privacy Matters" text="Your data is your own. We implement strict security measures and never sell your information." />
              <ValueCard icon={Sparkles} title="Customer Success" text="Your success is our success. We're dedicated to providing exceptional support and service." />
              <ValueCard icon={History} title="Continuous Improvement" text="We listen to our users and constantly refine our product to meet evolving needs." />
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center bg-[#FFE66D] border-4 border-black p-12 rounded-[40px] neo-shadow-lg">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Join Thousands of Happy Users</h2>
            <p className="text-lg font-bold text-gray-800 mb-10 max-w-xl mx-auto">
              Experience the future of voicemail today. Sign up for <span className="font-black">Hola AI</span> and discover how AI can transform the way you handle calls.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate('home', 'cta')}
                className="bg-black text-white px-8 py-4 rounded-2xl font-black neo-shadow hover:translate-y-1 hover:shadow-none transition-all"
              >
                Get Hola AI Voicemail
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-black border-2 border-black px-8 py-4 rounded-2xl font-black neo-shadow hover:translate-y-1 hover:shadow-none transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;
