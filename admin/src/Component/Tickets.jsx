import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tickets() {
  const [deletedItems, setDeletedItems] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/dachbord/pay/payments")
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
                Name Event
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                user name
              </th>
             
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                number of Ticket
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                price
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                total
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                payment status 
              </th>
             
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {products.map(
              (product) =>
                !deletedItems.includes(product.id) && (
                  <tr key={product.id} class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-10 w-10">
                        <img
                          class="h-full w-full rounded-full object-cover object-center"
                          src={product.image_url}
                          alt={product.id}
                        />
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {product.event_name}
                        </div>
                      </div>
                    </th>
                    <td>
                      {" "}
                      <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      
                        <div class="text-sm">
                          <div class="font-medium text-gray-700">
                            {product.first_name}{product.last_name}
                          </div>
                        </div>
                      </th>
                    </td>
                    <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                        {/* <span class="h-1.5 w-1.5 rounded-full bg-orange-600"></span> */}
                        #{product.amount}
                      </span>
                    </td>
                    <td class="px-6 py-4">{product.price}</td>
                    <td class="px-6 py-4">{product.total}</td>
                    <td class="px-14 py-4">{product.payment_status}</td>
                    

                    {/* <td class="px-6 py-4">
                      <div class="flex justify-center gap-4">
                        <Link to={`/ticket/${product.id}`}>
                          <svg
                            class="text-orange-600 w-7 h-7"
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
                        </Link>{" "}
                      </div>
                    </td> */}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tickets;
