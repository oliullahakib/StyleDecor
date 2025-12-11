import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import MyDiv from '../../../components/MyDiv';
import PackageCard from '../../Shared/PackageCard';
import { Link } from 'react-router';

const Services = ({services}) => {
    return (
        <MyDiv className={'py-5 px-5 bg-linear-to-b from-[#efe7c37d] to-[#AF836160]'}>
            <SectionTitle className={'text-center'} title={'Our Services'} />
            <p className='text-accent text-center w-2/3 mx-auto'>We don’t just plan events, we create experiences that live forever.
                Your wedding or celebration is a chapter in your love story, and we ensure every detail reflects you.</p>
            <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    services.map(service=><PackageCard key={service._id} service={service}/>)
                }
            </div>
           <div className='flex justify-center items-center my-10 '>
             <Link to={'all-packages'} className='btn btn-secondary '>See All</Link>
           </div>
        </MyDiv>
    );
};

export default Services;