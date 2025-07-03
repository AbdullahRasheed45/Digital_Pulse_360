"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { services as servicesData} from "./lib/services"
import CaseStudy from "../CaseStudy/CaseStudy"

const OurServices = () => {
  const [activeService, setActiveService] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Map the imported services data to include the link property
  const services = servicesData.map(service => ({
    ...service,
    link: `/services/${service.slug}`,
  }))

  return (
    <>
    <section className="w-full bg-[#1C1C1C] py-24 px-4 relative overflow-hidden" aria-labelledby="services-title">
      {/* Interactive background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[#4646ff] mix-blend-multiply filter blur-[100px]"
          style={{
            clipPath: `circle(15% at ${mousePosition.x}px ${mousePosition.y}px)`,
            transition: "clip-path 0.3s ease-out",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2
          id="services-title"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-center"
        >
          Innovative Digital Solutions
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl text-center mb-16 leading-relaxed">
          Empower your business with our comprehensive suite of digital services. From stunning designs to cutting-edge
          development, we deliver tailored solutions that drive growth and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="bg-[#232323] p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-[#282828] border border-transparent hover:border-[#4646ff]/30 h-full flex flex-col">
                {/* Animated background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.color}, transparent 70%)`,
                    animation: "pulse 2s infinite",
                  }}
                ></div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#4646ff]/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#4646ff]/20">
                  <service.icon
                    className="w-10 h-10 transition-all duration-300 transform group-hover:scale-110"
                    style={{ color: service.color }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4646ff] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {activeService === index ? service.longDescription : service.shortDescription}
                </p>

                <Link
                  href={service.link}
                  className="mt-6 inline-flex items-center justify-center text-[#4646ff] font-semibold group-hover:text-white transition-colors duration-300 relative overflow-hidden"
                >
                  <span className="pl-4 relative z-10">Explore {service.title}</span>
                  <ArrowRight className=" w-8 h-10 transition-transform duration-300 transform group-hover:translate-x-1 relative z-10" />
                  <div className="absolute inset-0 bg-[#4646ff] hover:border hover:rounded-[50%] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4646ff] rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
    <CaseStudy/>
    </>
  )
}

export default OurServices