import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <div className="bg-green-50 min-h-screen">
            <Helmet>
                <title>GardenHub | Contact Us</title>
            </Helmet>

            {/* Hero Contact Form Section */}
            <div
                className="bg-cover bg-center py-20 px-4 md:px-12 flex justify-center items-center"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/ds3fdTf4/8be1acdb483d6b289f4bcfb93ae9e6d7.jpg')",
                }}
            >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-4xl">
                    <h2 className="text-3xl md:text-4xl text-green-800 font-bold mb-6 text-center">
                        Get an Appointment
                    </h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-green-700 font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-green-700 font-semibold mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-green-700 font-semibold mb-1">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-green-700 font-semibold mb-1">Date</label>
                                <input
                                    type="date"
                                    className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-green-700 font-semibold mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your message..."
                                className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-3 rounded-lg transition duration-300"
                            >
                                Get Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="py-20 bg-white px-4 md:px-16 text-green-800">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h4 className="text-xl font-semibold mb-2">📍 Address</h4>
                        <p>123 Green Lane, Eco City, Garden State</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">📞 Phone</h4>
                        <p>+1 800 123 4567</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">✉️ Email</h4>
                        <p>contact@gardenhub.com</p>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full">
                <iframe
                    title="GardenHub Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2428232901895!2d-122.42067948468138!3d37.7785197797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2dd1c10f7b%3A0x2c1fa0b861ca8b2c!2sCity%20Hall!5e0!3m2!1sen!2sus!4v1622211140132!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    className="border-0"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
