"use client"

import { motion } from "framer-motion"



export function GradientOrb({ className = "", color = "blue" }) {
  const gradients = {
    blue: "from-blue-500 via-blue-400 to-blue-600",
    purple: "from-purple-500 via-purple-400 to-purple-600",
    pink: "from-pink-500 via-pink-400 to-pink-600",
  }

  return (
    <motion.div
      className={`absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r ${gradients[color]} opacity-20 blur-[100px] ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}



