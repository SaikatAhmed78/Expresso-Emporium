import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../../src/assets/more/6.jpeg';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="relative bg-cover bg-center h-96 shadow-lg overflow-hidden" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold bg-[#00000080] p-2 rounded">Would you like a Cup of Delicious Coffee?</h1>
                <p className="w-full md:w-1/3 text-lg md:text-xl bg-[#00000080] p-2 rounded">
                    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>
                <button 
                    className="px-4 py-2 bg-[#e3b577] text-white font-semibold rounded-lg hover:bg-[#d9a05c] transition duration-300 ease-in-out shadow-md" 
                    onClick={() => navigate('/learnMore')}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Banner;
