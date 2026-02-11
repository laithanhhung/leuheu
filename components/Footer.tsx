import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 flex items-end gap-2">
            CONTACT US<span className="text-neon-lime text-2xl mb-4">●</span>
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-lg md:text-xl text-gray-400 hover:text-white transition-colors">
              <Mail className="text-neon-lime" />
              <span>chiuchiuentertainment@gmail.com</span>
            </div>
             <div className="flex items-center gap-4 text-lg md:text-xl text-gray-400 hover:text-white transition-colors">
              <Phone className="text-neon-lime" />
              <span>091 685 5268</span>
            </div>
          </div>
        </div>

        <div className="text-right">
           <p className="text-gray-500 text-sm">©All rights reserved by <br/> ChiuChiu Entertainment</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;