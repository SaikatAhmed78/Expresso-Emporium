import React from "react";

const AddNewCoffee = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">Add New Coffee</h2>
        <p className="text-gray-600 text-center mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
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
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCoffee;
