import React from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { SlSocialFacebook } from 'react-icons/sl';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Footer = () => {
    return (
        <div className='bg-green-900 p-8'>
            <footer className="footer sm:footer-horizontal text-neutral-content ">
                <nav className=''>
                    <h2 className='text-xl md:text-3xl inline-flex items-center text-white'>
                        <img className='w-8 md:w-10 md:mr-2' src="/public/plant-leaf.png" alt="" />GardenHub
                    </h2>

                    <p>📞 29 Madison Street, LA 20183, Dhaka</p>
                    <p>📧 gardenHub.care@email.com</p>
                    <p>🕒 Mon-Fri: 8:30-5:00,
                        Sar-Sun: Closed</p>
                </nav>
                <nav className='md:pl-5'>
                    <h4 className=" font-bold text-lg text-primary">Contact Info</h4>
                    <Link to={'/aboutUs'} className="link link-hover">About Us</Link>
                    <Link to={'/contactUs'} className="link link-hover">Contact Us</Link>
                    <Link to={'/gardeners'} className="link link-hover">Explore Gardeners</Link>
                    <Link to={'/browseTips'} className="link link-hover">Browse Tips</Link>

                </nav>
                <div className='md:pl-5'>
                    <h4 className=" font-bold text-lg text-primary">Social Links</h4>
                    <nav className="flex gap-4 mt-2 mb-4">
                        <a href=""><SlSocialFacebook size={20} className='hover:fill-primary' /></a>
                        <a href=""><CiTwitter size={20} className='hover:fill-primary' /></a>
                        <a href=""><FaInstagram size={20} className='hover:fill-primary' /></a>
                        <a href=""><FiYoutube size={20} className='hover:fill-primary' /></a>
                    </nav>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                            // Show SweetAlert on successful subscribe
                            Swal.fire({
                                title: 'Subscribed!',
                                text: 'You have been subscribed to our newsletter.',
                                icon: 'success',
                                confirmButtonColor: '#22c55e' // Tailwind green-500
                            });

                            e.target.reset(); // Optional: reset the form
                        }}
                    >
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="max-w-60">
                            <div className="join">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter Email"
                                    className="input join-item text-green-800 border-none bg-green-50 "
                                />
                                <button type="submit" className="btn btn-primary join-item">
                                    Subscribe
                                </button>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </footer>

            <img src="/svg_water_can.svg" alt="" />
            <hr className='border-primary' />
        </div>
    );
};

export default Footer;