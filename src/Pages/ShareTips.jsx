import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router';

const ShareTips = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const handleShareTips = e => {

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTips = Object.fromEntries(formData.entries());

        fetch('http://localhost:5000/newTips', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTips)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Garden Tip Add SuccessFully! 🎉",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/myTips');
                }
            })
    }

    return (
        <div className='mb-20'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/nsdGb707/leaf-nature-green-spring-122429.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-40"></div>

                <div className=' w-full mx-auto px-4'>

                    <div className='text-center text-white py-12'>
                        <h2 className='text-3xl md:text-5xl font-semibold'>🌱 Shares Garden Tip</h2>
                        <p className="opacity-90 md:text-lg max-w-2xl mx-auto mt-4">
                            Got a green-thumb secret or a clever planting trick? Share your garden tips with the community and inspire others to create thriving, beautiful green spaces—one plant at a time.
                        </p>
                    </div>


                    <form className='max-w-4xl mx-auto' onSubmit={handleShareTips}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-xl p-4 md:p-8 mb-8 md:mb-12'>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Title</label>
                                <input type="text" className="input bg-green-50 input-bordered border-green-800 w-full text-green-800" placeholder="Enter tips title" required
                                    name='title' />
                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Plant Type</label>
                                <input type="text" className="input bg-green-50 input-bordered border-green-800 w-full text-green-800" placeholder="Enter plant type" required name='plant' />
                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Category</label>
                                <select className="select bg-green-50 select-bordered border-green-800 w-full text-green-800" name="category" defaultValue="">
                                    <option value="" disabled>Select category</option>
                                    <option value="Composting">Composting</option>
                                    <option value="Plant Care">Plant Care</option>
                                    <option value="Vertical Gardening">Vertical Gardening</option>
                                    <option value="Soil Prep">Soil Prep</option>
                                </select>

                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Image URL</label>
                                <input type="text" className="input bg-green-50 input-bordered border-green-800 w-full text-green-800" placeholder="Enter image url" required name='image' />
                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Difficulty Level</label>
                                <select name="level" defaultValue="" className="select ... bg-green-50 text-green-800 border-green-800 w-full">
                                    <option value="" disabled>Select level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>

                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Availability</label>
                                <select name="availability" defaultValue="" className="select ... bg-green-50 text-green-800 border-green-800 w-full">
                                    <option value="" disabled>Select availability</option>
                                    <option value="Public">Public</option>
                                    <option value="Hidden">Hidden</option>
                                </select>

                            </fieldset>

                            <fieldset className="md:col-span-2 p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">Description</label>
                                <textarea className="textarea bg-green-50 textarea-bordered border-green-800 w-full text-green-800" rows="2" placeholder="Describe your tip in detail..." required name='description'></textarea>
                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">User Name</label>
                                <input type="text" className="input bg-green-50 input-bordered border-green-800 w-full text-green-800"
                                    value={user.displayName} readOnly />
                            </fieldset>

                            <fieldset className="p-1 rounded">
                                <label className="block mb-1 font-semibold text-green-800">User Email</label>
                                <input type="email" className="input bg-green-50 input-bordered border-green-800 w-full text-green-800"
                                    placeholder='Enter your email'
                                    value={user.email} readOnly />
                            </fieldset>

                            <div className="md:col-span-2 mt-4">
                                <button type="submit" className="btn bg-green-800 w-full md:w-1/2 mx-auto block hover:bg-green-700 text-white text-lg font-semibold">
                                    ➕ Submit Tip
                                </button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ShareTips;
