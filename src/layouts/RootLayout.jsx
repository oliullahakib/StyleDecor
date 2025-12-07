import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import MyDiv from '../components/MyDiv';

const RootLayout = () => {
    return (
        <div className='roboto-font'>
            <Navbar/>
           <MyDiv>
             <Outlet/>
           </MyDiv>
        </div>
    );
};

export default RootLayout;