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
    < >
      {/* Flip Card Container 1 */}
      <div className="md:flex lg:flex-row lg:items-center lg:justify-center justify-center lg:mr-40 md:mr-40 sm:mr-0 mr-0 flex-col place-items-center sm:flex flex sm:flex-col items-center  ">
      <div className="flip-card-container-custom lg:scale-100 md:scale-90 sm:scale-75 flex flex-row" style={{ "--hue": 40 }}>
        <div className="flip-card-custom">
          <div className="card-front-custom  lg:scale-100 md:scale-90 sm:scale-75  ">
            <figure>
              <div className="img-bg-custom "></div>
              <img  src={blogPost.image_url} alt={blogPost.event_name} />
             <figcaption className=" text-[#FE7A00]">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
            {blogPost.event_name}
          </svg>
              </figcaption>
            </figure>
            <ul className="uldetail text-start ">
              {/* <li className="list">
                {" "}
                <label className="text-start text-[#FE7A00]">
                  Name Event :{" "}
                </label>
                {blogPost.name_event}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Presenter :{" "}
                </label>
                {blogPost.presenter}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Number_Seats :{" "}
                </label>
                {blogPost.number_seats}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Description :{" "}
                </label>
                {blogPost.description}
              </li> */}
              {/* <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Ticket_Price :{" "}
                </label>
                {blogPost.ticket_price}
              </li> */}

             

            </ul>
            
          </div>
          <div className="card-back-custom ">
            <figure>
              <div className="img-bg-custom"></div>
              <img src={blogPost.image_url} alt="Brohm Lake" />
            </figure>
            <div>
              <button
                className="buttonticket text-[#FE7A00]"
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
      <div className="flex justify-between w-fit place-self-center	 justify-self-center items-center lg:scale-100 md:scale-90 sm:scale-75 scale-75 ">
        <div className="text-center place-self-center justify-self-center justify-center	">
        <ul className="uldetail2 text-start">
              <li className="list place-self-center	 flex ">
                {" "}
                <div className="">
                <label className="text-start text-[#FE7A00] mr-2 w-fit">
                  Name Event :{" "}
                </label>
                </div>
                <div >
                {blogPost.event_name}</div>
              </li>
              <li className="list flex">
              <div className="">
                <label className="text-start text-[#FE7A00] mr-2">
                  Presenter :{" "}
                </label></div>
<div>
                {blogPost.speaker}</div>
              </li>
              <li className="list flex">
                <div>
                <label className="text-start text-[#FE7A00] mr-2">
                  Number_Seats :{" "}
                </label></div>
                <div>
                {blogPost.tickets}</div>
              </li>
              <li className="list flex">
                <div>
                <label className="text-start text-[#FE7A00] mr-2">
                  Description :{" "}
                </label></div>
                <div>
                {blogPost.direction}</div>
              </li>
              <li className="list flex">
                <div>
                <label className="text-start text-[#FE7A00] mr-2">
                  Ticket_Price :{" "}
                </label></div>
                <div>
                {blogPost.price}</div>
              </li>

              <div>
              <button
                className="buttonticket2 mt-4"
                onClick={handleModalOpen}
              >
                Buy Ticket
              </button>
             
              </div>

            </ul>
        </div>
      </div>
      {/* <div className="flex ">
            
            
          </div> */}
      </div>
      <Related />
      <Quantity isOpen={isRequestModalOpen} onclose={handleModalClose}  />
    </>
  );
};

export default FlipCard;
