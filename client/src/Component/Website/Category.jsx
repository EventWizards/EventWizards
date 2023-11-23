import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4; // Number of products per page

  // Static image URLs
  const staticImages = [
    'https://images.pexels.com/photos/3179922/pexels-photo-3179922.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2422256/pexels-photo-2422256.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7502201/pexels-photo-7502201.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5775046/pexels-photo-5775046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8349233/pexels-photo-8349233.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5273740/pexels-photo-5273740.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
 // Static titles
 const staticTitles = [
  'Cultural',
  'Sport',
  'Music',
  'Social',
  'Arts',
  'Food',
  'Conferences',
  'Workshops',
];
  // Fetch products from the API
  useEffect(() => {
    axios
    //error 
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Set the product data
        setData(response.data.slice(0, 4)); // Limit the data to the first 4 items
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">Category</h2>
     
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[6rem] ">
        {staticTitles.map((title, index) => (
          <Link to={`category/${title}`} key={index}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-64"
                src={staticImages[index]}
                alt={`Static Image ${index + 1}`}
              />
              {/* Additional content here */}
              <div className="absolute inset-0 flex flex-col justify-start px-5 py-4 text-start transition-opacity duration-300">
                <p className=" font-bold text-white text-1xl" >{staticTitles[index]}</p>
                {/* <p className="text-xs text-teal-600">{item.category}</p> */}
              
                <div className="flex items-center justify-center space-x-3">
                  {/* Additional content here */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;