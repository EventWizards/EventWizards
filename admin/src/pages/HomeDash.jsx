import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import SidePar from "../Component/SidePar";
import Dashbored from "../Component/Dashbored";
import Users from "../Component/Users";
import Events from "../Component/Events";
import Tickets from "../Component/Tickets";
import Message from "../Component/Message";
import Search from "../Component/Search";
import { useAuth } from "../AuthContext";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
function HomeDash() {
  const {isUserRole} = useAuth()
  const role = isUserRole() || Cookies.get('role')
  return (
    <>
      <div className="flex flex-row gap-4 ">
        <SidePar />
        <Routes>
          <Route path="dashbored" element={<Dashbored />} />
          <Route
            index
            element={
              <div className="flex flex-col space-y-20">
                <Search title="Dashboard" /> <Dashbored /> <Users />{" "}
              </div>
            }
          />
          <Route
            path="users"
            element={
              <div className="flex flex-col space-y-10">
                <Search title="Users" /> <Users />{" "}
              </div>
            }
          />
          <Route
            path="events"
            element={
              <div className="flex flex-col space-y-10">
                <Search title="Events" /> <Events />{" "}
              </div>
            }
          />
          <Route path="search" element={<Search />} />
          <Route
            path="tickets"
            element={
              <div className="flex flex-col space-y-10">
                <Search title="Tickets" /> <Tickets />{" "}
              </div>
            }
          />
          <Route
            path="message"
            element={
              <div className="flex flex-col space-y-10">
                <Search title="Messages" /> <Message />{" "}
              </div>
            }
          />
          {/* <Route path="orderEvent" element={<OrderEvent />} />
        <Route path="profilePrivate" element={<ProfilePrivate />} /> */}
        </Routes>
      </div>
      {role != 1 &&
   (<Navigate to="/login" replace/>)
  }
    </>
  );
}

export default HomeDash;
