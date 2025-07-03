"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ServiceCard from "./components/ServiceCard"
import AnimatedBackground from "./components/AnimatedBackground"
import { services } from "./lib/services"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <main className="container mx-auto px-4 py-24 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl py-6 font-bold mb-6 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
          Our Digital Services
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl text-center mb-16 leading-relaxed">
          Empower your business with our comprehensive suite of digital services. From stunning designs to cutting-edge
          development, we deliver tailored solutions that drive growth and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how our services can help you achieve your business goals and stand out in the digital
            landscape.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  )
}

