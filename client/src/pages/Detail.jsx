// FlipCard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Component/Filecss/Detail.css";
import { Link, useParams } from "react-router-dom";
import Related from "../Component/Website/Related";
import TicketFormPopup from "../Component/Users/Quantity"; // Import the new component
import Swal from "sweetalert2";
import Quantity from "../Component/Users/Quantity";

const FlipCard = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState([]);
  const [isRequestModalOpen, setRequestModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [formData, setFormData] = useState({
  //   quantity: "",
  //   ticket_price: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // Send a POST request with the data to your API endpoint
  //   axios.post(" http://localhost:3004/posts", formData).then((response) => {
  //     // Handle the success response here

  //     Swal.fire({
  //       icon: "success",
  //       title: "Event Created Successfully!",
  //       text: "Your event has been created successfully.",
  //       iconColor: "#FE7A00",
  //     });
  //   });
  // };

  // const [showPopup, setShowPopup] = useState(false);

  // const handleModalOpen = () => {
  //   setRequestModalOpen(true);
  // };

  const handleModalOpen = () => {
    setRequestModalOpen(true);
  };

  const handleModalClose = () => {
    setRequestModalOpen(false);
  };

  const handleTicketSubmit = (quantity) => {
    // Handle the submission of ticket quantity (e.g., make API call to add to cart)
    console.log(`Adding ${quantity} tickets to cart.`);
    // You can uncomment and modify the addToPayment function as needed.
    // addToPayment(quantity);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const addToPayment = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/add-to-cart', {
  //       "quantity" : quantity,
  //       "user_id" : 5,
  //       "product_id" :id,
  //         });
  //     if (response.status === 201) {
  //       alert("Added to cart successfully!");
  //       setCart([...cart, blogPost]);
  //       console.log ('hi')
  //     }
  //   } catch (error) {
  //     console.log("Error adding to cart:", error);

  //   }
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/event/event?id=${id}`)
      .then((response) => {
        setBlogPost(response.data);
        // setBlogImages(response.data.images);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError("An error occurred. Please try again.");
      });
  }, [id]);

  console.log(blogPost);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Flip Card Container 1 */}
      <div className="flex flex-col justify-center items-center  ">
        <div className="md:flex lg:flex-row lg:items-center lg:justify-center justify-center  flex-col place-items-center sm:flex flex sm:flex-col items-center  ">
          <div
            className="flip-card-container-custom lg:scale-75 md:scale-90 sm:scale-75 flex flex-row"
            style={{ "--hue": 40 }}
          >
            <div className="flip-card-custom">
              <div className="card-front-custom  lg:scale-100 md:scale-90 sm:scale-75  ">
                <figure>
                  <div className="img-bg-custom  w-[50rem]"></div>
                  <img src={blogPost.image_url} alt={blogPost.event_name} />
                  <figcaption className=" text-[#FE7A00]">
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
                      {blogPost.event_name}
                    </svg>
                  </figcaption>
                </figure>
                {/* <ul className="uldetail text-start "></ul> */}
              </div>
              <div className="card-back-custom ">
                <figure>
                  <div className="img-bg-custom"></div>
                  <img src={blogPost.image_url} alt="Brohm Lake" />
                </figure>
                <div>
                  <button
                    className="buttonticket text-[#FE7A00] bg-[#fff]"
                    onClick={handleModalOpen}
                  >
                    Buy Ticket
                  </button>
                </div>

                <div className="design-container-custom">
                  <span className="design-custom design--1-custom"></span>
                  <span className="design-custom design--2-custom"></span>
                  <span className="design-custom design--3-custom"></span>
                  <span className="design-custom design--4-custom"></span>
                  <span className="design-custom design--5-custom"></span>
                  <span className="design-custom design--6-custom"></span>
                  <span className="design-custom design--7-custom"></span>
                  <span className="design-custom design--8-custom"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-fit place-self-center lg:p-12 md:p-8 sm:p-4 p-4 justify-self-center items-center lg:scale-90 md:scale-90 sm:scale-75 scale-75 ">
            <div className="text-center place-self-center justify-self-center justify-center	">
              <ul className="uldetail2 text-start  max-w-[400px]">
                <li className="list place-self-center	 flex ">
                  {" "}
                  <div className="">
                    <label className="text-start text-[#FE7A00] font-bold mr-2 w-fit">
                      Name Event :{" "}
                    </label>
                  </div>
                  <div className="text-grey-200">{blogPost.event_name}</div>
                </li>
                <li className="list flex">
                  <div className="">
                    <label className="text-start text-[#FE7A00] font-bold mr-2">
                      Presenter :{" "}
                    </label>
                  </div>
                  <div className="text-grey-200">{blogPost.speaker}</div>
                </li>
                <li className="list flex">
                  <div>
                    <label className="text-start text-[#FE7A00] font-bold mr-2">
                      Available Seats :{" "}
                    </label>
                  </div>
                  <div className="text-grey-200">{blogPost.tickets}</div>
                </li>
                {/* <li className="list flex">
                <div>
                <label className="text-start text-[#FE7A00] mr-2 w-fit ">
                  Description :{" "}
                </label></div>
                <div className="">
                {blogPost.direction}</div>
              </li> */}
                <li className="list flex">
                  <div>
                    <label className="text-start text-[#FE7A00] font-bold mr-2">
                      Ticket Price :{" "}
                    </label>
                  </div>
                  <div>{blogPost.price}</div>
                </li>

                <div>
                  <button
                    className="rounded-xl bg-gradient-to-r bg-[#FE7A00] hover:bg-orange-700 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg mt-4"
                    onClick={handleModalOpen}
                  >
                    Buy Ticket
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col   justify-center items-center lg:mt-16 gap-12">
          <div className=" text-[#FE7A00] text-3xl font-medium">
            About this event{" "}
          </div>
          <span className="max-w-[50%]">{blogPost.direction}</span>
        </div>
        <Related />
        <Quantity isOpen={isRequestModalOpen} onclose={handleModalClose} />
      </div>
    </>
  );
};

export default FlipCard;
