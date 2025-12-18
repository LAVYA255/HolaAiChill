
import React from 'react';
import { Menu, Coffee, Plus, Download, Lock, Moon } from 'lucide-react';

const MobileFirst: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#FFADAD] border-y-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="bg-white border-2 border-black px-3 py-1 rounded-lg text-xs font-bold inline-block mb-6 uppercase">Mobile First</div>
          <h2 className="text-6xl font-extrabold mb-8">Finances in your pocket.</h2>
          <p className="text-xl text-gray-900 mb-10 leading-relaxed font-medium">
            Fully responsive design means you can track expenses the moment you spend. Toggle Dark Mode for late-night budgeting sessions.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3 font-bold">
              <Moon className="w-5 h-5" /> Dark Mode Support
            </li>
            <li className="flex items-center gap-3 font-bold">
              <Download className="w-5 h-5" /> CSV Export on Mobile
            </li>
            <li className="flex items-center gap-3 font-bold">
              <Lock className="w-5 h-5" /> Secure Biometric (Device) Login
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 relative flex justify-center">
          {/* Phone Mockup */}
          <div className="w-[300px] h-[600px] bg-[#1A1A1A] border-[8px] border-black rounded-[48px] neo-shadow-lg relative overflow-hidden flex flex-col">
            {/* Phone Header */}
            <div className="p-6 pt-12 flex justify-between items-center text-white">
              <Menu className="w-6 h-6" />
              <div className="font-bold text-lg">Dashboard</div>
              <div className="w-8 h-8 bg-gray-700 rounded-full border border-gray-600"></div>
            </div>

            {/* Content */}
            <div className="px-6 flex-1 overflow-y-auto">
              <div className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mt-4">Net Balance</div>
              <div className="text-center text-white text-4xl font-black mt-2">₹1,24,500</div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700">
                  <div className="text-[10px] text-green-400 font-bold uppercase">Income</div>
                  <div className="text-white font-bold text-lg mt-1">₹85k</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700">
                  <div className="text-[10px] text-red-400 font-bold uppercase">Expense</div>
                  <div className="text-white font-bold text-lg mt-1">₹32k</div>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-[#2A2A2A] p-4 rounded-2xl border border-gray-700 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#FFE66D] rounded-xl flex items-center justify-center text-black">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Starbucks</div>
                    <div className="text-[10px] text-gray-400 uppercase">Food & Dining</div>
                  </div>
                  <div className="ml-auto text-red-400 font-bold">-₹350</div>
                </div>
              </div>
            </div>

            {/* Bottom Nav / Add Button */}
            <div className="p-6 relative">
               <button className="absolute right-6 bottom-6 w-14 h-14 bg-[#A0E8AF] rounded-full border-4 border-black neo-shadow flex items-center justify-center">
                 <Plus className="w-8 h-8 text-black" />
               </button>
            </div>
          </div>
          
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full border-4 border-black -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
