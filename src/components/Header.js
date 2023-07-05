import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../assets/logo.png";


export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return Navigate(`/search?q=${queryTerm}`)
  }

  const activeClass = "block py-2 pl-3 pr-4 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-700 md:p-0 md:dark:text-teal-500";

  const inActiveClass = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 md:dark:hover:text-teal-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  return (
    <header className='sticky top-0 '>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b-2 border-gray-600">

        <div className="max-w-screen-xl  flex flex-wrap  items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center">
            <img src={Logo} className="h-12 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MovieFlix</span>
          </NavLink>


          <div id='mobile-nav' className="flex md:order-2 ">
            <div className='mr-3'>
              <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input onClick={() => setDarkMode(!darkMode)} type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
              </label>
            </div>

            <button type="button" onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >

              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>

              <span className="sr-only">Search</span>

            </button>


            <div className="relative hidden md:block">

              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">

                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>

                <span className="sr-only">Search icon</span>

              </div>

              <form onSubmit={handleSubmit}>
                <input type="text" name='search' id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search..." autoComplete='off' />
              </form>
            </div>
            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`${hidden ? "hidden" : inActiveClass} items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>


              <form onSubmit={handleSubmit}>
                <input name='search' type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 " placeholder="Search..." autoComplete='off' />
              </form>
            </div>


            <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Top</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Upcoming</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}