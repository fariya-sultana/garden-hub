import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className=" ">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 8000 }}
                modules={[Autoplay]}>
                <SwiperSlide>
                    <div
                        className="hero  md:place-items-start relative h-[70vh]"
                        style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/wBL8W8RS/gardening-5.jpg)",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
                        <div className="md:my-auto  relative z-10 md:ml-10 ml-4 mt-20">
                            <div className="max-w-2xl">
                                <h3 className="mb-3 md:text-4xl text-2xl font-medium text-primary">🪴 Save the dates</h3>
                                <h2 className="mb-5 md:text-5xl text-3xl font-medium text-white md:h-[120px] h-[100px] leading-10 md:leading-14">
                                    <span className="block min-h-[60px] md:min-h-[80px]">
                                        <Typewriter
                                            words={['Join Us - It\'s Time to Grow, Share and Inspire!']}
                                            loop={true}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={50}
                                            deleteSpeed={50}
                                            delaySpeed={1500}
                                        />
                                    </span>
                                </h2>

                                <p className="mb-5 max-w-xl text-white opacity-70">June 14th 10am-12pm Growing Tomatoes presented by Dr.David Boucher.July 12th 10am-12pm Ask a Master Gardener & Tool presented by Dana Withall,Donn Reese, and Kathy Pyle
                                </p>
                                <button className="btn btn-primary text-white">Contact GardenHUb</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="hero h-[70vh]  md:place-items-start relative"
                        style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/Bt92BFWW/gardening-2.jpg)",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
                        <div className="md:my-auto  relative z-10 md:ml-10 ml-4">
                            <div className="max-w-xl">
                                <h2 className="mb-5 text-3xl md:text-5xl font-medium  text-white md:h-[120px] h-[80px] leading-12 md:leading-14">
                                    <Typewriter
                                        words={[
                                            '🌾 Join our Summer 2025 Volunteer Team!'
                                        ]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </h2>
                                <p className="mb-5 text-white opacity-80">Are you passionate about gardening and want to improve campus food security?Then you should apply to volunteer with us!Application will close Monday,may 30th 2025
                                </p>
                                <button className="btn btn-primary text-white">Contact GardenHUb</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="hero h-[70vh]"
                        style={{
                            backgroundImage:
                                "url(https://i.postimg.cc/Fz10XJkq/top-view-gardening-tools-plants.jpg)",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>
                        <div className="hero-content z-10">
                            <div className="max-w-2xl">
                                <h3 className="mb-3 text-2xl md:text-4xl font-medium text-primary">🌿 Garden Party</h3>
                                <h2 className="mb-5 text-3xl md:text-5xl font-medium text-white leading-10 md:leading-14 h-[120px]">
                                    <Typewriter
                                        words={[
                                            'A virtual event series offering gardening tips,tricks.'
                                        ]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </h2>
                                <p className="mb-5 text-white opacity-80">
                                    Whether you're a seasoned gardener or just starting out, our Garden Party virtual series brings together experts and enthusiasts to explore the joys of planting
                                </p>

                                <button className="btn btn-primary text-white">Contact GardenHUb</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;