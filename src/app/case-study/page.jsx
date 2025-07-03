"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { caseStudies } from "./data/case-studies"
import { GradientOrb } from "./components/gradient-orbit" 
export default function CaseStudiesPage() {
  return (
    <div className="bg-[#1C1C1C] min-h-screen py-16 md:py-40">

<GradientOrb className="top-20 left-[20%]" color="blue" />
<GradientOrb className="bottom-40 right-[10%]" color="purple" />
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4338CA]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Work
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore our portfolio of successful projects and discover how we help businesses transform their digital
            presence.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/case-study/${study.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-gray-200 mb-4">{study.description}</p>
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} text-white text-sm font-medium`}
                      >
                        View Case Study
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

