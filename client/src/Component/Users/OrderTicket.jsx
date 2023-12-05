import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

function OrderTicket() {
  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token
    axios
      .get("http://localhost:3001/pay/tikite")
      .then((response) => {
        // Handle the response data here
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(products);
  return (
    //     <>
    //       {/* <link
    //         rel="stylesheet"
    //         href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"
    //       /> */}
    //       <div className="flex flex-wrap justify-center mt-5 mx-auto mb-5">
    //         <div className="w-full max-w-full px-3 mb-6  mx-auto">
    //           <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
    //             <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
    //               {/* card header */}
    //               <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
    //                 <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
    //                   <span className="mr-3 font-semibold text-[#FE7A00]">
    //                     Tickets Purchased
    //                   </span>
    //                   {/* <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
    //                     All Tickets
    //                   </span> */}
    //                 </h3>
    //                 <div className="relative flex flex-wrap items-center my-2">
    //                   <a
    //                     href="javascript:void(0)"
    //                     className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
    //                   >
    //                     {" "}
    //                     See other projects{" "}
    //                   </a>
    //                 </div>
    //               </div>
    //               {/* end card header */}
    //               {/* card body  */}
    //               <div className="flex-auto block py-8 pt-6 px-9">
    //                 <div className="overflow-x-auto">
    //                   <table className="w-full my-0 align-middle text-dark border-neutral-200">
    //                     <thead className="align-bottom">
    //                       <tr className="font-semibold text-[0.95rem] text-secondary-dark">
    //                         <th className="pb-3 text-start min-w-[175px] text-orange-400">
    //                           Name Event
    //                         </th>
    //                         <th className="pb-3 text-start min-w-[100px] text-orange-400">
    //                           Presenter
    //                         </th>
    //                         <th className="pb-3 text-start min-w-[100px] text-orange-400">
    //                           ID
    //                         </th>
    //                         <th className="pb-3  text-start min-w-[100px] text-orange-400">
    //                           Event location
    //                         </th>
    //                         <th className="pb-3  text-start min-w-[100px] text-orange-400">
    //                           Date
    //                         </th>
    //                         <th className="pb-3 text-start min-w-[50px] text-orange-400">
    //                           DETAILS
    //                         </th>
    //                       </tr>
    //                     </thead>
    //                     <tbody>
    //                       {products.map((product) => (
    //                         <tr
    //                           className="border-b border-dashed last:border-b-0"
    //                           key={product.id}
    //                         >
    //                           <td className="p-3 pl-0">
    //                             <div className="flex items-center">
    //                               <div className="relative inline-block shrink-0 rounded-2xl me-3">
    //                                 <img
    //                                   src={product.photo}
    //                                   className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
    //                                   alt=""
    //                                 />
    //                               </div>
    //                               <div className="flex flex-col justify-start">
    //                                 <a
    //                                   href="javascript:void(0)"
    //                                   className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
    //                                 >
    //                                   {" "}
    //                                   {product.name_event}
    //                                 </a>
    //                               </div>
    //                             </div>
    //                           </td>
    //                           <td className="p-3 pl-0">
    //                             <div className="flex items-center">
    //                               <div className="relative inline-block shrink-0 rounded-2xl me-3">
    //                                 {/* <img
    //                                   src={product.photo}
    //                                   className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
    //                                   alt=""
    //                                 /> */}
    //                                 <img
    //                                   class="object-cover w-8 h-8 rounded-full"
    //                                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    //                                   alt=""
    //                                 />
    //                               </div>
    //                               <div className="flex flex-col justify-start">
    //                                 <a
    //                                   href="javascript:void(0)"
    //                                   className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
    //                                 >
    //                                   {" "}
    //                                   {product.presenter}
    //                                 </a>
    //                               </div>
    //                             </div>
    //                           </td>
    //                           {/* <td className="p-1 pr-0 text-start">
    // \
    //                             <span className="font-semibold text-light-inverse text-md/normal">
    //                               {product.presenter}
    //                             </span>
    //                           </td> */}
    //                           <td className="p-1 pr-0 text-start">
    //                             <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-orange-400 bg-orange-light rounded-lg">
    //                               {" "}
    //                               {product.idcode}
    //                             </span>
    //                           </td>
    //                           <td className="p-1 pr-0 text-start">
    //                             <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none   rounded-lg">
    //                               <Link to={product.link_location}>
    //                                 <svg
    //                                   class="text-red-600 w-5 h-5"
    //                                   xmlns="http://www.w3.org/2000/svg"
    //                                   width="24"
    //                                   height="24"
    //                                   viewBox="0 0 20 20"
    //                                   fill="currentColor"
    //                                 >
    //                                   {" "}
    //                                   <path
    //                                     fill-rule="evenodd"
    //                                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
    //                                     clip-rule="evenodd"
    //                                   />
    //                                 </svg>
    //                               </Link>{" "}
    //                               {product.event_location}
    //                             </span>
    //                           </td>
    //                           <td className=" p-1 pr-0 text-start">
    //                             <span className="font-semibold text-light-inverse text-md/normal ">
    //                               {product.date}
    //                             </span>
    //                           </td>
    //                           <td className="p-1 pl-5 text-end">
    //                             <button className="  relative  text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
    //                               <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 text-orange-400">
    //                                 <Link to={`/ticket/${product.id}`}>
    //                                   <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     class="h-6 w-6"
    //                                     fill="none"
    //                                     viewBox="0 0 24 24"
    //                                     stroke="currentColor"
    //                                     stroke-width="2"
    //                                   >
    //                                     <path
    //                                       stroke-linecap="round"
    //                                       stroke-linejoin="round"
    //                                       d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"
    //                                     />
    //                                   </svg>
    //                                 </Link>
    //                               </span>
    //                             </button>
    //                           </td>
    //                         </tr>
    //                       ))}
    //                     </tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <div className="flex flex-wrap -mx-3 mb-5">
    //         <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
    //           <p className="text-sm text-slate-500 py-1">
    //             {" "}
    //             Tailwind CSS Component from{" "}
    //             <a
    //               href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents"
    //               className="text-slate-700 hover:text-slate-900"
    //               target="_blank"
    //             >
    //               Riva Dashboard
    //             </a>{" "}
    //             by{" "}
    //             <a
    //               href="https://www.loopple.com"
    //               className="text-slate-700 hover:text-slate-900"
    //               target="_blank"
    //             >
    //               Loopple Builder
    //             </a>
    //             .{" "}
    //           </p>
    //         </div>
    //       </div> */}
    // </>
    <div class="flex flex-col mt-5 mx-auto mb-5">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
              <thead class="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-orange-500 "
                  >
                    <div class="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                      <button class="flex items-center gap-x-2 ">
                        <span>Name Event</span>

                        {/* <svg
                            class="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.3"
                            />
                          </svg> */}
                      </button>
                    </div>
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                  >
                    Presenter
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                  >
                    ID
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                  >
                   Event location
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                  >
                     Date{" "}
                  </th>

                  <th
                    scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                  >
                    DETAILS
                  </th>

                  {/* <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Ticket price
                    </th> */}

                  {/* <th scope="col" class="relative py-3.5 px-4">
                      <span class="sr-only">Actions</span>
                    </th> */}
                </tr>
              </thead>

              <tbody class="bg-[#FFFDF7] divide-y divide-gray-200 dark:divide-gray-700 ">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="p-3 pl-0 mx-2">
                      <div className="flex items-center">
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                          <img
                            src={product.image_url}
                            className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl mx-1"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-start">
                          <a
                            href="javascript:void(0)"
                            className=" py-4 text-sm  whitespace-nowrap"
                          >
                            {" "}
                            {product.event_name}
                          </a>
                        </div>
                      </div>
                    </td>

                    {/* <td class="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                    <div class="inline-flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />

                      <span>#3066</span>
                    </div>
                  </td> */}

                    {/* <td class="px-4 py-4 text-sm  whitespace-nowrap">
                    Jan 6, 2022
                  </td> */}

                    <td className="p-3 pl-0 mx-2">
                      <div className="flex items-center px-4">
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                          {" "}
                          {/* <img
                                  src={product.photo}
                                  className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                  alt=""
                                /> */}
                          
                        </div>
                        <div className="flex flex-col justify-start">
                        <div className="">
                        <h2 class="text-sm font-medium  ">{product.speaker}</h2>
                        <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                        {product.email}
                        </p>
                      </div>
                          
                        </div>
                      </div>
                    </td>
                    <td className="p-1 pr-0 text-start mx-2 px-4">
                               <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-sm  text-base/none text-orange-400 bg-orange-light rounded-lg">
                                 {" "}
                                 {product.id}
                               </span>
                              </td>
                              <td className=" pr-0 text-start mx-2 px-4">
                               <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-sm leading-none   rounded-lg">
                                  <Link to={product.location_url}>
                                    <svg
                                      class="text-red-600 w-5 h-5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      {" "}
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </Link>{" "}
                                  {product.location}
                                </span>
                              </td>
                 
                              <td className=" p-1 pr-0 text-start mx-2 px-4">
                                <span className="text-sm  text-light-inverse text-md/normal ">
                                   {product.date}
                                </span>
                               </td>
                               <td className="p-1 pl-5 text-end">
                                <button className="  relative  text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                   <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 text-orange-400">
                                    <Link to={`/ticket/${product.id}`}>
                                       <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"
                                        />
                                      </svg>
                                    </Link>
                                  </span>
                                </button>
                              </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTicket;
