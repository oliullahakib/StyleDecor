import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hook/useAuth';
import Loading from '../components/Loading';


const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location = useLocation()
    if(loading) return <Loading/>
    return (
        <div>
            {user?children:<Navigate state={location.pathname} to={"/login"} replace />}
        </div>
    );
};

export default PrivateRoute;