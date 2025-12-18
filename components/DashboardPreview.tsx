
import React from 'react';
import { PieChart, Bell, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#D6EAF8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Wealth Management</div>
          <h2 className="text-5xl font-extrabold mb-8">All your assets. One Dashboard.</h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Stop switching between apps. Track your Mutual Funds (MFAPI) and Stocks (Yahoo Finance) alongside your daily expenses. Visualize your net worth in Indian Rupees.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white/60 hover:bg-white border-2 border-black p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer neo-shadow">
              <div className="w-10 h-10 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5" />
              </div>
              <span className="font-bold">Sector Allocation Charts</span>
            </div>
            <div className="bg-white/60 hover:bg-white border-2 border-black p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer neo-shadow">
              <div className="w-10 h-10 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <span className="font-bold">±5% Price Alerts</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white border-4 border-black rounded-3xl neo-shadow-lg overflow-hidden">
            <div className="p-6 border-b-2 border-black flex justify-between items-center bg-gray-50">
              <span className="font-extrabold text-xl">My Portfolio</span>
              <span className="bg-[#A0E8AF] text-[10px] font-bold px-2 py-0.5 rounded border border-black uppercase">Live</span>
            </div>
            <div className="p-6 space-y-6">
              {/* Reliance */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white font-bold flex items-center justify-center rounded-xl border-2 border-black">R</div>
                <div>
                  <div className="font-bold">RELIANCE.NS</div>
                  <div className="text-xs text-gray-500">10 Qty</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-bold">₹2,450.00</div>
                  <div className="text-xs text-green-600 font-bold flex items-center justify-end gap-1">
                    +1.2% <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* HDFC */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 text-white font-bold flex items-center justify-center rounded-xl border-2 border-black">H</div>
                <div>
                  <div className="font-bold">HDFCBANK.NS</div>
                  <div className="text-xs text-gray-500">25 Qty</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-bold">₹1,520.00</div>
                  <div className="text-xs text-red-600 font-bold flex items-center justify-end gap-1">
                    -0.5% <ArrowDownRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-gray-300 pt-6 mt-6 flex justify-between items-center">
                <div className="font-bold text-gray-500 uppercase text-sm tracking-wider">Total Value</div>
                <div className="text-3xl font-black">₹62,500.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
