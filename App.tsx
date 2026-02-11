import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import CampaignCard from './components/CampaignCard';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { CAMPAIGNS } from './constants';
import { Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neon-lime selection:text-black ">
      <Hero />

      <div className="bg-black text-neon-lime border-y-2 border-neon-lime/20">
        <Marquee text="ChiuChiuEntertainment 🌐 #leuheu 🌐" className="bg-black text-neon-lime" />
      </div>

      <div className="spotlight relative w-full h-full overflow-hidden isolate ">
        <About />
        <Stats />

        <div className="bg-neon-lime text-black transform -skew-y-1 my-8 py-2">
          <Marquee text="services + services + services +" className="font-black" reverse />
        </div>

        <Services />

        {/* Campaigns Header Section */}
        <section className="bg-dark-bg py-16 px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 text-neon-lime mb-12 overflow-hidden">
            {Array(10).fill(0).map((_, i) => <Star key={i} fill="#ccff00" size={24} />)}
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase leading-none">
                Significant <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Campaigns</span>
              </h2>
              <p className="mt-4 text-gray-600 font-medium">#leuheu with partners</p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              <img src="https://picsum.photos/200/300?random=500" className="rounded-lg w-full h-auto object-cover" alt="Campaign collage" />
              <img src="https://picsum.photos/200/300?random=501" className="rounded-lg w-full h-auto object-cover mt-8" alt="Campaign collage" />
            </div>
          </div>

          {/* Campaign Cards Loop */}
          <div className="max-w-6xl mx-auto">
            {CAMPAIGNS.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </section>

        <div className="absolute top-[25svh] left-1/2 -translate-x-1/2 w-[90%] h-full -z-10">
          <svg className="w-full h-auto" width="1246" height="5283" viewBox="0 0 1246 5283" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M394.04 75.0195C394.04 75.0195 10.04 189.02 154.54 510.025C299.039 831.03 1013.54 737.02 1159.54 1289.02C1305.54 1841.02 -11.7976 2735.02 79.5401 1977.52C170.878 1220.02 1236.04 2057.02 1116.54 2584.02C997.04 3111.01 250.04 3006.51 187.04 3471.02C124.04 3935.53 685.04 3745.52 965.04 4233.52C1245.04 4721.52 732.54 5207.52 732.54 5207.52" stroke="#D5FF3F" stroke-width="150" stroke-linecap="round" />
          </svg>
        </div>
      </div>

      <Partners />
      <Footer />
    </div>
  );
}

export default App;