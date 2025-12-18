
import React from 'react';
import { MessageSquare, Cpu, Lightbulb } from 'lucide-react';

const SaiAssistant: React.FC = () => {
  return (
    <section id="sai" className="py-24 px-6 bg-[#f8f9fa] border-y-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="bg-black text-white px-3 py-1 rounded-lg text-xs font-bold inline-block mb-4">MEET SAI</div>
          <h2 className="text-5xl font-extrabold">Your Personal Financial Genius</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-4 border-black rounded-3xl overflow-hidden bg-white neo-shadow-lg">
          {/* Step 1 */}
          <div className="p-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 border-2 border-black rounded-full flex items-center justify-center mb-8">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">You Ask</h3>
            <div className="bg-gray-100 p-6 rounded-2xl w-full italic text-gray-500 border-2 border-gray-200">
              "How much did I spend on Swiggy last month?"
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-10 bg-[#5D5FEF] text-white border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/20 border-2 border-white rounded-xl flex items-center justify-center mb-8">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-8">Sai Analyzes</h3>
            <ul className="text-left space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center text-[10px]">1</div>
                Scans transactions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center text-[10px]">2</div>
                Filters category
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center text-[10px]">3</div>
                Calculates totals
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <div className="w-5 h-5 border-2 border-white/50 rounded flex items-center justify-center text-[10px]">✓</div>
                100% Private
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-50 border-2 border-black rounded-full flex items-center justify-center mb-8">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sai Answers</h3>
            <div className="bg-[#EBFBF0] border-2 border-[#A0E8AF] p-6 rounded-2xl w-full text-green-800 font-bold">
              "You spent ₹4,500 on Swiggy. That's 15% less than October! 🎉"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaiAssistant;
