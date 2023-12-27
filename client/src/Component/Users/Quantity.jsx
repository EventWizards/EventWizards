import React, { useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Quantity = ({ onclose, isOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState();
  const [pay,setPay]=useState();
  const navigate = useNavigate();
  const {id} = useParams();
  const [cookies] = useCookies(['token']);
  const token = cookies.token;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity);
    
    }
    
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
   

  }

  
 

  console.log(quantity);
  const addToPay = async () => {
    try {
      // Calculate the updated total
      const updatedTotal = total * quantity;
  
      // Make a POST request with the updated values
      axios.defaults.headers.common['Authorization'] = token
      const response = await axios.post(`http://localhost:3001/pay/addpay`, {
        amount: quantity,
        total: updatedTotal,
        event_id: id
      });
  
      if (response.status === 200) {
        onclose();
        console.log(response.data);
        setPay(response.data)
        navigate(`/Payment/${response.data.id}/${id}`);
      }
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };
  return (
    <>
      <Modal
        id="popup-modal"
        tabindex="-1"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full "
        onRequestClose={onclose}
        isOpen={isOpen}
      >
        <div class="relative p-4 w-full mx-auto mt-36 max-w-md max-h-full">
          <div class="relative bg-[#ffffff] rounded-lg shadow">
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={onclose}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <h3 className="pt-4 text-[#FE7A00]">
                {" "}
                Complete the purchase process
              </h3>
              {/* <svg
                class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg> */}
               <div className="flex  mx-20 ">
                <h1 class="mb-5 text-lg font-normal text-[#915E30] flex items-center pt-3">
                  Total
                </h1>
                <div className="flex ml-6 items-center">
                <p>
                  <span className="text-lg font-bold text-slate-900">
                  ${total * quantity}
                  </span>
                </p>
                </div>
              </div>
              <div className="flex  mx-20 ">
                <h1 class="mb-5 text-lg font-normal text-[#915E30] flex items-center pt-3">
                  Ticket
                </h1>
                <div className="flex ml-6 items-center">
                  <button
                    onClick={() => {
                      decreaseQuantity();
                    }}
                    className="border-2 w-6 h-6 focus:outline-none"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="border-2 border-gray-300 w-10 h-6 text-center focus:outline-none"
                    readOnly
                  />
                  <button
                    onClick={() => {
                      increaseQuantity();
                    }}
                    className="bg-[#915E30] w-6 h-6 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <Link to={`/payment/`} >
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-[#FE7A00] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={addToPay}
              >
                Buy now
              </button></Link>
              
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={onclose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Quantity;
