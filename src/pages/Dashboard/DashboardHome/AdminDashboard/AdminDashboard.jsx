import React from 'react';
import MyDiv from '../../../../components/MyDiv';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { Link } from 'react-router';
import Loading from '../../../../components/Loading';
import axios from 'axios';

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure()

    // assign task data get
    const { data: packages = [], isLoading } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axios.get(`https://style-decor-server-iota.vercel.app/packages`)
            return res.data
        }
    })

    // pending task data get 
    const { data: bookings = [],isLoading:assignLoading } = useQuery({
        queryKey: ['bookings','pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?serviceStatus=pending`)
            return res.data
        }
    })
    if(isLoading || assignLoading) return <Loading/>
    return (
        <MyDiv>
            <div className='grid md:grid-cols-2 gap-5'>
                <Link to={'/dashboard/manage-packages'} className='min-h-40 bg-primary text-black rounded-2xl grid place-items-center hover:scale-95 duration-150 ease-in-out'>
                    <h2 className='text-4xl font-semibold'> Total Packages</h2>
                    <h1 className='text-5xl font-bold'>{packages.length}</h1>
                </Link>
                <Link to={'/dashboard/assign-decorators'} className='min-h-40 bg-secondary text-black rounded-2xl grid place-items-center hover:scale-95 duration-150 ease-in-out'>
                    <h2 className='text-4xl font-semibold'>Pending Assign</h2>
                    <h1 className='text-5xl font-bold'>{bookings.length}</h1>
                </Link>
            </div>
        </MyDiv>
    );
};

export default AdminDashboard;