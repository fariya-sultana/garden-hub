import React from 'react';
import { Helmet } from 'react-helmet-async';
import about from '../assets/download.jpg';
import img1 from '../assets/team1.webp';
import img2 from '../assets/team-2.webp';
import img3 from '../assets/team,3.webp';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white text-green-900 px-4 py-12 md:px-16">
            <Helmet>
                <title>GardenHub | About Us</title>
            </Helmet>

            {/* Hero Section */}
            <div
                className="hero h-[40vh] max-w-full "
                style={{
                    backgroundImage:
                        `url(${about})`,
                }}
            >


                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h2 className="text-3xl md:text-5xl font-medium mb-4">
                            Welcome to GardenHub
                        </h2>


                    </div>
                </div>
            </div>
            {/* Mission / Vision / Values */}
            <div >
                <h2 className="text-3xl md:text-4xl font-medium  text-center mt-10 md:mt-14">
                    About Us
                </h2>
                <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-2xl font-semibold mb-3">🌱 Our Mission</h2>
                        <p>
                            To inspire and educate gardeners of all levels by sharing practical, eco-friendly tips and creating a supportive green community.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-2xl font-semibold mb-3">🌍 Our Vision</h2>
                        <p>
                            A greener world where every home grows something beautiful — from houseplants to healthy harvests.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-2xl font-semibold mb-3">💚 Our Values</h2>
                        <p>
                            Sustainability, accessibility, community, and curiosity — we believe gardening is for everyone.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: 'Alice Green', role: 'Founder', img: img1 },
                        { name: 'Bob Root', role: 'Soil Expert', img: img2 },
                        { name: 'Cara Leaf', role: 'Herb Designer', img: img3 },
                    ].map((member, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl text-center p-6 flex flex-col items-center h-full"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-xl mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                            <p className="text-green-600 text-lg">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
