import React from 'react';
import cupImage1 from '../../src/assets/cups/Rectangle 9.png';
import cupImage2 from '../../src/assets/cups/Rectangle 10.png';
import cupImage3 from '../../src/assets/cups/Rectangle 11.png';
import cupImage4 from '../../src/assets/cups/Rectangle 12.png';
import cupImage5 from '../../src/assets/cups/Rectangle 13.png';
import cupImage6 from '../../src/assets/cups/Rectangle 14.png';
import cupImage7 from '../../src/assets/cups/Rectangle 15.png';
import cupImage8 from '../../src/assets/cups/Rectangle 16.png';

const Cups = () => {
    return (
        <div className="bg-gray-100 py-8">
            <h5 className='text-center'>Follow Us Now</h5>
            <h2 className="text-3xl font-bold text-center mb-8 text-[#331A15]">Follow On Instagram</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage1} alt="Cup 1" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage2} alt="Cup 2" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage3} alt="Cup 3" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage4} alt="Cup 4" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage5} alt="Cup 5" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage6} alt="Cup 6" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage7} alt="Cup 7" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                    <img src={cupImage8} alt="Cup 8" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Cups;
