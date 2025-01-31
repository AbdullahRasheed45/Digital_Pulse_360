"use client";
import React from "react";

export const Projects = () => {
  return (
    <div>
      <div className="w-full h-full flex text-center justify-center items-center p-16">
        <h1 className="w-full h-full text-4xl font-extrabold -tracking-tighter">
          Our Projects Make Uniquesness
        </h1>
      </div>
      <div className=" h-full w-full flex justify-center items-center gap-5 p-10">
        <div className="">
          <div className="w-40 h-40 px-36 py-40 border border-solid border-black rounded-xl"></div>
        </div>
        <div>
          <div className="">
            <div className="w-[36rem] h-40 border py-40 border-solid border-black rounded-xl"></div>
          </div>
        </div>
        <div>
          <div className="">
            <div className="w-40 h-40 px-36 py-40 border border-solid border-black rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
