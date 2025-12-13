
import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const AssignDecorators = () => {
    const [selectedBooking, setSelectedBooking] = useState(null)
    const axiosSecure = useAxiosSecure()
    const decoratorModalRef = useRef()
    const { data: bookings = [],refetch:bookingRefetch } = useQuery({
        queryKey: ['bookings','pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?serviceStatus=pending`)
            return res.data
        }
    })
    // finding the decorator 
    const { data: decorators = [],refetch:decoratorRefetch } = useQuery({
        queryKey: ['decorator', selectedBooking?.service_category],
        enabled: !!selectedBooking,
        queryFn: async () => {
            const res = await axiosSecure.get(`/decorators?category=${selectedBooking.service_category}`)
            return res.data
        }
    })
    const handleFindDecorator = (booking) => {
        setSelectedBooking(booking)
        decoratorModalRef.current.showModal()
    }
    const handleAssignDecorator=(decorator)=>{
        const assignDecoratorInfo ={
           decoratorId:decorator._id,
           decoratorName:decorator.name,
           decoratorEmail:decorator.email 
        }
        axiosSecure.patch(`/booking/${selectedBooking._id}`,assignDecoratorInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                decoratorModalRef.current.close()
                toast.success('Decorator is assign successfuly')
                decoratorRefetch()
                bookingRefetch()
            }
        })
    }
    console.log(bookings)
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
                                <td>{new Date(booking.date).toDateString()}</td>
                                <td>
                                    <button onClick={() => handleFindDecorator(booking)} className=' btn btn-secondary text-black'>Find Decorator</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* modal*/}
            <dialog ref={decoratorModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Rider Available({decorators?.length})</h3>
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
                                    {decorators.map((decorator,i )=><tr key={decorator._id}>
                                        <th>{i+1}</th>
                                        <td>{decorator?.name}</td>
                                        <td>{decorator?.email}</td>
                                        <td>
                                            <button onClick={()=>handleAssignDecorator(decorator)} className='btn btn-primary text-black'>Assign</button>
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
