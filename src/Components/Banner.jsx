import React from 'react';
import bannerImage from '../../src/assets/more/6.jpeg';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-96 rounded-lg" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8">
                <h1 className="text-2xl md:text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                <p className="mt-4 w-1/2 text-lg md:text-xl">We offer the best coffee in town with a wide variety of flavors that are guaranteed to satisfy your taste buds.</p>
                <button className="mt-6 px-6 py-3 bg-[#e3b577] text-white rounded-lg hover:bg-green-600">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;
