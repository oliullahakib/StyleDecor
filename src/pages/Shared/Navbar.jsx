import React from 'react';
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
    const { user, logOutUser } = useAuth()
    const links = <>
        <li><NavLink to={'/'} className={'text-accent'}>Home</NavLink></li>
        <li><NavLink to={'/all-packages'} className={'text-accent'}>All Packages</NavLink></li>
        <li><NavLink to={'/service-coverage'} className={'text-accent'}>Coverage</NavLink></li>
        <li><NavLink to={'/about-us'} className={'text-accent'}>About Us</NavLink></li>
        <li><NavLink to={'/be-a-decorator'} className={'text-accent'}>Be a Decoretor</NavLink></li>
       {user&& <>

       <li><NavLink to={'/dashboard'} className={'text-accent-content font-bold '}>Dashboard</NavLink></li>
       </>}

    </>
    const hanldeLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("Logout")
            })
    }
    return (
       
            <div className="navbar sticky top-0 z-10 bg-base-200 container mx-auto rounded-xl shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                            {
                                user ? <button onClick={hanldeLogout} className='btn btn-warning'>Logout</button> : <>
                                    <Link to={'/login'} className="btn text-accent mr-5">Sign In</Link>
                                    <Link to={'/register'} className="btn btn-primary text-black ">Register</Link>
                                </>
                            }
                        </ul>
                    </div>
                   <Link to={"/"}>StyleDecor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}
                    </ul>
                </div>
                <div className="navbar-end ml-5 hidden lg:flex ">
                    {
                        user ?<div className='flex gap-3'>
                            <img className='w-12 h-12 rounded-full border p-1' src={user?.photoURL} alt="" />
                             <button onClick={hanldeLogout} className='btn btn-warning'>Logout</button>
                        </div> : <>
                            <Link to={'/login'} className="btn btn-secondary mr-2">Sign In</Link>
                            <Link to={'/register'} className="btn btn-primary ">Register</Link>
                        </>
                    }
                </div>
            </div>
      
    );
};

export default Navbar;