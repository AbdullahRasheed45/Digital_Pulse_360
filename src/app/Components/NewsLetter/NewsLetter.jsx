"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  Send,
  CheckCircle,
  XCircle,
  Mail,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const ParticleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(70, 70, 255, ${Math.random() * 0.5 + 0.5})`,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        if (particle.x < 0 || particle.x > canvas.width)
          particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.velocity.y *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    await controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 },
    });

    const emailData = {
      name: "This is email subscription so no name",
      email: email,
      subject: "New Newsletter Subscription",
      message: "No message",
      phone: "No Phone number",
      date : "No Date",
      time: "No time",
      htmlContent: `<p><strong>New Subscriber:</strong> ${email}</p>`,
    };
    try {
      const response = await fetch(
        "https://serverjs-1-pod3.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Subscription failed.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <section className="w-full py-24 bg-gradient-to-b from-[#2a2a2a] to-[#1C1C1C] relative overflow-hidden">
        <ParticleEffect />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 bg-gradient-to-br from-[#4646ff] to-[#46ffa9] rounded-full flex items-center justify-center mb-6 relative"
            >
              <Mail className="w-16 h-16 text-white" />
              <motion.div
                className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-[#1C1C1C]" />
              </motion.div>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock the Future of Tech
            </motion.h2>
            <motion.p
              className="max-w-[700px] text-gray-400 text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Subscribe for exclusive insights and be part of the next big
              innovation.
            </motion.p>
            <motion.div
              className="w-full max-w-md space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 bg-white/10 border-2 border-[#4646ff]/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4646ff] focus:border-transparent text-lg"
                  />
                  <AnimatePresence>
                    {status === "loading" && (
                      <motion.div
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                      >
                        <div className="w-6 h-6 border-t-2 border-[#4646ff] rounded-full animate-spin" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#4646ff] to-[#46ffa9] text-white rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={controls}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.span
                    className="relative z-10 flex items-center"
                    animate={{ x: isHovered ? -10 : 0 }}
                  >
                    <Send className="w-6 h-6 mr-2" />
                    Subscribe Now
                  </motion.span>
                  <motion.div
                    className="absolute right-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </form>
              <AnimatePresence>
                {status === "success" && (
                  <motion.div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
                    <p className="text-green-400 flex items-center justify-center text-lg">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      Thank you for subscribing!
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
                    <p className="text-red-400 flex items-center justify-center text-lg">
                      <XCircle className="w-6 h-6 mr-2" />
                      An error occurred. Please try again.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
