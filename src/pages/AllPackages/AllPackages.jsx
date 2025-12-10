import React, { useState } from 'react';
import MyDiv from '../../components/MyDiv';
import SectionTitle from '../Shared/SectionTitle';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PackageCard from '../Shared/PackageCard';


const AllPackages = () => {
    const [search, setSearch] = useState()
    const axiosSecure = useAxiosSecure()
    const { data: packages = [] } = useQuery({
        queryKey: ['packages',search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/packages?search=${search}`)
            return res.data
        }
    })

    return (
        <MyDiv >
            <div className='flex items-center justify-between' >
                <h2 className='text-xl font-semibold my-8 pl-5'>All Packages <span className='text-primary font-bold'>({packages.length})</span>
                </h2>
                {/* search */}
                <div>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search here" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-3 mb-8'>
                {
                    packages.map(service => <PackageCard key={service._id} service={service} />)
                }
            </div>
        </MyDiv>
    );
};

export default AllPackages;