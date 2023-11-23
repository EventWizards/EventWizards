import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Filecss/Top.css";

function Top() {
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    axios
      .get(" http://localhost:3001/comments")
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
      <>
        <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">
          Top Event
        </h2>

        <section className="hero-section">
          {/* <div className="relative flex flex-wrap gap-7 justify-center items-center mx-16"> */}
           
          <div className="card-grid">
            {products.map((product) => (
             <a className="cards" href="#">
              <Link to={`/blog/${product.id}`}>
                <div
                key={product.id}
                  className="card__background"
                  style={{
                    backgroundImage:
                    `url(${product.image_url})`
                  }}
                />
                <div className="card__content">
                  <p className="card__category ">{product.product_name}</p>
                  {/* <h3 className="card__heading">Example Card Heading</h3> */}
                </div>
                </Link>
                </a>
              
            ))}
          </div>

          {/* </div> */}
        </section>
      </>
    </div>
  );
}

export default Top;
