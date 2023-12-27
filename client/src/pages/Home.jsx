import React from "react";
import Hero from "../Component/Website/Hero";
import Top from "../Component/Website/Top";
import Service from "../Component/Website/Service";
import Category from "../Component/Website/Category";
import ExploreEvent from "../Component/Website/Explore";
import Destination from "../Component/Website/Destination";
import PageContent from "../Component/Website/Destinationtop";
import queryString from 'query-string';
import { useAuth } from "../AuthContext";
import Cookies from "js-cookie";
import { Link, redirect, useNavigate } from "react-router-dom";

function Home() {
  const {login}=useAuth()
  const navigate = useNavigate();
  const queryParams = queryString.parse(window.location.search);
  const token = queryParams.token;
  if (token) {
    Cookies.set("role",2)
      login(token)
      navigate("/");
  }
  
  return (
    <div >
      {/* className="bg-[#FEFAF1]" */}
      <Hero />
      <Top/>
      <Service/>
      <Category/>
      <ExploreEvent/>
      <Destination/>
      <PageContent/>
     
    </div>
  );
}

export default Home;
