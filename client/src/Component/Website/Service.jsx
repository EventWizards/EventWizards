import React from "react";

const Service = () => {
  return (
    <div className="mt-8 mb-10">
        <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">Services</h2>
     
      <div class="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
        <div class="grid gap-4 justify-items-center text-center md:flex-1">
          <div class="text-white rounded-full border-8 border-[#FE7A00] bg-[#FE7A00] p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              ></path>
            </svg>
          </div>
          <h3 class="text-1xl font-bold">Providing Accurate Information</h3>
          <p>We provide accurate and comprehensive information about each event, such as date, time, and location</p>
        </div>
        <div class="grid gap-4 justify-items-center text-center md:flex-1">
          <div class="text-white rounded-full border-8 border-[#FE7A00] bg-[#FE7A00] p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
          </div>
          <h3 class="text-1xl font-bold">Organizing Events</h3>
          <p>We provide an easy-to-use interface to organize and browse events based on various criteria, such as rating, location, and date</p>
        </div>
        <div class="grid gap-4 justify-items-center text-center md:flex-1">
          <div class="text-white rounded-full border-8 border-[#FE7A00] bg-[#FE7A00] p-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
          </div>
          <h3 class="text-1xl font-bold">User  Opinions</h3>
          <p>We allow users to provide ratings and opinions about events they have participated in, and displays these ratings to help make decisions</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
