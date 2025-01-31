"use client";
import React from "react";
import Image from "next/image";
import exploreUsImage from "../../../../public/images/exploreUs.jpg";
import Link from "next/link";
import HowItWork from "../HowItWork/HowItWork";

const ExploreUs = () => {
  return (
    <>
      <div
  className="relative h-[80vh] md:h-screen bg-cover bg-center bg-no-repeat"
 
>
        <div className="relative w-[95vw] m-auto bg-gradient-to-r md:h-screen md:w-full from-[#2b8085fa] to-[#0b024d] z-10 rounded-t-[40%]">
          <Image
            src={exploreUsImage}
            className="h-[80vh] md:h-full w-full opacity-20 rounded-t-[40%]"
          /> 
          <h1 className="absolute inset-0 top-[-35vh] flex text-center items-center text-3xl font-extrabold justify-center z-20 text-white drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-[#322e2e] md:text-5xl md:top-[-40vh] lg:text-7xl lg:top-[-45vh] xl:top-[-48vh]">
            GROW YOUR <br /> DIGITAL PRESENCE
          </h1>
          <p className="absolute inset-0 top-10 flex text-center p-10 items-center text-[1.1rem] leading-7 font-normal justify-center z-20 text-white drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[#322e2e] md:text-lg md:p-40 md:leading-10 md:top-20 lg:text-xl lg:p-60 lg:leading-[2.5rem] lg:top-28 xl:px-96 xl:top-20 xl:leading-[2.8rem] xl:text-[1.3rem]">
            Discover the power of a pulsating digital presence with Digital
            Pulse 360. Let's embark on a journey of growth, visibility, and
            digital excellence together.
          </p>

          <button className="absolute py-3 top-[60vh] left-10 flex text-center items-center justify-center w-[35vw] z-50 border border-solid  text-lg font-bold rounded-full text-white hover:bg-white hover:text-[#26263b] md:top-[75vh] md:left-32 md:w-[30vw] lg:w-[20vw] lg:left-72 xl:w-[15vw] xl:left-[28rem]">
            Explore Us
          </button>
          <button className="absolute top-[60vh] py-3 left-[50vw] flex text-center items-center justify-center w-[40vw] z-50 border border-solid  text-lg font-bold rounded-full text-white hover:bg-white hover:text-[#26263b] md:top-[75vh] md:w-[30vw] lg:w-[20vw] xl:w-[15vw]">
            Start a Project
          </button>
        </div>
      </div>
      <HowItWork />
    </>
  );
};

export default ExploreUs;
