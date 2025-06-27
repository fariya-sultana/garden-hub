import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { FiHome, FiList, FiPlusCircle, FiUser, FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';

const DashboardLayout = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="flex min-h-screen">
            {/* Mobile Topbar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-green-900 text-white  px-4 py-3 shadow-md">

                <button onClick={toggleMobileMenu} className="text-2xl">
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-green-900 text-white w-72 p-6 pt-16 fixed lg:static top-0 min-h-screen z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0`}
            >
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl font-extrabold mb-8 flex items-center w-full justify-start">
                        <img src="/plant-leaf.png" alt="logo" className="w-8 mr-2" />
                        GardenHub
                    </h2>

                    <nav className="flex flex-col gap-4 text-lg w-full">

                        <Link
                            to="/dashboard"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-lime-700 transition ${location.pathname === "/dashboard" ? "bg-lime-700" : ""
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FiHome className="text-xl" /> Overview
                        </Link>
                        <Link
                            to="/dashboard/allItems"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-lime-700 transition ${location.pathname.includes("allItems") ? "bg-lime-700" : ""
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FiList className="text-xl" /> All Tips
                        </Link>
                        <Link
                            to="/dashboard/addItem"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-lime-700 transition ${location.pathname.includes("addItem") ? "bg-lime-700" : ""
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FiPlusCircle className="text-xl" /> Add Tip
                        </Link>
                        <Link
                            to="/dashboard/myItems"
                            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-lime-700 transition ${location.pathname.includes("myItems") ? "bg-lime-700" : ""
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FiUser className="text-xl" /> My Tips
                        </Link>
                        <Link to="/" className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-lime-700 transition'> <FiArrowLeft /> Back to Home</Link>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:mt-0 mt-8 ">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
