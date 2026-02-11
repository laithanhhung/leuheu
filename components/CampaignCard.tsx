import React from 'react';
import { Campaign } from '../types';
import { Play } from 'lucide-react';

interface Props {
  campaign: Campaign;
}

const CampaignCard: React.FC<Props> = ({ campaign }) => {
  return (
    <div className={`rounded-[3rem] p-6 md:p-10 mb-12 relative overflow-hidden ${campaign.isDark ? 'bg-card-gray text-white border border-gray-800' : 'bg-white text-black'}`}>
      
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="bg-neon-lime text-black px-6 py-2 rounded-full font-bold uppercase text-sm md:text-base tracking-wider inline-block">
          {campaign.badge || 'Campaign'}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Poster / Left Media */}
        <div className="w-full lg:w-1/3 shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 border-4 border-white/10">
            <img src={campaign.posterImage} alt={campaign.title} className="w-full h-auto object-cover aspect-[2/3]" />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between h-full">
           <div>
               <h3 className={`text-2xl md:text-4xl font-black mb-6 uppercase leading-tight ${campaign.isDark ? 'text-white' : 'text-black'}`}>
                   {campaign.title}
               </h3>
               
               <ul className="space-y-3 mb-8">
                   {campaign.description.map((desc, i) => (
                       <li key={i} className="flex items-start gap-3 text-lg md:text-xl font-medium opacity-90">
                           <span className="text-neon-lime mt-1.5 text-xs">●</span>
                           <span>{desc}</span>
                       </li>
                   ))}
               </ul>

               {/* Stats Pills */}
               <div className="flex flex-wrap gap-4 mb-8">
                    {campaign.mainStat && (
                        <div className="bg-gradient-to-r from-neon-lime to-green-400 text-black px-6 py-3 rounded-xl font-black text-xl shadow-lg transform -skew-x-6">
                            <span className="skew-x-6 inline-block">{campaign.mainStat}</span>
                        </div>
                    )}
                    {campaign.secondaryStat && (
                        <div className="bg-black text-neon-lime px-6 py-3 rounded-xl font-black text-xl shadow-lg border border-neon-lime/30">
                            {campaign.secondaryStat}
                        </div>
                    )}
               </div>
           </div>

           {/* Gallery Grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-auto">
               {campaign.galleryImages.slice(0, 4).map((img, idx) => (
                   <div key={idx} className="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer">
                       <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <Play className="text-white fill-white" size={24} />
                       </div>
                       <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] text-white font-bold drop-shadow-md">
                           <Play size={10} className="fill-white" /> {(Math.random() * 10).toFixed(1)}M
                       </div>
                   </div>
               ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;