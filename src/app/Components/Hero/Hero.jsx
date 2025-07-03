"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import TrustSection from "../TrustSection/TrustSection";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const phrases = [
    "🚀 Elevate Your Digital Presence",
    "🎨 Design • 💻 Develop • 🚀 Deliver",
    "🌐 Transform Your Business Online",
    "💡 Innovate. Create. Dominate.",
    "⚡ Powering Your Digital Success",
    "📈 From Vision to Digital Reality",
    "🎯 Smart Strategies, Stunning Results",
    "🔥 Future-Proof Your Brand Online"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingDelay = 2000;
    const nextWordDelay = 1000;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), deletingDelay);
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
          if (currentPhraseIndex === phrases.length - 1) {
            setLoopNum((l) => l + 1);
          }
        } else {
          setDisplayText(
            currentPhrase.substring(
              0,
              isDeleting ? displayText.length - 1 : displayText.length + 1
            )
          );
        }
      },
      isDeleting
        ? typingSpeed
        : displayText === currentPhrase
        ? nextWordDelay
        : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  const scrollToWhyChooseUs = () => {
    const whyChooseUsSection = document.getElementById("why-choose-us");
    if (whyChooseUsSection) {
      whyChooseUsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="relative overflow-hidden top-[5rem] w-full h-[70vh] sm:h-[123vh] lg:h-[150vh] xl:h-[190vh] bg-[#1C1C1C] sm:z-0">
        {/* Enhanced Geometric Decorations */}
        <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-[#4646ff]/20 to-transparent rounded-xl transform rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-bl from-[#4646ff]/10 to-transparent rounded-xl transform -rotate-12 animate-pulse" />

        <div className="w-full h-[80vh] flex items-center flex-col justify-center gap-8 -z-10">
          <div className="space-y-4 text-center">
            <h1 className="mb-4 pb-4 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-[900] tracking-tight">
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#4646ff] to-white animate-gradient">
                  {displayText}
                </span>
                <span className="absolute -inset-1 bg-[#4646ff]/10 blur-xl animate-pulse"></span>
                <span className="animate-blink ml-1">|</span>
              </span>
            </h1>
            <p className="text-blue-200/80 text-base sm:text-lg lg:text-xl font-light animate-fadeIn">
              Your Vision, Our Innovation
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 mt-2">
            <button
              onClick={scrollToWhyChooseUs}
              className="group relative px-10 py-3 rounded-full overflow-hidden bg-gradient-to-r from-[#4646ff] to-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4646ff]/25"
            >
              <span className="absolute inset-0 bg-white transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
              <span className="relative text-white group-hover:text-[#4646ff] font-semibold text-base transition-colors duration-300">
                EXPLORE MORE
              </span>
            </button>

            <div className="flex flex-col items-center gap-2">
              <ChevronDown
                onClick={scrollToWhyChooseUs}
                className="w-8 h-8 text-[#4646ff] cursor-pointer animate-bounce opacity-80 hover:opacity-100 transition-all duration-300 hover:text-white"
              />
            </div>
          </div>
        </div>

        {/* Images section - preserved exactly as is */}
        <div className="hidden absolute w-full sm:flex flex-col sm:gap-[8rem] lg:gap-[15.5rem] xl:gap-[21rem]">
          <div className="flex justify-between">
            {/* Left side images */}
            <div className="m-0 p-0 relative flex items-center justify-start w-1/2">
              <img
                className="absolute sm:w-[150px] lg:w-[250px] xl:w-auto xl:left-[-70px] left-[-40px] top-[-27vh] z-10"
                src="images/Planctonic.png"
                alt="Planctonic Design Element"
              />
              <img
                className="absolute sm:w-[200px] sm:top-[-100px] sm:left-[90px] lg:w-[250px] lg:left-[15vw] lg:top-[-30px] xl:w-auto xl:top-[-90px] xl:left-[16vw] z-10"
                src="images/Coffee-cup.png"
                alt="Creative Coffee Cup"
              />
              <img
                className="absolute sm:w-[200px] sm:top-[-50px] sm:left-[-70px] lg:w-[280px] lg:left-[-80px] lg:top-[20px] xl:w-auto transform scale-x-[1] -rotate-[35deg] xl:left-[-130px] xl:top-[20px] z-20"
                src="images/Apple-keyboards.png"
                alt="Professional Apple Keyboard"
              />
            </div>
            {/* Right side images */}
            <div className="m-0 p-0 relative flex items-center justify-start w-1/2">
              <img
                className="sm:absolute sm:w-[250px] sm:right-[-60px] sm:top-[-110px] lg:w-[350px] xl:w-auto xl:right-[-150px] transform sm:-rotate-12  xl:-rotate-45 sm:z-20"
                src="images/iPad.png"
                alt="Digital Design iPad"
              />
              <img
                className="absolute sm:w-[200px] sm:right-[150px] sm:top-[-120px] lg:w-[250px] lg:top-[-80px] lg:right-[260px] xl:w-auto xl:right-[300px] transform sm:-rotate-12 xl:rotate-45 xl:top-[-30vh] z-10"
                src="images/mouse.png"
                alt="Professional Design Mouse"
              />
            </div>
          </div>
        </div>
      </div>
      <section id="why-choose-us">
        <TrustSection />
      </section>

      <style jsx global>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;
