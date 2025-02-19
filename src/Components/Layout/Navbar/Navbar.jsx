import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='lg:mt-7 md:mt-7 mt-5'>
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-2xl px-4 mx-auto">
                    <a href="#" className="flex items-center">
                        <NavLink to="/" className="self-center text-2xl lg:text-4xl font-extrabold whitespace-nowrap dark:text-white">Boi Lagbe</NavLink>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <NavLink to="/signin"
                            className="text-white bg-green-600 hover:bg-purple-800 focus:ring-4 focus:ring-cyan-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 mr-3 md:mr-4 lg:mr-5">Sign In</NavLink>
                        <NavLink to="/signup"
                            className="text-white bg-cyan-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign Up</NavLink>
                    </div>
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pl-3 pr-4 text-gray-400 bg-green-700 lg:bg-transparent lg:text-emerald-500 border border-green-500 rounded-lg p-4 lg:px-3 dark:text-white"
                                            : "block py-2 pl-3 pr-4 text-gray-400 lg:bg-transparent lg:text-slate-500 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}
                                    aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/listedBooks"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pl-3 pr-4 text-gray-400 bg-green-700 lg:bg-transparent lg:text-emerald-500 border border-green-500 rounded-lg p-4 lg:px-3 dark:text-white"
                                            : "block py-2 pl-3 pr-4 text-gray-400 lg:bg-transparent lg:text-slate-500 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}
                                >Listed Books</NavLink>
                            </li>
                            <li>
                                <NavLink to="/readbooks"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pl-3 pr-4 text-gray-400 bg-green-700 lg:bg-transparent lg:text-emerald-500 border border-green-500 rounded-lg p-4 lg:px-3 dark:text-white"
                                            : "block py-2 pl-3 pr-4 text-gray-400 lg:bg-transparent lg:text-slate-500 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}>Page to Read</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;