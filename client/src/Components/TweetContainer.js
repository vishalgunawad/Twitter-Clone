import React from "react";
import userIcon from "../Assets/user.png";
import dotsIcon from "../Assets/threeDots.svg";
import Tweet from "./Tweet";
import imgDummy from "../Assets/dummy/post.jpg";
import ActionBar from "./ActionBar";

const TweetContainer = () => {
  return (
    <div className="pt-4 border-black border-x-2 border-y pb-4 hover:bg-[#f8f8f8] cursor-pointer">
      <div className="flex mx-4">
        <img src={userIcon} alt="user" className="w-10 rounded-full" />
        <div className="ml-3 flex-1">
          {/* First Line */}
          <div className="flex justify-between">
            <div className="flex">
              <p className="font-bold">UserName</p>
              <p className="ml-1 text-[#6d6d6d]">@user</p>
              <p className="mx-1 text-[#6d6d6d]">-</p>
              <p className="text-[#6d6d6d]">14h</p>
            </div>
          </div>
          {/* Second line for tag */}
          <div className="flex justify-start">
            <p>THis is Tag</p>
          </div>
        </div>
        <img
          src={dotsIcon}
          alt="menu"
          className="w-12 z-1 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
        />
      </div>
      <div className="ml-16">
        <Tweet tImg={imgDummy} />
        <ActionBar />
      </div>
    </div>
  );
};

export default TweetContainer;
