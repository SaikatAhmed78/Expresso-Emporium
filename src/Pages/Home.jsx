import React from 'react';
import Banner from '../Components/Banner';
import Cups from '../Components/Cups';
import FeaturesSection from '../Components/FeaturesSection';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <FeaturesSection></FeaturesSection>
            <div className='w-11/12 mx-auto p-5'>
            <Cups></Cups>
            </div>
        </div>
    );
};

export default Home;