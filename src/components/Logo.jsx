import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return <Link to={'/'}> <h1 className='text-2xl text-accent-content font-semibold garamond-font'>Style<span className='text-secondary font-bold'>Decor</span></h1></Link>
};

export default Logo;