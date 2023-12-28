import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DetailEvent from "./DetailEvent";
import DetailPayment from "./DetailPayment";

function Events() {
  const [isRequestModalOpen, setRequestModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [eventId, setEventId] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/dachbord/event/getevents")
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
  const handleSoftDelete = async (id) => {
    try {
      // Make an Axios request to update the server-side data
      await axios.put(`http://localhost:3001/dachbord/event/delete?id=${id}`, {
        // isDeleted: true,
      });

      // Update the state to reflect the soft delete
      setDeletedItems([...deletedItems, id]);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleToggleAcceptance = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/dachbord/event/accept?id=${id}`, {
        // event_status: !products.find((product) => product.id === id).event_status,
      });

      const updatedProduct = response.data;
      
console.log("sdasdas",response.data);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.event_id === id
            ? { ...product, event_status: updatedProduct.event_status }
            : product
        )
      );
    } catch (error) {
      console.error("Error toggling acceptance:", error);
    }
  };

  const handleModalDetailOpen = (event_id) => {
    setEventId(event_id);
    setRequestModalOpen(true);
  };
  const handleModalpaymentlOpen = (event_id) => {
    setEventId(event_id);
    setModalOpen(true);
  };

  return (
    <div className=" sm:rounded-lg">
      <div class=" overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5 rtl:text-right text-gray-500 dark:text-gray-400">
        
        <table class="relative w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name Event
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                State
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Presenter
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Category
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Number of seats
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Location 
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Action
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
             Details
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Payment
              </th>
            
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            
            {products.map(
              (product) =>
                !deletedItems.includes(product.event_id) && (
                  <tr key={product.event_id} class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <img
                          class="h-full w-full rounded-full object-cover object-center"
                          src={product.image_url}
                          alt={product.id}
                        />
                        {/* <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {product.event_name}
                        </div>
                        {/* <div class="text-gray-400">{product.email}</div> */}
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                          product.event_status
                            ? "bg-green-50 text-green-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            product.event_status ? "bg-green-600" : "bg-red-600"
                          }`}
                        ></span>
                        {product.event_status ? "Accepted" : "Not Accepted"}
                      </span>
                    </td>
                    <td class="px-7 py-4 text-center">{product.speaker}</td>
                    <td class="px-7 py-4 text-center">{product.category_id}</td>
                    <td class="px-6 py-4 text-center">
                      {product.tickets}
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
                    {/* <td class="px-6 py-4">
                      <div class="flex justify-center gap-4">
                        <button
                          class="text-orange-500 transition-colors duration-200 hover:text-orange-700 focus:outline-none"
                          onClick={() => handleToggleAcceptance(product.id)}
                        >
                          <svg
                            class="text-orange-500 w-8 h-8"
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>

                        <button
                          data-popover-target="popover-top"
                          data-popover-placement="top"
                          class="text-orange-500 transition-colors duration-200 hover:text-orange-600 focus:outline-none"
                          onClick={() => handleSoftDelete(product.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td> */}
                    <td class="px-6 py-4">
                      <div className="flex gap-2">
                        <div class="flex justify-center gap-4">
                          <button
                            class=" transition-colors duration-200  text-orange-500  bg-orange-100 p-2 rounded-full font-semibold w-16"
                            onClick={() => handleSoftDelete(product.event_id)}
                          >
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-6 w-6"
                              x-tooltip="tooltip"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg> */}
                            Delete
                          </button>
                        </div>
                        <div class="flex justify-center gap-4">
                          <button
                            onClick={() => handleToggleAcceptance(product.event_id)}
                            className="text-orange-500   p-2 rounded-full font-semibold w-20 border border-orange-500"
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                product.event_status
                                  ? "bg-green-600"
                                  : "bg-red-600"
                              }`}
                            ></span>
                            {product.event_status ? " Unactive" : "Active"}
                          </button>
                        </div>
                      </div>
                    </td>

                    <td class="px-6  text-center">
                      <button
                        className="border border-[#FE7A00] rounded-full font-semibold text-[#FE7A00] h-10  my-3 px-4"
                        onClick={() => {
                          console.log(product.event_id);
                          handleModalDetailOpen(product.event_id);
                        }}
                      >
                        Details
                      </button>
                    </td>
                    <td class="px-6  text-center">
                      <button
                        className="border border-[#FE7A00] rounded-full font-semibold text-[#FE7A00] h-10  my-3 px-4"
                        onClick={() => {
                          console.log(product.event_id);
                          handleModalpaymentlOpen(product.event_id);
                        }}
                      >
                        Profit
                      </button>
                    </td>
                  </tr>
                  
                )
                
            )}
           
          </tbody>
        </table>
      </div>
      <DetailEvent
        isOpen={isRequestModalOpen}
        onclose={() => setRequestModalOpen(false)}
        eventId={eventId}
      />
       <DetailPayment
        isOpen={isModalOpen}
        onclose={() => setModalOpen(false)}
        eventId={eventId}
      />
    </div>
  );
}

export default Events;
