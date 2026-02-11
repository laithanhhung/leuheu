import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="bg-dark-bg py-16 px-4 md:px-8">
       <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {SERVICES.map((s, idx) => (
                   <div key={idx} className="bg-card-gray rounded-3xl overflow-hidden flex flex-col h-full border border-gray-800 hover:border-neon-lime transition-colors duration-300 group">
                       <div className="p-8 flex-grow">
                           <h3 className="text-neon-lime text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">{s.title}</h3>
                           <p className="text-gray-300 leading-relaxed">{s.description}</p>
                       </div>
                       <div className="h-64 overflow-hidden relative">
                           <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       </div>
                   </div>
               ))}
           </div>
       </div>
    </section>
  );
};

export default Services;