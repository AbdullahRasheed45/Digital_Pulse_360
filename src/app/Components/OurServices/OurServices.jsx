"use client";
import React from "react";
import {
  ArrowLongRightIcon,
  ComputerDesktopIcon,
  DocumentMagnifyingGlassIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";
import CaseStudy from "../CaseStudy/CaseStudy"


const OurServices = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 py-20 px-16 gap-14 bg-gradient-to-l from-[#f0fefffa] to-[#e6eded] ">
      <div className="rounded-3xl border border-solid border-[#ccc495fa] hover:border-none hover:bg-gradient-to-r hover:from-[#d2d285] hover:to-[#c9d7f6] hover:p-1 hover:ease-in hover:duration-500">
        <div className="bg-gradient-to-l from-[#797356fa] to-[#cda521] flex items-center justify-center p-2 text-center w-16 h-[4.25rem] ml-8 mt-14 rounded-2xl">
          <DocumentMagnifyingGlassIcon className="w-14 text-center text-[#271111]" />
        </div>
        <h1 className="p-8 font-extrabold text-2xl tracking-wide">
          UI/UX & Product Design
        </h1>
        <p className="pl-8 pb-8 pr-5 text-base">
          Elevate user experiences with our cutting-edge UI/UX and product
          design solutions, seamlessly blending aesthetics and functionality to
          captivate your audience.
        </p>
        <button className="flex border-[#ccc495fa] rounded-full border items-center justify-center text-lg font-semibold pl-8 pr-5 ml-8 mb-6 hover:bg-gradient-to-r from-[#797356fa] to-[#cda521]">
          Start Project <ArrowLongRightIcon className="ml-2 w-12" />
        </button>
      </div>
      <div className="rounded-3xl border border-solid border-[#ccc495fa] hover:border-none hover:bg-gradient-to-r from-[#d2d285] to-[#c9d7f6] hover:p-1">
        <div className="bg-gradient-to-l from-[#797356fa] to-[#cda521] text-center flex items-center justify-center p-2 w-16 h-[4.25rem] ml-8 mt-14 rounded-2xl">
          <SwatchIcon className="w-14 text-center text-[#271111]" />
        </div>
        <h1 className="p-8 font-extrabold text-2xl tracking-wide">
          Web Application & Development
        </h1>
        <p className="pl-8 pb-8 pr-5">
          Transform your vision into reality with our expert web application and
          development services, crafting robust digital solutions that empower
          your online presence.
        </p>
        <button className="flex border-[#ccc495fa] rounded-full border items-center justify-center text-lg font-semibold pl-8 pr-5 ml-8 mb-6 hover:bg-gradient-to-r from-[#797356fa] to-[#cda521]">
          Start Project{" "}
          <ArrowLongRightIcon className="ml-2 w-12 text-[#271111]" />
        </button>
      </div>
      <div className="rounded-3xl border border-solid border-[#ccc495fa] hover:border-none hover:bg-gradient-to-r from-[#d2d285] to-[#c9d7f6] hover:p-1">
        <div className="bg-gradient-to-l from-[#797356fa] to-[#cda521] text-center flex items-center justify-center p-2 w-16 h-[4.25rem] ml-8 mt-14 rounded-2xl">
          <ComputerDesktopIcon className="w-14 text-center" />
        </div>
        <h1 className="p-8 font-extrabold text-2xl tracking-wide">
          SEO Optimization
        </h1>
        <p className="pl-8 pb-8 pr-5">
          Boost your online visibility and rankings with our comprehensive SEO
          optimization strategies, tailored to enhance your website's
          performance and drive targeted traffic.
        </p>
        <button className="flex border-[#ccc495fa] rounded-full border items-center justify-center text-lg font-semibold pl-8 pr-5 ml-8 mb-6 hover:bg-gradient-to-r from-[#797356fa] to-[#cda521]">
          Start Project <ArrowLongRightIcon className="ml-2 w-12" />
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 -my-10 pb-28 px-16 gap-14 bg-gradient-to-l from-[#f0fefffa] to-[#e6eded] ">
      <div className="rounded-3xl border border-solid border-[#ccc495fa] hover:border-none hover:bg-gradient-to-r hover:from-[#d2d285] hover:to-[#c9d7f6] hover:p-1 hover:ease-in hover:duration-500">
        <div className="bg-gradient-to-l from-[#797356fa] to-[#cda521] flex items-center justify-center p-2 text-center w-16 h-[4.25rem] ml-8 mt-14 rounded-2xl">
          <DocumentMagnifyingGlassIcon className="w-14 text-center text-[#271111]" />
        </div>
        <h1 className="p-8 font-extrabold text-2xl tracking-wide">
          Mobile App Development
        </h1>
        <p className="pl-8 pb-8 pr-5 text-base">
          Elevate user experiences with our cutting-edge UI/UX and product
          design solutions, seamlessly blending aesthetics and functionality to
          captivate your audience.
        </p>
        <button className="flex border-[#ccc495fa] rounded-full border items-center justify-center text-lg font-semibold pl-8 pr-5 ml-8 mb-6 hover:bg-gradient-to-r from-[#797356fa] to-[#cda521]">
          Start Project <ArrowLongRightIcon className="ml-2 w-12" />
        </button>
      </div>
      <div className="rounded-3xl border border-solid border-[#ccc495fa] hover:border-none hover:bg-gradient-to-r from-[#d2d285] to-[#c9d7f6] hover:p-1">
        <div className="bg-gradient-to-l from-[#797356fa] to-[#cda521] text-center flex items-center justify-center p-2 w-16 h-[4.25rem] ml-8 mt-14 rounded-2xl">
          <SwatchIcon className="w-14 text-center text-[#271111]" />
        </div>
        <h1 className="p-8 font-extrabold text-2xl tracking-wide">
          Consulting and Maintainance
        </h1>
        <p className="pl-8 pb-8 pr-5">
          Transform your vision into reality with our expert web application and
          development services, crafting robust digital solutions that empower
          your online presence.
        </p>
        <button className="flex border-[#ccc495fa] rounded-full border items-center justify-center text-lg font-semibold pl-8 pr-5 ml-8 mb-6 hover:bg-gradient-to-r from-[#797356fa] to-[#cda521]">
          Start Project{" "}
          <ArrowLongRightIcon className="ml-2 w-12 text-[#271111]" />
        </button>
      </div>
      <div className="rounded-3xl border border-solid border-[#ccc495fa] hover:border-none hover:bg-gradient-to-r from-[#d2d285] to-[#c9d7f6] hover:p-1">
        <div className="bg-gradient-to-l from-[#797356fa] to-[#cda521] text-center flex items-center justify-center p-2 w-16 h-[4.25rem] ml-8 mt-14 rounded-2xl">
          <ComputerDesktopIcon className="w-14 text-center" />
        </div>
        <h1 className="p-8 font-extrabold text-2xl tracking-wide">
          Market Analytics & Reporting
        </h1>
        <p className="pl-8 pb-8 pr-5">
          Boost your online visibility and rankings with our comprehensive SEO
          optimization strategies, tailored to enhance your website's
          performance and drive targeted traffic.
        </p>
        <button className="flex border-[#ccc495fa] rounded-full border items-center justify-center text-lg font-semibold pl-8 pr-5 ml-8 mb-6 hover:bg-gradient-to-r from-[#797356fa] to-[#cda521]">
          Start Project <ArrowLongRightIcon className="ml-2 w-12" />
        </button>
      </div>
    </div>
  {/* <CaseStudy/> */}
  </>
  );
};

export default OurServices;
