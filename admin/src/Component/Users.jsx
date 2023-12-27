import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [deletedItems, setDeletedItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isActionActive, setIsActionActive] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3001/dachbord/users/getall")
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

  const handleToggleAcceptance = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3001/users/active?id=${id}`, {
        // active: !products.find((product) => product.user_id === id).active,
      });

      const updatedProduct = response.data;
console.log(updatedProduct,"SSSSSSSSSSSSSSSSSS");
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.user_id === id
            ? { ...product, active : updatedProduct.active }
            : product
        )
      );
    } catch (error) {
      console.error("Error toggling acceptance:", error);
    }
  };

  console.log(products);
  const handleSoftDelete = async (id) => {
    try {
      // Make an Axios request to update the server-side data
      await axios.put(`http://localhost:3001/dachbord/users/delete?id=${id}`, {
        // isDeleted: true,
      });

      // Update the state to reflect the soft delete
      setDeletedItems([...deletedItems, id]);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <div>
      <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5 rtl:text-right text-gray-500 dark:text-gray-400">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name
              </th>

              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                State
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                IBAN
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Phone
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {products.map(
              (product) =>
                !deletedItems.includes(product.user_id) && (
                  <tr key={product.id} class="hover:bg-gray-50">
                    <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div class="relative h-8 w-8">
                        <img
                          class="h-full w-full rounded-full object-cover object-center"
                          src={product.user_image}
                          alt={product.user_id}
                        />
                        {/* <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                      </div>
                      <div class="text-sm">
                        <div class="font-medium text-gray-700">
                          {product.first_name}
                        </div>
                        <div class="text-gray-400">{product.email}</div>
                      </div>
                    </th>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                          product.active
                            ? "bg-green-50 text-green-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            product.active ? "bg-green-600" : "bg-red-600"
                          }`}
                        ></span>
                        {product.active ? "Active" : "Not Active"}
                      </span>
                    </td>
                    <td class="px-6 py-4">{product.iban}</td>
                    <td class="px-6 py-4">{product.phone}</td>

                    <td class="px-6 py-4">
                      <div className="flex gap-2">
                        <div class="flex justify-center gap-4">
                          <button
                            class=" transition-colors duration-200  text-orange-500  bg-orange-100 p-2 rounded-full font-semibold w-16"
                            onClick={() => handleSoftDelete(product.user_id)}
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
                            onClick={() => handleToggleAcceptance(product.user_id)}
                            className="text-orange-500   p-2 rounded-full font-semibold w-20 border border-orange-500"
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                product.active
                                  ? "bg-green-600"
                                  : "bg-red-600"
                              }`}
                            ></span>
                            {product.active ? "Block" : "Unblock"}
                          </button>
                        </div>
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
};

export default Users;
