import React from 'react';

const creators = Array(12).fill(0).map((_, i) => ({
    id: i,
    img: `https://picsum.photos/100/100?random=${300 + i}`,
    name: `Creator ${i + 1}`,
    followers: `${(Math.random() * 5).toFixed(1)}M`
}));

const Stats: React.FC = () => {
    return (
        <section className="text-white py-16 px-4 md:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase">
                    80+ Exclusive <span className="text-neon-lime">Creators</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {creators.map((c) => (
                        <div key={c.id} className="bg-card-gray rounded-xl p-4 flex flex-col items-center text-center hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer group">
                            <img src={c.img} alt={c.name} className="w-16 h-16 rounded-full mb-3 border-2 border-neon-lime group-hover:border-black" />
                            <p className="font-bold text-sm truncate w-full">{c.name}</p>
                            <p className="text-xs text-gray-400 group-hover:text-gray-600">{c.followers} followers</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-16 items-center">
                    <div className="bg-card-gray rounded-[2rem] p-8 flex-1 w-full flex items-center justify-between border border-gray-800">
                        <div>
                            <p className="text-neon-lime text-lg font-bold">TOTAL</p>
                            <p className="text-4xl md:text-5xl font-black">10M <span className="text-white text-2xl font-normal">followers</span></p>
                        </div>
                        <div className="text-neon-lime text-6xl">✦</div>
                    </div>

                    <div className="bg-neon-lime text-black rounded-[2rem] p-8 flex-1 w-full flex items-center justify-center text-center">
                        <div>
                            <p className="text-5xl md:text-7xl font-black">150<span className="text-2xl align-top">+</span></p>
                            <p className="font-bold text-lg">Partners on various social platforms (TikTok, Facebook, Youtube, etc)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;