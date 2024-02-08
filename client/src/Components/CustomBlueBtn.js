import React from "react";

const CustomBlueBtn = ({ text }) => {
  return (
    <div className="rounded-full hover:bg-[#1A8CD8] bg-[#2494f5] text-white text-2xl font-bold w-full py-2">
      {text}
    </div>
  );
};

export default CustomBlueBtn;
