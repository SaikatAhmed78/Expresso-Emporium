import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const DisplayCoffees = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="flex items-center bg-[#F3F4F6] rounded-lg shadow-lg p-4 mx-auto my-4 max-w-4xl border border-gray-300">

            <img
                className="w-24 h-24 object-cover rounded-lg"
                src={photo}
                alt={name}
            />


            <div className="flex-1 ml-4">
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Chef:</span> {chef}
                </p>
                <p className="text-gray-700 text-sm">
                    <span className="font-semibold">{details}</span>
                </p>
                <p className="text-gray-700 text-sm">
                    <span className="font-semibold">{taste}</span>
                </p>
                <p className="text-gray-700 text-sm">
                    <span className="font-semibold">{category}</span>
                </p>
          
            </div>

     
            <div className="flex flex-col items-center space-y-3">
                <button className="text-blue-500 hover:text-blue-700 transition flex flex-col items-center">
                    <FaEye size={24} />
                    <span className="text-xs font-medium mt-1">View</span>
                </button>
                <button className="text-green-500 hover:text-green-700 transition flex flex-col items-center">
                    <FaEdit size={24} />
                    <span className="text-xs font-medium mt-1">Edit</span>
                </button>
                <button className="text-red-500 hover:text-red-700 transition flex flex-col items-center">
                    <FaTrash size={24} />
                    <span className="text-xs font-medium mt-1">Delete</span>
                </button>
            </div>
        </div>
    );
};

export default DisplayCoffees;