
import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const AssignDecorators = () => {
    const [selectedParcel, setSelectedParcel] = useState(null)
    const axiosSecure = useAxiosSecure()
    const riderModalRef = useRef()
    const { data: bookings = [],refetch:parcelRefetch } = useQuery({
        queryKey: ['bookings', 'paid'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?paymentStatus=paid`)
            return res.data
        }
    })
    // finding the rider 
    const { data: riders = [],refetch:riderRefetch } = useQuery({
        queryKey: ['rider', selectedParcel?.senderDistrict,'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {
            const res = await axiosSecure.get(`/riders?district=${selectedParcel.senderDistrict}&workStatus=available`)
            return res.data
        }
    })
    const handleFindRider = (parcel) => {
        setSelectedParcel(parcel)
        riderModalRef.current.showModal()
    }
    const handleAssignRider=(rider)=>{
        const assignRiderInfo ={
           riderId:rider._id,
           riderName:rider.name,
           riderEmail:rider.email 
        }
        axiosSecure.patch(`/parcel/${selectedParcel._id}`,assignRiderInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                riderModalRef.current.close()
                toast.success('Rider is assign successfuly')
                riderRefetch()
                parcelRefetch()
            }
        })
    }
    return (
        <div>
            Bookings ({bookings?.length})
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Cost</th>
                                <th>Pay At</th>
                                <th>Booking Category</th>
                                <th>Booking Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.service_name}</td>
                                <td>{booking.cost}tk</td>
                                <td>{booking.payAt}</td>
                                <td>{booking.service_category}</td>
                                <td>{booking.date}</td>
                                <td>
                                    <button onClick={() => handleFindRider(booking)} className=' btn btn-primary text-black'>Find Riders</button>
                                </td>
                            </tr>)}


                        </tbody>
                    </table>
                </div>
            </div>

            {/* modal*/}
            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Rider Available({riders?.length})</h3>
                    {/* riders table  */}
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riders.map((rider,i )=><tr key={rider._id}>
                                        <th>{i+1}</th>
                                        <td>{rider?.name}</td>
                                        <td>{rider?.email}</td>
                                        <td>
                                            <button onClick={()=>handleAssignRider(rider)} className='btn btn-primary text-black'>Assign</button>
                                        </td>
                                    </tr>)}
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AssignDecorators;
