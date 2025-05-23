import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const TipsDetails = () => {
    const tip = useLoaderData();
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        if (!liked) {
            const res = await fetch(`http://localhost:5000/tips/like/${tip._id}`, {
                method: 'PATCH',
            });

            if (res.ok) {
                setLiked(true);
            }
        }
    };

    return (
        <div className="min-h-screen bg-green-50 py-12 px-2 lg:px-24">
            <Helmet>
                <title>GardenHub | Tips Details</title>
            </Helmet>
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-4 md:p-8">
                <h2 className="md:text-3xl text-2xl text-green-800 font-medium mb-4 text-center">{tip.title}</h2>
                <img src={tip.image} alt={tip.title} className="w-full h-64 md:h-96 rounded-xl mb-6" />

                <p className="text-green-700 md:text-xl text-lg mb-1"><strong>Category:</strong> {tip.category}</p>
                <p className="text-green-700 md:text-xl text-lg mb-1"><strong>Plant Type:</strong> {tip.plant}</p>
                <p className="text-green-700 md:text-xl text-lg mb-1"><strong>Difficulty:</strong> {tip.level}</p>
                <p className="text-green-700 md:text-lg mt-4">{tip.description}</p>

                <div className='text-right'>
                    <button
                        onClick={handleLike}
                        disabled={liked}
                        className="mt-6 text-xl md:text-2xl cursor-pointer text-green-800"
                    >
                        {liked ? '❤️ Like' : '🤍 Like'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;
