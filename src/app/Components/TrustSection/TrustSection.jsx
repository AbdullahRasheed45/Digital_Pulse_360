"use client";
import React from "react";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import ExploreUs from "../ExploreUs/ExploreUs";
const TrustSection = () => {
  return (
    <>
    <div>
      <div className="grid grid-col-1 md:grid-cols-3 text-center gap-2 p-2 w-full sm:relative sm:top-[38vh] sm:mb-96">
        <div className="p-10">
          <div className="flex flex-col gap-8 items-center rounded-[3rem] hover:bg-[#ece9e9] p-4 xl:p-6">
            <LightBulbIcon className="w-40 h-40 text-[#fff0f0e7] border border-solid p-6 rounded-[3rem] bg-gradient-to-r from-[#97c3c6fa] to-[#0b1a2d] transfrom hover:rotate-[360deg] transition duration-1000 ease-in-out hover:from-[#68dec6fa] hover:to-[#040c15] hover:text-white md:w-36 md:h-36"/>
            <h2 className="font-bold text-3xl text-[#232020]" >Unique idea <br /> planner</h2>
            <p className="text-base text-[#4a4a4a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              laborum vel ea!
            </p>
          </div>
        </div>
        <div className="p-10">
          <div className="flex flex-col gap-10 items-center rounded-[3rem] hover:bg-[#ece9e9] p-4 xl:p-6">
            <PresentationChartBarIcon className="w-40 h-40 text-[#fff0f0e7] border border-solid p-6 rounded-[3rem] bg-gradient-to-r from-[#97c3c6fa] to-[#0b1a2d] transfrom hover:rotate-[360deg] transition duration-1000 ease-in-out hover:from-[#68dec6fa] hover:to-[#040c15] hover:text-white md:w-36 md:h-36" />
            <h2 className="font-bold text-3xl text-[#232020]">Reserach & <br />Strategical analysis </h2>
            <p className="text-base text-[#4a4a4a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              laborum vel ea!
            </p>
          </div>
        </div>
        <div className="p-10">
          <div className="flex flex-col gap-10 items-center rounded-[3rem] hover:bg-[#ece9e9] p-4 xl:p-6">
            <ShieldCheckIcon className="w-40 h-40 text-[#fff0f0e7] border border-solid p-6 rounded-[3rem] bg-gradient-to-r from-[#97c3c6fa] to-[#0b1a2d] transfrom hover:rotate-[360deg] transition duration-1000 ease-in-out hover:from-[#68dec6fa] hover:to-[#040c15] hover:text-white md:w-36 md:h-36" />
            <h2 className="font-bold text-3xl text-[#232020]">Trust & <br /> Support serenity</h2>
            <p className="text-base text-[#4a4a4a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              laborum vel ea!
            </p>
          </div>
        </div>
      </div>
    </div>
    <ExploreUs/>
    </>
  );
};

export default TrustSection;
