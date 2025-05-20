import React, { use, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useLocation, useNavigate } from 'react-router';
import Loading from '../Components/Loading';

const PrivateProvider = ({ children }) => {

    const { loading, user } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/auth/login', { state: location, replace: true });
        }
    }, [loading, user, location, navigate]);

    if (loading || (!user && location.pathname !== '/auth/login')) {
        return <Loading />;
    }

    return user ? children : null;
};

export default PrivateProvider;