import React from 'react';
import { Link, Outlet } from 'react-router';

import { FaBagShopping, FaTicket } from 'react-icons/fa6';
import { FaBiking, FaMotorcycle, FaUser, FaUsers } from 'react-icons/fa';
import { MdMiscellaneousServices, MdOutlinePayments } from "react-icons/md";
import useAuth from '../hook/useAuth';

const DashboardLayout = () => {
    const { user } = useAuth()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar flex justify-between w-full bg-base-100">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className="px-4 flex items-center">
                        <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
                        <div>
                            <p className='text-accent font-bold'>{user?.displayName}</p>
                        </div>
                    </div>
                </nav>
                {/* Page content here */}
                <div className='px-5 mt-5'>
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </Link>
                        </li>
                        {/*my profile List item */}
                        <li>
                            <Link to={'/dashboard/my-profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Profile">
                                {/* my profile icon */}
                                <FaUser />
                                <span className="is-drawer-close:hidden">My Profile</span>
                            </Link>
                        </li>
                        {/*my bookings List item */}
                        <li>
                            <Link to={'/dashboard/my-bookings'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Bookings">
                                {/* my bookings icon */}
                                <FaTicket />
                                <span className="is-drawer-close:hidden">My Bookings</span>
                            </Link>
                        </li>
                        {/*my payment-history List item */}
                        <li>
                            <Link to={'/dashboard/my-payment-history'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Payment History">
                                {/* my payment icon */}
                                <MdOutlinePayments />
                                <span className="is-drawer-close:hidden">My Payment History</span>
                            </Link>
                        </li>
                        {/* admin only links  */}

                        {/*my Manage Service & Packages List item */}
                        <li>
                            <Link to={'/dashboard/manage-packages'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Service & Packages">
                                {/* my Manage Service & Packages icon */}
                                <MdMiscellaneousServices />
                                <span className="is-drawer-close:hidden">Manage Service & Packages</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;