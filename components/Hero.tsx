import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className=" bg-neon-lime text-black w-full min-h-[100vh] flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-black rounded-full p-2 md:p-4 text-neon-lime">
        <ArrowUpRight size={32} className="md:w-12 md:h-12" />
      </div>

      <div className="mt-12 md:mt-20">
        <p className="font-bold text-lg md:text-2xl mb-2">Top 1 Movie network</p>
        <p className="font-bold text-lg md:text-2xl">TikTok Vietnam</p>
      </div>

      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-5xl md:text-[150px] font-black tracking-tighter leading-none">#leuheu</h1>
        <p className="text-xl md:text-3xl font-medium mt-2">ChiuChiu Entertainment</p>
        <p className="text-lg md:text-xl font-light">Company</p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <div className="border-2 border-black rounded-full px-6 py-2 font-bold flex items-center gap-2">
          <span className="bg-black text-white p-1 rounded-sm text-xs">TikTok</span>
          <span>TikTok</span>
        </div>
        <div className="border-2 border-black rounded-full px-6 py-2 font-bold">
          #leuheu
        </div>
      </div>
    </section>
  );
};

export default Hero;