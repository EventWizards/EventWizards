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
      <div className="flip-card-container-custom" style={{ "--hue": 40 }}>
        <div className="flip-card-custom">
          <div className="card-front-custom  9">
            <figure>
              <div className="img-bg-custom"></div>
              <img src={blogPost.image_url} alt={blogPost.event_name} />
              <figcaption className="text-[#FE7A00]">
                {blogPost.name_event}
              </figcaption>
            </figure>
            <ul className="uldetail text-start">
              <li className="list">
                {" "}
                <label className="text-start text-[#FE7A00]">
                  Name Event :{" "}
                </label>
                {blogPost.event_name}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Presenter :{" "}
                </label>
                {blogPost.speaker}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Number_Seats :{" "}
                </label>
                {blogPost.tickets}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Description :{" "}
                </label>
                {blogPost.direction}
              </li>
              <li className="list">
                <label className="text-start text-[#FE7A00]">
                  Ticket_Price :{" "}
                </label>
                {blogPost.price}
              </li>
            </ul>
          </div>
          <div className="card-back-custom">
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
            {/* {showPopup && (
              <TicketFormPopup
                onClose={closePopup}
                onSubmit={handleTicketSubmit}
              />
            )} */}
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
      <div className="flex justify-between ">
        <div className="text-center pt-12 pr-80">
          {/* <Link to="/payment">
              <button
                // onClick={() => {
                //   addToCart(product.product_id);
                // }}
                className=" flex items-center justify-center rounded-full bg-[#FE7A00] px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700  "
              >
                  <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg"
                   width="24"
                    height="24" 
                   viewBox="0 0 24 24" 
                   stroke-width="2" 
                   stroke="currentColor"
                    fill="none" 
                    stroke-linecap="round"
                     stroke-linejoin="round"> 
                    
                      <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
             
              </button>
              </Link> */}
        </div>
      </div>
      <Related />
      <Quantity isOpen={isRequestModalOpen} onclose={handleModalClose}  />
    </>
  );
};

export default FlipCard;
