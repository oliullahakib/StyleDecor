import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';
import Logo from '../../components/Logo';

const Navbar = () => {
    const { user, logOutUser } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem('theme')||"light")
    const links = <>
        <li><NavLink to={'/'} className={'text-accent'}>Home</NavLink></li>
        <li><NavLink to={'/all-packages'} className={'text-accent'}>All Packages</NavLink></li>
        <li><NavLink to={'/service-coverage'} className={'text-accent'}>Coverage</NavLink></li>
        <li><NavLink to={'/about-us'} className={'text-accent'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'} className={'text-accent'}>Contact</NavLink></li>
        {user && <>
            <li><NavLink to={'/be-a-decorator'} className={'text-accent'}>Be a Decoretor</NavLink></li>
            <li><NavLink to={'/dashboard'} className={'text-accent-content font-bold '}>Dashboard</NavLink></li>
        </>}

    </>
    useEffect(() => {
      document.querySelector('html').setAttribute('data-theme',theme)
      localStorage.setItem("theme",theme)
    }, [theme])
    const hanldeLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("Logout")
            })
    }
        const handleMode=(e)=>{
       setTheme(e.target.checked?"dark":"light")
         
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
                    </ul>
                </div>
                <Logo />
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ml-5 lg:flex ">       
                {
                    user ?<div className="dropdown dropdown-end">
                    
                    <div tabIndex={0} role="button" className="m-1 cursor-pointer">
                        <img referrerPolicy='no-referrer' className='w-12 h-12  rounded-full border p-1 ' src={user?.photoURL} alt="" /></div>
                      <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <p className='text-xl text-center'>{user?.displayName || "Name"}</p>
                            <p className='text-gray-400 text-center'>{user?.email ||"example@gmail.com"}</p>
                            <Link to={'/my-profile'} className='font-bold  my-3'> Profile</Link>
                            {/* mode control  */}
                            <div>
                                <input onClick={handleMode} defaultChecked={theme==="dark"} type="checkbox" className="toggle m-2" />
                                <span  className='font-bold'>{theme==="dark"?"Dark":"Light"} Mode</span>
                            </div>
                            {
                                user&&<button onClick={hanldeLogout} className='font-bold mt-3 btn text-black btn-error rounded-full'>Logout</button>
                            }
                        </ul>
                </div>: <>
                        <Link to={'/login'} className="btn btn-secondary text-black mr-2">Sign In</Link>
                        <Link to={'/register'} className="btn btn-primary  ">Register</Link>
                    </>
                }
            </div>
        </div>

    );
};

export default Navbar;