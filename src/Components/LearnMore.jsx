import React from 'react';
import coffeeProcess from '../../src/assets/about/isometric-coffee-production-horizontal-flowchart-composition-with-isolated-infographic-elements-plants-with-beans-packaging-people_1284-27733.avif'

const LearnMore = () => {
    return (
        <div className="min-h-screen bg-[#f4f3f0] flex flex-col items-center py-16">
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-7xl text-center">
                <h1 className="text-5xl font-bold text-[#91572B] mb-12">Discover More About Our Coffee</h1>
                <p className="text-gray-700 text-lg mb-6">
                    At Espresso Emporium, we believe in delivering the finest quality coffee. Each cup is a masterpiece, crafted with passion and precision. Our coffee beans are sourced from the best regions around the world, ensuring that every sip is a delightful experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Journey</h2>
                        <p className="text-gray-700">
                            Learn about our humble beginnings and how we grew to become a beloved coffee brand known for quality and community engagement.
                        </p>
                    </div>
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Beans</h2>
                        <p className="text-gray-700">
                            Discover the regions we source our coffee beans from and the meticulous process that ensures top-notch quality.
                        </p>
                    </div>
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Process</h2>
                        <p className="text-gray-700">
                            From roasting to brewing, learn about the processes we employ to bring you the perfect cup of coffee.
                        </p>
                    </div>
                </div>
                <div className="relative mb-12">
                    <img
                        src={coffeeProcess}
                        alt="Coffee Process"
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold">
                        Our Craft
                    </div>
                </div>
                <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md mb-12">
                    <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Commitment to Sustainability</h2>
                    <p className="text-gray-700">
                        We are dedicated to promoting sustainable practices. Learn more about our efforts to support the environment and our community.
                    </p>
                </div>
                <button className="px-6 py-3 bg-[#e3b577] text-white font-semibold rounded-lg hover:bg-[#d9a05c] transition duration-300 ease-in-out shadow-md" onClick={() => window.history.back()}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default LearnMore;
