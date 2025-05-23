import { useEffect, useState } from "react";

const TrendingTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch("https://garden-hub-server-zeta.vercel.app/trendingTips")
            .then(res => res.json())
            .then(data => setTips(data));
    }, []);

    return (
        <div className="mt-20 mx-4 max-w-6xl lg:mx-auto">
            <h2 className="text-3xl font-bold mb-6 md:mb-12 text-center">🔥 Top Trending Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map(tip => (
                    <div key={tip._id} className=" rounded-xl p-4 shadow-2xl bg-white text-center place-items-center h-[380px] ">
                        <img src={tip.image} alt={tip.title} className="w-48 h-48 object-cover rounded-full " />
                        <h3 className="text-xl font-semibold mt-3 text-green-800">{tip.title}</h3>
                        <p className="text-green-800 opacity-60 mt-2 text-center">{tip.description.slice(0, 80)}...</p>
                        <div className=" mt-3 text-red-500 text-xl ">
                            <span>❤️ {tip.totalLiked || 0}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingTips;
