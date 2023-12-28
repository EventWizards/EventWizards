import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useAuth } from "../AuthContext";
import Cookies from "js-cookie";

const Events = () => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const { isUserRole } = useAuth();

  const role = isUserRole() || Cookies.get("role");

  const [catogryData, setcatogryData] = useState({ additions: "" });
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3001/category/getall"
        );
        setOptions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/city/getall");
        setCity(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    }
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    event_name: "",
    first_name: "",
    last_name: "",
    speaker: "",
    location: null,
    tickets: "",
    image_id: null,
    price: "",
    image_url: null,
    date: "",
    direction: "",
    category_id: 0,
    location_url: "",
  });

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [key]: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObject = new FormData();

    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    try {
      if (role == 2) {
        console.log(token);
        console.log(formDataObject);
        axios.defaults.headers.common["Authorization"] = token;
        const categry = await axios
          .get("http://localhost:3001/category/getall")
          .then((response) => {
            setOptions(categry.data);
            console.log(categry.data);
          })
          .catch((error) => {
            console.error("Error fetching options:", error);
          });
        const response = await axios.post(
          "http://localhost:3001/event/add",
          formDataObject
        );
        console.log(formDataObject);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Event Created Successfully!",
            text: "Your event has been created successfully.",
            timer: 3000,
            iconColor: "#FE7A00",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An error occurred while creating the event.",
        });
      }
    } catch (error) {
      console.error("An error occurred while sending the message:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while creating the event.",
      });
    }
  };

  return (
    <div className="h-full ">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/f4/7e/5c/f47e5c92b4f68e1e2cafd17d5b833b6f.jpg')",
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white    rounded-lg lg:rounded-l-none">
              <h2 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">
                Create Your Event!
              </h2>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white text-start  rounded"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
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
                    placeholder="Name  Events "
                    value={formData.event_name}
                    onChange={(e) =>
                      setFormData({ ...formData, event_name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
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
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={(e) =>
                        setFormData({ ...formData, first_name: e.target.value })
                      }
                      required
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
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                      htmlFor="Presenter "
                    >
                      speaker *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="text"
                      placeholder="Name "
                      value={formData.speaker}
                      onChange={(e) =>
                        setFormData({ ...formData, speaker: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="">
                    <label
                      className=" mb-2 text-sm font-bold text-gray-700 dark:text-black "
                      htmlFor="Event location "
                    >
                      Event location *
                    </label>
                    {/* <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text1"
                      type="text"
                      placeholder="Location"
                      value={formData.location}
                     onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                     required
                    /> */}
                    <select
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    >
                      {city.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                      htmlFor="Number "
                    >
                      Available seats *
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="number"
                      placeholder="Number "
                      value={formData.tickets}
                      onChange={(e) =>
                        setFormData({ ...formData, tickets: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
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
                      placeholder="price  "
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                      htmlFor="image"
                    >
                      ID photo *
                    </label>
                    <input
                      className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                      id="image_id"
                      type="file"
                      name="image_id"
                      accept="image/*"
                      placeholder="ID photo"
                      // value={formData.image_id}
                      onChange={(e) => handleFileChange(e, "image_id")}
                      required
                    />
                  </div>

                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                      htmlFor="image"
                    >
                      Photo of the event
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="image_url"
                      type="file"
                      name="image_url"
                      accept="/image"
                      placeholder="A Photo of the event"
                      // value={formData.image_url}
                      onChange={(e) => handleFileChange(e, "image_url")}
                      required
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    className=" mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Event location "
                  >
                    Date and Time *
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text1"
                    type="datetime-local"
                    placeholder="Location"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Direction"
                  >
                    Description *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="text"
                    placeholder="Direction of the event *"
                    value={formData.direction}
                    onChange={(e) =>
                      setFormData({ ...formData, direction: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="Additions"
                  >
                    category
                  </label>
                  {/* <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="text"
                    placeholder="Addition"
                    value={formData.additions}
                     onChange={(e) => setFormData({ ...formData, additions: e.target.value })}
                     required
                  /> */}
                  <select
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    onChange={(e) =>
                      setFormData({ ...formData, category_id: e.target.value })
                    }
                  >
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-black "
                    htmlFor="location"
                  >
                    link location *
                  </label>
                  <input
                    className="w-full h-15 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "
                    id="text"
                    type="url"
                    placeholder="link location "
                    value={formData.location_url}
                    onChange={(e) =>
                      setFormData({ ...formData, location_url: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#FE7A00]  rounded-full hover:bg-orange-600 hover:text-[#fff]  dark:bg-[#FE7A00]  dark:text-white dark:hover:bg-orange-600  focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={handleSubmit}
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
