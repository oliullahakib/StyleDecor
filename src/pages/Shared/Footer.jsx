import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hook/useAuth';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../../components/Logo';

const Footer = () => {
    const { user } = useAuth()
    return (
        <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
           
            <nav className="flex flex-col md:flex-row gap-4">
                <NavLink to={'/'} className={'text-accent p-2'}>Home</NavLink>
                <NavLink to={'/all-packages'} className={'text-accent p-2'}>All Packages</NavLink>
                <NavLink to={'/service-coverage'} className={'text-accent p-2'}>Coverage</NavLink>
                <NavLink to={'/about-us'} className={'text-accent p-2'}>About Us</NavLink>
                {user && <NavLink to={'/be-a-decorator'} className={'text-accent p-2'}>Be a Decoretor</NavLink>}

            </nav>
            <nav>
                <h3 className='text-2xl'>Contact Info</h3>
                <p> <span className='text-primary font-bold'>Hotline:</span>+8801836109573 </p>
                <p> <span className='text-primary font-bold'>Email:</span>oliullahakib@gmail.com </p>
                <p> <span className='text-primary font-bold'>Working hours:</span>10AM to 7PM </p>

            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link target='_blank' to={'https://github.com/oliullahakib'}>
                        <FaGithub size={25} />
                    </Link>
                    <Link target='_blank' to={'https://www.linkedin.com/in/oliullahakib/'}>
                        <FaLinkedin size={25} />
                    </Link>
                    <Link target='_blank' to={'https://www.facebook.com/akibahamedjr'}>
                        <FaFacebook size={25} />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by StyleDecor Ltd</p>
            </aside>
           
        </footer>
    );
};

export default Footer;