import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';


const About = () => {
    return (
        <div className='relative'>
            <div className='items-center my-16 md:my-44 max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 place-items-center '>

                <div className=' group relative bg-green-800 rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px] transition-all duration-500 ease-in-out hover:scale-[1.02]'>

                    <img className='absolute bottom-0  transition-transform duration-700 group-hover:scale-105 md:right-14 right-8 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[573px] md:h-[553px]' src="https://i.postimg.cc/gJRkYFcg/about-1.png" alt="" />

                    <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-green-100 rounded-full  flex flex-col justify-center items-center text-center shadow-lg transition-transform duration-500 group-hover:scale-110 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64  p-2 sm:p-4">
                        <FaUsers className="text-green-600 text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2" />
                        <p className="text-green-700 font-semibold text-sm md:text-base leading-tight">5K+ People Choose <br /> Landscaping</p>
                    </div>


                </div>


                <div className='max-w-xl mx-4 mt-8'>
                    <p className='text-green-800 font-bold md:text-2xl text-lg md:mb-4 mb-1'>ABOUT</p>
                    <h3 className='text-3xl md:text-5xl md:mb-8 mb-5 font-medium'>
                        20 Years of <br />Great Experience.
                    </h3>

                    <p className='md:text-lg text-sm opacity-60 mb-5 md:mb-8'>We strive to not only meet but also help your business grow for a reliable Landscape Maintenance Service. Integrity, according to Uthan, is much more than a word.</p>
                    <Link to={'/aboutUs'} className='btn btn-primary text-white font-semibold md:text-lg text-sm'>About More</Link>
                    <hr className='w-44 mx-auto mt-16 border-dashed border-green-800 md:hidden' />
                </div>
            </div >

            <img className='hidden lg:block h-[350px] z-10 absolute right-4 -top-41 animate-swing-slow' src="https://i.postimg.cc/9f8LM6zj/hanging.png" alt="" style={{
                animation: 'swing 4s ease-in-out infinite alternate'
            }} />
        </div>
    );
};

export default About;