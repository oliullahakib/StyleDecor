import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure()
    const { data: services = [], } = useQuery({
        queryKey: ['bookings',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings`)
            return res.data
        }
    })
    return (
        <div>
          <h2 className='text-3xl'> Bookings <span className='font-bold'>({services.length})</span> </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SLNo</th>
                                <th>Service Name</th>
                                <th>User Name</th>
                                <th>Amount</th>
                                <th>Booking Date</th>
                                <th>Transaction ID</th>
                                <th>Payment</th>
                                
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
                                    <td>{service.userName}</td>
                                    <td>{service.cost}</td>
                                    <td>{new Date(service.date).toDateString()}</td>
                                    <td>{service?.paymentStatus ==="paid"&&service.transactionId}</td>
                                    <td className={`${service?.paymentStatus ==="paid"?'text-green-400':'text-red-400'}`}>{service?.paymentStatus ==="paid"? <span className='font-bold text-lg'>Paid</span> :<span className='font-bold text-lg'>Unpaid</span> }</td>
                                   
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;