import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/more/logo1.png';

const Navbar = () => {
    return (
        <nav className="bg-[#372727] text-white p-4 rounded shadow-md">
            <div className="navbar container mx-auto">
          
                <div className="navbar-start">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
                        <h2 className="text-lg font-bold ml-2">Expresso Emporium</h2>
                    </div>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
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
                        </li>
                        <li>
                            <NavLink
                                to="/updateCoffee"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-yellow-400 font-bold underline"
                                        : "hover:text-gray-400"
                                }
                            >
                                Update Coffee
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="navbar-end lg:hidden">
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
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#372727] rounded-box w-52 space-y-2"
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
                            </li>
                            <li>
                                <NavLink
                                    to="/updateCoffee"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-yellow-400 font-bold underline"
                                            : "hover:text-gray-400"
                                    }
                                >
                                    Update Coffee
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
