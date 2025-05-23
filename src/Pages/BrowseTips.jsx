
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {

    const tips = useLoaderData();
    const [filterLevel, setFilterLevel] = useState('');

    const filteredTips = tips.filter(tip =>
        filterLevel === '' || tip.level === filterLevel
    );

    return (
        <div>
            <Helmet>
                <title>GardenHub | Browse Tips</title>
            </Helmet>
            <div
                className="bg-no-repeat bg-cover min-h-screen pb-12 "
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/ds3fdTf4/8be1acdb483d6b289f4bcfb93ae9e6d7.jpg)",
                }}
            >
                <div className="max-w-5xl mx-auto p-4 ">
                    <h2 className="md:text-4xl text-2xl text-green-800 font-semibold mb-1 md:mb-8 mt-8">
                        Browse Public Garden Tips
                    </h2>

                    <div className="mb-8 ">
                        <label className="mr-2 font-semibold text-green-800 text-xl md:text-3xl">
                            Filter by Difficulty:
                        </label>
                        <select
                            onChange={(e) => setFilterLevel(e.target.value)}
                            value={filterLevel}
                            className="cursor-pointer border border-gree-800 text-green-800 rounded w-[40%] md:w-[20%] py-1"
                        >
                            <option  value="">All</option>
                            <option  value="Easy">Easy</option>
                            <option  value="Medium">Medium</option>
                            <option  value="Hard">Hard</option>
                        </select>
                    </div>


                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white text-green-800 border-b-6 border-green-800 md:text-2xl text-lg font-semibold">
                                <tr>
                                    <th className="p-4">Image</th>
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Level</th>
                                    <th className="p-4">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTips.map(tip => (
                                    <tr key={tip._id} className="hover:bg-green-50 text-green-800 md:text-2xl font-medium">
                                        <td className="md:p-2 p-4 border-b-3 border-green-800">
                                            <img src={tip.image} alt={tip.title} className="w-16 h-16  md:w-24 md:h-24 object-cover rounded" />
                                        </td>
                                        <td className="md:p-2 p-4 border-b-3 border-green-800">{tip.title}</td>
                                        <td className="md:p-2 p-4 border-b-3 border-green-800">{tip.category}</td>
                                        <td className="md:p-2 p-4 border-b-3 border-green-800">{tip.level}</td>
                                        <td className="md:p-2 p-4 border-b-3 border-green-800 text-center">
                                            <Link to={`/tipsDetails/${tip._id}`}>
                                                <button
                                                    className="text-green-700 cursor-pointer"
                                                >
                                                    <FaEye className='md:size-6 size-4' />
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {filteredTips.length === 0 && (
                            <p className="text-center mt-4 md:text-xl text-green-800">No public tips found for this filter.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowseTips;
