import Lottie from 'lottie-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import waveAnimation from '../assets/animation/wave.json'
import { Helmet } from 'react-helmet-async';

const ExploreGardeners = () => {
    const gardeners = useLoaderData();

    return (
        <div className=''>
            <Helmet>
                <title>GardenHub | Explore Gardeners</title>
            </Helmet>
            <div
                className="hero h-[300px] max-w-full relative"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/gZsDq9vS/garden.webp)",
                }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-5xl font-medium mb-4">
                            Explore Our Top Gardeners
                        </h2>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>

                <div className="absolute -bottom-20 md:-bottom-12 w-full h-[180px] z-20 pointer-events-none"
                    style={{ transform: 'scaleY(-1)' }}>
                    <Lottie
                        animationData={waveAnimation}
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>


            <div className='max-w-11/12 md:mx-auto place-items-center mx-4 grid lg:grid-cols-2 gap-8 my-12 md:my-24'>
                {
                    gardeners.map(gardener => <div className="card md:flex-row gap-8 bg-green-50 shadow-sm items-center p-5 md:w-[650px]">
                        <figure>
                            <img
                                className='rounded-2xl md:w-[320px] md:h-[320px] '
                                src={gardener.image}
                                alt="Album" />
                        </figure>
                        <div className=' space-y-4 '>
                            <h2 className="card-title text-2xl text-green-800 ">{gardener.name} </h2>
                            <p className='text-xl text-green-800 font-semibold '>Age: {gardener.age} </p>
                            <p className='text-xl text-green-800 font-semibold '>Gender: {gardener.gender} </p>
                            <p className='text-xl text-green-800 font-semibold '>Experience: {gardener.experience} </p>
                            <p className='text-xl text-green-800 font-semibold '>Expert: {gardener.expert} </p>

                            <div className="space-y-4">
                                <button className=" text-xl text-green-800 font-semibold">
                                    Total Tips: <div className="badge badge-sm badge-secondary">+{gardener.totalSharedTips}</div>
                                </button><br />
                                <button className=" text-xl text-green-800 font-semibold">
                                    Status: <div className="badge badge-sm badge-secondary">{gardener.status}</div>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ExploreGardeners;