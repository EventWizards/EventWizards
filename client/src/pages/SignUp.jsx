import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
   
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    
   
  });

  const handleSignUp = async () => {
    // Validation and other logic...

    axios.post(' http://localhost:3001/posts', formData)
      .then((response) => {
        // Handle the success response here
        if (response.status === 201) {
            navigate("/");

        }
      })
      .catch((error) => {
        console.error('An error occurred while sending the message:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while creating the event.',
        });
      });
  };

  return (
    <div className="mx-auto items-center justify-center flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">
    <div className="max-w-md text-start rounded-3xl bg-cover bg-[url('https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
      <p className="mb-20 font-bold tracking-wider pt-20"></p>
      <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
         <br />
        
      </p>
     
      <div className="bg-orange-600/80 rounded-2xl px-4 py-8 ">
        <p className="mb-3 text-gray-200">
          Welcome
        </p>
        <div className="">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="Simon Lewis"
              alt="Simon Lewis"
            />
            <p className="ml-4 w-56">
              <strong className="block font-medium"> EventWizards</strong>
              <span className="text-xs text-gray-200">
                {" "}
                Published 12 Bestsellers{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 py-20 text-start">
      <h2 className="mb-2 text-3xl font-bold text-[#FE7A00]">Sign Up</h2>
      
      <p className="mb-1 font-medium text-gray-500 pt-5"></p>
      <div className="mb-4 md:flex md:justify-between">
                    
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-500  " htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-500 dark:text-bl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-500  " htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-500 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        required
                      />
                    </div>
                  </div>
      <p className="mb-1 font-medium text-gray-500">Email</p>
      <div className="mb-4 flex flex-col">
        <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
          <input
            type="email"
            id="signup-email"
            className=" border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
             require
          />
        </div>
        
      </div>
      <p className="mb-1 font-medium text-gray-500">Password</p>
      <div className="mb-4 flex flex-col">
        <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
          <input
            type="password"
            id="signup-password"
            className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Choose a password (minimum 8 characters)"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            require
          />
        </div>
      </div>
      <button className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r bg-[#FE7A00] hover:bg-orange-700 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
      onClick={handleSignUp}>
        Sign Up
      </button>
      <p className="text-center text-gray-600 pt-5">
        Don't have an account?
        <Link
          to="/login"
          className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
        >
          Login
          </Link>
      </p>
    </div>
  </div>
  
  
  );
}

export default SignUp;
