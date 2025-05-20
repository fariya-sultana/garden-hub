import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const LogIn = () => {

    const { loginUser, googleUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.pathname || '/';


    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successful! 🎉",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(error.code);
            });
    }

    const handleGoogleBtn = () => {
        googleUser()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successful! 🎉",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })

            .catch(error => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(error.message)
            })
    }

    return (
        <div className="hero mt-16 p-3 relative">

            <div className="card bg-secondary w-full max-w-sm shrink-0 shadow-2xl py-5" >

                <h2 className='font-bold text-3xl text-center text-white pb-4'>Login your account</h2>

                <div className="card-body py-0">
                    <form onSubmit={handleLogin} className="fieldset space-y-1">

                        <label className="text-white font-medium text-lg label">Email</label>
                        <input type="email" className="bg-white text-primary border-primary input" placeholder="Your Email" name='email' required />

                        <label className="text-white font-medium text-lg label">Password</label>
                        <input
                            type="password"
                            name='password'
                            required
                            className="bg-white text-primary border-primary input"
                            placeholder="Your Password"
                        />

                        <div><a className="link link-hover text-sm text-white">Forgot password?</a></div>

                        <button type='submit' className='btn mt-2 hover:bg-green-800 text-lg bg-green-900 text-white border-[#e5e5e5]' >Login</button>

                        <p className='text-center text-white py-2 text-sm '>Dont’t Have An Account ? <Link className='font-bold text-white hover:underline' to={'/register'}>Register</Link></p>

                    </form>

                    <button type='submit' onClick={handleGoogleBtn} className="btn hover:bg-green-800 bg-green-900 border-[#e5e5e5] text-white">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div >

            <img className='hidden md:block h-[680px] z-10 absolute -left-5 -top-41' src="https://greenola.casethemes.net/wp-content/uploads/2025/04/home-3-srv-img2.png" alt="" />

        </div >
    );
};

export default LogIn;