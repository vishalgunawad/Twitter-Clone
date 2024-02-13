import React from "react";
import commentLogo from "../Assets/comment.svg";
import retweetLogo from "../Assets/svg28.svg";
import likeLogo from "../Assets/heart.svg";
import graphLogo from "../Assets/svg30.svg";
import bookmarkLogo from "../Assets/svg31.svg";
import uploadLogo from "../Assets/svg32.svg";

const ActionBar = () => {
  return (
    <div className="mt-2 mr-4 flex justify-between ">
      <div className="flex hover:text-[#1C92E1] cursor-pointer">
        <img
          src={commentLogo}
          alt="comment"
          className="w-9 hover:bg-gray-200 p-2 rounded-full"
        />
        <p className="m-auto">157</p>
      </div>
      <div className="flex hover:text-[#00BA7C] cursor-pointer">
        <img
          src={retweetLogo}
          alt="comment"
          className="w-9 hover:bg-gray-200 p-2 rounded-full"
        />
        <p className="m-auto">157</p>
      </div>
      <div className="flex hover:text-[#F91880] cursor-pointer">
        <img
          src={likeLogo}
          alt="like"
          className="w-9 hover:bg-gray-200 p-2 rounded-full"
        />
        <p className="m-auto">157</p>
      </div>
      <div className="flex hover:text-[#1C96E8] cursor-pointer">
        <img
          src={graphLogo}
          alt="graph"
          className="w-9 hover:bg-gray-200 p-2 rounded-full"
        />
        <p className="m-auto">20</p>
      </div>
      <div className="flex">
        <img
          src={bookmarkLogo}
          alt="bookmark"
          className="w-9 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
        />
        <img
          src={uploadLogo}
          alt="upload"
          className="w-9 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ActionBar;
