import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

// const EidtPorfile = ({ isOpen, onclose ,eventId}) => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [error, setError] = useState("");
//   const [user, setUser] = useState({
//     // ... other properties
//   });

//   const [dataLoaded, setDataLoaded] = useState(false);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/event/event?id=${eventId}`);
//         setUser(response.data);
//         console.log("in axios", response.data);
//         setDataLoaded(true);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id, isOpen]); // Include 'id' and 'isOpen' as dependencies

//   const handleSaveChanges = async (e) => {
//     e.preventDefault();
//     if (!error) {
//       const updatedUser = {};

//       updatedUser.id = user.id;
//       if (user.event_name !== "") {
//         updatedUser.event_name = user.event_name;
//       }

//       // if (user.first_name !== "") {
//       //   updatedUser.first_name = user.first_name;
//       // }

//       // if (user.last_name !== "") {
//       //   updatedUser.last_name = user.last_name;
//       // }
//       if (user.speaker !== "") {
//         updatedUser.speaker = user.speaker;
//       }

//       // if (user.event_location !== "") {
//       //   updatedUser.event_location = user.event_location;
//       // }
//       if (user.tickets !== "") {
//         updatedUser.tickets = user.tickets;
//       }
//       if (user.price !== "") {
//         updatedUser.price = user.price;
//       }
//       if (user.image_url !== "") {
//         updatedUser.image_url = user.image_url;
//       }
//       // if (user.idphoto !== "") {
//       //   updatedUser.idphoto = user.idphoto;
//       // }
//       if (user.date !== "") {
//         updatedUser.date = user.date;
//       }
//       if (user.direction !== "") {
//         updatedUser.direction = user.direction;
//       }
//       // if (user.additions !== "") {
//       //   updatedUser.additions = user.additions;
//       // }
//       if (user.location_url !== "") {
//         updatedUser.location_url = user.location_url;
//       }

//       console.log(updatedUser);

//       try {
//         const response = await axios.put(
//           `http://localhost:3001/event/update?id=${eventId}`,
//           updatedUser
          
//           // Use user state for updating
//         );
        
//         console.log(updatedUser);
//           Swal.fire({
//             icon: "success",
//             title: "Event Update  Successfully!",
//             text: "Your event has been update successfully.",
//             timer: 3000,
//             iconColor: "#FE7A00",
//             confirmButtonColor:"#FE7A00"
//           });
//           // navigate("/dashboard");

//         // window.location.reload();

        
//         // onclose(); // Close the modal after successful submission
//         // console.log(response.data);
//       } catch (error) {
//         alert("Error updating Information");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };
const EidtPorfile = ({ isOpen, onclose, eventId }) => {
    const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    // ... other properties
  });
  console.log(id,"wsdasdasdasd");
  
  const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/event/event?id=${eventId}`);
        setUser(response.data);
        console.log(eventId,"mmmmmmmmmmmmmmmmmmmmmm");
        setDataLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, isOpen]); 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser((prevUser) => ({
      ...prevUser,
      image_url: file,
    }));
  };
  
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!error) {
      const formData = new FormData();

      
      
      formData.append('event_name', user.event_name);
      formData.append('location_url', user.location_url);
      formData.append('tickets', user.tickets);
      formData.append('speaker', user.speaker);
      formData.append('date', user.date);
      formData.append('direction', user.direction);
      formData.append('image_url', user.image_url);
      formData.append('image_id', null);
      

      try {
        const response = await axios.put(
          `http://localhost:3001/event/update?id=${eventId}`,
          formData,
        );
