import React from 'react'
import OrderTicket from '../Users/OrderTicket'
import ProfilePrivate from '../Users/ProfilePrivate'
import OrderEvent from '../Users/OrderEvent'
import Profile from '../Users/Profile'
import { Route, Router, Routes } from "react-router-dom";

function DashProfile() {
  return (
    <>
      <div className="flex flex-row gap-4 bg-[#FEFAF1] min:h-screen calc(100vh-64px)">
        <Profile />
        <Routes>
          <Route path="orderTicket" element={<OrderTicket />} />
          <Route index element={<ProfilePrivate />} />
          <Route path="orderEvent" element={<OrderEvent />} />
          <Route path="profilePrivate" element={<ProfilePrivate />} />
        </Routes>
      </div>
    </>
  )
}

export default DashProfile