import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name_event:'',
    first_name: '',
    last_name: '',
    presenter: '',
    event_location: '',
    number_seats: '',
    ticket_price: '',
    photo: '',
    direction: '',
    additions: '',
    link_location: ''
   
  });
 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request with the data to your API endpoint
    axios.post(' http://localhost:3001/posts', formData)
      .then((response) => {
        // Handle the success response here
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Event Created Successfully!',
            text: 'Your event has been created successfully.',
            timer: 3000,
            iconColor: '#FE7A00',
          });
        }
      })
      .catch((error) => {
        console.error('An error occurred while sending the message:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while creating the event.',
        });
      });
  };


  return (
    <div className="h-full ">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: "url('https://i.pinimg.com/564x/f4/7e/5c/f47e5c92b4f68e1e2cafd17d5b833b6f.jpg')" }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white    rounded-lg lg:rounded-l-none">
            <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">Create Your Event!</h2>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white text-start  rounded" onSubmit={handleSubmit}>
              <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Name  Events ">
                  Name  Event
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    placeholder="Name  Events "
                    value={formData.name_event}
                     onChange={(e) => setFormData({ ...formData, name_event: e.target.value })}
                     required
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                    
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-bl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Presenter ">
                    Presenter *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="text"
                      placeholder="Name "
                      value={formData.presenter}
                     onChange={(e) => setFormData({ ...formData, presenter: e.target.value })}
                     required
                    />
                    
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Event location ">
                    Event location *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text1"
                      type="text"
                      placeholder="Location"
                      value={formData.event_location}
                     onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
                     required
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Number ">
                    Number of seats *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="number"
                      placeholder="Number "
                      value={formData.number_seats}
                     onChange={(e) => setFormData({ ...formData, number_seats: e.target.value })}
                     required
                    />
                    
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="price  ">
                    Ticket price *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text3"
                      type="text"
                      placeholder="price  "
                      value={formData.ticket_price}
                     onChange={(e) => setFormData({ ...formData, ticket_price: e.target.value })}
                     required
                    />
                   
                  </div>
                  
                </div>

                <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Direction">
                  ID photo  *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="file"
                    type="file"
                    placeholder="ID photo"
                    value={formData.direction}
                     onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                     required
                  />
                </div>
                





                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Photo">
                     Photo of the event 
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="file"
                      type="file"
                      placeholder="A Photo of the event"
                      value={formData.photo}
                     onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                     required
                    />
                  </div>
                </div>
                <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Event location ">
                    Date and Time *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text1"
                      type="datetime-local"
                      placeholder="Location"
                      value={formData.event_location}
                     onChange={(e) => setFormData({ ...formData, event_location: e.target.value })}
                     required
                    />
                  </div>


                
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Direction">
                  Description  *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="text"
                    placeholder="Direction of the event *"
                    value={formData.direction}
                     onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                     required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="Additions">
                  Additions 
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="text"
                    placeholder="Addition"
                    value={formData.additions}
                     onChange={(e) => setFormData({ ...formData, additions: e.target.value })}
                     required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-black " htmlFor="location">
                  link location * 
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="url"
                    placeholder="link location "
                    value={formData.link_location}
                     onChange={(e) => setFormData({ ...formData, link_location: e.target.value })}
                     required
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#FE7A00]  rounded-full hover:bg-[#F9B530]  dark:bg-[#FE7A00]  dark:text-white dark:hover:bg-orange-600  focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                   submit
                  </button>
                </div>
                <hr className="mb-6 border-t" />
               
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;