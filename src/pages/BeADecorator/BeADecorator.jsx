import React from 'react';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const BeADecorator = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {register,handleSubmit,reset}=useForm()
    const handleDecoretor = (data)=>{
        data.email = user?.email
        axiosSecure.post('/decorator',data)
        .then(res=>{
            if(res.data.insertedId){
                toast.success("Send request successfuly")
                reset()
            }
            if(res.data.message){
                toast.error(res.data.message)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
         <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl md:text-5xl text-accent-content text-center mt-5 font-bold">Be a Decorator</h1>
                <div className="card-body w-full">
                    <form onSubmit={handleSubmit(handleDecoretor)} >
                        <div className="grid grid-cols-2 gap-3">
                            {/* left  */}
                            <div>
                                {/* user Name */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">User Name</legend>
                                    <input  defaultValue={user?.displayName} disabled type="text" className="input w-full" />
                                </fieldset>
                                {/*  type */}
                               <fieldset className="fieldset w-full ">
                                 <legend className="fieldset-legend">Experty Type</legend>
                                    <select required {...register("service_type")} defaultValue="type" className="select">
                                        <option disabled={true}>type</option>
                                        <option>Home</option>
                                        <option>Wedding</option>
                                        <option>Office</option>
                                        <option>Seminar</option>
                                        <option>Meeting</option>
                                    </select>
                                </fieldset>
                                {/*  NID */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">NID</legend>
                                    <input required type="text" {...register("nid")} placeholder='01755833' className="input w-full" />
                                </fieldset>

                            </div>

                            {/* right  */}
                            <div>
                                {/*  email */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">User Email</legend>
                                    <input  defaultValue={user?.email} disabled type="email" className="input w-full" placeholder="User Email" />
                                </fieldset>
                                {/*  name */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend"> Name</legend>
                                    <input required type="text" {...register('name')} placeholder=' Name' className="input w-full" />
                                </fieldset>
                                {/*  exprience */}
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">Exprience</legend>
                                    <input required type="text" {...register("exprience")} placeholder='1year' className="input w-full" />
                                </fieldset>

                            </div>
                        </div>
                        {/*  Image */}
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend">Image URL</legend>
                            <input required type="text" {...register("imageUrl")} defaultValue={user?.photoURL} disabled className="input w-full" />
                        </fieldset>
                        <input className='btn btn-primary mt-8 w-full' type="submit" value="Send Request" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BeADecorator;