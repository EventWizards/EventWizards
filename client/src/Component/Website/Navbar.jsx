import React, { useEffect, useState } from "react";
import logo from "./image/logoaii.png";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuth } from "../../AuthContext";

function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [user, setUser] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["token"], {
    token: null,
  });
  
  
  const { isAuthenticated, register, isLoggedIn, logout, login } = useAuth();
  console.log(useCookies(["token"]));
  useEffect(() => {
    if (cookie.token !== undefined) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  console.log(cookie.token);
  const location = useLocation();
  if (location.pathname == "/login" || location.pathname == "/signup") {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
    console.log("Menu opened:", !isMenuOpened);
  };
  return (
    <div>
      <nav class=" border-gray-200  ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  ">
          <a href="" class="flex items-center order-1">
            <img src={logo} class="h-14 w-32 mr-3 my-1" alt="Flowbite Logo" />
          </a>
          <div
            className={`items-center justify-between order-3 md:order-2 ${
              isMenuOpened ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1" id="navbar-search${
              isMenuOpened ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1"
            id="navbar-search`}
          >
            <div class=" w-full md:block md:w-auto" id="navbar-default">
              <ul class=" flex text-sm flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-white">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="create event"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Service
                  </Link>
                </li>

                <li>
                  <Link
                    to="profile"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="contact"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FE7A00] md:p-0 dark:text-[#000] md:dark:hover:text-[#FE7A00] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 order-2 md:order-3 p-3">
            <div className="md:hidden">
              <button
                data-collapse-toggle="navbar-default"
                onClick={toggleMenu}
                aria-controls="navbar-search"
                aria-expanded={isMenuOpened}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden={!isMenuOpened}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            {!isAuthenticated() ? (
              <Link to={"/login"}>
                <button className="bg-[#FE7A00] rounded-full text-white h-10  my-3 px-4">
                  Login
                </button>
              </Link>
            ) : (
              <Link to={"/profile"}>
                <img
                  className="rounded-full h-10 w-10 "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9ka6C2Dg57POea71oMW0poPA8jtjGDWacddi1Eg&s"
                  alt="Profile"
                />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
