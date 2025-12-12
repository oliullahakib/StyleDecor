import React from 'react';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyPaymentHistory = () => {
     const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['my-payment', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-payment-history?email=${user?.email}`)
            return res.data
        }
    })
    return (
         <div>
             <h2 className='text-3xl'> Payment History <span className='font-bold'>({payments.length})</span> </h2>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>SLNo</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Transaction ID</th>
                                        <th>Traking ID</th>
                                        <th>Payment Status</th>
                                        <th>Payment Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        payments.map((service, i) => <tr key={service._id} className="bg-base-200">
                                            <th>{i + 1}</th>
                                            <td className='font-bold'>{service.service_name}</td>
                                            <td>{service.amount}</td>
                                            <td>{service?.paymentStatus ==="paid"&&service.transactionId}</td>
                                            <td>{service?.paymentStatus ==="paid"&&service.trakingId}</td>
                                            <td className={`${service?.paymentStatus ==="paid"&&'text-green-400'}`}>{service?.paymentStatus || "Unpaid"}</td>
                                            <td className='space-x-3 '>
                                              {service.payAt}
                                            </td>
                                        </tr>)
                                    }
        
        
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    );
};

export default MyPaymentHistory;