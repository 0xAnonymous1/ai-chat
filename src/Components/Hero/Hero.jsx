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

    <div className="">
    <div className='bgimg h-[150vh]   lg:h-auto md:min-h-screen p-6    bg-no-repeat bg-cover items-start  flex lg:items-center md:py-6 '>
      <div className=" w-full  md:w-[95%]  rounded-xl shadow-lg lg:w-[90%] xl:w-[75%] 2xl:max-w-[1400px]    mx-auto pb-[32px] pt-[26px] p-4 md:rounded-[50px] border-[0.2px] border-[#7f7f7f]  backdrop-blur-[8px] ">
        <div className="flex justify-between px-0  lg:px-  items-center">
          <img data-aos="fade-right" src={Logo} alt="" className="w-12" />
          <div >
            {" "}
            <LanguageSelector />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col  gap-6 md:pt-8 pb-0 h-[100%] lg:h-[80%] mx-auto ">
          <div className=" w-[95%]  space-y-6  pb-0">
          <div   className=" w-fit mx-auto text-[#FFFFFF] xl:hidden block">
              <img 
              
                src={profile}
                alt="profile"
                className="w-60 h-60 md:mt-0 mt-4 rounded-full xl:h-96 border-red-700 border-4  "
              />
            </div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl  text-white text-center xl:text-start">
              Hello World!
            </h1>
            <div className="text-white/90 space-y-2 lg:space-y-2 xl:space-y-6 xl:text-lg 2xl:text-xl text-center xl:text-start  ">
              <p className="lg:w-[500px]">
                Hello I’m <span className="font-semibold text-white">Amy Wilkinson</span>,
                an inspiring consultant and 
                teacher to Fortune 500 companies, known for your 
                expertise in leadership, innovation, and the principles 
                outlined in your book, The Creator’s Code: The Six 
                Essential Skills of Extraordinary
              </p>
              <p className="">
                I help companies streamline and grow their business by building
                conversational AI solutions to better discover and engage with
                al AI solutions to better discover and engage al AI solutions to
                better discover and engage.
              </p>
            </div>
          <div className="flex justify-center xl:justify-start" >
            <Link > <button  data-aos="fade-right"  className="min-w-fit w-full hover:bg-white/8  rounded-full bg-white/15 text-[14px]  p-2 py px-10 hover:cursor-pointer font-medium md:text-[22px] text-white flex items-center gap-2">
              <span>
                <img src={google} alt="" className="w-10" />
              </span>{" "}
              Sign Up With Google
            </button></Link></div>

           
          </div>
          <div className="  lg:w-[100%]  xl:w-[70%] 2xl:w-[50%] flex flex-col justify-between ">
            <div className="  mx-auto h-80 w-80 xl:block hidden ">
              <img
                src={profile}
                alt="profile"
                className="h-full w-full rounded-full   border-red-700 border-8  "
              />
            </div>

            <div className="flex md:flex-row flex-col w-full items-center gap-1 justify-start xl:justify-center mt-4 xl:mt-0">
              <button data-aos="fade-left" className=" flex bg-white/15 items-center cursor-pointer  hover:bg-white/8  text-[14px] justify-center min-w-fit w-full  gap-1 p-2 px-2 rounded-full text-white ">
                <span>
                  <img src={not} alt="wait"  className="" />
                </span>{" "}
                Early Access Beta
              </button>

              <button data-aos="fade-left" className="flex bg-white/15 items-center  cursor-pointer  hover:bg-white/8 text-[14px] justify-center w-full  min-w-fit gap-1 p-2 px-2 rounded-full text-white">
                <span>
                  <img src={copy} alt="copyrite" className="" />
                </span>{" "}
                Hypermatter Alpha
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Hero;
