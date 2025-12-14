import React from 'react';

const SectionTitle = ({title,className}) => {
    return <h1 className={`${className} text-3xl md:text-6xl text-accent-content garamond-font`}>{title}</h1>
};

export default SectionTitle;