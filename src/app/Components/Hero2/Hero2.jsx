"use client";
import React from "react";
import TrustSection from "../TrustSection/TrustSection";

const Hero2 = () => {
  const scrollToBottom = () => {
    const scrollDistance = window.innerHeight * 1;
    window.scrollBy(0, scrollDistance);
  };
  return (
    <>
    <div className="relative top-[5rem] w-full h-[50vh] sm:h-[80vh] lg:h-[100vh] xl:h-[110vh] bg-[#1C1D21] sm:z-0s">
      <div className="w-full h-[60vh] flex items-center flex-col justify-center gap-8 -z-10">
        <h1 className="lg:top-60 text-white font-extrabold text-3xl text-center leading-snug sm:text-5xl lg:text-7xl">
          WE ARE INCUBATOR <br className="h-4" /> CREATIVE AGENCY
        </h1>
        <button
          onClick={scrollToBottom}
          className="sm:top-[19rem] lg:top-[26rem] border-none text-blue-700 font-semibold px-10 py-3 rounded-3xl bg-white hover:bg-transparent hover:text-white hover:border-2 hover:border-solid hover:border-white"
        >
          VIEW MORE
        </button>
      </div>
      <div className="hidden w-full sm:flex flex-col sm:gap-[8rem] lg:gap-[15.5rem] xl:gap-[21rem] transform scale-x-[-1]">
        <div className="flex justify-between">
          <div className="m-0 p-0 relative flex items-center justify-start w-1/2">
            <img
              className="absolute sm:w-[150px] lg:w-[250px] xl:w-auto xl:left-[-70px] left-[-40px] top-[-27vh]"
              src="images/Planctonic.png"
              alt=""
            />
            <img
              className="absolute sm:w-[200px] sm:top-[-100px] sm:left-[90px] lg:w-[250px] lg:left-[15vw] lg:top-[-30px] xl:w-auto xl:top-[-90px] xl:left-[16vw]"
              src="images/Coffee-cup.png"
              alt=""
            />
            <img
              className="absolute sm:w-[200px] sm:top-[-50px] sm:left-[-20px] lg:w-[280px] lg:left-[-20px] lg:top-[20px] xl:w-auto transform scale-x-[1] -rotate-45 xl:left-[-20px] xl:top-[20px]"
              src="images/Apple-keyboards.png"
              alt=""
            />
          </div>
          <div className="m-0 p-0 relative flex items-center justify-start w-1/2">
            <img
              className="sm:absolute sm:w-[250px] sm:right-[-60px] sm:top-[-110px] lg:w-[350px] lg:right-[-100px] xl:w-auto xl:right-[-150px] transform sm:-rotate-45  xl:-rotate-50"
              src="images/iPad.png"
              alt=""
            />
            <img
              className="absolute sm:w-[200px] sm:right-[150px] sm:top-[-25vh] lg:w-[250px] lg:top-[-30vh] lg:right-[250px] xl:w-auto xl:right-[300px] transform sm:rotate-45 xl:rotate-45 xl:top-[-30vh]"
              src="images/mouse.png"
              alt=""
            />
          </div>
        </div>
        <div className="bg-white w-full h-[30vh] z-10 -my-4"></div>
      </div>
      <div></div>
    </div>
    <br />
    <TrustSection/>
    </>
  );
};

export default Hero2;
