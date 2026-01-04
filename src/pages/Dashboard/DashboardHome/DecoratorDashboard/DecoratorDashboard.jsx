import React from 'react';
import MyDiv from '../../../../components/MyDiv';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import useAuth from '../../../../hook/useAuth';
import { Link } from 'react-router';
import Loading from '../../../../components/Loading';

const DecoratorDashboard = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    // assign task data get
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/service-status?email=${user?.email}&status=assign`)
            return res.data
        }
    })

    // pending task data get 
        const { data: pendingTask = [], isLoading:pendingTaskLoading } = useQuery({
        queryKey: ['pendingTask', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/dacorator?email=${user?.email}&serviceStatus=planning`)
            return res.data
        }
    })
    if(isLoading || pendingTaskLoading) return <Loading/>
    return (
        <MyDiv>
            <div className='grid md:grid-cols-2 gap-5'>
                <Link to={'/dashboard/assigned-projects'} className='min-h-40 bg-primary text-black rounded-2xl grid place-items-center'>
                    <h2 className='text-4xl font-semibold'>Assign Task</h2>
                    <h1 className='text-5xl font-bold'>{bookings.length}</h1>
                </Link>
                <Link to={'/dashboard/today-schedule'} className='min-h-40 bg-secondary text-black rounded-2xl grid place-items-center'>
                    <h2 className='text-4xl font-semibold'>Pending Task</h2>
                    <h1 className='text-5xl font-bold'>{pendingTask.length}</h1>
                </Link>
            </div>
        </MyDiv>
    );
};

export default DecoratorDashboard;