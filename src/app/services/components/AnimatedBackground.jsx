"use client"

import { useState, useEffect } from "react"

export default function AnimatedBackground() {
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

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('/grid.svg')] opacity-20"></div>
      </div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          ></div>
        ))}
      </div>
      <div
        className="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-3xl opacity-20"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: "300px",
          height: "300px",
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      ></div>
    </div>
  )
}

