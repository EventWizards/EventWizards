// Category.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the server
    axios
      .get('http://localhost:3001/category/getall') // Adjust the URL based on your server setup
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">
        Category
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[6rem]">
        {categories.map((category) => (
          <Link to={`category/${category.id}`} key={category.id}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-64"
                src={category.brief}
                alt={`Category Image - ${category.name}`}
              />
              <div className="absolute inset-0 flex flex-col justify-start px-5 py-4 text-start transition-opacity duration-300">
                <p className="font-bold text-white text-1xl">{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
