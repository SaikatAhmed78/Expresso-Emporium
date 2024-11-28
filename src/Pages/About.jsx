import React from 'react';
import story from '../../src/assets/about/A cozy coffee shop interior with warm lighting, coffee cups and pastries on a wooden table, and a friendly barista behind the counter.png'
import team from '../../src/assets/about/young-happy-waiter-communicating-with-group-customers-cafe_637285-7840.avif'

const About = () => {
    return (
        <div className="min-h-screen bg-[#f4f3f0] flex flex-col items-center py-16">
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-7xl">
                <h1 className="text-5xl font-bold text-[#91572B] text-center mb-12">About Us</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-700 text-lg mb-6">
                            Welcome to Espresso Emporium, where passion meets perfection in every cup of coffee. Our journey began with a dream to create an exceptional coffee experience for our community.
                        </p>
                        <p className="text-gray-700 text-lg">
                            At Espresso Emporium, we believe in quality, sustainability, and community engagement. Join us on a journey to discover the finest coffee from around the world.
                        </p>
                    </div>
                    <img
                        src={story}
                        alt="Our Story"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Mission</h2>
                        <p className="text-gray-700">
                            To serve the finest quality coffee, sourced from the best regions around the world, while promoting sustainability and community engagement.
                        </p>
                    </div>
              
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Vision</h2>
                        <p className="text-gray-700">
                            To be the go-to coffee destination for coffee lovers, known for our commitment to excellence, innovation, and environmental responsibility.
                        </p>
                    </div>
  
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Values</h2>
                        <p className="text-gray-700">
                            Quality, Sustainability, Community, Innovation, and Customer Focus.
                        </p>
                    </div>
                </div>
                <div className="relative mb-12">
                    <img
                        src={team}
                        alt="Our Team"
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-3xl font-bold">
                        Our Dedicated Team
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our History</h2>
                        <p className="text-gray-700">
                            Founded in 2020, Espresso Emporium has grown from a small local café to a beloved coffee brand with multiple locations. Our dedication to quality and community has been the driving force behind our success.
                        </p>
                    </div>
  
                    <div className="p-6 bg-[#f9f9f9] rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#331A15] mb-4">Our Team</h2>
                        <p className="text-gray-700">
                            Our team of expert baristas, chefs, and coffee enthusiasts are passionate about delivering the best coffee experience. We believe in teamwork, creativity, and continuous learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
