import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="App">
      <div className="flex ">
        <Navbar />
        <div className="w-full bg-blue-300">Central Container</div>
        <div className="w-1/5 bg-green-500 h-16">Right Container</div>
      </div>
    </div>
  );
};

export default Home;
