import React from "react";
import Logo from "./images/Logo.svg";
import Language from './LanguageSelector'

const Navbar = () => {
  return (
    <div className="w-full mt-4 md:w-[95%] lg:w-[70%]  2xl:w-[70%]  mx-auto  px-4 md:rounded-[20px] border-[0.5px] border-[#7F7F7F] flex justify-between backdrop-blur-xl p-1 items-center ">
      <img src={Logo} alt="logo" className="w-[50px] h-[60px]" />
      <div className="flex gap-2  rounded-full">
      <Language/>
      <button className="bg-[#AD1519] md:block hidden rounded-full w-32 text-white  tracking-wide text-lg">Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
