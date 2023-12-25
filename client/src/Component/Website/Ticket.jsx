import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Filecss/Ticket.css';
import { Link, useNavigate, useParams } from "react-router-dom";

export const Ticket = () => {
  const [ticketInfo, setTicketInfo] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);

    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/pay/payments/${id}`);
      setTicketInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching ticket information:', error);
    }
  };

  if (!ticketInfo) {
    // You can render a loading state here if needed
    return <div>Loading...</div>;
  }

  return (
    
<div className="main bg-[#FEFAF1] ">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      {/* {products.map((product) => ( */}
      <div className="ticket ">
        <div className="left ">
          <div
            className="image"
            style={{
              backgroundImage: `url(${ticketInfo.image_url})`,
            }}
          >
            <p className="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <div className="ticket-number">
              <p> {ticketInfo.ttt}</p>
            </div>
          </div>
          <div className="ticket-info">
            <p className="date">
              <span>TUESDAY</span>
              <span className="june-29">{ticketInfo.date}</span>
              <span>2021</span>
            </p>
            <div className="show-name">
              <h1>{ticketInfo.event_name}</h1>
              <h2>{ticketInfo.speaker}</h2>
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
              <span>{ticketInfo.amount}</span>
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
                <Link to={ticketInfo.location_url}>
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

              <span>{ticketInfo.location}</span>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="admit-one">
            
            <span>{ticketInfo.name_event}</span>
            
          </p>
          <div className="right-info-container">
            <div className="show-name">
              <h1>{ticketInfo.name_event}</h1>
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
            <p className="ticket-number"> {ticketInfo.id}</p>
          </div>
        </div>
      </div>
      {/* ) */}
    </div>

  )
}
