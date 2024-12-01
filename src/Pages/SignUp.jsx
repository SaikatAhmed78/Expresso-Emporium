import React, { useContext } from 'react';
import signupImg from '../../src/assets/form/sign-up-concept-illustration_114360-7965.avif';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { creatUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(firstName, lastName, email, password);
      
        creatUser(email, password)
        .then(result => {
            const createdAt = result?.user?.metadata?.creationTime;

            const newUser = { firstName, lastName, email, createdAt };

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your account has been created successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-[#91572B]">Create Your Account</h2>
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#91572B] text-white font-semibold rounded-md shadow-md hover:bg-[#7d4f20] transition duration-300 ease-in-out"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already a member? <Link to='/signIn' className="text-[#91572B] hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
            <img
                src={signupImg}
                alt="Sign Up"
                className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg ml-8"
            />
        </div>
    );
};

export default SignUp;
