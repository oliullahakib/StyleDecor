import React from 'react';

const PackageCard = ({service}) => {
    return (
       <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            className='h-full'
                            src={service.imageUrl}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.service_name}</h2>
                        <p className='text-accent text-xl'>Cost:<span className='text-accent-content font-bold'>{service.cost}tk</span></p>
                    </div>

                </div>
    );
};

export default PackageCard;