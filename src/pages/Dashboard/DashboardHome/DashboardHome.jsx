import React from 'react';
import { Navigate } from 'react-router';

const DashboardHome = () => {
    return <Navigate to={"/dashboard/my-profile"}/>
  
    
};

export default DashboardHome;