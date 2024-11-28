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
        <div className="bg-gray-50 py-12 px-4">
  
            <div className="text-center mb-8">
                <h5 className="text-lg font-medium text-gray-600 tracking-wider">Follow Us Now</h5>
                <h2 className="text-4xl font-extrabold text-[#331A15] mt-2">
                    Follow On Instagram
                </h2>
                <p className="text-gray-500 mt-3">
                    Discover our latest designs and updates on Instagram. Stay connected with us!
                </p>
            </div>

   
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[cupImage1, cupImage2, cupImage3, cupImage4, cupImage5, cupImage6, cupImage7, cupImage8].map(
                    (image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                        >
                            <img
                                src={image}
                                alt={`Cup ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-bold text-lg">View More</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Cups;
