import React, { useState } from 'react';
import MyDiv from '../../components/MyDiv';
import SectionTitle from '../Shared/SectionTitle';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PackageCard from '../Shared/PackageCard';


const AllPackages = () => {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')
    const [filterHidden, setFilterHidden] = useState(true)
    const axiosSecure = useAxiosSecure()
    const { data: packages = [] } = useQuery({
        queryKey: ['packages', search,type],
        queryFn: async () => {
            const res = await axiosSecure.get(`/packages?search=${search}&type=${type}`)
            return res.data
        }
    })
    return (
        <MyDiv >
            <div className='flex flex-col md:flex-row items-center justify-between' >
                <h2 className='text-xl font-semibold my-8 pl-5'>All Packages <span className='text-primary font-bold'>({packages.length})</span>
                </h2>
                {/* search */}
                <div>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <input onChange={(e) => setSearch(e.target.value)} type="text" className='md:min-w-80' placeholder="Search here" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* sort section  */}
                <div>
                    <button onClick={() => setFilterHidden(!filterHidden)} className={`btn ${!filterHidden && "hidden"}`}>Filter</button>
                    {
                        !filterHidden && <>
                            <div>
                                {/* type sort */}
                                <div>
                                    <select onChange={(e)=>setType(e.target.value)} defaultValue="Pick a type" className="select">
                                        <option disabled={true}>Pick a type</option>
                                        <option>Home</option>
                                        <option>Wedding</option>
                                        <option>Office</option>
                                        <option>Seminar</option>
                                        <option>Meeting</option>
                                    </select>
                                </div>
                                {/* price */}
                                <div>

                                </div>
                            </div>
                        </>
                    }
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