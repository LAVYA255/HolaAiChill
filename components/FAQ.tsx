
import React from 'react';
import { Plus } from 'lucide-react';

const AccordionItem = ({ q, a }: { q: string, a: string }) => (
  <details className="group border-b-2 border-black last:border-0">
    <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
      <span className="font-black text-lg">{q}</span>
      <span className="w-8 h-8 bg-white border-2 border-black rounded-lg flex items-center justify-center neo-shadow group-open:rotate-45 transition-transform">
        <Plus className="w-5 h-5" />
      </span>
    </summary>
    <div className="px-6 pb-6 text-gray-600 font-bold leading-relaxed">
      {a}
    </div>
  </details>
);

const FAQ: React.FC = () => {
  const general = [
    { q: "How does Hola AI work?", a: "Hola AI answers calls like a human, even when your phone is off or in flight mode. It talks to your callers, understands why they called, filters spam, and sends you a short summary via app, SMS, or email." },
    { q: "Will it work with my existing number?", a: "Yes. You don’t need a new number. Your unanswered calls are simply forwarded to Hola AI, it takes over when you can’t pick up." },
    { q: "Can I try Hola AI before paying?", a: "Absolutely. You get a 7-day free trial. No strings attached. Just install, connect your number, and watch it in action." },
    { q: "What happens to my old voicemails?", a: "They stay safe and untouched. Once Hola AI takes over, new missed calls go straight to your smart assistant instead of the old voicemail box." },
    { q: "Is my data private and secure?", a: "Completely. All call recordings and transcripts are encrypted end-to-end. You have full control, delete anything anytime." },
  ];

  const pricing = [
    { q: "Is there a free trial?", a: "Yes! You get a 7-day free trial. Try Hola AI, experience the magic, and decide later if you want to continue." },
    { q: "What happens after trial ends?", a: "You’ll get a reminder before your trial expires. If you choose not to continue, Hola AI will simply stop answering your calls. You can unsubscribe anytime." },
    { q: "Do I need to pay upfront?", a: "Nope. You can explore everything free for 7 days. Payment only starts after the free trial is over." },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[#BEE3F8] border-y-2 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Questions you might have.</h2>
          <p className="font-bold text-gray-700 uppercase tracking-widest text-xs">Saying goodbye to dumb voicemail</p>
        </div>

        <div className="bg-white border-4 border-black rounded-[32px] overflow-hidden neo-shadow-lg mb-16">
          <div className="bg-black text-white px-6 py-2 text-xs font-black uppercase">General</div>
          {general.map((item, i) => <AccordionItem key={i} {...item} />)}
        </div>

        <div className="bg-white border-4 border-black rounded-[32px] overflow-hidden neo-shadow-lg">
          <div className="bg-[#6366f1] text-white px-6 py-2 text-xs font-black uppercase">💰 Pricing</div>
          {pricing.map((item, i) => <AccordionItem key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
