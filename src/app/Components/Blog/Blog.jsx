"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPosts } from "@/app/blog/libs/BlogPosts";
import ContactSection from "../ContactUs/ContactUs"

export default function BlogSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowHeight, setWindowHeight] = useState(500); // Default value
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateWindowHeight = () => {
      if (typeof window !== "undefined") {
        setWindowHeight(window.innerHeight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateWindowHeight);

    // Initial window height update
    updateWindowHeight();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateWindowHeight);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 2) % BlogPosts.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + BlogPosts.length) % BlogPosts.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 2) % BlogPosts.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const renderBlogCard = (post, index) => (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-gray-900/80 backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl relative group will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
          className="transform transition-transform duration-300 will-change-transform group-hover:scale-105"
        />
        <div
          className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} px-3 py-1 rounded-full text-xs font-semibold text-white`}
        >
          {post.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
      </div>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-200 group-hover:text-[#4646ff]">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="inline-flex items-center text-sm font-medium text-[#4646ff] transition-colors duration-200 group-hover:text-white">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
      <div className="absolute inset-0 border-2 border-transparent transition-colors duration-200 group-hover:border-[#4646ff]/20 rounded-lg" />
    </motion.div>
  );

  return (
    <>
    <section className="bg-[#1C1C1C] relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4646ff]/10 via-transparent to-[#805ad5]/10 opacity-30" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full will-change-transform"
            animate={{
              y: [-20, windowHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 mb-12 relative z-10">
        <div className="space-y-4">
          <h2 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4646ff] to-[#805ad5]">
            Our Blog
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Insights, thoughts, and expertise from our team of digital innovators.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden" ref={containerRef}>
        <div className="flex justify-center items-center h-[600px] md:h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full px-4 md:px-0 will-change-transform"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {renderBlogCard(BlogPosts[currentIndex], 0)}
                {renderBlogCard(BlogPosts[(currentIndex + 1) % BlogPosts.length], 1)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
    <ContactSection/>
    </>
  );
}
