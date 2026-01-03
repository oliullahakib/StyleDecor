import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { FaUser, FaListAlt, FaTimesCircle, FaCreditCard } from 'react-icons/fa';
import MyDiv from '../../../../components/MyDiv';

const UserDashboard = () => {

    return (
        <MyDiv>
            <div className="container mx-auto p-4 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
                    <span className='border-b-4 border-secondary pb-1'>User Dashboard</span>
                </h1>
                
                <div className="drawer lg:drawer-open">
                    {/* Drawer Toggle Checkbox for Mobile */}
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    
                    {/* Main Content Area */}
                    <div className="drawer-content flex flex-col p-4 bg-base-200 lg:ml-4 rounded-xl shadow-lg">
                        {/* Drawer Button (Visible on Mobile) */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary lg:hidden mb-4">
                            Show Menu
                        </label>
                        
                        {/* This is where the specific dashboard component (Profile, Bookings, etc.) will render */}
                        <div className="p-4 bg-white rounded-lg min-h-[60vh]">
                             <Outlet /> 
                             {/* You should set up a default component (e.g., Welcome/Profile) at the /dashboard route */}
                        </div>
                    </div>

                    {/* Sidebar / Drawer Menu */}
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-64 min-h-full bg-base-100 text-base-content shadow-xl rounded-r-xl">
                            <li className='menu-title text-lg font-bold'>User Tools</li>
                            {
                                userLinks.map(link => (
                                    <li key={link.path} className="mb-2">
                                        <NavLink to={link.path} className={activeLink}>
                                            {link.icon}
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            
                            {/* --- Separator --- */}
                            <div className="divider my-4">General</div>
                            
                            {/* General Nav Links (as a user would access them) */}
                            <li className="mb-2">
                                <NavLink to="/" className={({isActive}) => isActive ? 'flex items-center gap-3 p-3 text-primary font-semibold' : 'flex items-center gap-3 p-3 hover:bg-base-300 rounded-lg'}>
                                    🏠 Home
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/services" className={({isActive}) => isActive ? 'flex items-center gap-3 p-3 text-primary font-semibold' : 'flex items-center gap-3 p-3 hover:bg-base-300 rounded-lg'}>
                                    🛠 Services
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </MyDiv>
    );
};

export default UserDashboard;