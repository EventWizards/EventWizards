import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 5000);
    return () => clearTimeout(slideTimer);
  }, [currentSlide]);

  return (
    <header className="bg-white ">
      <div className="w-full flex flex-col md:flex-row md:items-center">
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full md:order-2">
            {/* items */}
            {currentSlide === 1 && (
              /* <!-- Item 1 --> */
              <div className="w-full" data-carousel-item="">
                <div className="flex flex-col lg:flex-row justify-center items-center h-[500px] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50fGVufDB8fDB8fHww"
                    className="object-cover h-[200px] w-[250px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]"
                    alt="Image of a chair"
                  />
                  <div className="flex flex-col justify-start items-center">
                    <div className="m-3 w-[80%] md:text-start text-center">
                      <h5 className="text-2xl font-bold md:text-4xl my-3 text-start">
                      What are you waiting for, create an event                
                            </h5>
                            <Link to="create event">
                      <button className="bg-[#FE7A00] hover:bg-orange-600 rounded-full hover:text-white text-white my-3 px-10 py-2">
                      Create your event                 
                           </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentSlide === 2 && (
              /* <!-- Item 2 --> */
              <div
                className="w-full h-[500px] bg-cover bg-[50%] bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
                data-carousel-item=""
              >
                <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-[#3f3f3f5c] flex flex-col justify-center items-center">
                  <div className="m-3 w-2/3">
                    <h3 className="text-white text-2xl font-bold md:text-4xl my-3">
                    If you don't bring anything new to the world, you are a blame for it. 
                    </h3>
                    <Link to="create event">
                     <button className="bg-[#FE7A00]  hover:bg-orange-600 hover:text-white  rounded-full text-white my-3 px-10 py-2">
                    Create your event 
                    </button></Link>
                  </div>
                </div>
              </div>
            )}
            {currentSlide === 3 && (
              /* <!-- Item 3 --> */
              <div
                className="w-full h-[500px] bg-cover bg-[50%] bg-[url('https://images.pexels.com/photos/18898934/pexels-photo-18898934/free-photo-of-morning-exercise-of-a-group-of-campers-near-their-tents-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
                data-carousel-item=""
              >
                <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center md:items-end">
                  <div className="bg-[#0538385c] flex flex-col justify-center items-center mx-16 md:mx-24 rounded-xl">
                    <div className="m-3 p-3">
                      <h1 className="text-white text-2xl font-bold md:text-4xl my-3">
                        Discover Our New Collection
                      </h1>
                      <h3 className="text-white text-lg md:text-2xl my-3">
                      Make the change with us to live an active life
                      </h3>
                      <Link to="create event">
                      <button className="bg-[#FE7A00] text-white hover:bg-yellow-600 hover:text-white  rounded-full  my-3  px-10 py-2">
                      Create your event 
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentSlide === 4 && (
              /* <!-- Item 4 --> */
              <div
                className="w-full h-[500px] bg-cover bg-[50%] bg-[url('https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
                data-carousel-item=""
              >
                <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-[#3f3f3f5c] flex flex-col justify-center items-center">
                  <div className="m-3 w-2/3">
                    <h1 className="text-white text-2xl font-bold md:text-4xl my-3">
                    Be with us to create joy and joy
                                        </h1>
                  </div>
                </div>
              </div>
            )}
            {/* buttons */}
            {/* Previous button */}
            <button
              type="button"
              className={`${
                currentSlide !== 1 ? `text-[#FE7A00]` : `text-black`
              } absolute top-1/2 left-0 transform -translate-y-1/2 mx-6 p-2 md:p-4`}
              data-carousel-prev=""
              onClick={() =>
                changeSlide(currentSlide === 1 ? 4 : currentSlide - 1)
              }
            >
              <span className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 md:w-16 md:h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </span>
            </button>

            {/* Next button */}
            <button
              type="button"
              className={`${
                currentSlide !== 1 ? `text-[#FE7A00]` : `text-black`
              } absolute top-1/2 right-0 transform -translate-y-1/2 mx-6 p-2 md:p-4`}
              data-carousel-next=""
              onClick={() =>
                changeSlide(currentSlide === 4 ? 1 : currentSlide + 1)
              }
            >
              <span className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 md:w-16 md:h-16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;