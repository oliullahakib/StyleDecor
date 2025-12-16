import React from 'react';
import MyDiv from '../../components/MyDiv';

const Contact = () => {
    return (
        <MyDiv className={'flex-1 '}>
            <div className='flex flex-col items-center bg-base-300 mt-10 py-5 px-8 rounded-2xl'>
                <h3 className='text-2xl'>Contact Info</h3>
                <p> <span className='text-primary font-bold'>Hotline:</span>+8801836109573 </p>
                <p> <span className='text-primary font-bold'>Email:</span>oliullahakib@gmail.com </p>
                <p> <span className='text-primary font-bold'>Working hours:</span>10AM to 7PM </p>
                <h3 className='text-2xl mt-2'>Address Info</h3>
                <p>Bogcottor,102 NS Roade,Kushtia</p>
            </div>
        </MyDiv>
    );
};

export default Contact;