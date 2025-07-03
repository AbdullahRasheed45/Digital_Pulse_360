"use client"
import Image from "next/image"
import exploreUsImage from "../../../../public/images/exploreUs.jpg"
import Link from "next/link"
import HowItWork from "../HowItWork/HowItWork"

const ExploreUs = () => {
  return (
    <>
      <div className="relative h-screen bg-[#1C1C1C] overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={exploreUsImage || "/placeholder.svg"}
              className="h-full w-full object-cover opacity-40"
              alt="Background"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#232323]/90 to-[#1C1C1C]/90" />
          </div>

          {/* Geometric Decorations matching TrustSection */}
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-[#4646ff]/20 to-transparent rounded-xl transform rotate-45" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-bl from-[#4646ff]/10 to-transparent rounded-xl transform -rotate-12" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              WE ARE INCUBATOR
              <br />
              CREATIVE AGENCY
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover the power of a pulsating digital presence with Digital Pulse 360. Let's embark on a journey of
              growth, visibility, and digital excellence together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-[#4646ff] rounded-full hover:bg-[#4646ff] transition-all duration-300"
              >
                Explore Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#4646ff] rounded-full hover:bg-[#4646ff]/90 transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Decorative element matching TrustSection */}
          <div className="absolute left-10 top-20 w-32 h-32 bg-[#4646ff]/20 rounded-xl transform rotate-45" />
        </div>
      </div>
      <HowItWork/>
    </>
  )
}

export default ExploreUs

