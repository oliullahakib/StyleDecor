import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUserCheck, FaUserTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const ManageDecorators = () => {
    const axiosSecure = useAxiosSecure()
    const { data: decorators = [], refetch } = useQuery({
        queryKey: ['decorator', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/decorators')

            return res.data
        }
    })
    const handleDeletedecorator = (id) => {

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
                axiosSecure.delete(`/decorator/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "decorator application has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    const updateStatus = (decorator, statusValue) => {
        // console.log(id,statusValue)
        const status = statusValue
        axiosSecure.patch(`/decorator/${decorator._id}`, { status, email: decorator.email })
            .then(res => {
                console.log(res?.data)
                if (res.data.modifiedCount) {
                    toast.success(`decorator is ${statusValue}`)
                    refetch()
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <h2 className='text-3xl'> Decorators <span className='font-bold'>({decorators.length})</span> </h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SLNo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>District</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    decorators.map((decorator, i) => <tr key={decorator._id} className="bg-base-200">
                                        <th>{i + 1}</th>
                                        <td>{decorator.name}</td>
                                        <td>{decorator.email}</td>
                                        <td>{decorator.district}</td>
                                        <td className={decorator.status === "accepted" ? 'text-green-500' : decorator.status === "rejected" ? "text-red-500" : "text-black"}>{decorator.status}</td>
                                        <td className='space-x-3'>
                                            <button disabled={decorator.applyStatus === "accepted" ? true : false} onClick={() => updateStatus(decorator, "accepted")} className="btn btn-primary text-black"><FaUserCheck /></button>
                                            <button disabled={decorator.applyStatus === "rejected" ? true : false} onClick={() => updateStatus(decorator, "rejected")} className="btn btn-error text-black"><FaUserTimes /></button>
                                            <button onClick={() => handleDeletedecorator(decorator._id)} className="btn hover:btn-error"><FaTrashAlt /></button>
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

export default ManageDecorators;