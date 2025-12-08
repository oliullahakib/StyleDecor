import React from 'react';
import Banner from '../Banner/Banner';
import TopDecorators from '../TopDecorators/TopDecorators';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Services/>
           <TopDecorators/>
        </div>
    );
};

export default Home;