import React from "react";
import userIcon from "../Assets/user.png";
import dots from "../Assets/threeDots.svg";

const AccountMenu = () => {
  return (
    <div className="flex justify-between cursor-pointer hover:bg-gray-200 rounded-full px-3 py-1">
      <div className="flex">
        <img src={userIcon} alt="user" className="h-10 rounded-full" />
        <div className="flex-col ml-2">
          <p className="font-bold">UserName</p>
          <p className="text-sm text-gray-800">@userName</p>
        </div>
      </div>
      <div className="my-auto">
        <img src={dots} alt="" className="h-5" />
      </div>
    </div>
  );
};

export default AccountMenu;
