import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCheck, FaUserTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useAuth from '../../../hook/useAuth';

const TodaySchedule = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/dacorator?email=${user?.email}&serviceStatus=planning`)
            return res.data
        }
    })
    const updateStatus = (booking, statusValue) => {
        // console.log(id,statusValue)
        const status = statusValue
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes!`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/booking/project/${booking._id}`, { status })
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: `Save Change Successfuly.`,
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    return (
        <div>
            <div>
                <h2 className='text-3xl'> Decorators <span className='font-bold'>({bookings.length})</span> </h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SLNo</th>
                                    <th>Projcet Name</th>
                                    <th>Cost</th>
                                    <th>Service Type</th>
                                    <th>Projcet Date</th>
                                    <th>Current Status</th>
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
                                        <td>{booking.service_category}</td>
                                        <td >{new Date(booking.date).toDateString()}</td>
                                        <td>{booking.serviceStatus}</td>
                                        <td className='space-x-3'>
                                            {
                                                booking.serviceStatus === "planning" ?
                                                    <button onClick={() => updateStatus(booking, "prepared")} className="btn btn-warning text-black">Prepared
                                                    </button>
                                                    : booking.serviceStatus === "prepared" ?
                                                        <button onClick={() => updateStatus(booking, "ontheway")} className="btn btn-primary text-black">On The Way
                                                        </button> :
                                                    booking.serviceStatus === "ontheway"?
                                                     <button onClick={() => updateStatus(booking, "setup")} className="btn btn-secondary text-black">Setup
                                                        </button>
                                                    : <button onClick={() => updateStatus(booking, "completed")} className="btn btn-success text-black">Completed
                                                        </button>
                                            }

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

export default TodaySchedule;