import React from 'react';
import MyDiv from '../../components/MyDiv';
import SectionTitle from '../Shared/SectionTitle';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PackageCard from '../Shared/PackageCard';


const AllPackages = () => {
    const axiosSecure = useAxiosSecure()
    const {data:packages = []}=useQuery({
        queryKey:['packages'],
        queryFn:async()=>{
          const res = await axiosSecure.get('/packages')
          return res.data

        }
    })
    console.log(packages)
    return (
        <MyDiv >
           <SectionTitle title={'All Packages'}/>
           <h2 className='text-xl font-semibold my-8 pl-5'>All Packages <span className='text-primary font-bold'>({packages.length})</span> </h2>
           <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-3 mb-8'>
            {
                packages.map(service=><PackageCard key={service._id} service={service}/>)
            }
           </div>
        </MyDiv>
    );
};

export default AllPackages;