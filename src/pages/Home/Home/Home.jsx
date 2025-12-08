import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TopDecorators from '../TopDecorators/TopDecorators';
import Services from '../Services/Services';
import ServiceCoverage from '../ServiceCoverage/ServiceCoverage';

const Home = () => {
 const [serviceCenters, setServiceCenters] = useState([])
     useEffect(() => {
       fetch('/serviceCenters.json')
       .then(res=>res.json())
       .then(data=>setServiceCenters(data))
       
     }, [])
     
     console.log(serviceCenters)
    return (
        <div>
           <Banner/>
           <Services  />
           <TopDecorators/>
           <ServiceCoverage serviceCenters={serviceCenters} />
        </div>
    );
};

export default Home;