import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import useAuth from '../../hook/useAuth';

const Login = () => {
    const {loginUser,loginWithGoogle}=useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (data) => {
        loginUser(data.email,data.password)
        .then(()=>{
            toast.success("Login Successfully")
            navigate(location?.state ||'/')
        })
    }
    const handleGoogleLogin = async () => {
            //User Registration using google
            loginWithGoogle()
            .then(()=>{
                toast.success("Login")
                navigate('/')
            })   
    }
    return (
        <div className=' w-full flex-1'>
            <div className="card-body w-full justify-center items-center">
                <form onSubmit={handleSubmit(handleLogin)} className="fieldset md:w-96">
                    <label className="label">Email</label>
                    <input {...register("email", { required: 'Email is required.' })} type="email" className="input w-full" placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    <label className="label">Password</label>
                    <input {...register("password", {
                        required: 'Password is required.',
                        minLength:
                        {
                            value: 6,
                            message: 'Password must be at least 6 characters long.'
                        },
                        pattern: {
                            value: /^(?=.*[A-Z]).+$/,
                            message: 'Password must contain An Uppercase letters.',
                        },
                        validate: (value) => {
                            const lowerCaseReg = /(?=.*[a-z])/
                            if (!lowerCaseReg.test(value)) {
                                return 'Password must include at least one lowercase letter.';
                            }
                            return true
                        }

                    })} type="password" className="input w-full" placeholder="Password" />
                    {errors.password &&
                        <p className='text-red-500'>
                            {errors.password.message}
                        </p>}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary text-black mt-4">Login</button>
                        <p className='font-semibold'>New to StyleDecor? Please <Link state={location?.state} to={"/register"} className='text-green-400 underline'>Register</Link></p>
                </form>
                {/* divider  */}
                <div className='flex items-center mt-3'>
                    <div className='w-1/2 border border-secondary opacity-60 h-px'></div>
                    <p className='mx-2 font-semibold'>OR</p>
                    <div className='w-1/2 border border-secondary opacity-60 h-px'></div>
                </div>

                {/* google login  */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5] rounded-lg">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;