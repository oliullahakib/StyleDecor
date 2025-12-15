import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCheck, FaUserTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';

const AssignProjects = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/service-status?email=${user?.email}&status=assign`)
            return res.data
        }
    })
    const updateStatus = (booking, statusValue) => {
        // console.log(id,statusValue)
        const status = statusValue
         Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: `Yes, ${status==="pending"?"reject":"accept"} it!`
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.patch(`/booking/project/${booking._id}`, { status })
                            .then(res => {
                                if (res.data.modifiedCount) {
                                    refetch()
                                    Swal.fire({
                                        title: `${status==="pending"?"Rejected":"Accepted"}`,
                                        text: `Project is ${status==="pending"?"rejected":"accepted"}.`,
                                        icon: `${status==="pending"?"error":"success"}`
                                    });
                                }
        
                            })
        
                    }
                });
    }
    return (
        <div>
            <div>
                <h2 className='text-3xl'> Projects <span className='font-bold'>({bookings.length})</span> </h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SLNo</th>
                                    <th>Projcet Name</th>
                                    <th>Project Cost</th>
                                    <th>Payout Amount</th>
                                    <th>Location</th>
                                    <th>Projcet Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    bookings.map((booking, i) => <tr key={booking._id} className="bg-base-200">
                                        <th>{i + 1}</th>
                                        <td>{booking.service_name}</td>
                                        <td>{booking.cost}</td>
                                        <td>{booking.cost*.3}</td>
                                        <td>{booking.location}</td>
                                        <td >{new Date(booking.date).toDateString()}</td>
                                        <td className='space-x-3'>
                                            <button onClick={() => updateStatus(booking, "planning")} className="btn btn-success text-black"><FaUserCheck /></button>
                                            <button onClick={() => updateStatus(booking, "pending")} className="btn btn-error text-black"><FaUserTimes /></button>
                                            
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AssignProjects;