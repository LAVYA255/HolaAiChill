
import React from 'react';
import { Mic, ShieldAlert, FileText, UserPlus, Lock } from 'lucide-react';

const FeatureCard = ({ title, subtext, icon: Icon, color }: { 
  title: string, subtext: string, icon: any, color: string
}) => (
  <div className={`${color} border-4 border-black p-6 md:p-8 rounded-[28px] md:rounded-[32px] neo-shadow-lg flex flex-col h-full hover:-translate-y-1 transition-transform`}>
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 md:border-4 border-black rounded-xl md:rounded-2xl flex items-center justify-center neo-shadow">
        <Icon className="w-6 h-6 md:w-7 md:h-7" />
      </div>
    </div>
    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">{title}</h3>
    <p className="text-sm md:text-base text-gray-800 font-bold leading-relaxed">{subtext}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">AI Superpowers For Your Phone</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard 
            title="Answers like a human" 
            subtext="Hola AI talks to your callers, understands why they called, and makes them feel heard and not ignored."
            icon={Mic}
            color="bg-[#A0E8AF]"
          />
          <FeatureCard 
            title="Filters spam automatically" 
            subtext="No more wasted time on robocalls or cold pitches. Hola AI filters out junk before it reaches you."
            icon={ShieldAlert}
            color="bg-[#FFADAD]"
          />
          <FeatureCard 
            title="Sends instant summaries" 
            subtext="You get a concise summary of who called, why, and how important it is. Actionable text, not long audio."
            icon={FileText}
            color="bg-[#BEE3F8]"
          />
          <FeatureCard 
            title="Multiple personalities" 
            subtext="Personalise how it responds. Choose how it sounds - sharp for work, warm for friends, or witty with spam."
            icon={UserPlus}
            color="bg-[#FFE66D]"
          />
          <FeatureCard 
            title="Private and secure" 
            subtext="All recordings and transcripts are encrypted and stored safely. Your conversations stay yours."
            icon={Lock}
            color="bg-[#D1D5DB]"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
