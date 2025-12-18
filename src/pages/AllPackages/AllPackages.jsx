import React, { useState } from 'react';
import MyDiv from '../../components/MyDiv';
import { useQuery } from '@tanstack/react-query';
import PackageCard from '../Shared/PackageCard';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';



const AllPackages = () => {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('')
    const [filterHidden, setFilterHidden] = useState(true)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const { data: packages = [] } = useQuery({
        queryKey: ['packages', search, type, minPrice, maxPrice],
        queryFn: async () => {
            const res = await axios.get(`https://style-decor-server-iota.vercel.app/packages?search=${search}&type=${type}&min=${minPrice}&max=${maxPrice}`)
            return res.data
        }
    })

    const handlePriceBySort = (e) => {
        e.preventDefault()
        const minPrice = parseInt(e.target.minPrice.value)
        const maxPrice = parseInt(e.target.maxPrice.value)
        // validation 
        if (minPrice < 0 || maxPrice < 0) return toast.error("Filter is not valid")
        if (maxPrice < minPrice) return toast.error("Max have to be bigger then Min price")
        // assinge value 
        setMinPrice(minPrice)
        setMaxPrice(maxPrice)
    }
    return (
        <MyDiv className={''} >
            <div className='flex flex-col lg:flex-row items-center justify-between px-3' >
                <h2 className='text-xl font-semibold my-8'>All Packages <span className='text-primary font-bold'>({packages.length})</span>
                </h2>
                {/* search */}
                <div>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <input onChange={(e) => setSearch(e.target.value)} type="text" className='w-50 sm:min-w-80' placeholder="Search here" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* sort section  */}
                <div>
                    <button onClick={() => setFilterHidden(!filterHidden)} className={`btn ${!filterHidden && "hidden"} mt-3 mb-4 btn-secondary text-black`}>Filter {filterHidden && <FaArrowDown />}</button>
                    {
                        !filterHidden && <>
                            <div className='flex flex-col-reverse lg:flex-row my-3 gap-3 items-center'>
                                <button onClick={() => setFilterHidden(!filterHidden)} className={`btn ${!filterHidden && "mt-3 mb-4 btn-secondary text-black"}`}>Filter {!filterHidden && <FaArrowUp />}</button>
                                {/* type sort */}
                                <div>
                                    <select onChange={(e) => setType(e.target.value)} defaultValue="sort by type" className="select">
                                        <option disabled={true}>sort by type</option>
                                        <option>Home</option>
                                        <option>Wedding</option>
                                        <option>Office</option>
                                        <option>Seminar</option>
                                        <option>Meeting</option>
                                    </select>
                                </div>
                                {/* price */}
                                <form onSubmit={handlePriceBySort} className='flex flex-col md:flex-row gap-3 border border-secondary px-3 py-2 rounded-2xl'>
                                    <div className='flex flex-col md:flex-row gap-3'>
                                        <input required name="minPrice" type="number" className='input' placeholder="min price" />
                                        <input required name="maxPrice" type="number" className='input' placeholder="max price" />
                                    </div>
                                    <button className='btn btn-primary'>Apply</button>
                                </form>
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