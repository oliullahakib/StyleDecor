import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import MyDiv from '../components/MyDiv';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='roboto-font flex flex-col min-h-screen'>
            <Navbar/>
           
             <Outlet/>
          
           <Footer/>
        </div>
    );
};

export default RootLayout;