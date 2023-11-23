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
  // const cards = [
  //   { title: 'Aqaba', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  //   { title: 'Amman', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  //   { title: 'Zarqa', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
  //   { title: 'Irbid', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
  // ];

  const [products, setProducts] = useState([]);

// fetch products
useEffect(() => {
  axios
    .get("  http://localhost:3001/profile")
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
        <Card key={index} title={card.title} copy={card.copy} button={card.button} image={card.image_url} />
      ))}
    </main>
    </div>
  );
};

export default PageContent;
