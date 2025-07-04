import React from 'react';

const ChooseUs = () => {
    return (
        <div className='mx-4 my-6 md:my-20'>
            <div className='text-center'>
                <button className='btn mb-3 cursor-text md:mb-5 bg-green-800 text-white rounded-full relative '>WHY CHOOSE US
                    <img className=' absolute bottom-5 -right-4' src="/public/plant-leaf.png" alt="" width={30} />
                </button>
                <h2 className='md:text-4xl text-3xl mb-5 font-bold'>Why we are considered as the best</h2>
                <p className=' opacity-60  mb-8 md:mb-12 md:max-w-4xl md:mx-auto text-lg'>Elevate your environment with our unrivaled expertise and passion for excellence!Our rich legacy is roooted in our unwavering commitment to turning your green dreams into reality.</p>
            </div>

            <div className='grid md:grid-cols-1 lg:grid-cols-2 items-center
             gap-5 md:gap-16 lg:mx-10'>

                <div className='space-y-6 place-items-center md:ml-12 mb-8'>
                    <div className='bg-white rounded-2xl border-r-6 border-r-primary shadow-2xl flex gap-2 md:gap-4 items-center md:p-10 p-4  lg:ml-36 md:w-2xl '>
                        <p className='text-2xl md:text-4xl px-1 py-1 md:py-2 bg-primary rounded-full'>🌿</p>
                        <div>
                            <h4 className='text-lg md:text-2xl text-green-900 md:mb-3 mb-2'>Internationals gardening Techniques</h4>
                            <p className='md:text-[16px] text-xs text-green-900 opacity-70'>We have years of experience in gardening service who are dedicated to providing you service.</p>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl border-r-6 border-r-primary shadow-2xl flex gap-2 md:gap-4 items-center p-4 md:p-10 md:w-2xl '>
                        <p className='text-2xl md:text-4xl px-1 py-1 md:py-2 bg-primary rounded-full'>🌾</p>
                        <div>
                            <h4 className='text-lg md:text-2xl text-green-900 md:mb-3 mb-2'>Expertise on community gardening</h4>
                            <p className='md:text-[16px] text-xs text-green-900 opacity-70'>We understand that every client is unique, so we offer customized solutions to specific needs.</p>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl border-r-6 border-r-primary shadow-2xl flex gap-2 md:gap-4 items-center p-4 md:p-10 md:w-2xl lg:ml-36'>
                        <p className='text-2xl md:text-4xl px-1 py-1 md:py-2 bg-primary rounded-full'>🪴 </p>
                        <div>
                            <h4 className='text-lg md:text-2xl text-green-900 mb-2 md:mb-3'>Eco-Friendly Sustainable Practices</h4>
                            <p className=' text-green-900 opacity-70 md:text-[16px] text-xs'>We prioritize the planet on your garden.By using organic methods,water-wise and composting. </p>
                        </div>
                    </div>
                </div>

                <div className=' mx-auto group relative'>
                    <img className='w-[300px] md:w-[436px]  md:h-[536px] bg-primary p-2 rounded-bl-[40%] rounded-tr-[40%] rounded-2xl transition-all duration-500 ease-in-out transform group-hover:scale-105 mb-8' src="https://i.postimg.cc/gk44pKxx/gardener-and-his-flowers-e1636043266831-pfkrgo4wcqa32jd41ephug6til9xyp1kxqxt4o7x3c.jpg" alt="" />
                </div>

            </div> 
        </div>
    );
};

export default ChooseUs;