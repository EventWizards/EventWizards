import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Filecss/Distinationtop.css'
// Card component



const Card = ({ title, copy, button, image }) => (
  <div className="card">
    <div
      className="card__background"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="copy">{copy}</p>
      <button className="btn">{button}</button>
    </div>
  </div>
);

// PageContent component
const PageContent = () => {
  // // Define your array of cards
 

  const [products, setProducts] = useState([]);

// fetch products
useEffect(() => {
  axios
    .get("http://localhost:3001/city/getall")
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

  return (
    <div>
        <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">Top Destination</h2>
    <main className="page-content">
      {products.map((card, index) => (
        <Card key={card.id} title={card.name}  image={card.image} />
      ))}
    </main>
    </div>
  );
};

export default PageContent;
