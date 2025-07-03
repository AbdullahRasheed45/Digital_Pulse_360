"use client"
import { useState } from "react"
import { MessageCircle, ClipboardList, ClipboardCheck, BadgeCheck } from "lucide-react"
import OurServices from "../OurServices/OurServices"

const HowItWork = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Initiate Contact",
      description: "Start the process by reaching out to us through a message or setting up a call on our website.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Project Discovery",
      description:
        "Engage in discussions to explore the details of digital project, including goals, audience, and specific requirements.",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Tailored Proposal",
      description:
        "Receive a detailed development proposal outlining recommended services, project scope, and timelines.",
    },
    {
      number: "04",
      icon: BadgeCheck,
      title: "Formalize Partnership",
      description:
        "Solidify our collaboration by signing a contract that defines the terms and conditions of our partnership.",
    },
  ]

  return (
    <>
      <div className="w-full bg-[#1C1C1C] relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#4646ff] rounded-full transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4646ff] rounded-full transform translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center pt-24 pb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              EASY STEPS TO GET STARTED
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
              Transform your ideas into digital excellence with our streamlined process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-[#232323] p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:bg-[#282828] border border-transparent hover:border-[#4646ff]/30">
                  {/* Blue Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#4646ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#4646ff]/10 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(70,70,255,0.3)]">
                    {hoveredIndex === index ? (
                      <span className="text-[#4646ff] font-bold text-xl transition-all duration-300 transform group-hover:scale-110">
                        {step.number}
                      </span>
                    ) : (
                      <step.icon className="w-8 h-8 text-[#4646ff] transition-all duration-300 transform group-hover:scale-110" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#4646ff] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Subtle arrow indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#4646ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurServices />
    </>
  )
}

export default HowItWork

