"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      setRotation({ x: rotateX, y: rotateY });
    };

    const card = cardRef.current;
    card.addEventListener("mousemove", handleMouseMove);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative transform transition-all duration-500 hover:scale-105 cursor-pointer perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl relative overflow-hidden transition-all duration-500 shadow-lg hover:shadow-2xl border border-gray-700 transform-style-3d">
        {/* Animated background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${service.color}33, transparent 70%)`,
            animation: "pulse 3s infinite",
          }}
        ></div>

        {/* Glowing orb */}
        <div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 filter blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150"
          style={{
            top: "-20%",
            right: "-20%",
          }}
        ></div>

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 transform group-hover:scale-110 border border-gray-600 relative z-10">
          <service.icon
            className="w-10 h-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12"
            style={{ color: service.color }}
          />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-500 relative z-10">
          {service.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 flex-grow mb-6 relative z-10">
          {isHovered ? service.longDescription : service.shortDescription}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="mt-6 w-full px-6 py-2 rounded-xl inline-flex items-center justify-center text-[#4646ff] font-semibold group-hover:text-white transition-colors duration-300 relative overflow-hidden"
        >
          <span className="pl-4 relative z-10">Explore {service.title}</span>
          <ArrowRight className=" w-8 h-10 transition-transform duration-300 transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-[#4646ff] hover:border hover:rounded-[50%] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </Link>
        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

        {/* Particle effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float-up ${
                    Math.random() * 3 + 2
                  }s linear infinite`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
