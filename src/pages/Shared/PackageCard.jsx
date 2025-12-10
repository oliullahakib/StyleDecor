import React from 'react';

const PackageCard = ({ service }) => {
    return (
        <div className="card bg-base-100 shadow-sm relative">
            <figure>
                <img
                    className='h-full'
                    src={service.imageUrl}
                    alt="Shoes" />
            </figure>
            <div className="px-2 py-5 flex-1 flex flex-col justify-end">
                <h2 className="text-sm md:text-lg">{service.service_name}</h2>
                <p >Category: <span className='text-accent'>{service.service_category}</span> </p>
                <div className=" flex-1 flex flex-col justify-end">
                    <p className='mt-5 text-sm md:text-xl'>Cost: <span className='text-accent-content font-bold'>{service.cost}tk</span> /<span className='text-[8px] lg:text-sm tex-accent'>{service.unit}</span> </p>
                   <button className='btn btn-primary mt-3'>View Details</button>
                </div>
            </div>
         
        </div>
    );
};

export default PackageCard;