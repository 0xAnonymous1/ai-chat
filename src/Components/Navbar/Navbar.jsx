import React from "react";
import Logo from "./images/Logo.svg";

const Navbar = ({ Buttons }) => {
  return (
    <div className="flex justify-between w-[95%] mx-auto px-2 py-4 rounded-2xl ">
      <img src={Logo} alt="logo" className="w-[50px] h-[60px]" />
      <div className="flex gap-2 border rounded-full">
       
       <button></button> 
      </div>
    </div>
  );
};

export default Navbar;
