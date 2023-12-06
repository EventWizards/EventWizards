// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Cookies } from 'react-cookie';
// import Swal from "sweetalert2";
// import { useCookies } from 'react-cookie';

// function Log() {

  
      
//     const [cookies, setCookie] = useCookies(['token']);
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
    
   
//   });
 
//   const handleSignIn = async () => {
//     // if (!email || !password) {
//     //   setError("Email and password are required.");
//     //   return;
//     // }
//     if (!formData.password) {
//         setError("Password is required.");
//         return;
//       }
//       if (!formData.email) {
//         setError("Email is required.");
//         return;
//       }

//     axios.post('http://localhost:3001/users/login', formData)
//       .then((response) => {
        
//         if (response.status === 200) {
//           console.log(response);
       
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Event Created Successfully!',
//                 text: 'Your event has been created successfully.',
//                 timer: 3000,
//                 iconColor: '#FE7A00',
//               });
//               // Assuming the API returns a token
//       const token = response.data.token;

//       // Set the token in a cookie
//       setCookie('token', token, { path: '/' });
//               navigate("/");
//             }
           

//         }
//       )
//       .catch((error) => {
//         console.error('An error occurred while sending the message:', error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Error!',
//           text: 'An error occurred while creating the event.',
//         });
//       });
//   };

//   return (
//     <div className="flex h-screen w-screen items-center overflow-hidden px-2">
//     {/* Login */}
//     <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
//       <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-[#FE7A00] sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
//       <div className="mx-auto mb-2 space-y-3">
//         <h1 className="text-center text-3xl font-bold text-[#FE7A00]">Sign in</h1>
//         <p className="text-gray-500">Sign in to access your account</p>
//       </div>
//       <div>
//         <div className="relative mt-2 w-full">
//           <input
//             type="email"
//             id="email"
//             defaultValue="email@gmail.com"
//             className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
//             placeholder=" "
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//              required
//           />
//           <label
//             htmlFor="email"
//             className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
//           >
//             {" "}
//             Enter Your Email{" "}
//           </label>
//         </div>
//       </div>
//       <div>
//         <div className="relative mt-2 w-full">
//           <input
//             type="password"
//             id="password"
//             className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
//             placeholder=" "
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <label
//             htmlFor="password"
//             className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
//           >
//             {" "}
//             Enter Your Password
//           </label>
//         </div>
//       </div>
//       <div className="flex w-full items-center">
//         <button className="shrink-0 inline-block w-36 rounded-lg bg-[#FE7A00] py-3 font-bold text-white"
//         onClick={handleSignIn}>
//           Login
//         </button>
//         <a
//           className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
//           href="#"
//         >
//           Forgot your password?
//         </a>
//       </div>
//       <p className="text-center text-gray-600">
//         Don't have an account?
//         <Link
//           to="/signup"
//           className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
//         >
//           Sign up
//           </Link>
//       </p>
//     </div>
//     {/* /Login */}
//   </div>
  
//   );
// }

// export default Log;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from 'react-cookie';
function Log() {

  const [cookies, setCookie] = useCookies(['token']);
     useEffect(() => {
         window.scrollTo(0, 0);
       }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    if (!formData.email) {
      setEmailError("Email is required.");
      setPasswordError(""); // Reset password error when email is provided
      return;
    }

    if (!formData.password) {
      setPasswordError("Password is required.");
      setEmailError(""); // Reset email error when password is provided
      return;
    }

    axios
      .post("http://localhost:3001/users/login", formData)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Event Created Successfully!",
            text: "Your event has been created successfully.",
            timer: 3000,
            iconColor: "#FE7A00",
            confirmButtonColor:"#FE7A00"
          });
          const token = response.data.token;


      setCookie('token', token, { path: '/' });
            navigate("/");
        
        }
      })
      .catch((error) => {
        console.error("An error occurred while sending the message:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred while creating the event.",
        });
      });
  };
  
  return (
    <div className="mx-auto items-center justify-center flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10 bg-[#FEFAF1]">
      <div className="max-w-md text-start rounded-3xl bg-cover bg-[url('https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
        <p className="mb-20 font-bold tracking-wider pt-20"></p>
        <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
          <br />
        </p>

        <div className="bg-orange-600/80 rounded-2xl px-4 py-8 ">
          <p className="mb-3 text-gray-200">Welcome</p>
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
        <h2 className="mb-2 text-3xl font-bold text-[#FE7A00]">Login</h2>

        <p className="mb-1 font-medium text-gray-500 pt-5"></p>
       
        <p className="mb-1 font-medium text-gray-500">Email</p>
        <div>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              id="email"
              defaultValue="email@gmail.com"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <label
              htmlFor="email"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              {" "}
              Enter Your Email{" "}
            </label>
          </div>
          {emailError && (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          )}
        </div>
        <p className="mb-1 font-medium text-gray-500 pt-2">Password</p>
        <div>
          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="password"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <label
              htmlFor="password"
              className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
            >
              {" "}
              Enter Your Password
            </label>
          </div>
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
        </div>
        <div className="pt-4 text-center ">
        <button
          className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r bg-[#FE7A00] hover:bg-orange-700 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
          onClick={handleSignIn}
        >
          Login
        </button></div>
        <p className="text-center text-gray-600 pt-5">
        Don't have an account?
          <Link
            to="/signup"
            className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}


//   return (
//     <div className="flex h-screen w-screen items-center overflow-hidden px-2">
//       {/* Login */}
//       <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
//         <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-[#FE7A00] sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
//         <div className="mx-auto mb-2 space-y-3">
//           <h1 className="text-center text-3xl font-bold text-[#FE7A00]">
//             Sign in
//           </h1>
//           <p className="text-gray-500">Sign in to access your account</p>
//         </div>
       
      
//         <div className="flex w-full items-center">
//           <button
//             className="shrink-0 inline-block w-36 rounded-lg bg-[#FE7A00] py-3 font-bold text-white"
//             onClick={handleSignIn}
//           >
//             Login
//           </button>
//           <a
//             className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
//             href="#"
//           >
//             Forgot your password?
//           </a>
//         </div>
//         <p className="text-center text-gray-600">
//           Don't have an account?
//           <Link
//             to="/signup"
//             className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
//           >
//             Sign up
//           </Link>
//         </p>
//       </div>
//       {/* /Login */}
//     </div>
//   );
// }

export default Log;
