import React from "react";
import logo from './image/logo.png';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-white">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        
         
          <a href="https://flowbite.com/" class="flex items-center">
            <img src= {logo} class="h-20 w-40 mr-3" alt="Flowbite Logo" />
            
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
              <li>
                <Link
                  to ="/"
                  class="block py-2 pl-3 pr-4 text-white bg-[#FE7A00] rounded md:bg-transparent md:hover:text-[#FE7A00] md:dark:hover:text-[#FE7A00] md:p-0 dark:text-[#FE7A00] "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                 to ="create event"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to ="profile"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to ="about"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              
              <li>
                <Link
                 to ="contact"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          <Link to ="login">
          <button className="bg-[#FE7A00] rounded-full text-white h-10  my-3 px-4">
                  Signin/Signup
                </button></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
