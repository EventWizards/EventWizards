import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SecondPorfile from "../Website/SecondPorfile";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useAuth } from "../../AuthContext";
import Cookies from "js-cookie";

function Profile() {
  const [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const token = cookies.token;
  const [isSideOpen, setIsSideOpen] = useState(false);
  
  const {isUserRole} = useAuth()
  const {logout} = useAuth()
  
  const role = isUserRole() || Cookies.get('role')
  console.log(role);
  useEffect(() => {
    // console.log("Fetching data...");
    // console.log("Headers:", headers);

    const fetchData = async () => {
      try {
        axios.defaults.headers.common['Authorization'] = token
        const response = await axios.get(`http://localhost:3001/users/getuserid`, {
          // headers: headers,
        });
        console.log("Response:", response.data);
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  const openSidebar = () => {
    setIsSideOpen(true);
  };

  const closeSidebar = () => {
    setIsSideOpen(false);
  };

  const handleLogout = () => {
    // Remove the "token" cookie when the user logs out
    removeCookie("token");
  };
  return (
    <>
      {/* ml-[-100%] */}
      <div className="   z-1 top-0 sticky  pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-[#c65f20] transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ">
        
        <div>
          
          <div className="mt-8 text-center">
            <img
              src={user.user_image}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              <span>{user.first_name} </span>
              {user.last_name}
            </h5>
            <span className="hidden text-gray-400 lg:block"></span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-orange-600 to-orange-400 "
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-orange-400 dark:fill-slate-600"
                  />
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-orange-200 group-hover:text-orange-300"
                  />
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-orange-300"
                  />
                </svg>
                <Link to="profilePrivate">
                  <button className="-mr-1 font-medium">Profile</button>
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-orange-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-orange-500"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <Link to="orderEvent">
                  <button className="group-hover:text-orange-300">Event</button>
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-orange-500"
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-orange-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <Link to="orderTicket">
                  <button className="group-hover:text-orange-300">
                    Ticket
                  </button>
                </Link>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group" onClick={openSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span>Show Sidebar</span>
          </button>
        </div>
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </Link>
            <Link to="/">
              <button className="group-hover:text-[#FE7A00]" onClick={logout}>Logout</button>
            </Link>
          </button>
        </div>
      </div>
      {role != 2 &&
   (<Navigate to="/login" replace/>)
  }
    </>
  );
}

export default Profile;
