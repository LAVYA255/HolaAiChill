
import React from 'react';
import { Mic, ShieldAlert, FileText, UserPlus, Lock } from 'lucide-react';

const FeatureCard = ({ title, subtext, icon: Icon, color, emoji }: { 
  title: string, subtext: string, icon: any, color: string, emoji: string 
}) => (
  <div className={`${color} border-4 border-black p-8 rounded-[32px] neo-shadow-lg flex flex-col h-full`}>
    <div className="flex justify-between items-start mb-6">
      <div className="w-14 h-14 bg-white border-4 border-black rounded-2xl flex items-center justify-center neo-shadow">
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-4xl">{emoji}</span>
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-gray-800 font-bold leading-relaxed">{subtext}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">AI Superpowers for your Phone</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Answers like a human" 
            subtext="Hola AI talks to your callers, understands why they called, and makes them feel heard and not ignored."
            icon={Mic}
            color="bg-[#A0E8AF]"
            emoji="🎙️"
          />
          <FeatureCard 
            title="Filters spam automatically" 
            subtext="No more wasted time on robocalls or cold pitches. Hola AI filters out junk before it reaches you."
            icon={ShieldAlert}
            color="bg-[#FFADAD]"
            emoji="🚫"
          />
          <FeatureCard 
            title="Sends instant summaries" 
            subtext="You get a concise summary of who called, why, and how important it is. Actionable text, not long audio."
            icon={FileText}
            color="bg-[#BEE3F8]"
            emoji="💬"
          />
          <FeatureCard 
            title="Multiple personalities" 
            subtext="Personalise how it responds. Choose how it sounds - sharp for work, warm for friends, or witty with spam."
            icon={UserPlus}
            color="bg-[#FFE66D]"
            emoji="🎭"
          />
          <FeatureCard 
            title="Private and secure" 
            subtext="All recordings and transcripts are encrypted and stored safely. Your conversations stay yours."
            icon={Lock}
            color="bg-[#D1D5DB]"
            emoji="🔒"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
