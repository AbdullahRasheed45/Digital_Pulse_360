"use client";
import React from "react";
import { Lightbulb, PresentationIcon as PresentationChart, Shield } from "lucide-react"
import ExploreUs from "../ExploreUs/ExploreUs";
const TrustSection = () => {
  return (
    <>
    
    <section className="w-full bg-[#1C1C1C] py-24 px-4 relative overflow-hidden -z-50">
      {/* Geometric Decorations */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-[#4646ff]/20 to-transparent rounded-xl transform rotate-45" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-bl from-[#4646ff]/10 to-transparent rounded-xl transform -rotate-12" />

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">WHY CHOOSE US</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We transform ideas into digital excellence</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unique Idea Planner */}
          <div className="group">
            <div className="bg-[#232323] p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-[#282828]">
              {/* Blue Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#4646ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#4646ff]/10 transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-[#4646ff]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Unique idea planner</h3>
              <p className="text-gray-400 leading-relaxed">
                Transform your vision into reality with our innovative planning approach. We craft strategies that
                elevate your digital presence.
              </p>
            </div>
          </div>

          {/* Research & Strategical Analysis */}
          <div className="group">
            <div className="bg-[#232323] p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-[#282828]">
              {/* Blue Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#4646ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#4646ff]/10 transition-colors duration-300">
                <PresentationChart className="w-8 h-8 text-[#4646ff]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Research & Strategical analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Data-driven insights meet strategic thinking. We analyze market trends to position your business for
                optimal growth.
              </p>
            </div>
          </div>

          {/* Trust & Support */}
          <div className="group">
            <div className="bg-[#232323] p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-[#282828]">
              {/* Blue Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#4646ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#4646ff]/10 transition-colors duration-300">
                <Shield className="w-8 h-8 text-[#4646ff]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Trust & Support serenity</h3>
              <p className="text-gray-400 leading-relaxed">
                Your peace of mind is our priority. Count on our dedicated support and proven expertise to guide your
                journey.
              </p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        {/* <div className="mt-16 text-center">
          <button className="px-8 py-3 text-white border border-white/20 rounded-lg hover:bg-[#4646ff] hover:border-transparent transition-all duration-300">
            VIEW MORE
          </button>
        </div> */}
      </div>
    </section>
    <ExploreUs/>
    </>
  )
};

export default TrustSection;
