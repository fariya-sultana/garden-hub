import React from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import aboutImg from '../assets/download.jpg';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Show SweetAlert
        Swal.fire({
            title: 'Appointment Requested!',
            text: 'We will contact you shortly.',
            icon: 'success',
            confirmButtonColor: '#38a169'
        });

        e.target.reset(); // Optional: clear the form
    };

    return (
        <div className="bg-green-50 min-h-screen">
            <Helmet>
                <title>GardenHub | Contact Us</title>
            </Helmet>

            {/* Hero Section */}
            <div className="bg-green-700 text-white text-center py-10">
                <h2 className="text-3xl md:text-5xl font-semibold">Contact Us</h2>
            </div>

            {/* Info & Form Section */}
            <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl mx-auto my-16 px-4 gap-8">

                {/* Contact Info */}
                <div className="bg-white shadow-xl rounded-2xl p-8 flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h3>
                    <div className="space-y-4 text-green-700 text-lg">
                        <div>
                            <h4 className="font-semibold">📍 Address</h4>
                            <p>123 Green Lane, Eco City, Garden State</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">📞 Phone</h4>
                            <p>+1 800 123 4567</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">✉️ Email</h4>
                            <p>contact@gardenhub.com</p>
                        </div>
                    </div>
                </div>

                {/* Appointment Form */}
                <div
                    className="rounded-2xl shadow-xl p-8 flex-1"
                    style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Appointment</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name*"
                                required
                                className="p-4 rounded-full border w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="E-mail*"
                                required
                                className="p-4 rounded-full border w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone No*"
                                required
                                className="p-4 rounded-full border w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="date"
                                required
                                className="p-4 rounded-full border w-full bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <textarea
                            rows="4"
                            placeholder="Message*"
                            required
                            className="w-full p-4 border rounded-2xl bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300"
                            >
                                Get Appointment
                            </button>
                        </div>
                    </form>
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
