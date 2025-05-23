import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { useLoaderData, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const UpdateTips = () => {
    const tip = useLoaderData();
    const { user } = use(AuthContext);
    const params = useParams();


    const handleUpdateTips = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTip = Object.fromEntries(formData.entries());

        fetch(`http://localhost:5000/updateTips/${params.id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedTip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className=''>
            <Helmet>
                <title>GardenHub | Update Tips</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/nsdGb707/leaf-nature-green-spring-122429.jpg)" }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className='w-full mx-auto px-4'>
                    <div className='text-center text-white md:py-12 py-6'>
                        <h2 className='text-2xl md:text-4xl font-semibold'>🌿 Update Garden Tip</h2>
                        <p className="opacity-90 md:text-lg max-w-2xl mx-auto mt-4">
                            Modify your garden tips and keep them fresh and helpful for the community!
                        </p>
                    </div>

                    <form className='max-w-4xl mx-auto' onSubmit={handleUpdateTips}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg shadow-xl p-4 md:p-8 mb-8 md:mb-12'>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">Title</label>
                                <input type="text" name='title' required defaultValue={tip.title} className="input bg-green-50 input-bordered border-green-800 w-full text-green-800" />
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">Plant Type</label>
                                <input type="text" name='plant' required defaultValue={tip.plant} className="input bg-green-50 input-bordered border-green-800 w-full text-green-800" />
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">Category</label>
                                <select name="category" defaultValue={tip.category} className="select bg-green-50 select-bordered border-green-800 w-full text-green-800">
                                    <option disabled>Select category</option>
                                    <option value="Composting">Composting</option>
                                    <option value="Plant Care">Plant Care</option>
                                    <option value="Vertical Gardening">Vertical Gardening</option>
                                    <option value="Soil Prep">Soil Prep</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">Image URL</label>
                                <input type="text" name='image' required defaultValue={tip.image} className="input bg-green-50 input-bordered border-green-800 w-full text-green-800" />
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">Difficulty Level</label>
                                <select name="level" defaultValue={tip.level} className="select bg-green-50 border-green-800 w-full text-green-800">
                                    <option disabled>Select level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">Availability</label>
                                <select name="availability" defaultValue={tip.availability} className="select bg-green-50 border-green-800 w-full text-green-800">
                                    <option disabled>Select availability</option>
                                    <option value="Public">Public</option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                            </fieldset>

                            <fieldset className="md:col-span-2">
                                <label className="block mb-1 font-semibold text-green-800">Description</label>
                                <textarea name='description' required defaultValue={tip.description} className="textarea bg-green-50 textarea-bordered border-green-800 w-full text-green-800" rows="3"></textarea>
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">User Name</label>
                                <input type="text" name='name' readOnly value={user.displayName} className="input bg-green-100 input-bordered border-green-800 w-full text-green-800" />
                            </fieldset>

                            <fieldset>
                                <label className="block mb-1 font-semibold text-green-800">User Email</label>
                                <input type="email" name='email' readOnly value={user.email} className="input bg-green-100 input-bordered border-green-800 w-full text-green-800" />
                            </fieldset>

                            <div className="md:col-span-2 mt-4">
                                <button type="submit" className="btn bg-green-800 w-full md:w-1/2 mx-auto block hover:bg-green-700 text-white text-lg font-semibold">
                                    ✅ Update Tip
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTips;
