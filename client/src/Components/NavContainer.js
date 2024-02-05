import React from "react";

const NavContainer = ({ title, icon, selected }) => {
  console.log(title, " => ", selected);
  return (
    <div className="flex pl-5">
      <div className="flex box-container rounded-full py-2 px-4 gap-3">
        <img src={icon} alt={title} className={`${selected ? "w-9" : "w-8"}`} />
        <p className={`${selected ? "font-bold text-2xl" : "text-xl"}`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default NavContainer;
