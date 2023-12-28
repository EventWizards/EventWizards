import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CategoryContent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const {category} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [blogImages, setBlogImages] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Fetch products
  useEffect(() => {
    axios
      // .get("https://fakestoreapi.com/products")
      .get(`http://localhost:3001/event/getEventsbycategory?id=${category}`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
        // setBlogImages(response.data[0].images);
        // console.log(response.data.images); 
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);
  // useEffect(() => {
  //   axios
  //     // .get("https://fakestoreapi.com/products")
  //     .get(`http://localhost:3001/event/getEventsbycity?id=${category}`)
  //     .then((response) => {
  //       setProducts(response.data);
  //       console.log(response.data);
  //       // setBlogImages(response.data[0].images);
  //       // console.log(response.data.images); 
  //     })
  //     .catch((error) => {
  //       // Handle errors here
  //       console.error("Error:", error);
  //     });
  // }, []);

  useEffect(() => {
    if (products.length > 0 && category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }, [products, category]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchFilteredProducts = products.filter((product) =>
    product.event_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(searchFilteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-16 ">
      <div className="flex justify-center items-center my-8">
        <div className="relative">
          <input
            type="text"
            className="px-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="relative flex flex-wrap gap-7 justify-center items-center mx-16">
        {currentProducts.map((event) => (
          <div
            key={event.event_id}
            className="group my-2 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <Link
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              to={`/blog/${event.event_id}`}
            >
              <img
                className="peer absolute border top-0 right-0 h-full w-full object-cover"
                src={event.image_url}
                alt="product image"
              />
            </Link>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl text-start h-8 mb-5 overflow-hidden tracking-tight text-slate-900">
                  {event.event_name}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-lg font-bold text-slate-900 line-clamp-1">
                    {event.direction}
                  </span>
                </p>
              </div>
              <Link to={`/blog/${event.event_id}`}>
              <button className="w-full flex items-center justify-center rounded-full bg-[#FE7A00] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
               
               Details
              </button></Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 border text-black rounded-lg shadow"
          >
            Previous Page
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`${
                currentPage === index + 1
                  ? "bg-[#FE7A00] w-10 font-bold text-white"
                  : "bg-[#F97316] w-10 text-white"
              } py-2 px-3 focus:outline-none rounded-lg mx-1`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border text-black rounded-lg shadow"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;
