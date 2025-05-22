
import Lottie from 'lottie-react';
import React from 'react';
import { useLoaderData } from 'react-router';
import leafAnimation from '../assets/animation/lottie.json'
const FeaturedGardeners = () => {
    const gardeners = useLoaderData();

    return (


        <div className='relative max-w-6xl mx-auto md:my-40 my-12 '>
            <div className=" hidden md:block absolute -top-40 left-1/2 transform -translate-x-1/2 w-[300px] pointer-events-none opacity-80 z-0">
                <Lottie
                    animationData={leafAnimation}
                    loop={true}
                    style={{ height: '200px', width: '300px' }}
                />
            </div>

            <div className=' ' >

                <div className='text-center my-8 md:my-12 max-w-4xl mx-4 lg:mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-bold  mb-4'>Meet Our Featured Gardeners</h2>
                    <p className='opacity-60 md:text-xl'>
                        Discover our top gardeners, highly skilled in landscaping, garden design, seasonal plant care, and creating vibrant, eco-friendly outdoor spaces.
                    </p>

                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
                    {
                        gardeners.map(gardener => (
                            <div key={gardener._id} className="relative w-80 h-96 lg:w-[360px]
                        lg:h-[460px] overflow-hidden rounded-xl shadow-md group">
                                <img
                                    src={gardener.image}
                                    alt={gardener.name}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />


                                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>


                                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-gradient-to-t from-black/50 to-transparent">
                                    <h2 className="text-lg font-semibold md:text-2xl text-center">{gardener.name}</h2>
                                    <p className="text-sm md:text-lg text-center">{gardener.expert}</p>
                                    <div className='text-center mt-1'>
                                        <p className="text-sm btn btn-xs text-center">{gardener.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </div>

    );
};

export default FeaturedGardeners;