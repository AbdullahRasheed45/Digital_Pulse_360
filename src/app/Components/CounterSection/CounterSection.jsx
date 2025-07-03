"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, Rocket, Star, TrendingUp } from "lucide-react";
import BlogSection from "../Blog/Blog";

const metrics = [
  { icon: Users, title: "Clients Onboarded", value: 50, unit: "+", color: "#4646ff" },
  { icon: Rocket, title: "Projects Launched", value: 100, unit: "+", color: "#46ff7e" },
  { icon: Star, title: "Client Satisfaction", value: 98, unit: "%", color: "#ffb246" },
];

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration / end) * 1000;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, inView]);

  return <span ref={nodeRef}>{count}</span>;
};

const MetricCard = ({ metric, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({ scale: 1.05, transition: { duration: 0.3 } });
    } else {
      controls.start({ scale: 1, transition: { duration: 0.3 } });
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      className="bg-gradient-to-br from-[#2a2a2a] to-[#3a3a3a] p-8 rounded-2xl relative overflow-hidden transition-all duration-300 border border-transparent hover:border-[#4646ff]/30 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#4646ff]/20 via-[#46ff7e]/20 to-[#ffb246]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={controls}
      />
      <div className="relative z-10">
        <motion.div
          className="w-20 h-20 rounded-full bg-[#4646ff]/10 flex items-center justify-center mb-6 mx-auto"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <metric.icon className="w-10 h-10" style={{ color: metric.color }} />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4 text-center">{metric.title}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-5xl font-bold" style={{ color: metric.color }}>
            <Counter value={metric.value} />
          </span>
          <span className="text-3xl font-bold" style={{ color: metric.color }}>
            {metric.unit}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export function CounterSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section ref={ref} className="w-full py-24 bg-gradient-to-b from-[#1C1C1C] to-[#2a2a2a] overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Our Impact So Far
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
    <BlogSection/>
    </>
  );
}
