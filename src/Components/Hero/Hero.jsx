import React from "react";
import Logo from "../Navbar/images/Logo.svg";
import google from "./images/google.svg";
import profile from "./images/profile.jpg";
import not from "./images/not.svg";
import copy from "./images/copy.svg";
import LanguageSelector from "../Navbar/LanguageSelector";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='bgimg h-auto md:min-h-screen bg-no-repeat bg-cover  flex items-center md:py-6 '>
      <div className=" w-full md:w-[95%] lg:w-[90%] xl:w-[75%] 2xl:w-[70%]  mx-auto pb-[32px] pt-[26px] px-4 md:rounded-[50px] border-[0.5px] border-[#CCCCCC]  backdrop-blur-xl ">
        <div className="flex justify-between px-0 md:px-6 lg:px-8 items-center">
          <img src={Logo} alt="" className="w-8" />
          <div >
            {" "}
            <LanguageSelector />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col  gap-6 px-2 md:pt-8 pb-0 h-[100%] lg:h-[80%] mx-auto ">
          <div className=" w-[95%]  space-y-6  pb-0">
          <div className=" w-fit mx-auto xl:hidden block">
              <img
                src={profile}
                alt="profile"
                className="w-44 h-44 md:mt-0 mt-4 rounded-full xl:h-96 border-red-700 border-4  "
              />
            </div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl  text-white text-center xl:text-start">
              Hello World!
            </h1>
            <div className="text-white space-y-2 lg:space-y-2 xl:space-y-6 xl:text-lg 2xl:text-xl text-center xl:text-start  ">
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
          <div className="flex justify-center xl:justify-start" >
            <Link to="/google"> <button className="w-fit  rounded-full bg-white/15 py-1 px-14 hover:cursor-pointer font-semibold md:text-lg text-xs text-white flex items-center gap-2">
              <span>
                <img src={google} alt="" className="w-8" />
              </span>{" "}
              Sign Up With Google
            </button></Link></div>

           
          </div>
          <div className="  lg:w-[100%] xl:w-[70%] 2xl:w-[50%] flex flex-col justify-between ">
            <div className=" w-fit mx-auto xl:block hidden ">
              <img
                src={profile}
                alt="profile"
                className="w-72 rounded-full h-72 border-red-700 border-4  "
              />
            </div>

            <div className="flex md:flex-row flex-col items-center gap-2 justify-start xl:justify-center mt-4 xl:mt-0">
              <button className="py-2 w-full px-2 font-light xl:w-fit hover:cursor-pointer rounded-full bg-white/10 text-xs md:text-sm 2xl:text-lg   text-white flex items-center gap-0 2xl:gap-4 justify-around ">
                <span>
                  <img src={not} alt="wait"  className="w-6" />
                </span>{" "}
                Early Access Beta
              </button>

              <button className="w-full xl:w-fit rounded-full bg-white/10 py-2 px-2 hover:cursor-pointer md:font-light text-xs md:text-sm 2xl:text-lg  text-white flex items-center gap-0 2xl:gap-4 justify-around">
                <span>
                  <img src={copy} alt="copyrite" className="w-6" />
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
