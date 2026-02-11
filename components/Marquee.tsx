import React from 'react';

interface MarqueeProps {
  text: string;
  className?: string;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "", reverse = false }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 md:py-5 flex ${className}`}>
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
        <span className="text-xl md:text-3xl font-black uppercase mx-4">{text}</span>
      </div>
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} absolute top-0 left-0 hidden`}>
        {/* Helper for seamless loop if needed, but Tailwind animate usually sufficient with duplication */}
      </div>
    </div>
  );
};

export default Marquee;