import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';

const MyBookings = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: services = [], refetch } = useQuery({
        queryKey: ['my-bookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/my-bookings?email=${user?.email}`)
            return res.data

        }
    })
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/package/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your order has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    const handlePayment = async(id) => {

       const serviceRes = await axiosSecure.get(`/booking/${id}`)
       const service = serviceRes.data
        const packageInfo =
        {
            email: user?.email,
            name: service.service_name,
            bookingId: service._id,
            cost: service.cost,
            trakingId:service.trakingId,
            image:service.imageUrl,
            packageId:service.packageId
        }
     const res= await axiosSecure.post('/payment-checkout-session',packageInfo)
     console.log(res.data)
     window.location.assign(res.data)
      

    }
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
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Booking Date</th>
                                <th>Transaction ID</th>
                                <th>Payment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                services.map((service, i) => <tr key={service._id} className="bg-base-200">
                                    <th>{i + 1}</th>
                                    <td className='font-bold flex flex-col lg:flex-row gap-2'>
                                       <img className='w-10 h-10 rounded-sm' src={service.imageUrl} alt="package image" />
                                        {service.service_name}
                                        </td>
                                    <td>{service.cost}</td>
                                    <td>{service.date}</td>
                                    <td>{service?.paymentStatus ==="paid"&&service.transactionId}</td>
                                    <td className={`${service?.paymentStatus ==="paid"&&'text-green-400'}`}>{service?.paymentStatus || "Unpaid"}</td>
                                    <td className='space-x-3 '>
                                       {service.paymentStatus==="paid"?"": <button onClick={()=>handlePayment(service._id)} className="btn btn-success text-black mb-5 xl:mb-0">Pay</button>}
                                        <button onClick={() => handleDelete(service._id)} className="btn hover:btn-error "><FaTrashAlt /></button>
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

export default MyBookings;