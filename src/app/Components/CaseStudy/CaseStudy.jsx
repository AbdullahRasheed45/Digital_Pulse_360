"use client";
import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import { space } from "postcss/lib/list";

const CaseStudy = () => {
  const parallaxRef = useRef()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth > 767);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full h-full bg-gradient-to-l from-[#1e3350] to-[#0A1320] py-12 md:py-32 relative">
      <div className="block md:flex items-center justify-between w-full gap-40">
        <div className="w-full flex flex-col gap-12 md:w-1/2 p-20">
          <h1 className="text-white text-5xl font-black tracking-wider text-left">
            Case Studies
          </h1>
          <p className="text-[#a8a8a8] text-base font-medium tracking-wide leading-7 text-left">
            We specialize in empowering businesses to thrive and expand. Explore
            a showcase of our accomplishments.
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-start gap-6">
            <button className="border border-white border-solid px-6 py-4 md:text-white font-black md:font-bold tracking-wider bg-white text-[#222c3b] rounded-full md:bg-transparent md:hover:bg-white md:hover:text-[#222c3b] hover:border-none hover:font-black">
              CASE STUDIES
            </button>
            <button className="border border-white border-solid px-6 py-4 md:text-white font-black md:font-bold tracking-wider bg-white text-[#222c3b] rounded-full md:bg-transparent md:hover:bg-white md:hover:text-[#222c3b] hover:border-none hover:font-black">
              START PROJECT
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          {isMobile ? (
            <Parallax pages={5} className="md:top-40 block rounded-3xl transition ease-in-out duration-1000"  style={{backgroundSize: "40%", height: "55%"}} >
              <ParallaxLayer
                offset={0}
                ref={parallaxRef} 
                className="transition ease-in-out duration-1000"
                style={{
                  backgroundSize: "40%",
                  backgroundImage: "url('/images/CaseStudy1.jpg')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-10 pb-5 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-32 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-3xl font-black px-2">
                      Website Development
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
                <ParallaxLayer
                  offset={1}
                  ref={parallaxRef} 
                  className="transition ease-in-out duration-1000"
                  style={{
                    backgroundSize: "40%",
                    backgroundImage: "url('/images/CaseStudy2.jpg')",
                  }}
                >
                  <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-4 pb-5 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-10 shadow-2xl shadow-black">
                    <Link href="/">
                      <h1 className="text-3xl font-black px-2">
                      UI/UX Design
                      </h1>
                    </Link>
                  </div>
                </ParallaxLayer>
              <ParallaxLayer
                offset={2}
                className="transition ease-in-out duration-1000 gap-0"
                style={{
                  transition: "ease-in-out 1s",
                  backgroundSize: "40%",
                  backgroundImage: "url('/images/CaseStudy3.jpg   ' )",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-3xl z-40 px-10 pt-6 pb-5 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-16 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                     Mobile App Development
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={3}
                className="transition ease-in-out duration-1000 gap-0"
                style={{
                  transition: "ease-in-out 1s",
                  backgroundSize: "40%",
                  backgroundImage: "url('/images/CaseStudy4.jpg   ' )",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-3xl z-40 px-10 pt-6 pb-5 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-2 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                     Consulting and Maintainance 
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={4}
                className="transition ease-in-out duration-1000 gap-0"
                style={{
                  transition: "ease-in-out 1s",
                  backgroundSize: "40%",
                  backgroundImage: "url('/images/CaseStudy5.jpg   ' )",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-3xl z-40 px-10 py-7 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-2 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                     SEO & Marketing
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={5}
                className="transition ease-in-out duration-1000 gap-0"
                style={{
                  transition: "ease-in-out 1s",
                  backgroundSize: "40%",
                  backgroundImage: "url('/images/CaseStudy6.jpg   ' )",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-3xl z-40 px-10 pt-6 pb-5 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-2 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                     Market Analytics & Reporting
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
            </Parallax>
          ) : (
            <Parallax pages={6} className="md:top-40 block rounded-3xl transition ease-in-out duration-1000 bg-gradient-to-l from-[#1e3350] to-[#0A1320]"  style={{backgroundSize: "40%", height: "55%"}} >
              <ParallaxLayer
                offset={0}
                style={{
                  backgroundSize: "100%",
                  backgroundImage: "url('/images/CaseStudy1.jpg   ')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-10 pb-2 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-32 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                      Website Development
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={1}
                style={{
                  backgroundSize: "100%",
                  backgroundImage: "url('/images/CaseStudy2.jpg   ')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-3 pb-3 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-4 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                      UI/UX Design
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={2}
                style={{
                  backgroundSize: "100%",
                  backgroundImage: "url('/images/CaseStudy3.jpg   ')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-3 pb-3 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-4 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                    Mobile App Development

                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={3}
                style={{
                  backgroundSize: "100%",
                  backgroundImage: "url('/images/CaseStudy4.jpg   ')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-3 pb-3 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-4 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                    Consulting and Maintainance
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={4}
                style={{
                  backgroundSize: "100%",
                  backgroundImage: "url('/images/CaseStudy5.jpg   ')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-3 pb-3 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-4 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                    SEO & Marketing
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={5}
                style={{
                  backgroundSize: "100%",
                  backgroundImage: "url('/images/CaseStudy6.jpg   ')",
                }}
              >
                <div className="relative top-[-30px] left-[-35px] text-4xl z-40 px-10 pt-3 pb-3 rounded-s-xl rounded-[100%] text-white bg-gradient-to-l from-[#00c3ff] to-[#010131] bg-black w-[18rem] pr-4 shadow-2xl shadow-black">
                  <Link href="/">
                    <h1 className="text-2xl font-black px-2">
                    Market Analytics & Reporting
                    </h1>
                  </Link>
                </div>
              </ParallaxLayer>
              </Parallax>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
