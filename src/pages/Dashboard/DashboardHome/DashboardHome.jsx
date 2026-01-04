import React from 'react';
// import { Navigate } from 'react-router';
import useRole from '../../../hook/useRole';
import Loading from '../../../components/Loading';
import UserDashboard from './UserDashboard/UserDashboard';
import DecoratorDashboard from './DecoratorDashboard/DecoratorDashboard';

const DashboardHome = () => {
    const [role,loading] = useRole()
    if(loading) return <Loading/>
    // return <Navigate to={"/dashboard/my-profile"}/>
  
    return (
        <div>
           {
            role === "user" && <UserDashboard/>
           }
           {
            role === "admin" && <p>Admin</p>
           }
           {
            role === "decorator" && <DecoratorDashboard/>
           }
        </div>
    )
};

export default DashboardHome;