console.log(eventId,"kkkkkkkkkk");
        console.log(response.data);

        Swal.fire({
          icon: 'success',
          title: 'Event Update Successfully!',
          text: 'Your event has been updated successfully.',
          timer: 3000,
          iconColor: '#FE7A00',
          confirmButtonColor: '#FE7A00',
        });

        // You may want to close the modal or perform other actions here
      } catch (error) {
        console.error('Error updating Information:', error);
        alert('Error updating Information');
      }
    }
  };

  return (
    <>
      <Modal
        id="popup-modal"
        tabindex="-1"
        className="fixed top-0 right-0 left-0 z-50 justify-center items-center  md:inset-0  max-h-full overflow-y-scroll w-[60%] h-[80%]  ml-52 mt-16"
        onRequestClose={onclose}
        isOpen={isOpen}
      >
        <div className="flexd items-center justify-center mx-auto mt-2 px-2 ">
          <form className="bg-white mx-auto text-start shadow-md  shadow-orange-500  rounded px-8 pt-6 pb-8 mb-4 flex  justify-center flex-col my-2 Z-10 "  encType="multipart/form-data" >
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={onclose}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <h3 className="pt-4 text-[#FE7A00]">
                {" "}
                
              </h3>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="Name  Events "
                >
                  Name Event
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="text"
                  type="text"
                  value={user.event_name}
                  onChange={(e) =>
                    setUser({ ...user, event_name: e.target.value })
                  }
                  placeholder={user.event_name}
                />
              </div>
              {/* <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-bl border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    value={user.first_name}
                    onChange={(e) =>
                      setUser({ ...user, first_name: e.target.value })
                    }
                    placeholder={user.first_name}
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    value={user.last_name}
                    onChange={(e) =>
                      setUser({ ...user, last_name: e.target.value })
                    }
                    placeholder={user.last_name}
                  />
                </div>
              </div> */}

<div className=" flex flex-row text-start gab-3 mb-4 md:flex md:justify-between " >
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black  text-start "
                    htmlFor="Presenter "
                  >
                    Speaker 
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    value={user.speaker}
                    onChange={(e) =>
                      setUser({ ...user, speaker: e.target.value })
                    }
                    placeholder={user.speaker}
                  />
                </div>
                {/* <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Event location "
                  >
                    Event location *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text1"
                    type="text"
                    value={user.event_location}
                    onChange={(e) =>
                      setUser({ ...user, event_location: e.target.value })
                    }
                    placeholder={user.event_location}
                  />
                </div> */}
             

              <div className="mb-4 md:flex md:justify-between text-start">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Number "
                  >
                    Available seats 
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="number"
                    value={user.tickets}
                    onChange={(e) =>
                      setUser({ ...user, tickets: e.target.value })
                    }
                    placeholder={user.tickets}
                  />
                </div>
                {/* <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="price  "
                  >
                    Ticket price *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text3"
                    type="text"
                    value={user.ticket_price}
                    onChange={(e) =>
                      setUser({ ...user, ticket_price: e.target.value })
                    }
                    placeholder={user.ticket_price}
                  />
                </div> */}
              </div>

              <div className="mb-4 md:flex md:justify-between">
                {/* <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Direction"
                  >
                    ID photo *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="file"
                    type="file"
                    
                    onChange={(e) =>
                      setUser({ ...user, photo: e.target.value })
                    }
                    
                  />
                </div> */}

                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Photo"
                  >
                    Photo 
                  </label>
                  <input
  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
  id="file"
  type="file"
  onChange={(e) => handleFileChange(e)}
/>

                </div>
              </div> </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black text-start "
                  htmlFor="Event location "
                >
                  Date and Time 
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="text1"
                  type="datetime-local"
                  value={user.date}
                  onChange={(e) => setUser({ ...user, date: e.target.value })}
                  placeholder={user.date}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black text-start "
                  htmlFor="Direction"
                >
                  Description 
                </label>
                <input
                  className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                  id="text"
                  type="text"
                  value={user.direction}
                  onChange={(e) =>
                    setUser({ ...user, direction: e.target.value })
                  }
                  placeholder={user.direction}
                />
              </div>
              {/* <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                  htmlFor="Additions"
                >
                  Additions
                </label>
                <input
                  className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                  id="text"
                  type="text"
                  value={user.additions}
                  onChange={(e) =>
                    setUser({ ...user, additions: e.target.value })
                  }
                  placeholder={user.additions}
                />
              </div> */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-black text-start"
                  htmlFor="location"
                >
                  link location 
                </label>
                <input
                  className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                  id="text"
                  type="url"
                  value={user.location_url}
                  onChange={(e) =>
                    setUser({ ...user, location_url: e.target.value })
                  }
                  placeholder={user.location_url}
                />
              </div>

              {/* thisssss2  */}

              <div className="flex justify-end">
                <button
                  className="w-1/4 mr-3 p-2 bg-gray-50 text-black rounded-xl mt-2 "
                  type="clear"
                  // onClick={hendleSignUp}
                >
                  Cancel
                </button>
                <button
                  className="w-auto py-2 px-3 bg-[#FE7A00] text-white rounded-xl mt-2 hover:bg-orange-600 hover:text-[#fff]"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EidtPorfile;
