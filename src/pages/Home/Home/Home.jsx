import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TopDecorators from '../TopDecorators/TopDecorators';
import Services from '../Services/Services';
import ServiceCoverage from '../ServiceCoverage/ServiceCoverage';
import { useLoaderData } from 'react-router';

const Home = () => {
 const [serviceCenters, setServiceCenters] = useState([])
 const services = useLoaderData()
     useEffect(() => {
       fetch('/serviceCenters.json')
       .then(res=>res.json())
       .then(data=>setServiceCenters(data))
       
     }, [])
     
    return (
        <div>
           <Banner services={services}/>
           <Services services={services} />
           <TopDecorators/>
           <ServiceCoverage serviceCenters={serviceCenters} />
        </div>
    );
};

export default Home;