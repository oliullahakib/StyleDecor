import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import { useLoaderData } from 'react-router';
import MyDiv from '../../components/MyDiv';
const ServiceCoveragePage = () => {
    const position = [23.68, 90.35]
    const mapRef = useRef()
    const serviceCenters = useLoaderData()
    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value.toLowerCase()
        const district = serviceCenters.find(center => center.district.toLowerCase().includes(searchValue))
        console.log(district)
        const cood = [district?.latitude, district?.longitude]
        mapRef.current.flyTo(cood, 14)
    }
    return (
        <div className='px-2'>
            <MyDiv>
                <h1 className='text-3xl md:text-6xl text-center text-accent-content mt-5 font-extrabold'>We are available in 64 districts</h1>
                <h2 className=' md:text-3xl text-center text-accent font-extrabold'>We deliver almost all over Bangladesh</h2>
                <div className='flex justify-center relative'>
                    <form onSubmit={handleSearch} className="input join my-5 validator  join-item">
                        <input name='search' type="text" placeholder="Search here" />
                        <button className="btn btn-primary absolute top-0 right-0 ">Search</button>
                    </form>
                </div>
            </MyDiv>
            {/* map  */}
            <div>

                <div className='border min-h-96 my-5'>
                    <MapContainer ref={mapRef} className='w-full h-[550px]' center={position} zoom={7} scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            serviceCenters.map((center,i) => <Marker key={i} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>{center.district}</strong> <br /> {center.covered_area.join(', ')}
                                </Popup>
                            </Marker>)
                        }
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default ServiceCoveragePage;