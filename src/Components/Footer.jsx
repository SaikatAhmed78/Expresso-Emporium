import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import bgImage from '../../src/assets/more/10.png'; 
import logo from '../../src/assets/more/logo1.png'; 

const Footer = () => {
    return (
        <footer className="bg-cover bg-center py-12" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="bg-black bg-opacity-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                        <div className="col-span-1 text-white">
                            <img src={logo} alt="Espresso Emporium" className="h-12 mb-4" />
                            <h2 className="text-2xl font-bold mb-4 text-[#331A15]">Espresso Emporium</h2>
                            <p className="mb-4">
                                Always ready to be your friend! Come & Contact with us to share your memorable moments with your best companion.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                                <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                                <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                                <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
                            </div>
                        </div>
             
                        <div className="col-span-1 text-white">
                            <h2 className="text-2xl font-bold mb-4 text-[#331A15]">Get in Touch</h2>
                            <ul>
                                <li className="mb-2"><span className="font-bold">Phone:</span> +88 01303390718</li>
                                <li className="mb-2"><span className="font-bold">Email:</span> saiaktahmed78@gmail.com</li>
                                <li className="mb-2"><span className="font-bold">Address:</span> 92/1 Shapla Chattor Street, Mithapukur, Rangpure</li>
                            </ul>
                        </div>
                    
                        <div className="col-span-1 text-white">
                            <h2 className="text-2xl font-bold mb-4 text-[#331A15]">Connect with Us</h2>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input type="text" id="name" className="input input-bordered w-full" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" id="email" className="input input-bordered w-full" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea id="message" className="input input-bordered w-full h-24"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center text-white mt-8">
                        <p>&copy; 2024 Espresso Emporium | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
