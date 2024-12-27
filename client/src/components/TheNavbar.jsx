import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const TheNavbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Developer TutorialRequest</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-semibold flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="block text-white hover:text-blue-700" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create" className="block text-white hover:text-blue-700">Create</NavLink>
                        </li>
                        <li>
                            <a href="https://github.com/Dhanushmathan/tutorial-request" className="flex items-center py-1 px-3 bg-blue-800 hover:bg-blue-900 text-white rounded" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='mr-1'><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="32" strokeDashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate></path><path strokeDasharray="10" strokeDashoffset="10" d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate></path></g></svg>
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TheNavbar;