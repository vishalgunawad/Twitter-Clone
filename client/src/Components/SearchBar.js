import React from "react";
import lensImg from "../Assets/lens.svg";

const SearchBar = () => {
  return (
    <div className="flex bg-gray-200 rounded-full px-5 py-2">
      <img src={lensImg} alt="lens" className="w-5 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-200 focus:outline-none"
        style={{}}
      />
    </div>
  );
};

export default SearchBar;
