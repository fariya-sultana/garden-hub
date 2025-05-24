import React, { useContext, useEffect, useState, } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

import Loading from '../Components/Loading';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

const MyTips = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://garden-hub-server-zeta.vercel.app/myTips?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setTips(data);
                    setLoading(false);
                    setIsLoading(false);
                });
        }
    }, [user?.email]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This tip will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://garden-hub-server-zeta.vercel.app/deleteTip/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setTips(prev => prev.filter(tip => tip._id !== id));
                            Swal.fire('Deleted!', 'Your tip has been deleted.', 'success');
                        }
                    });
            }
        });
    };

    if (loading || isLoading) {
        return <Loading />;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 ">
            <Helmet>
                <title>GardenHub | MyTips</title>
            </Helmet>
            {tips.length === 0 ? (
                <div className="text-center  py-20">
                    <h2 className="text-2xl font-bold mb-4">No Tips Found 🌱</h2>
                    <p className="text-lg opacity-50">You haven't shared any garden tips yet. Start by sharing your knowledge to help others grow!</p>
                </div>
            ) : (
                <>
                    <h2 className="md:text-3xl text-2xl font-bold mb-6 text-center">🌿 My Garden Tips</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 text-sm shadow">
                            <thead className="bg-green-100 text-green-800">
                                <tr className='md:text-2xl text-lg'>
                                    <th className="px-4 py-3 text-left">#</th>
                                    <th className="px-4 py-3 text-left">Title</th>
                                    <th className="px-4 py-3 text-left">Plant</th>
                                    <th className="px-4 py-3 text-left">Category</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tips.map((tip, index) => (
                                    <tr key={tip._id} className="border-t text-green-800 md:text-xl hover:bg-green-50">
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2 font-semibold">{tip.title}</td>
                                        <td className="px-4 py-2">{tip.plant}</td>
                                        <td className="px-4 py-2">{tip.category}</td>
                                        <td className="px-4 py-2">{tip.availability}</td>
                                        <td className="px-4 py-2 lg:flex gap-2 ">
                                            <Link to={`/updateTips/${tip._id}`}>
                                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded btn-xs btn md:btn-sm outline-0 border-0"> Update</button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(tip._id)}
                                                className="md:mt-2 mt-1 lg:mt-0 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded btn-xs btn md:btn-sm outline-0 border-0"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default MyTips;
