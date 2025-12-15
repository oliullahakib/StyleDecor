import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import useAuth from '../../../hook/useAuth';
import Loading from '../../../components/Loading';
import useRole from '../../../hook/useRole';

const MyProfile = () => {
    const { user,updateUser,loading,setLoading } = useAuth()
    const[role,roleLoading]=useRole()
    const modalRef = useRef()
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const photoURL=e.target.photo.value;
        const userObj={displayName,photoURL}
        updateUser(userObj)
        .then(()=>{
            toast.success("Update User Successfuly")
            modalRef.current.close()
            setLoading(false)
            navigate('/')
        })
        .catch(err=>{
            toast.error(err.code)
            setLoading(false)
        })
    }
    if(loading || roleLoading) return <Loading/>
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content bg-base-300 rounded-3xl flex-col lg:flex-row-reverse">
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body md:h-96 md:w-96">
                            <fieldset className="fieldset">
                                <img className='border w-40 h-40 mx-auto rounded-full' src={user?.photoURL} alt="user" />
                                <h2 className='text-3xl text-center momo-font linear-text'>{user.displayName}</h2>
                                <p className='btn text-xl text-center text-secondary'>{role}</p>
                                <p className='text-xl text-center text-secondary'>{user.email}</p>
                                <button onClick={()=>modalRef.current.showModal()} className="btn btn-secondary mt-4">Update Profile</button>
                            </fieldset>
                            {/* modal  */}
                            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <form onSubmit={handleUpdate} className="fieldset">
                                        {/* Name  */}
                                        <label className="label">Name</label>
                                        <input name='name' type="text" className="input" defaultValue={user.displayName} />
                                        {/* photo  */}
                                        <label className="label">Photo URL</label>
                                        <input name='photo' type="text" className="input" defaultValue={user.photoURL} />
                                        <button className="btn btn-primary mt-4">Update</button>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-error">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;