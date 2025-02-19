import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import user profile icon

function Navbar() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleSignOut = () => {
        localStorage.removeItem('isAuthenticated'); // Remove authentication state
        window.location.reload(); // Refresh page to update UI
    };

    return (
        <div className='lg:mt-7 md:mt-7 mt-5'>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-2xl px-4 mx-auto">
                    <NavLink to="/" className="self-center text-2xl lg:text-4xl font-extrabold whitespace-nowrap dark:text-white">Boi Lagbe</NavLink>

                    <div className="flex items-center lg:order-2">
                        {isAuthenticated ? (
                            <>
                                {/* Profile Icon */}
                                <NavLink to="/profile" className="text-gray-500 hover:text-green-600 text-3xl mr-4">
                                    <FaUserCircle size={35} />
                                </NavLink>

                                {/* Sign Out Button */}
                                <button
                                    onClick={handleSignOut}
                                    className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Sign In & Sign Up Buttons (Only if not signed in) */}
                                <NavLink to="/signin" className="text-white bg-green-600 hover:bg-purple-800 rounded-lg text-sm px-4 lg:px-5 py-2 mr-3 md:mr-4 lg:mr-5">
                                    Sign In
                                </NavLink>
                                <NavLink to="/signup" className="text-white bg-cyan-500 hover:bg-purple-800 rounded-lg text-sm px-4 lg:px-5 py-2">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>

                    {/* Navigation Menu */}
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                            <li><NavLink to="/listedBooks" className="nav-link">Listed Books</NavLink></li>
                            <li><NavLink to="/readbooks" className="nav-link">Page to Read</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
