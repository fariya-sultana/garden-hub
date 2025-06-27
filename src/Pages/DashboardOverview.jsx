import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const DashboardOverview = () => {
    const { user } = useContext(AuthContext);
    const [allTips, setAllTips] = useState([]);
    const [myTips, setMyTips] = useState([]);

    useEffect(() => {
        fetch("https://garden-hub-server-zeta.vercel.app/browseTips")
            .then(res => res.json())
            .then(data => setAllTips(data));

        fetch(`https://garden-hub-server-zeta.vercel.app/myTips?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyTips(data));
    }, [user]);

    const statCards = [
        {
            label: 'Total Tips',
            value: allTips.length,
            color: 'bg-green-100 text-green-800',
            border: 'border-green-300'
        },
        {
            label: 'My Tips',
            value: myTips.length,
            color: 'bg-blue-100 text-blue-800',
            border: 'border-blue-300'
        },
        {
            label: 'Unique Users',
            value: new Set(allTips.map(tip => tip.email)).size,
            color: 'bg-purple-100 text-purple-800',
            border: 'border-purple-300'
        }
    ];

    return (
        <div className="p-4 md:p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-green-900 mt-8">
                📊 Dashboard Overview
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Stats cards (left 2 cols) */}
                <div className="space-y-8">
                    {statCards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl shadow-md border ${card.border} ${card.color} p-6 flex flex-col items-center text-center`}
                        >
                            <p className="text-lg font-semibold">{card.label}</p>
                            <p className="text-4xl font-bold mt-2">{card.value}</p>
                        </div>
                    ))}
                </div>

                {/* User card (right) */}
                <div className="bg-red-200 rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col items-center justify-center">
                    <img
                        src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                        alt="User Avatar"
                        className="w-40 h-40 rounded-full shadow mb-4"
                    />
                    <h2 className="text-xl font-bold text-green-800">{user?.displayName || "Anonymous"}</h2>
                    <p className="text-gray-600 text-sm mt-1">{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
