import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useAuth } from "../AuthContext";

function SidePar() {
  const [user, setUser] = useState({
    // ... other properties
  });
  const {logout} = useAuth()
  useEffect(() => {
    // console.log("Fetching data...");
    // console.log("Headers:", headers);

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/Login`, {
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
  return (
    <div className=" bg-gray-50   ">
      {/* Sidebar */}
      <div className="  left-0 flex h-full w-72 flex-col overflow-hidden rounded-r-2xl bg-[#c65f20] text-white">
        <h1 className="mt-10  text-center text-3xl font-bold"> EventWizards</h1>
        <ul className="mt-20 space-y-3">
          <li className="relative flex cursor-pointer  space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </span>
            <Link to="/">
              <span className="">Home</span>
            </Link>
          </li>

          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
            <span>
              <svg
                class="text-gray-300 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
                <circle cx="9" cy="7" r="4" />{" "}
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />{" "}
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <Link to="users">
              <span className="">User</span>
            </Link>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
            <span>
              <svg
                class="text-gray-300 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
                <line x1="16" y1="3" x2="16" y2="7" />{" "}
                <line x1="8" y1="3" x2="8" y2="7" />{" "}
                <line x1="4" y1="11" x2="20" y2="11" />{" "}
                <rect x="8" y="15" width="2" height="2" />
              </svg>
            </span>
            <Link to="events">
              <span className="">Events</span>
            </Link>
            <svg
              className="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="399.349 57.696 100.163 402.081"
              width="1em"
              height="4em"
            >
              <path
                fill="currentColor"
                d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
              />
            </svg>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
            <span>
              <svg
                class="text-gray-300 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="15" y1="5" x2="15" y2="7" />{" "}
                <line x1="15" y1="11" x2="15" y2="13" />{" "}
                <line x1="15" y1="17" x2="15" y2="19" />{" "}
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
              </svg>
            </span>
            <Link to="tickets">
              <span className="">Tickets</span>
            </Link>
          </li>
          <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
            <span className="text-2xl">
              <svg
                class="text-gray-300 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </span>
            <Link to="message">
              <span className="">Massage</span>
            </Link>
          </li>
          {/* <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </span>
          <span className="">Cards</span>
        </li> */}
          <hr></hr>
          <li className="relative flex cursor-pointer space-x-2 rounded-md pt-9 px-10 text-gray-300 hover:bg-slate-600">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <Link to="/login">
              <button className="group-hover:text-[#FE7A00]"onClick={logout} >Logout</button>
            </Link>
          </li>
        </ul>
        <div className="my-6  ml-10 mt-4 flex cursor-pointer">
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
          </div>
          <div className="ml-3">
            <p className="font-medium">{user.first_name}</p>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
    </div>
  );
}

export default SidePar;
