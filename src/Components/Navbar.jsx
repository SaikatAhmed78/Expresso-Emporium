import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../../src/assets/more/logo1.png';

const Navbar = () => {
    return (
        <nav className="bg-[#372727] text-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
                    <h2 className="text-lg font-bold ml-2">Expresso Emporium</h2>
                </div>

                <div className="hidden lg:flex items-center space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-bold underline"
                                : "hover:text-gray-400"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-bold underline"
                                : "hover:text-gray-400"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/addCoffee"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-bold underline"
                                : "hover:text-gray-400"
                        }
                    >
                        Add Coffee
                    </NavLink>
                    <NavLink
                        to="/signIn"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-bold underline"
                                : "hover:text-gray-400"
                        }
                    >
                        SignIn
                    </NavLink>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        <FaInstagram />
                    </a>
                </div>

                <div className="lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#372727] rounded-box w-52"
                        >
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-yellow-400 font-bold underline"
                                            : "hover:text-gray-400"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-yellow-400 font-bold underline"
                                            : "hover:text-gray-400"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addCoffee"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-yellow-400 font-bold underline"
                                            : "hover:text-gray-400"
                                    }
                                >
                                    Add Coffee
                                </NavLink>

                                <NavLink
                        to="/signIn"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-bold underline"
                                : "hover:text-gray-400"
                        }
                    >
                        SignIn
                    </NavLink>
                            </li>
                            <li>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-yellow-500"
                                />
                            </li>
                            <li className="flex items-center space-x-4">
                                <a href="#" className="hover:text-gray-400">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="hover:text-gray-400">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="hover:text-gray-400">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
