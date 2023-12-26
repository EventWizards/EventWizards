import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SecondPorfile from "../Website/SecondPorfile";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useAuth } from "../../AuthContext";
import Cookies from "js-cookie";

function Profile() {
  const [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const token = cookies.token;
  const [isSideOpen, setIsSideOpen] = useState(false);

  const { isUserRole } = useAuth();
  const { logout } = useAuth();

  const role = isUserRole() || Cookies.get("role");
  console.log(role);
  useEffect(() => {
    // console.log("Fetching data...");
    // console.log("Headers:", headers);

    const fetchData = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get(
          `http://localhost:3001/users/getuserid`,
          {
            // headers: headers,
          }
        );
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
    <div className="sticky">
      {/* ml-[-100%] */}
      <div className=" md:hidden relative ">
      <button
            aria-label="Close sidebar"
            id="closeSideBar"
            className={`${
              isSideOpen ? "block" : "hidden"
            } lg:hidden h-10 w-10 bg-[#FE7A00] absolute left-40 mt-16  flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white`}
            onClick={()=>setIsSideOpen(!isSideOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
      <button
            aria-label="toggle sidebar"
            id="openSideBar"
            className={`${
              isSideOpen ? "hidden" : "flex"
            } lg:hidden h-10 w-10 bg-gray-600 absolute  mt-16 mr-1 items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800`}
            onClick={()=>setIsSideOpen(!isSideOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments "
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <circle cx="6" cy="10" r="2"></circle>
              <line x1="6" y1="4" x2="6" y2="8"></line>
              <line x1="6" y1="12" x2="6" y2="20"></line>
              <circle cx="12" cy="16" r="2"></circle>
              <line x1="12" y1="4" x2="12" y2="14"></line>
              <line x1="12" y1="18" x2="12" y2="20"></line>
              <circle cx="18" cy="7" r="2"></circle>
              <line x1="18" y1="4" x2="18" y2="5"></line>
              <line x1="18" y1="9" x2="18" y2="20"></line>
            </svg>
          </button>
        

      </div>
      <div
        className={`z-1 top-0 sticky pb-3 px-6 w-full md:translate-x-0 flex flex-col justify-between h-screen border-r bg-[#c65f20] transition-transform duration-300 lg:ml-0 ${
          !isSideOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
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
              <button className="group-hover:text-[#FE7A00]" onClick={logout}>
                Logout
              </button>
            </Link>
          </button>
        </div>
      </div>
      {role != 2 && <Navigate to="/login" replace />}
    </div>
  );
}

export default Profile;
