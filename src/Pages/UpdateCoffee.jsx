import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeft } from 'react-icons/fa';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
    const navigate = useNavigate();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedName = form.name.value;
        const updatedChef = form.chef.value;
        const updatedSupplier = form.supplier.value;
        const updatedTaste = form.taste.value;
        const updatedCategory = form.category.value;
        const updatedDetails = form.details.value;
        const updatedPhoto = form.photo.value;
        const updatedCoffee = { updatedName, updatedChef, updatedSupplier, updatedTaste, updatedCategory, updatedDetails, updatedPhoto };

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    navigate('/');
                }
            });
    };

    return (
        <div className="min-h-screen bg-[#f4f3f0] flex flex-col items-center justify-center">
            <button
                className="self-start ml-4 mb-4 bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 focus:outline-none flex items-center"
                onClick={() => navigate('/')}
            >
                <FaArrowLeft className="mr-2" /> Home
            </button>
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-center mb-4">Update Existing Coffee Details</h2>
                <p className="text-gray-600 text-center mb-6">
                It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={name}
                            placeholder="Enter coffee name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="chef">
                            Chef
                        </label>
                        <input
                            type="text"
                            name="chef"
                            id="chef"
                            defaultValue={chef}
                            placeholder="Enter coffee chef"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="supplier">
                            Supplier
                        </label>
                        <input
                            type="text"
                            name="supplier"
                            id="supplier"
                            defaultValue={supplier}
                            placeholder="Enter coffee supplier"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="taste">
                            Taste
                        </label>
                        <input
                            type="text"
                            name="taste"
                            id="taste"
                            defaultValue={taste}
                            placeholder="Enter coffee taste"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="category">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            defaultValue={category}
                            placeholder="Enter coffee category"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="details">
                            Details
                        </label>
                        <input
                            type="text"
                            name="details"
                            id="details"
                            defaultValue={details}
                            placeholder="Enter coffee details"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="photo">
                            Photo
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            defaultValue={photo}
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="md:col-span-2 text-center">
                        <input
                            type="submit"
                            value="Update Coffee Details"
                            className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 btn btn-block"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
