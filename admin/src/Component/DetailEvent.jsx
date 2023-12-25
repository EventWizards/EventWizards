import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate, useParams } from "react-router-dom";

const DetailEvent = ({ isOpen, onclose, eventId }) => {
  const id = eventId;
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    // ... other properties
  });

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/dachbord/event/event?id=${id}`);
        setUser(response.data);
        console.log("in axios", response.data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Include 'id' and 'isOpen' as dependencies

  return (
    <>
      <Modal
        id="popup-modal"
        tabindex="-1"
        className="absolute top-[5rem]  left-[6rem]  z-50     max-h-full  w-[60%] h-[80%]  ml-52 mt-16"
        onRequestClose={onclose}
        isOpen={isOpen}
      >
        <div className="flex ">
          {/* <div className="transform translate-y-100 translate-x-100 w-20 bg-orange-600">
            hi i am bayan alkhader
          </div> */}
          <div className="flex flex-col bg-white border border-orange-600   w-[60%] max-w-[60rem] mx-auto text-blue">
           
          
            {/* Display fetched data here */}
          <div className="flex flex-row h-96">

        
          
          <div className="w-28 h-full bg-orange-600 pl-2 " >
          
          </div>
            <div className="w-[100%]  p-5">
           
            <h2 className="text-2xl font-bold mb-6 text-center px-20 pt-2">
            {user.event_name}
            </h2>
            <div className="pl-2 space-y-2">
            <button
              type="button"
              class="absolute top-0 end-2.5 text-gray-400 bg-transparent bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              <p>
                <strong>Category:</strong> {user.category}
              </p>
              <p>
                <strong>Presenter:</strong> {user.speaker}
              </p>
              <p>
                <strong>Location:</strong> {user.location}
              </p>
              <p>
                <strong>Seats:</strong> {user.tickets}
              </p>

              <p>
                <strong>Ticket price:</strong> {user.price}
              </p>
              {/* <p>
                <strong>Date:</strong>  {user.date ? user.date.split("T")[0] : "N/A"}
              </p>
              <p>
                <strong>Time:</strong>  {user.date ? user.date.split("T")[1] : "N/A"}
              </p> */}
              <p>
                <strong>Description:</strong> {user.direction}
              </p>
              
              </div>
              </div>
              
            </div>
            {/* <button
                type="button"
                onClick={onclose}
                className="text-blue-500  hover:underline"
              >
                close
              </button> */}
          </div>

          <div className="flex justify-end gap-3 mt-2"></div>
        </div>
      </Modal>
    </>
  );
};

export default DetailEvent;
