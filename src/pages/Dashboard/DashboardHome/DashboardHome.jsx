import React from 'react';
// import { Navigate } from 'react-router';
import useRole from '../../../hook/useRole';
import Loading from '../../../components/Loading';
import UserDashboard from './UserDashboard/UserDashboard';

const DashboardHome = () => {
    const [role,loading] = useRole()
    console.log(role)
    if(loading) return <Loading/>
    // return <Navigate to={"/dashboard/my-profile"}/>
  
    return (
        <div>
           {
            role === "user" && <UserDashboard/>
           }
           {
            role === "admin" && <p>User</p>
           }
           {
            role === "seller" && <p>Seller</p>
           }
        </div>
    )
};

export default DashboardHome;