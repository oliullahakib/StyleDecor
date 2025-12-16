import React, { useRef } from 'react';
import MyDiv from '../../components/MyDiv';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const bookNowModalRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const { data: service = {} } = useQuery({
        queryKey: ['package', id],
        queryFn: async () => {
            const res = await axios(`https://style-decor-server-iota.vercel.app/package/${id}`)
            return res.data
        }
    })
    const { _id, service_name, service_category, cost, imageUrl, unit, description, createdByEmail } = service
    const handleBookNow = (e) => {
        e.preventDefault()
        const packageInfo = {
            packageId: _id,
            service_category,
            service_name,
            imageUrl,
            unit,
            cost,
            userName: user?.displayName,
            userEmail: user?.email,
            date: new Date(e.target.date.value),
            location: e.target.location.value
        }
        axiosSecure.post('/booking', packageInfo)
            .then(res => {
                if (res.data.insertedId) {
                    bookNowModalRef.current.close()
                    Swal.fire({
                        title: "Your Booking is confirm!",
                        icon: "success",
                        draggable: false
                    });
                    navigate('/dashboard/my-bookings')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <MyDiv className={'flex-1'}>
            <div className="hero bg-base-200 mt-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={imageUrl}
                        className="flex-1 max-h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className='flex-1 space-y-2'>
                        <h1 className="text-xl md:text-4xl font-bold">{service_name}</h1>
                        <p className="">
                            {description}
                        </p>
                        <p><span className='font-bold'>Category:</span> {service_category}</p>
                        <p className='text-sm md:text-xl'> <span className='font-bold'>Cost:</span> <span className='text-accent-content font-bold text-xl'>{cost}tk</span> /<span className='text-sm tex-accent'>{unit}</span>
                        </p>
                        <p><span className='font-bold'>Created by:</span> {createdByEmail}</p>
                        <div className='flex flex-col'>
                            <button onClick={() => {
                                user ?
                                    bookNowModalRef.current.showModal() : navigate('/login', { state: location.pathname })
                            }} className="btn btn-secondary w-42 mt-3">Book Now</button>

                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/all-packages'} className="btn btn-primary w-45 mx-3 my-10"> <FaArrowLeft /> Go to All Packages</Link>

            {/* modal */}
            <dialog ref={bookNowModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleBookNow} >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* left  */}
                            <div>
                                {/*  Name */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">User Name</legend>
                                    <input defaultValue={user?.displayName} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  Category */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Category</legend>
                                    <input defaultValue={service_category} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  Price */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Price</legend>
                                    <input defaultValue={cost} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  Location */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Location</legend>
                                    <input required defaultValue={'location'} type="text" name="location" className="input w-full" />
                                </fieldset>
                            </div>

                            {/* right  */}
                            <div>
                                {/*  email */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">User Email</legend>
                                    <input defaultValue={user?.email} disabled type="email" className="input w-full" placeholder="User Email" />
                                </fieldset>
                                {/*  name */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Name</legend>
                                    <input defaultValue={service_name} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  unit */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Unit</legend>
                                    <input defaultValue={unit} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  date */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Date</legend>
                                    <input required type="date" name="date" className="input w-full" />
                                </fieldset>
                            </div>
                        </div>
                        <input className='btn btn-primary mt-8 w-full' type="submit" value="Submit" />
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </MyDiv>
    );
};

export default ServiceDetails;