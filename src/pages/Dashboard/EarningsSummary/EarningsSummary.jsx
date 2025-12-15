import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';

const EarningsSummary = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: services = [], } = useQuery({
        queryKey: ['bookings',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/dacorator?email=${user?.email}&serviceStatus=completed`)
            return res.data
        }
    })
    return (
        <div>
          <h2 className='text-3xl'> Projects <span className='font-bold'>({services.length})</span> </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SLNo</th>
                                <th>Service Name</th>
                                <th>Total Amount</th>
                                <th>Payout Amount</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                services.map((service, i) => <tr key={service._id} className="bg-base-200">
                                    <th>{i + 1}</th>
                                    <td className='font-bold flex flex-col lg:flex-row gap-2'>
                                        {service.service_name}
                                    </td>
                                    <td>{service.cost}</td>
                                    <td>{service.cost*.3}</td>
                                    
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EarningsSummary;