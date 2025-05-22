import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const tip = useLoaderData();
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="min-h-screen  bg-green-50 py-12 px-4 lg:px-24">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <img src={tip.image} alt={tip.title} className="w-full h-64 md:h-96  rounded-xl mb-6" />
                <h2 className="text-3xl text-green-800 font-medium mb-2">{tip.title}</h2>
                <p className="text-green-700 text-xl mb-1"><strong>Category:</strong> {tip.category}</p>
                <p className="text-green-700 text-xl mb-1"><strong>Plant Type:</strong> {tip.plant}</p>
                <p className="text-green-700 text-xl mb-1"><strong>Difficulty:</strong> {tip.level}</p>
                <p className="text-green-700 text-lg mt-4">{tip.description}</p>

                <div className='text-right'>
                    <button
                        onClick={handleLike}
                        className={`mt-6 rounded-full text-green-800 font-semibold text-xl cursor-pointer`}
                    >
                        {liked ? '❤️ Liked' : '🤍 Like'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;
