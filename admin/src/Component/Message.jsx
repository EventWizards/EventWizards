import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Message() {
  const [deletedItems, setDeletedItems] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/dachbord/contact/getall")
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
      await axios.patch(`http://localhost:3001/login/${id}`, {
        isDeleted: true,
      });

      // Update the state to reflect the soft delete
      setDeletedItems([...deletedItems, id]);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Email
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                User Name
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                ID
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Message
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Response
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {products.map(
              (product) =>
                !deletedItems.includes(product.id) && (
                  <tr key={product.id} class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {product.email}
                        </div>
                      </div>
                    </th>
                    <td class="px-6 py-4">{product.name}</td>

                    <td class="px-6 py-4">
                      <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                        {/* <span class="h-1.5 w-1.5 rounded-full bg-orange-600"></span> */}
                        #{product.id}
                      </span>
                    </td>
                    <td class="px-6 py-4">{product.message}</td>

                    <td class="px-6 py-4">
                      <div class="flex justify-center gap-4">
                        <Link to={`/ticket/${product.id}`}>
                          <svg
                            class="text-orange-500 w-7 h-7"
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
                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                            />
                          </svg>
                        </Link>{" "}
                      </div>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Message;
