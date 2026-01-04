import React from 'react';
import MyDiv from '../../../../components/MyDiv';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import useAuth from '../../../../hook/useAuth';
import { Link } from 'react-router';
import Loading from '../../../../components/Loading';

const UserDashboard = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [],isLoading } = useQuery({
        queryKey: ['my-bookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/my-bookings?email=${user?.email}`)
            const response = res.data
            return response.result

        }
    })
    if(isLoading) return <Loading/>
    const pendingPayment = bookings.filter(booking=>booking.paymentStatus!=="paid")
    return (
        <MyDiv>
            <div className='grid md:grid-cols-2 gap-5'>
                <Link to={'/dashboard/my-bookings'} className='min-h-40 bg-primary text-black rounded-2xl grid place-items-center'>
                    <h2 className='text-4xl font-semibold'>Toall Booking</h2>
                    <h1 className='text-5xl font-bold'>{bookings.length}</h1>
                </Link>
                <Link to={'/dashboard/my-bookings'} className='min-h-40 bg-secondary text-black rounded-2xl grid place-items-center'>
                    <h2 className='text-4xl font-semibold'>Pending Payment</h2>
                    <h1 className='text-5xl font-bold'>{pendingPayment.length}</h1>
                </Link>
            </div>
        </MyDiv>
    );
};

export default UserDashboard;