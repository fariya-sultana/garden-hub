import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-green-50'>
            <Outlet ></Outlet>
        </div>
    );
};

export default AuthLayout;