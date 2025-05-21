import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import './navbar.css'
import { FcBusinessman, FcUnlock } from 'react-icons/fc';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState("light");
    const links = <>
        <li className='lg:hover:underline lg:ml-40'><NavLink to={'/'}>Home</NavLink></li>
        <li className='lg:hover:underline '><NavLink to={'/gardeners'}>Explore Gardeners</NavLink></li>
        <li className='lg:hover:underline '><NavLink to={'/browseTips'}>Browse Tips</NavLink></li>
        <li className='lg:hover:underline '><NavLink to={'/shareTips'}>Share a Garden Tip</NavLink></li>
        <li className='lg:hover:underline '><NavLink to={'/myTips'}>My Tips</NavLink></li>
    </>

    const handleLogout = () => {
        logOut().then(() => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Logout successful! 🎉",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(error => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setTheme(savedTheme);
    }, []);

    const handleTheme = () => {
        const newTheme = theme === "light" ? "forest" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }
    
    return (
        <div className='max-w-6xl mx-auto mt-6'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-white dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            {links}
                        </ul>
                    </div>
                    <h2 className='text-xl md:text-3xl inline-flex items-center text-secondary font-semibold'>
                        <img className='w-8 md:w-10 md:mr-2' src="/public/plant-leaf.png" alt="" />Garden<span className='text-primary '>Hub</span>
                    </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-bold menu-horizontal px-1 inline-flex gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end items-center">
                    {user ? (
                        <div className="dropdown dropdown-end md:dropdown-center mr-2">
                            <div
                                tabIndex={0}
                                role="button"
                                className="hover:bg-orange-100 rounded-full p-1 tooltip mt-2"
                                data-tip={user.displayName}
                            >
                                <img
                                    src={
                                        user?.photoURL && user.photoURL.length > 0
                                            ? user.photoURL
                                            : "https://i.postimg.cc/15HJjdw8/3135823.png"
                                    }
                                    alt="User Avatar"
                                    className="w-6 md:w-8 md:h-8 h-6 rounded-full object-cover"
                                    referrerPolicy="no-referrer"
                                />

                            </div>

                            <div
                                tabIndex={0}
                                className="dropdown-content menu bg-white rounded-box z-1 w-40 p-2 shadow-sm text-center space-y-1"
                            >
                                <button
                                    type="submit"
                                    onClick={handleLogout}
                                    className="btn btn-primary text-sm font-bold inline-flex items-center gap-1 text-white"
                                >
                                    Log Out <FcUnlock />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link
                                to={"/login"}
                                className="btn bg-green-800 text-white hover:bg-primary hover:text-white font-bold btn-xs md:btn-sm md:mr-2 mr-1"
                            >
                                Login
                            </Link>
                            <Link
                                to={"/register"}
                                className="btn bg-green-800 btn-xs text-white md:btn-sm font-bold hover:bg-primary hover:text-white md:mr-2 mr-1"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    <button onClick={handleTheme} className='md:text-2xl text-xl'>{theme === 'light' ? <CiLight /> : <CiDark />} </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;