import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteuser = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
            }
        });
    };

    return (
        <div className="overflow-x-auto p-5 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-[#91572B] mb-8">User Management</h1>
            <div className="shadow-lg rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-[#91572B] text-white">
                            <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                Created At
                            </th>
                            <th className="px-2 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => 
                                <tr key={user._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-2 py-5 border-b border-gray-200 text-sm">
                                        {index + 1}
                                    </td>
                                    <td className="px-2 py-5 border-b border-gray-200 text-sm">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    <td className="px-2 py-5 border-b border-gray-200 text-sm">
                                        {user.email}
                                    </td>
                                    <td className="px-2 py-5 border-b border-gray-200 text-sm">
                                        {user.createdAt}
                                    </td>
                                    <td className="px-2 py-5 border-b border-gray-200 text-sm">
                                        <div className="flex flex-col md:flex-row justify-start md:justify-center space-y-2 md:space-y-0 md:space-x-4">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
                                                <FaEdit className="mr-1" /> Edit
                                            </button>
                                            <button onClick={() => handleDeleteuser(user._id)} className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700 transition duration-300 ease-in-out flex items-center">
                                                <FaTrash className="mr-1" /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
