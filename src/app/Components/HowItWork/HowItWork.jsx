"use client";
import React, { useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import OurServices from "../OurServices/OurServices";

const HowItWork = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="w-full" >
        <div className="bg-gradient-to-l from-[#f0fefffa] to-[#e6eded] ">
          <div>
            <h1 className="text-center pt-16 text-6xl font-black text-[#3a3737]  md:tracking-widest rounded-t-full">
              Easy steps to get started
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 text-center py-20 px-16 gap-14">
            <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-[3rem] hover:bg-[#ffffff]">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="py-10 px-8 rounded-[2rem] text-white font-black text-4xl bg-gradient-to-r from-[#9b9bf2] to-[#21211d] drop-shadow-2xl shadow-[#000000] "
              >
                {isHovered ? (
                  <span className="my-2 hover:invisible ease-linear duration-1000">
                    0 1
                  </span>
                ) : (
                  <span className="text-center flex items-center justify-center w-14 ease-linear duration-1000 transfrom hover:rotate-[360deg]">
                    <ChatBubbleBottomCenterTextIcon />
                  </span>
                )}
              </div>
              <h2 className="font-extrabold tracking-wide text-xl text-[#3a3737]">
                Initiate Contact
              </h2>
              <p className="text-center text-base font-normal text-[#443c3c]">
                Start the process by reaching out to us through a message or
                setting up a call on our website.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-[3rem] hover:bg-[#ffffff]">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="py-10 px-8 rounded-[2rem] text-white font-black text-4xl bg-gradient-to-r from-[#9b9bf2] to-[#21211d] drop-shadow-2xl shadow-[#000000] "
              >
                {isHovered ? (
                  <span className="my-2 hover:invisible ease-linear duration-1000">
                    0 2
                  </span>
                ) : (
                  <span className="text-center flex items-center justify-center w-14 ease-linear duration-1000 transfrom hover:rotate-[360deg]">
                    <ClipboardDocumentListIcon />
                  </span>
                )}
              </div>
              <h2 className="font-extrabold tracking-wide text-xl text-[#3a3737]">
                Project Discovery
              </h2>
              <p className="text-center text-base font-normal text-[#443c3c]">
                Engage in discussions to explore the details of digital project,
                including goals, audience, and specific requirements.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-[3rem] hover:bg-[#ffffff]">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="py-10 px-8 rounded-[2rem] text-white font-black text-4xl bg-gradient-to-r from-[#9b9bf2] to-[#21211d] drop-shadow-2xl shadow-[#000000] "
              >
                {isHovered ? (
                  <span className="my-2 hover:invisible ease-linear duration-1000">
                    0 3
                  </span>
                ) : (
                  <span className="text-center flex items-center justify-center w-14 ease-linear duration-1000 transfrom hover:rotate-[360deg]">
                    <ClipboardDocumentCheckIcon />
                  </span>
                )}
              </div>
              <h2 className="font-extrabold tracking-wide text-xl text-[#3a3737]">
                Tailored Proposal
              </h2>
              <p className="text-center text-base font-normal text-[#443c3c]">
                Receive a detailed development proposal outlining recommended
                services, project scope, and timelines.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 p-8 rounded-[3rem] hover:bg-[#ffffff]">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="py-10 px-8 rounded-[2rem] text-white font-black text-4xl bg-gradient-to-r from-[#9b9bf2] to-[#21211d] drop-shadow-2xl shadow-[#000000] "
              >
                {isHovered ? (
                  <span className="my-2 hover:invisible ease-linear duration-1000">
                    0 4
                  </span>
                ) : (
                  <span className="text-center flex items-center justify-center w-14 ease-linear duration-1000 transfrom hover:rotate-[360deg]">
                    <CheckBadgeIcon />
                  </span>
                )}
              </div>
              <h2 className="font-extrabold tracking-wide text-xl text-[#3a3737]">
                Formalize Partnership
              </h2>
              <p className="text-center text-base font-normal text-[#443c3c]">
                Solidify our collaboration by signing a contract that defines
                the terms and conditions of our partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OurServices />
    </>
  );
};

export default HowItWork;
