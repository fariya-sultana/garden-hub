import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import './navbar.css'

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/shareTip'}>Share a Garden Tip</NavLink></li>
        <li><NavLink to={'/gardeners'}>Explore Gardeners</NavLink></li>
        <li><NavLink to={'/myTip'}>My Tips</NavLink></li>
        <li><NavLink to={'/login'}>LogIn</NavLink></li>
        <li><NavLink to={'/register'}>SignUp</NavLink></li>
    </>

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
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" mr-3 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm text-white dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
                            {links}
                        </ul>
                    </div>
                    <h2 className='text-xl md:text-2xl inline-flex items-center text-secondary'>
                        <img className='w-10 mr-2' src="/public/plant-leaf.png" alt="" />Garden<span className='text-primary '>Hub</span>
                    </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-medium menu-horizontal px-1 inline-flex gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={handleTheme} className='text-2xl '>{theme === 'light' ? <CiLight /> : <CiDark />} </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;