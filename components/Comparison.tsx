
import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const handleUpgrade = () => {
    window.open('https://play.google.com/store/apps/details?id=com.holavoicemail.app', '_blank');
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
    <section id="comparison" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 tracking-tighter">Everything Your Voicemail Isn’t</h2>
        
        <div className="border-4 border-black rounded-[32px] overflow-hidden neo-shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-4 border-black">
                <th className="p-6 bg-gray-50 font-black border-r-4 border-black">Features</th>
                <th className="p-6 bg-gray-200 text-gray-500 font-black border-r-4 border-black uppercase text-xs">Traditional</th>
                <th className="p-6 bg-[#FFE66D] font-black uppercase text-xs">Hola AI</th>
              </tr>
            </thead>
            <tbody className="font-bold">
              {data.map((row, i) => (
                <tr key={i} className="border-b-2 border-black last:border-0">
                  <td className="p-6 border-r-4 border-black text-sm">{row.f}</td>
                  <td className="p-6 border-r-4 border-black text-gray-400 text-sm">{row.old}</td>
                  <td className="p-6 text-indigo-600 text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> {row.new}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={handleUpgrade}
            className="text-xl font-black hover:underline underline-offset-8 transition-all flex items-center gap-2 mx-auto"
          >
            Upgrade to Smart Voicemail <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
