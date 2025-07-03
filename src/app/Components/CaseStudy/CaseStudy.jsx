"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import { CounterSection } from "../CounterSection/CounterSection"

const caseStudies = [
  {
    title: "Digital Accounting & Bookkeeping Automation",
    image: "/images/CaseStudy1.jpg",
    gradient: "from-[#4338CA] to-[#6366F1]",
    color: "#4338CA",
    description: "Creating powerful digital experiences",
  },
  {
    title: "UI/UX Design",
    image: "/images/CaseStudy2.jpg",
    gradient: "from-[#3730A3] to-[#4338CA]",
    color: "#3730A3",
    description: "Crafting intuitive user interfaces",
  },
  {
    title: "Web Development",
    image: "/images/CaseStudy3.jpg",
    gradient: "from-[#312E81] to-[#3730A3]",
    color: "#312E81",
    description: "Building next-gen mobile solutions",
  },
  {
    title: "SEO and Marketing",
    image: "/images/CaseStudy4.jpg",
    gradient: "from-[#1E3A8A] to-[#2563EB]",
    color: "#1E3A8A",
    description: "Ensuring sustainable growth",
  },
  {
    title: "Mobile App Development",
    image: "/images/CaseStudy5.jpg",
    gradient: "from-[#1E40AF] to-[#3B82F6]",
    color: "#1E40AF",
    description: "Maximizing digital presence",
  },
]


const CaseStudy = () => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const { top, height } = containerRef.current.getBoundingClientRect()
      const scrollPosition = -top
      const sectionHeight = height / caseStudies.length
      const newIndex = Math.min(Math.max(Math.floor(scrollPosition / sectionHeight), 0), caseStudies.length - 1)
      setActiveIndex(newIndex)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
    <div className="bg-[#1C1C1C] relative">
      <div ref={containerRef} className="min-h-[600vh] relative pb-[10vh]">
        <motion.div className="sticky top-0 left-0 w-full min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0 bg-[#4646ff] mix-blend-multiply filter blur-[100px]"
              style={{
                clipPath: `circle(15% at ${mousePosition.x}px ${mousePosition.y}px)`,
                transition: "clip-path 0.3s ease-out",
              }}
            />
          </div>

          {/* Geometric Decorations */}
          <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-[#4646ff]/20 to-transparent rounded-xl transform rotate-45" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-bl from-[#4646ff]/10 to-transparent rounded-xl transform -rotate-12" />
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            {/* Mobile Header */}
            <div className="lg:hidden mb-8 space-y-4">
              <h1 className="text-4xl font-bold text-white">Case Studies</h1>
              <p className="text-gray-400 text-lg">We're in the business of helping companies grow. Here is some of our work.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content - Desktop */}
              <div className="hidden lg:block space-y-12 relative z-10">
                <div className="space-y-6">
                  <motion.h1
                    className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4338CA]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Case Studies
                  </motion.h1>
                  <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                  We're in the business of helping companies grow. Here is some of our work.
                  </p>
                </div>

                <div className="space-y-6">
                  {caseStudies.map((study, index) => (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0.3,
                        x: activeIndex === index ? 20 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="group cursor-pointer"
                      onClick={() => {
                        const targetScroll = (index * containerRef.current.scrollHeight) / caseStudies.length
                        window.scrollTo({
                          top: targetScroll + containerRef.current.offsetTop,
                          behavior: "smooth",
                        })
                      }}
                    >
                      <div className="flex items-center gap-4 group-hover:opacity-100 transition-opacity">
                        <motion.div
                          className="h-0.5"
                          animate={{
                            width: activeIndex === index ? 100 : 40,
                            backgroundColor: activeIndex === index ? study.color : "#333",
                          }}
                        />
                        <div>
                          <h3
                            className="text-xl font-semibold transition-colors duration-300"
                            style={{
                              color: activeIndex === index ? study.color : "#fff",
                            }}
                          >
                            {study.title}
                          </h3>
                          {activeIndex === index && <p className="text-sm text-gray-400 mt-1">{study.description}</p>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative h-[50vh] lg:h-[75vh] w-full">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={false}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 1.1,
                      y: `${(index - activeIndex) * 100}%`,
                    }}
                    transition={{
                      opacity: { duration: 0.8 },
                      scale: { duration: 1.2 },
                      y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    }}
                  >
                    <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="h-full w-full object-cover"
                      />

                      {/* Service Badge */}
                      <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{
                          x: activeIndex === index ? 0 : -200,
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute top-8 left-0 z-10"
                      >
                        <div
                          className={`bg-gradient-to-r ${study.gradient} 
                            backdrop-blur-sm py-4 px-8 pr-16 rounded-r-[32px]
                            shadow-lg border border-white/10`}
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                          }}
                          >
                          <h3 className="text-white font-bold text-2xl tracking-wide">{study.title}</h3>
                        </div>
                      </motion.div>

                      {/* Bottom Content */}
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{
                          y: activeIndex === index ? 0 : 100,
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                      >
                        <div className="flex justify-end">
                          <Link
                            href="/case-study"
                            className={`bg-gradient-to-r ${study.gradient} text-white px-8 py-3 
                              rounded-full font-medium hover:shadow-lg hover:scale-105 
                              transition-all duration-300 hover:brightness-110`}
                          >
                            View Case Study
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <CounterSection/>
                          </>
  )
}

export default CaseStudy