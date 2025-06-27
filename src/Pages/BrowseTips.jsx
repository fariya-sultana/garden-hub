import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router';

const BrowseTips = () => {
    const tips = useLoaderData();
    const [filterLevel, setFilterLevel] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredTips = tips
        .filter(tip => filterLevel === '' || tip.level === filterLevel)
        .sort((a, b) =>
            sortOrder === 'asc'
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        );

    return (
        <div>
            <Helmet>
                <title>GardenHub | Browse Tips</title>
            </Helmet>

            <div className="min-h-screen pb-12 bg-green-50">
                <div className="max-w-6xl mx-auto p-4">
                    <h2 className="md:text-4xl text-2xl text-green-800 font-semibold mb-4 mt-8">
                        🌱 Browse Public Garden Tips
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-8 items-center">
                        <div>
                            <label className="mr-2 font-semibold text-green-800 text-lg">
                                Filter by Difficulty:
                            </label>
                            <select
                                onChange={(e) => setFilterLevel(e.target.value)}
                                value={filterLevel}
                                className="cursor-pointer border border-green-800 text-green-800 rounded px-3 py-1"
                            >
                                <option value="">All</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>

                        <div>
                            <label className="mr-2 font-semibold text-green-800 text-lg">
                                Sort by Title:
                            </label>
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="cursor-pointer border border-green-800 text-green-800 rounded px-3 py-1"
                            >
                                <option value="asc">Ascending A-Z</option>
                                <option value="desc">Descending Z-A</option>
                            </select>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="flex flex-wrap -m-2">
                        {filteredTips.map((tip) => (
                            <div key={tip._id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                                <div className="bg-white rounded shadow-md h-full flex flex-col p-4">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-full h-40 object-cover rounded"
                                    />
                                    <div className="mt-3 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-green-800 line-clamp-2">
                                            {tip.title}
                                        </h3>
                                        <p className="text-sm mt-1 text-green-700 font-medium">
                                            Level: {tip.level}
                                        </p>
                                        <p className="text-sm text-green-700">Category: {tip.category}</p>
                                        <div className="mt-auto pt-4">
                                            <Link to={`/tipsDetails/${tip._id}`}>
                                                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded w-full">
                                                    See More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No results */}
                    {filteredTips.length === 0 && (
                        <p className="text-center mt-8 text-green-800 text-lg">No public tips found for this filter.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrowseTips;
