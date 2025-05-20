import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();
    const { createUser, googleUser, updateUser, setUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Login successful! 🎉",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => {
                        setUser(user);
                        console(error.message)
                    })

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
                console.log(error.message);
            })
    }

    const handleGoogleBtn = () => {
        googleUser().then(() => {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login successful! 🎉",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        }).catch(error => {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(error.message);
        })
    }

    return (
        <div className="hero px-2 my-2">

            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl py-5" >
                <h2 className='font-bold text-3xl text-center text-primary pb-3'>Register your account</h2>

                <div className="card-body py-0">
                    <form onSubmit={handleRegister} className="fieldset">

                        <label className="text-primary font-medium text-lg label">Name</label>
                        <input type="text" className="bg-white text-primary border-primary input" placeholder="Your Name" name='name' required />

                        <label className="text-primary font-medium text-lg label">Photo</label>
                        <input type="text" className="bg-white text-primary border-primary input" placeholder="Photo-URL" name='photo' required />

                        <label className="text-primary font-medium text-lg label">Email</label>
                        <input type="email" className="bg-white text-primary border-primary input" placeholder="Your Email" name='email' required />

                        <label className="text-primary font-medium text-lg label">Password</label>

                        <input
                            type="password"
                            name='password'
                            required
                            className="bg-white text-primary border-primary input validator "
                            placeholder="Your Password"
                            minLength="6"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must be more than characters, including number, lowercase letter, uppercase letter"
                        />
                        <p className="validator-hint hidden text-center">
                            Must be more than 6 character including
                            at least one number, at least one lowercase letter, at least one uppercase letter
                        </p>

                        <button type='submit' className='btn mt-2 hover:bg-secondary text-lg bg-primary text-base-200' >Register</button>

                        <p className='text-center text-secondary py-1 text-sm '>Already Have An Account? <Link className='font-bold text-secondary hover:underline' to={'/login'}>Login</Link></p>

                    </form>

                    <button type='submit' onClick={handleGoogleBtn} className="btn hover:bg-secondary hover:text-base-200 bg-base-200 border-[#e5e5e5] text-primary">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div >

        </div >
    );
};

export default Register;