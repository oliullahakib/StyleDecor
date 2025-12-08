import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import MyDiv from '../../../components/MyDiv';

const Services = () => {
    return (
        <MyDiv className={'py-5 px-5 bg-linear-to-b from-[#efe7c37d] to-[#AF836160]'}>
            <SectionTitle className={'text-center'} title={'Our Services'} />
            <p className='text-accent text-center w-2/3 mx-auto'>We don’t just plan events, we create experiences that live forever.
                Your wedding or celebration is a chapter in your love story, and we ensure every detail reflects you.</p>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                <div className="card bg-base-100   shadow-sm">
                    <figure>
                        <img
                            className='h-full'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>

                </div>
                <div className="card bg-base-100   shadow-sm">
                    <figure>
                        <img
                            className='h-full'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>

                </div>
                <div className="card bg-base-100   shadow-sm">
                    <figure>
                        <img
                            className='h-full'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>

                </div>
                <div className="card bg-base-100   shadow-sm">
                    <figure>
                        <img
                            className='h-full'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    </div>

                </div>
            </div>
           <div className='flex justify-center items-center my-10 '>
             <button className='btn btn-secondary '>Book Now</button>
           </div>
        </MyDiv>
    );
};

export default Services;