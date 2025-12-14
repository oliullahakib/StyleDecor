import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';

const MyBookings = () => {
    const { user } = useAuth()
    const [type, setType] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const [totalBooking, setTotalBooking] = useState(0)
    const limit = 3
    let skip = limit * currentPage
    const axiosSecure = useAxiosSecure()
    const { data: services = [], refetch } = useQuery({
        queryKey: ['my-bookings', user?.email, type, limit, currentPage, skip],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/my-bookings?email=${user?.email}&sort=${type}&limit=${limit}&skip=${skip}`)
            const response = res.data
            setTotalBooking(response.totalBooking - 1)
            setTotalPage(Math.ceil((response.totalBooking - 1) / limit))
            return response.result

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
                axiosSecure.delete(`/booking/${id}`)
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
    const handlePayment = async (id) => {
        const serviceRes = await axiosSecure.get(`/booking/${id}`)
        const service = serviceRes.data
        const packageInfo =
        {
            email: user?.email,
            name: service.service_name,
            bookingId: service._id,
            cost: service.cost,
            trakingId: service.trakingId,
            image: service.imageUrl,
            packageId: service.packageId
        }
        const res = await axiosSecure.post('/payment-checkout-session', packageInfo)
        window.location.assign(res.data)
    }
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-3xl'> Bookings <span className='font-bold'>({totalBooking})</span> </h2>
                {/* type sort */}
                <div>
                    <select defaultValue="sort by date" className="select">
                        <option disabled={true}>sort by date</option>
                        <option onClick={() => setType("desc")}>hight-low</option>
                        <option onClick={() => setType("asc")}>low-high</option>
                    </select>
                </div>
            </div>
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
                                    <td>{service?.paymentStatus === "paid" && service.transactionId}</td>
                                    <td className={`${service?.paymentStatus === "paid" && 'text-green-400'}`}>{service?.paymentStatus === "paid" ? <span className='font-bold text-lg'>Paid</span> : <button onClick={() => handlePayment(service._id)} className="btn btn-success text-black">Pay</button>}</td>
                                    <td className='space-x-3 '>
                                        <button onClick={() => handleDelete(service._id)} className="btn hover:btn-error "><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            {/* pagination  */}
            {services.length!==0&&<>
            <div className="flex gap-2 flex-wrap container mx-auto justify-center">
                {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-secondary">Prev</button>}
                {
                    [...Array(totalPage).keys()].map((item) => <button key={item} onClick={() => setCurrentPage(item)} className={`btn ${currentPage === item && "btn-primary"}`}>{item}</button>)
                }
                {currentPage < totalPage - 1 && <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-secondary">Next</button>}
            </div>
            </>}
        </div>

    );
};

export default MyBookings;