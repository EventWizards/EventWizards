import React, { useEffect, useState } from "react";
import "../Css/Ticket.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const Ticket = () => {
  const { id } = useParams();
  console.log(id,"id");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3004/user/${id}`)
      .then((response) => {
        // Handle the response data here
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <div className="main  ">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      {/* {products.map((product) => ( */}
        <div className="ticket " >
          <div className="left ">
            <div
              className="image"
              style={{
                backgroundImage: `url(${product.photo})`,
              }}
            >
              <p className="admit-one">
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
                <span>ADMIT ONE</span>
              </p>
              <div className="ticket-number">
                <p> {product.idcode}</p>
              </div>
            </div>
            <div className="ticket-info">
              <p className="date">
                <span>TUESDAY</span>
                <span className="june-29">{product.date}</span>
                <span>2021</span>
              </p>
              <div className="show-name">
                <h1>{product.name_event}</h1>
                <h2>{product.presenter}</h2>
              </div>
              <div className="time">
                <p>
                  8:00 PM <span>TO</span> 11:00 PM
                </p>
                <p>
                  DOORS <span>@</span> 7:00 PM
                </p>
              </div>
              <p className="location">
              <span>{product.number_ticket}</span>
                <span className="separator text-[#FE7A00]">
                  
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
                  </svg>
                </span>
                <span>
                  <Link to={product.link_location}>
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
                  </Link>
                </span>

                <span>{product.event_location}</span>
              </p>
            </div>
          </div>
          <div className="right">
            <p className="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <div className="right-info-container">
              <div className="show-name">
                <h1>{product.name_event}</h1>
              </div>
              <div className="time">
                <p>
                  8:00 PM <span>TO</span> 11:00 PM
                </p>
                <p>
                  DOORS <span>@</span> 7:00 PM
                </p>
              </div>
              <div className="barcode">
                <img
                  src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb"
                  alt="QR code"
                />
              </div>
              <p className="ticket-number"> {product.idcode}</p>
            </div>
          </div>

         
        </div>
        <div className=" flex items-center justify-center ">
     <Link to="/tickets"><button className= " bg-orange-500 hover:bg-orange-700 text-black font-semibold py-2 px-8 rounded">
Back      </button></Link> 
    </div>
      
    </div>
  );
};
