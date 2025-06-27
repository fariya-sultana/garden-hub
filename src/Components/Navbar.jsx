import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import './navbar.css'
import { FcUnlock } from 'react-icons/fc';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { MdNightlight, MdOutlineLightMode } from 'react-icons/md';
import { FaLightbulb } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState("light");

    const links = <>
        <li className=''><NavLink to={'/'}>Home</NavLink></li>
        <li className='lg:hover:text-primary' ><NavLink to={'/gardeners'}>Explore Gardeners</NavLink></li>
        <li className='lg:hover:text-primary' ><NavLink to={'/browseTips'}>Browse Tips</NavLink></li>

        {
            user && <>
                <li className='lg:hover:text-primary' ><NavLink to={'/shareTips'}>Share a Garden Tip</NavLink></li>
                <li className='lg:hover:text-primary' ><NavLink to={'/myTips'}>My Tips</NavLink></li>
                <li className='lg:hover:text-primary' ><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            </>
        }
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
        <div className='bg-base-100 sticky top-0 z-50'>

            <div className="navbar md:max-w-11/12 md:mx-auto  p-3">

                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="  lg:hidden cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-white dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            {links}
                        </ul>
                    </div>

                    <div className='hidden md:block'>
                        <h2 className=' z-20 text-xl md:text-3xl inline-flex items-center text-secondary font-semibold'>
                            <img className='w-8 md:w-10 md:mr-2' src="/public/plant-leaf.png" alt="" />Garden<span className='text-primary '>Hub</span>
                        </h2>
                    </div>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="font-bold menu-horizontal px-1 inline-flex gap-6">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end space-x-2  ">

                    {user ? (
                        <div className="dropdown dropdown-end  md:space-x-2 ">

                            <div
                                tabIndex={0}
                                role="button"
                                className="rounded-full md:mt-2 md:tooltip md:tooltip-bottom border-primary border p-1 text-xs cursor-pointer z-10"
                                data-tip={user.displayName}
                            >
                                <img
                                    src={
                                        user?.photoURL && user.photoURL.length > 0
                                            ? user.photoURL
                                            : "https://i.postimg.cc/15HJjdw8/3135823.png"
                                    }
                                    alt="User Avatar"
                                    className="w-6 md:w-10 md:h-10 h-6 rounded-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>

                            <div
                                tabIndex={0}
                                className="dropdown-content menu bg-green-100 rounded-box z-1 w-40 p-2 shadow-sm text-center space-y-1"
                            >
                                <h2 className='text-green-800 font-bold'>
                                    {user?.displayName}
                                </h2>
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
                        <div className="flex items-center gap-1 md:gap-2 md:my-4">
                            <Link
                                to={"/login"}
                                className="btn bg-green-800 text-white hover:bg-primary hover:text-white font-bold btn-sm"
                            >
                                Login
                            </Link>

                            <Link
                                to={"/register"}
                                className="btn bg-green-800 btn-sm text-white font-bold hover:bg-primary hover:text-white"
                            >
                                Register
                            </Link>
                        </div>
                    )}

                    <button
                        onClick={handleTheme}
                        className='btn btn-circle btn-sm md:btn-md rounded-full md:text-3xl text-xl'
                    >
                        {theme === 'light' ? <MdNightlight /> : <MdOutlineLightMode />}
                    </button>

                </div>





            </div>

        </div>
    );
};

export default Navbar;