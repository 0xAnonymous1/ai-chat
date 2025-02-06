import React from "react";
import Logo from "../Navbar/images/Logo.svg";
import google from "./images/google.svg";
import profile from "./images/profile.jpg";
import not from "./images/not.svg";
import copy from "./images/copy.svg";

import LanguageSelector from "../Navbar/LanguageSelector";

const Hero = () => {
  return (
    <div className='bg-[url("C:\Users\0Xton\Desktop\chatbot\src\Components\Hero\images\bgImg.svg")] h-auto md:min-h-screen bg-no-repeat bg-cover  flex items-center md:py-6 '>
      <div className=" w-full md:w-[75%]   mx-auto pb-12 pt-10 px-4 rounded-none lg:rounded-4xl  backdrop-blur-xl ">
        <div className="flex justify-between px-0 md:px-6 lg:px-8 items-center">
          <img src={Logo} alt="" />
          <div>
            {" "}
            <LanguageSelector />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col  gap-6 p-4 md:p-8 h-[100%] lg:h-[80%] mx-auto ">
          <div className=" w-[95%]  space-y-6  pb-0">
          <div className=" w-fit mx-auto xl:hidden block">
              <img
                src={profile}
                alt="profile"
                className="w-96 rounded-full xl:h-96 border-red-700 border-4  "
              />
            </div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl  text-white">
              Hello World!
            </h1>
            <div className="text-white space-y-2 lg:space-y-4 xl:space-y-6 lg:text-2xl 2xl:text-3xl  ">
              <p className="">
                Hello I’m <span className="font-semibold">Amy Wilkinson</span>,
                an inspiring consultant and <br />
                teacher to Fortune 500 companies, known for your <br />
                expertise in leadership, innovation, and the principles <br />
                outlined in your book, The Creator’s Code: The Six <br />
                Essential Skills of Extraordinary
              </p>
              <p className="font-light">
                I help companies streamline and grow their business by building
                conversational AI solutions to better discover and engage with
                al AI solutions to better discover and engage al AI solutions to
                better discover and engage.
              </p>
            </div>

            <button className="w-fit rounded-full bg-white/15 py-2 px-14 hover:cursor-pointer font-semibold md:text-xl text-xs text-white flex items-center gap-4">
              <span>
                <img src={google} alt="" />
              </span>{" "}
              Sign Up With Google
            </button>
          </div>
          <div className="  lg:w-[100%] xl:w-[70%] 2xl:w-[50%] flex flex-col justify-between ">
            <div className=" w-fit mx-auto xl:block hidden ">
              <img
                src={profile}
                alt="profile"
                className="w-96 rounded-full xl:h-96 border-red-700 border-4  "
              />
            </div>

            <div className="flex items-center gap-2 ">
              <button className="py-2 px-2 font-light w-fit hover:cursor-pointer rounded-full bg-white/10 text-xs md:text-sm 2xl:text-lg   text-white flex items-center gap-2 2xl:gap-4">
                <span>
                  <img src={not} alt="wait"  />
                </span>{" "}
                Early Access Beta
              </button>

              <button className="w-fit rounded-full bg-white/10 py-2 px-2 hover:cursor-pointer md:font-light text-xs md:text-sm 2xl:text-lg  text-white flex items-center gap-2 2xl:gap-4">
                <span>
                  <img src={copy} alt="copyrite" />
                </span>{" "}
                Hypermatter Alpha
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
