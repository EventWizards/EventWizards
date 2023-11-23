import React from "react";
import Hero from "../Component/Website/Hero";
import Top from "../Component/Website/Top";
import Service from "../Component/Website/Service";
import Category from "../Component/Website/Category";
import ExploreEvent from "../Component/Website/Explore";
import Destination from "../Component/Website/Destination";
import PageContent from "../Component/Website/Destinationtop";


function Home() {
  return (
    <div>
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
