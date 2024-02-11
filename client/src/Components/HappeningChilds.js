import React from "react";
import dotsIcon from "../Assets/threeDots.svg";

const HappeningChilds = () => {
  return (
    <div className="flex flex-col cursor-pointer hover:bg-gray-300 px-5 py-2">
      <div className="flex justify-between">
        <div>
          <span>Sports</span>
          <span>-</span>
          <span>Trending</span>
        </div>
        <img src={dotsIcon} alt="dots" className="w-5" />
      </div>
      <span className="text-lg font-bold text-start">#MiaKhalifa</span>
      <p className="text-start text-gray-600">69K posts</p>
    </div>
  );
};

export default HappeningChilds;
