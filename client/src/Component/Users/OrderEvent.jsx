import axios from "axios";
import React, { useEffect, useState } from "react";
import EidtPorfile from "../EidtPorfile";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
function OrderEvent() {
  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [isRequestModalOpen, setRequestModalOpen] = useState(false);
  const [eventId , setEventId] = useState(0)
 
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token
    axios
      .get("http://localhost:3001/event/userevent")
      .then((response) => {
        // Handle the response data here
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(products);

  const handleSoftDelete = async (event_id) => {
    try {
      // Make an Axios request to update the server-side data
      await axios.put(`http://localhost:3001/event/delete?id=${event_id}`, {
      });

    
      
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleModalEditOpen = (event_id) => {
    setEventId(event_id)
    setRequestModalOpen(true);
  };

  const handleModalClose = () => {
    setRequestModalOpen(false);
  };

  return (
    // <section class="container px-4 mx-auto">
    <>
      <div class="flex flex-col mt-5 mx-auto mb-5">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-orange-500"
                    >
                      <div class="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                        />
                        <button class="flex items-center gap-x-2">
                          <span>Order Event</span>

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
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  text-orange-500"
                    >
                        Name Event
                      
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                    >
                      State
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                    >Date
                    
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                    >
                      Ticket price
                    </th>

                    <th
                      scope="col"
                      class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-500"
                    >
                      Update/Delete
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
                  {products.map(
                    (product) =>
                      !deletedItems.includes(product.event_id) && (
                        <tr key={product.event_id}>
                          <td class="px-4 py-4 text-sm font-medium  whitespace-nowrap">
                            <div class="inline-flex items-center gap-x-3">
                              <input
                                type="checkbox"
                                class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                              />

                              <span>{product.event_name} </span>
                            </div>
                          </td>

                          <td class="px-4 py-4 text-sm  whitespace-nowrap">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-8 h-8 rounded-full"
                                src={product.image_url}
                                alt=""
                              />
                              <div>
                                <h2 class="text-sm font-medium  ">
                                {product.name_event}
                                </h2>
                                {/* <p class="text-xs font-normal text-gray-600 dark:text-gray-400">
                                  {product.email}
                                </p> */}
                              </div>
                            </div>
                          </td>
                          
                          <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <h2 class="text-sm font-normal">Paid</h2>
                            </div>
                          </td>
                         
                          <td class="px-4 py-4 text-sm  whitespace-nowrap">
                            {product.date}
                          </td>


                          <td class="px-4 py-4 text-sm  whitespace-nowrap">
                            {product.price}
                          </td>
                          <td class="px-4 py-4 text-sm whitespace-nowrap">
                            <div class="flex items-center gap-x-6">
                             
                              <button
                                class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                                // onClick={handleModalEditOpen}
                                onClick={() => {console.log(product.event_id);handleModalEditOpen(product.event_id)}}
                              >
                              
                                <svg
                                  class="text-orange-500 w-5 h-5"
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
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                                
                              </button>

                              <button
                                class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                onClick={() => {console.log(product.event_id);handleSoftDelete(product.event_id)}}
                              >
                                <svg
                                  class="text-orange-500 w-5 h-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  {" "}
                                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />{" "}
                                  <path
                                    fill-rule="evenodd"
                                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <EidtPorfile isOpen={isRequestModalOpen} onclose={handleModalClose} eventId={eventId} />
      {/* <Quantity isOpen={isRequestModalOpen} onclose={handleModalClose} /> */}
      
    </>
  );
}

export default OrderEvent;
