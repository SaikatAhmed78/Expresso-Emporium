import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';

const Users = () => {
    const { user } = useContext(AuthContext);
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
                            text: "The user has been deleted.",
                            icon: "success"
                        });
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
            }
        });
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
                <h1 className="text-4xl font-bold text-center text-[#91572B]">Please sign in to view user management</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <h1 className="text-4xl font-bold text-center text-[#91572B] mb-8">User Management</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr className="bg-[#91572B] text-white">
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                    #
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                    Created At
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                    Last Signin
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => 
                                    <tr key={user._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            {index + 1}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            {user.firstName} {user.lastName}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            {user.email}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            {user.createdAt}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            {user.lastSignInTime}
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            <div className="flex justify-center space-x-4">
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
                                                    <FaEdit className="mr-2" /> Edit
                                                </button>
                                                <button onClick={() => handleDeleteuser(user._id)} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 ease-in-out flex items-center">
                                                    <FaTrash className="mr-2" /> Delete
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
        </div>
    );
};

export default Users;
