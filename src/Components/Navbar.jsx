import React from 'react';
import logo from '../../src/assets/more/logo1.png';
const Navbar = () => {
    return (
        <nav className="bg-[#372727] text-white p-4 rounded">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
                    <h2 className="text-lg font-bold">Expresso Emporium</h2>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
