import React from 'react';
import { Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="text-white py-16 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-black mb-2">
            since <br />
            <span className="text-neon-lime text-6xl md:text-8xl">2020</span>
          </h2>
          <div className="w-20 h-2 bg-gray-700 my-6"></div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Founded in 2020, now #leuheu is the biggest Entertainment social network in TikTok Vietnam that specialize in Movie, Music and Entertainment Show.
          </p>

          <p className="mt-8 text-gray-400">
            LeuHeu aims to provide solutions for partners in Entertainment field to effectively and memorably promote content through viral campaigns on the TikTok and other social platforms.
          </p>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="bg-white text-black rounded-xl p-4 max-w-sm w-full transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-neon-lime font-bold">#</div>
              <div>
                <p className="font-bold">#leuheu</p>
                <p className="text-sm text-gray-500">Bai dang cua 15.0k</p>
              </div>
            </div>
            <div className="bg-gray-100 p-2 rounded text-sm mb-4">
              <span className="font-bold">#leuheu</span> - Network viral hàng đầu cho TikTok
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Lều Hều là hệ thống đa kênh - đối tác chiến lược hàng đầu của TikTok tại Việt Nam, MCN đầu tiên và lớn nhất trong mảng điện ảnh...
            </p>
            <div className="flex justify-between text-gray-400 text-xs">
              <div className="flex items-center gap-1"><Heart size={14} /> 51.5k</div>
              <div>Chia sẻ</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;