import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useRole from '../hook/useRole';
import Loading from '../components/Loading';


const AdminRoute = ({children}) => {
const [role,loading]=useRole()
    const location = useLocation()
    if(loading) return <Loading/>
    return (
        <div>
            {role==="admin"?children:<Navigate state={location.pathname} to={"/login"} replace />}
        </div>
    );
};

export default AdminRoute;