import React from 'react';
import Banner from '../Components/Banner';
import Cups from '../Components/Cups';
import FeaturesSection from '../Components/FeaturesSection';
import { useLoaderData } from 'react-router-dom';
import DisplayCoffees from '../Components/DisplayCoffees';

const Home = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <Banner />
            <FeaturesSection />

    
            <div className="text-center my-8">
                <h1 className="text-4xl font-bold text-[#91572B]">--- Sip & Savor ---</h1>
                <h2 className="text-3xl font-bold text-[#331A15] mt-4">Our Popular Products</h2>
                <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                    Add Coffee
                </button>
            </div>


            <div className="w-11/12 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {coffees.map((coffee) => (
                    <DisplayCoffees key={coffee._id} coffee={coffee} />
                ))}
            </div>

            <div className="w-11/12 mx-auto p-5">
                <Cups />
            </div>
        </div>
    );
};

export default Home;
