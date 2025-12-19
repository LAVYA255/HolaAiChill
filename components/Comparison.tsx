
import React from 'react';
import { Check } from 'lucide-react';
import { ViewState } from '../App';

interface ComparisonProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Comparison: React.FC<ComparisonProps> = ({ onNavigate }) => {
  const handleUpgrade = () => {
    onNavigate('home', 'cta');
  };

  const data = [
    { f: "How it responds", old: "Just records sound.", new: "Talks like a human." },
    { f: "Spam filtering", old: "Records spam too.", new: "Filters junk automatically." },
    { f: "What you receive", old: "Long, unclear audio.", new: "Short text summary." },
    { f: "Tone & personality", old: "One robotic voice.", new: "Customisable based on caller." },
    { f: "Your effort", old: "Replay and guess.", new: "Skim and act instantly." },
    { f: "Availability", old: "Only when phone is on.", new: "Works in Flight mode/Off." },
    { f: "Privacy", old: "Often unencrypted.", new: "End-to-end encrypted." },
  ];

  return (
    <section id="comparison" className="py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 md:mb-16 tracking-tighter">Everything Your Voicemail Isn’t</h2>
        
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="border-4 border-black rounded-[24px] md:rounded-[32px] overflow-hidden neo-shadow-lg bg-white min-w-[600px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="p-4 md:p-6 bg-white font-black border-r-4 border-black text-black">Features</th>
                  <th className="p-4 md:p-6 bg-[#EDF2F7] text-gray-700 font-black border-r-4 border-black uppercase text-[10px] md:text-xs">Traditional</th>
                  <th className="p-4 md:p-6 bg-[#A0E8AF] font-black uppercase text-[10px] md:text-xs text-black">Hola AI</th>
                </tr>
              </thead>
              <tbody className="font-bold">
                {data.map((row, i) => (
                  <tr key={i} className="border-b-2 border-black last:border-0">
                    <td className="p-4 md:p-6 border-r-4 border-black text-xs md:text-sm text-black">{row.f}</td>
                    <td className="p-4 md:p-6 border-r-4 border-black text-gray-500 text-xs md:text-sm">{row.old}</td>
                    <td className="p-4 md:p-6 text-indigo-700 text-xs md:text-sm flex items-center gap-2">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-green-600" /> {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center px-4">
          <button 
            onClick={handleUpgrade}
            className="text-lg md:text-xl font-black hover:underline underline-offset-8 transition-all flex items-center justify-center gap-2 mx-auto text-black"
          >
            Upgrade to Smart Voicemail <span className="text-xl md:text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
