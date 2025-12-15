import React, { useEffect, useState } from 'react';
import { IoBagCheckSharp } from "react-icons/io5";
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useSearchParams } from 'react-router';


const PaymentSuccess = () => {
    const [paymentInfo, setPaymentInfo] = useState({})
    const [searchParams] = useSearchParams();
    const sesson_id=searchParams.get("session_id")
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
      axiosSecure.patch(`/payment-success?session_id=${sesson_id}`)
         .then(res=>{
        console.log(res?.data)
        setPaymentInfo({
            transactionId:res.data.transactionId,
            trakingId:res.data.trakingId
        })
    })
    }, [axiosSecure,sesson_id])
    
    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>
          <IoBagCheckSharp size={50} color='green' />
          <h2 className='text-2xl text-green-400 font-semibold mb-5'>Payment Success</h2>
          <p className='text-[12px] sm:text-lg'> <span className='font-bold'>Transaction Id:</span> {paymentInfo.transactionId}</p>
          <p className='text-[12px] sm:text-lg' > <span className='font-bold'>Traking Id:</span> {paymentInfo.trakingId} </p>
        </div>
    );
};

export default PaymentSuccess;