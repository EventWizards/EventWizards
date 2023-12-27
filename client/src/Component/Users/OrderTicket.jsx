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
  return (
    
    <div className="relative flex flex-col mt-5 mx-auto mb-5 overflow-x-auto sm:rounded-lg ">
    <div class=" rounded-lg border border-gray-200 shadow-md m-5 rtl:text-right text-gray-500 dark:text-gray-400">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          
          <tr>
            
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Name Event
            </th>

            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Presenter
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            ID
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Event location
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Date
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            DETAILS
            </th>
            
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          {products.map(
            (product) =>
              (
                <tr key={product.id} class="hover:bg-gray-50">
                   <td class="px-4 py-2 text-sm font-medium  whitespace-nowrap">
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
                  
                        <td class="px-4 py-2 text-sm  whitespace-nowrap">
                        <div className="flex items-center px-4">
                     <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        {" "}
                       
                        {/* <img
                            class="object-cover w-8 h-8 rounded-full"
                            src={product.img_photo}
                            alt=""
                          /> */}
                        </div>
                        <div className="flex flex-col justify-start">
                          <div className="">
                            <h2 class="text-sm font-medium  ">
                              {product.speaker}
                            </h2>
                            <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                              
                            </p>
                          </div>
                        </div>
                      </div>
                        </td>
                        <td className="px-6 py-2">

                          
                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-sm  text-base/none text-orange-400 bg-orange-light rounded-lg">
                         {" "}
                        {product.id}
                       </span>
                  </td>
                  <td class="px-6 py-4">
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
                       
                      </span>
                  </td>
                  <td class="px-6 py-2 text-start"><span className="text-sm  text-light-inverse text-md/normal ">
                       {product.date}
                       </span></td>

                       <td class="flex px-6 py-2 items-center justify-center"><span className="text-sm  text-light-inverse text-md/normal ">
                       <button className="  relative  text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                         <span className="flex items-center justify-center p-0 m-0 leading-none mt-10 shrink-0 text-orange-400 ">
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
                       </span></td>

               
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
    {/* <EidtPorfile isOpen={isRequestModalOpen} onclose={handleModalClose} /> */}
  </div>


    // <div class="flex flex-col mt-5 mx-auto mb-5">
    //   <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    //     <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
    //       <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
    //         <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
    //           <thead class="bg-gray-200">
    //             <tr>
    //               <th
    //                 scope="col"
    //                 class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-orange-500 "
    //               >
    //                 <div class="flex items-center gap-x-3">
    //                   <input
    //                     type="checkbox"
    //                     class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
    //                   />
    //                   <button class="flex items-center gap-x-2 ">
    //                     <span>Name Event</span>

                      
    //                   </button>
    //                 </div>
    //               </th>

    //               <th
    //                 scope="col"
    //                 class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
    //               >
    //                 Presenter
    //               </th>

    //               <th
    //                 scope="col"
    //                 class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
    //               >
    //                 ID
    //               </th>

    //               <th
    //                 scope="col"
    //                 class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
    //               >
    //                 Event location
    //               </th>

    //               <th
    //                 scope="col"
    //                 class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
    //               >
    //                 Date{" "}
    //               </th>

    //               <th
    //                 scope="col"
    //                 class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
    //               >
    //                 DETAILS
    //               </th>

    //             </tr>
    //           </thead>

    //           <tbody class="bg-[#FFFDF7] divide-y divide-gray-200 dark:divide-gray-700 ">
    //             {products.map((product) => (
    //               <tr key={product.id}>
    //                 <td className="p-3 pl-0 mx-2">
    //                   <div className="flex items-center">
    //                     <div className="relative inline-block shrink-0 rounded-2xl me-3">
    //                       <img
    //                         src={product.photo}
    //                         className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl mx-1"
    //                         alt=""
    //                       />
    //                     </div>
    //                     <div className="flex flex-col justify-start">
    //                       <a
    //                         href="javascript:void(0)"
    //                         className=" py-4 text-sm  whitespace-nowrap"
    //                       >
    //                         {" "}
    //                         {product.name_event}
    //                       </a>
    //                     </div>
    //                   </div>
    //                 </td>

                  

    //                 <td className="p-3 pl-0 mx-2">
    //                   <div className="flex items-center px-4">
    //                     <div className="relative inline-block shrink-0 rounded-2xl me-3">
    //                       {" "}
                       
    //                       <img
    //                         class="object-cover w-8 h-8 rounded-full"
    //                         src={product.img_photo}
    //                         alt=""
    //                       />
    //                     </div>
    //                     <div className="flex flex-col justify-start">
    //                       <div className="">
    //                         <h2 class="text-sm font-medium  ">
    //                           {product.presenter}
    //                         </h2>
    //                         <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
    //                           {product.email}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td className="p-1 pr-0 text-start mx-2 px-4">
    //                   <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center text-sm  text-base/none text-orange-400 bg-orange-light rounded-lg">
    //                     {" "}
    //                     {product.idcode}
    //                   </span>
    //                 </td>
    //                 <td className=" pr-0 text-start mx-2 px-4">
    //                   <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-sm leading-none   rounded-lg">
    //                     <Link to={product.link_location}>
    //                       <svg
    //                         class="text-red-600 w-5 h-5"
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         width="24"
    //                         height="24"
    //                         viewBox="0 0 20 20"
    //                         fill="currentColor"
    //                       >
    //                         {" "}
    //                         <path
    //                           fill-rule="evenodd"
    //                           d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
    //                           clip-rule="evenodd"
    //                         />
    //                       </svg>
    //                     </Link>{" "}
    //                     {product.event_location}
    //                   </span>
    //                 </td>

    //                 <td className=" p-1 pr-0 text-start mx-2 px-4">
    //                   <span className="text-sm  text-light-inverse text-md/normal ">
    //                     {product.date}
    //                   </span>
    //                 </td>
    //                 <td className="p-1 pl-5 text-end">
    //                   <button className="  relative  text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
    //                     <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 text-orange-400">
    //                       <Link to={`/ticket/${product.id}`}>
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           class="h-6 w-6"
    //                           fill="none"
    //                           viewBox="0 0 24 24"
    //                           stroke="currentColor"
    //                           stroke-width="2"
    //                         >
    //                           <path
    //                             stroke-linecap="round"
    //                             stroke-linejoin="round"
    //                             d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"
    //                           />
    //                         </svg>
    //                       </Link>
    //                     </span>
    //                   </button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default OrderTicket;
