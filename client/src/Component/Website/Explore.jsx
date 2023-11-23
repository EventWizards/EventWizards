import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "./Card";

const ExploreEvent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [quantity, setQuantity] = useState(2);
  const [products, setProducts] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 2;
  const totalPages = Math.ceil(products.length / productPerPage);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentItems = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxVisibleButtons = 3;
  const indexOfLastButton = Math.min(
    Math.max(currentPage + maxVisibleButtons - 1, maxVisibleButtons),
    pageNumbers.length
  );
  const indexOfFirstButton = Math.max(indexOfLastButton - maxVisibleButtons, 0);

  const visiblePageNumbers = pageNumbers.slice(
    indexOfFirstButton,
    indexOfLastButton
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // end of pagination

  // fetch products
  useEffect(() => {
    axios
      .get(" http://localhost:3001/comments")
      .then((response) => {
        // Handle the response data here
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  console.log(products);
  // function to add items to cart
  const addToCart = async (id) => {
    //   try {
    //     const response = await axios.post('https://fakestoreapi.com/carts', {
    //       "quantity" : product,
    //       "id" : id
    //         });
    //     if (response.status === 201) {
    //       alert("Added to cart successfully!");
    //       setCart([...cart, blogPost]);
    //     }
    //   } catch (error) {
    //     console.log("Error adding to cart:", error);
    //   }
  };

  return (
    <div className="my-16">
      <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">
        Explore Our Events
      </h2>

      <div className="relative flex flex-wrap gap-7 justify-center items-center mx-16">
        {currentItems.map((product, id) => (
          
          <div 
          key={id}
          className="group relative m-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
          {/* Page1 */}
         
          <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
            
          <Link
              to={`/product/${product.product_id}`}
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            >
            <img
              className="h-96 w-full object-cover"
              src={product.image_url}
              alt="product image"
            /></Link>
            <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
            {product.product_name}
            </h1>
            <p className="mt-1 px-4 text-center text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
            </p>
          </div>
          {/* /Page1 */}
          {/* Page2 */}
          <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
            <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold text-rose-500">
            {product.product_name}
            </h1>
            <p className="px-8 text-center">
            {product.description}
            </p>
            
            <Link to="/payment" class="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-[#FE7A00] text-white transition-all hover:w-16">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
          </svg>
          </Link>
          </div>
          {/* /Page2 */}
        </div>


          // <div
          //   key={id}
          //   className="group my-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          // >
          //   <Link
          //     to={`/product/${product.product_id}`}
          //     className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          //   >
          //     <img
          //       className="peer absolute border top-0 right-0 h-full w-full object-cover"
          //       src={product.image_url}
          //       alt="product image"
          //     />
          //     <img
          //       className="peer absolute top-0 border -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
          //       src={product.image_url}
          //       alt="product image"
          //     />
          //     {/* <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
          //   </Link>
          //   <div className="mt-4 px-5 pb-5">
          //     <a href="#">
          //       <h5 className="text-xl text-start h-8 mb-5 overflow-hidden tracking-tight text-slate-900">
          //         {product.product_name}
          //       </h5>
          //     </a>
          //     <div className="mt-2 mb-5 flex items-center justify-between">
          //       <p>
          //         {/* <span className="text-3xl font-bold  line-through text-teal-600">${product.price}</span> */}
          //         <span className="text-lg font-bold text-slate-900">
          //           ${product.price}
          //         </span>
          //       </p>
          //     </div></div>
          //     <div className="mt-4 px-36 pb-5 w-60">
          //       <Link to="/payment">
          //     <button
          //       // onClick={() => {
          //       //   addToCart(product.product_id);
          //       // }}
          //       className=" flex items-center justify-center rounded-full bg-[#FE7A00] px-1 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700  "
          //     >
          //         <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg"
          //          width="24"
          //           height="24" 
          //          viewBox="0 0 24 24" 
          //          stroke-width="2" 
          //          stroke="currentColor"
          //           fill="none" 
          //           stroke-linecap="round"
          //            stroke-linejoin="round"> 
                    
          //             <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" /></svg>
          //       {/* Add to cart */}
          //     </button>
          //     </Link>
          //   </div>
          // </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 border text-black rounded-lg shadow "
          >
            Previous Page
          </button>
          <ul className="flex list-none">
            {visiblePageNumbers.map((number) => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-[#FE7A00]  w-10 font-bold text-white"
                      : "bg-[#f97316] w-10 text-white"
                  } py-2 px-3 focus:outline-none rounded-lg`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(products.length / productPerPage)
            }
            className="px-4 py-2 border text-black rounded-lg shadow"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreEvent;

// function to add items to cart
