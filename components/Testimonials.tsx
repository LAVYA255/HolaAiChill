
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#f8f9fa] border-y-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Trusted By Busy Professionals.</h2>
          <p className="text-lg font-bold text-gray-500">Real stories from people who took back control of their phone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Marcus Thorne",
              role: "Legal Partner",
              text: "I used to miss urgent calls when in court. Now Hola AI handles the greeting and I get a text summary instantly. Truly a life-saver.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
            },
            {
              name: "Sarah Jenkins",
              role: "Freelance Creative",
              text: "The 'Witty' personality for spam is hilarious. It wastes telemarketers' time while I focus on my work. Best app on my phone.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
            },
            {
              name: "David Chen",
              role: "Real Estate Agent",
              text: "When showing houses I can't talk. Hola AI asks the right questions and I can see exactly who is a serious lead by reading the summary.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border-4 border-black p-8 rounded-[32px] neo-shadow">
              <p className="text-lg font-bold italic mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-black" />
                <div>
                  <div className="font-black text-sm">{item.name}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
