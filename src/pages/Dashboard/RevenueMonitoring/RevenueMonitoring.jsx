import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';
import { Link } from 'react-router';
import MyDiv from '../../../components/MyDiv';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const RevenueMonitoring = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: services = [], } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/dacorator?email=${user?.email}&serviceStatus=completed`)
            return res.data
        }
    })
    // setting the data 
    const dataObj = {}
    services.forEach(services => {
        const category = services.service_category
        dataObj[category] = (dataObj[category] || 0) + (services.cost-services.cost*0.3)
    })
    const data = Object.keys(dataObj).map(category => ({ category, total: dataObj[category] }))
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
                                <th>Service Category</th>
                                <th>Project Amount</th>
                                <th>Revenue</th>

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
                                    <td>{service.service_category}</td>
                                    <td>{service.cost}</td>
                                    <td>{service.cost - service.cost * 0.3}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* revenue chart  */}
            <div className='mt-40'>
                {
                    data.length === 0 ? <div className='flex flex-col items-center justify-center min-h-96'>
                        <h1 className="text-2xl md:text-5xl my-5 font-bold text-center"> Summary Not Available </h1>
                    </div>
                        : <MyDiv className='my-3 px-3 flex flex-col justify-center'>
                            <h1 className="text-3xl md:text-5xl momo-font linear-text my-5 font-bold text-center"> Revenue Summary </h1>
                            <div className='flex justify-center '>
                                <BarChart width={800} height={500} data={data}>
                                    <Bar barSize={50} fill='#D7636F' dataKey={"total"} />
                                    <XAxis dataKey={'category'} />
                                    <YAxis />
                                    <Tooltip contentStyle={{ backgroundColor: '#BE9671', border: 'black' }} />
                                </BarChart>
                            </div>
                        </MyDiv>
                }
            </div>
        </div>
    );
};

export default RevenueMonitoring;