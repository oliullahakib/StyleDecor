import React from 'react';
import MyDiv from '../../components/MyDiv';
import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const ServiceDetails = () => {
    const { id } = useParams()
    const { data: service = {} } = useQuery({
        queryKey: ['package', id],
        queryFn: async () => {
            const res = await axios(`http://localhost:3000/package/${id}`)
            return res.data
        }
    })
    const { service_name, service_category, cost, imageUrl, unit, description, createdByEmail } = service
    return (
        <MyDiv>
            <div className="hero bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={imageUrl}
                        className="flex-1 max-h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className='flex-1 space-y-2'>
                        <h1 className="text-xl md:text-4xl font-bold">{service_name}</h1>
                        <p className="">
                           {description}
                        </p>
                        <p><span className='font-bold'>Category:</span> {service_category}</p>
                        <p className='text-sm md:text-xl'> <span className='font-bold'>Cost:</span> <span className='text-accent-content font-bold text-xl'>{cost}tk</span> /<span className='text-[8px] lg:text-sm tex-accent'>{unit}</span>
                        </p>
                        <p><span className='font-bold'>Created by:</span> {createdByEmail}</p>
                        <div className='flex flex-col'>
                            <button className="btn btn-secondary w-42 mt-3">Book Now</button>
                          
                        </div>
                    </div>
                </div>
            </div>
              <Link to={'/all-packages'} className="btn btn-primary w-45 mx-3 my-10"> <FaArrowLeft/> Go to All Packages</Link>
        </MyDiv>
    );
};

export default ServiceDetails;