import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="bg-neon-lime py-20 px-4 md:px-8 rounded-t-[3rem] mt-12 text-black">
      <div className="max-w-6xl mx-auto text-center">
         <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight">
             Significant Partners
         </h2>
         <div className="flex justify-center mb-8">
            <div className="h-1 w-24 bg-black"></div>
         </div>
         
         <div className="flex flex-wrap justify-center gap-6 md:gap-10">
             {PARTNERS.map((p, i) => (
                 <div key={i} className="bg-white/90 backdrop-blur-sm p-4 rounded-xl w-32 h-20 md:w-48 md:h-28 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                    <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                 </div>
             ))}
         </div>
      </div>
    </section>
  );
};

export default Partners;