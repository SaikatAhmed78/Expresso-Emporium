import React from 'react';
import aromaImage from '../../src/assets/icons/1.png';
import qualityImage from '../../src/assets/icons/2.png';
import gradesImage from '../../src/assets/icons/3.png';
import pureGrades from '../../src/assets/icons/4.png';

const FeaturesSection = () => {
    return (
        <div className="bg-[#eceae3] py-12">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <img src={aromaImage} alt="Awesome Aroma" className="w-20 h-20 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#331A15]">Awesome Aroma</h3>
                        <p className="text-gray-600">You will definitely be a fan of the design and aroma of your coffee.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={qualityImage} alt="High Quality" className="w-20 h-20 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#331A15]">High Quality</h3>
                        <p className="text-gray-600">We served the coffee to you maintaining the best quality.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={gradesImage} alt="Pure Grades" className="w-20 h-20 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#331A15]">Pure Grades</h3>
                        <p className="text-gray-600">The coffee is made of the green coffee beans which you will love.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={pureGrades} alt="Proper Roasting" className="w-20 h-20 object-cover rounded-full mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-[#331A15]">Proper Roasting</h3>
                        <p className="text-gray-600">Your coffee is brewed by first roasting the green coffee beans.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
