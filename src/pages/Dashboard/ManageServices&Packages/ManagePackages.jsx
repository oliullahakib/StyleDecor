import React from 'react';
import useAuth from '../../../hook/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const ManagePackages = () => {
    const { user } = useAuth()
    const axiosSecure=useAxiosSecure()
    const {register,handleSubmit,reset }=useForm();
    const handleAddPackage=(data)=>{
        data.createdByEmail = user?.email
        data.cost = Number(data.cost)
        axiosSecure.post('/package',data)
        .then(res=>{
            if(res.data.insertedId){
                toast.success("Package Added successfuly")
                reset()
            }
        })
        .catch(err=>toast.error(err.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl md:text-5xl text-accent-content text-center mt-5 font-bold">Add Package</h1>
                <div className="card-body w-full">
                    <form onSubmit={handleSubmit(handleAddPackage)} >
                        <div className="grid grid-cols-2 gap-3">
                            {/* left  */}
                            <div>
                                {/* user Name */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">User Name</legend>
                                    <input defaultValue={user?.displayName} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  Category */}
                               <fieldset className="fieldset w-full ">
                                 <legend className="fieldset-legend">Category</legend>
                                    <select required {...register("service_category")} defaultValue="category" className="select">
                                        <option disabled={true}>category</option>
                                        <option>Home</option>
                                        <option>Wedding</option>
                                        <option>Office</option>
                                        <option>Seminar</option>
                                        <option>Meeting</option>
                                    </select>
                                </fieldset>
                                {/*  Cost */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Cost</legend>
                                    <input required type="number" {...register("cost")} placeholder='0' className="input w-full" />
                                </fieldset>

                            </div>

                            {/* right  */}
                            <div>
                                {/*  email */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">User Email</legend>
                                    <input defaultValue={user?.email} disabled type="email" className="input w-full" placeholder="User Email" />
                                </fieldset>
                                {/* package name */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Package Name</legend>
                                    <input required type="text" {...register('service_name')} placeholder='Package Name' className="input w-full" />
                                </fieldset>
                                {/*  unit */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Unit</legend>
                                    <input required type="text" {...register("unit")} placeholder='per' className="input w-full" />
                                </fieldset>

                            </div>
                        </div>
                        {/*  Image */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Image URL</legend>
                            <input required type="text" {...register("imageUrl")} placeholder='https://example.photo.url' className="input w-full" />
                        </fieldset>
                        {/*  Description */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Description</legend>
                            <textarea required {...register("description")} className="textarea w-full" placeholder="Description"></textarea>
                        </fieldset>
                        <input className='btn btn-primary mt-8 w-full' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManagePackages;