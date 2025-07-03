"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  Award,
  Code,
  Zap,
  Globe,
  ChevronDown,
  X,
  Phone,
  Rocket,
  Calendar,
} from "lucide-react";
import { NewsletterSection } from "../Components/NewsLetter/NewsLetter";
const teamMembers = [
  // {
  //   name: "Zubair Bashir",
  //   role: "CEO & Founder",
  //   image: "/images/zubair.jpg",
  //   bio: "Visionary leader with 15+ years in tech innovation.",
  //   bio1: "Zubair’s journey from a finance and accounting expert to a tech and AI enthusiast has been nothing short of transformative. With over 15 years of experience in financial management and a passion for cutting-edge technology, he now leads innovative AI-driven solutions that bridge the gap between finance and technology, helping businesses thrive in the digital age.",
  //   twitter: "https://twitter.com/zubairbashir",
  //   linkedin: "https://linkedin.com/in/zubairbashir",
  //   github: "https://github.com/zubairbashir",
  // },
  {
    name: "Muhammad Abdullah",
    role: "CEO & Founder",
    image: "/images/abdullah1.jpg",
    bio: "Passionate about cutting-edge technologies and scalable solutions.",
    bio1: "A Cambridge university graduate and tech enthusiast with a deep passion for developing scalable, efficient, and high-performance systems. Abdullah thrives on solving complex problems and has a proven track record of leading successful projects that harness the latest advancements in technology.",
    twitter: "https://twitter.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    github: "https://github.com/johnsmith",
  },
  // {
  //   name: "Alice Johnson",
  //   role: "Design Lead",
  //   image: "/images/alice.jpg",
  //   bio: "Award-winning designer with a keen eye for user-centric experiences.",
  //   bio1: "An award-winning designer with a sharp eye for user-centric experiences and a deep understanding of the intersection between art and technology. Alice crafts intuitive, aesthetically pleasing designs that enhance the user experience and elevate brand identity.",
  //   twitter: "https://twitter.com/alicejohnson",
  //   linkedin: "https://linkedin.com/in/alicejohnson",
  //   github: "https://github.com/alicejohnson",
  // },
  {
    name: "Usman Rasheed",
    role: "Sales & Marketing Director",
    image: "/images/usman.jpg",
    bio: "Strategic thinker driving brand growth and customer engagement.",
    bio1: "A strategic marketing expert with a knack for creating powerful brand narratives and building meaningful customer relationships. Usman excels in turning data-driven insights into impactful marketing strategies that drive growth and engagement.",
    twitter: "https://twitter.com/bobwilliams",
    linkedin: "https://linkedin.com/in/bobwilliams",
    github: "https://github.com/bobwilliams",
  },
];

const coreValues = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
  },
  {
    icon: Briefcase,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new ideas.",
  },
  {
    icon: Code,
    title: "Expertise",
    description: "We are masters of our craft, always learning and improving.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changes and seize new opportunities.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We create solutions that make a difference worldwide.",
  },
];

const milestones = [
  {
    year: 2020,
    title: "Company Founded",
    description:
      "Our journey began with a vision to innovate and disrupt. A small yet passionate team came together to lay the foundation for a tech-driven future.",
  },
  {
    year: 2021,
    title: "First Major Client Partnership",
    description:
      "Secured our first major partnership with an industry leader, validating our capabilities and opening doors to new opportunities.",
  },
  {
    year: 2022,
    title: "Product Launch",
    description:
      "Launched our first flagship product, marking a milestone in delivering real-world solutions that our clients love and trust.",
  },
  {
    year: 2023,
    title: "International Expansion",
    description:
      "Successfully expanded our reach, including key locations across North America and Europe.",
  },
  {
    year: 2024,
    title: "Team Growth and Culture",
    description:
      "Grew our team with talented professionals, fostering a collaborative culture that drives our mission to push the boundaries of technology.",
  },
  {
    year: 2025,
    title: "Sustainability Initiative",
    description:
      "Launched a major sustainability initiative, incorporating eco-friendly practices across all our operations and products to contribute to a greener future.",
  },
];

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

    for (let i = 0; i < 150; i++) {
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
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
};

const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef);

  useEffect(() => {
    if (inView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        if (progress < 1) {
          setCount(Math.floor(target * progress));
          requestAnimationFrame(animateCount);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, target, duration]);

  return <span ref={countRef}>{count}</span>;
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [activeValue, setActiveValue] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#1C1C1C] text-white overflow-hidden">
        <ParticleEffect />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4646ff] animate-pulse">
              We Are Innovators
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-8">
              Transforming ideas into digital realities that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(70, 70, 255, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("our-story")}
                className="bg-[#4646ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4646ff]/90 transition-all duration-300 flex items-center"
              >
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <Link href="/services">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(70, 70, 255, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center"
                >
                  Our Services
                  <Briefcase className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[#4646ff] mix-blend-multiply filter blur-[100px] animate-pulse" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 cursor-pointer"
            onClick={() => scrollToSection("our-story")}
          >
            <ChevronDown className="w-10 h-10 text-white opacity-50" />
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section
          id="our-story"
          ref={containerRef}
          className="relative py-20 overflow-hidden"
        >
          <motion.div
            style={{ y, opacity }}
            className="container mx-auto px-6 md:px-8"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4646ff]"
                >
                  Our Story
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-400 text-lg text-justify"
                >
                  Founded in 2020, we are US registered digital and automation
                  firm formed in TEXAS, which embarked on a mission to transform
                  the digital landscape with innovative solutions that drive
                  success in the digital age. Our journey has been marked by a
                  commitment to creative excellence, continuous learning, and
                  constant evolution.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-400 text-lg pb-8 text-justify"
                >
                  Today, we're proud to have empowered numerous businesses with
                  our cutting-edge digital strategies, seamless web experiences,
                  automated accounting and book-keeping and user-centric
                  designs. Our diverse team of experts continues to push the
                  boundaries of what's possible, staying ahead of the curve and
                  delivering impactful digital solutions that shape the future.
                </motion.p>

                <Link href="/case-study">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(70, 70, 255, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#4646ff] text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-[#4646ff]/90 transition-all duration-300 flex items-center"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/images/about1.jpg"
                  alt="Our Journey"
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                  <h3 className="text-2xl font-bold mb-2">
                    Pioneering Digital Innovation
                  </h3>
                  <p className="text-gray-300">
                    Transforming ideas into impactful digital solutions
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="py-20 bg-[#232323]">
          <div className="container mx-auto px-6 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4646ff]"
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4646ff]" />
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="w-1/2 pr-8">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(70, 70, 255, 0.3)",
                      }}
                      className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-[#4646ff]">
                        {milestone.year}
                      </h3>
                      <h4 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </motion.div>
                  </div>
                  <div className="w-10 h-10 bg-[#4646ff] rounded-full flex items-center justify-center z-10">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(70, 70, 255, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#4646ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4646ff]/90 transition-all duration-300 flex items-center mx-auto"
                >
                  Join Our Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Interactive Core Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4646ff]"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group"
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#4646ff] rounded-full flex items-center justify-center mr-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-400">{value.description}</p>
                  <motion.div
                    className="absolute inset-0 bg-[#4646ff] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeValue === index ? 0.9 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white text-lg font-semibold text-center p-4">
                      {value.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Team Section */}
        <section className="py-20 bg-[#232323]">
          <div className="container mx-auto px-6 md:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4646ff]"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      layout="fill"
                      unoptimized
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                  <p className="text-gray-400 mt-2">{member.bio}</p>{" "}
                  {/* Adding bio here */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-4 flex justify-center space-x-4"
                  >
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#4646ff] transition-colors duration-300"
                      >
                        Twitter
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#4646ff] transition-colors duration-300"
                      >
                        LinkedIn
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#4646ff] transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}
                  </motion.div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-[#2a2a2a] p-8 rounded-xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setSelectedMember(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {selectedMember.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{selectedMember.role}</p>
                  <p className="text-gray-300">{selectedMember.bio1}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-b from-[#2a2a2a] to-[#1C1C1C] relative overflow-hidden">
          <ParticleEffect />
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4646ff]">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join us in shaping the future of digital innovation. Let's
                create something extraordinary together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-[#4646ff] to-[#46ffa9] p-1 rounded-2xl group"
              >
                <div className="bg-[#2a2a2a] rounded-2xl p-8 h-full transition-transform group-hover:scale-[0.98]">
                  <Rocket className="w-12 h-12 mb-6 text-[#4646ff]" />
                  <h3 className="text-2xl font-bold mb-4">
                    Start Your Project
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Launch your ideas into reality. Our team is ready to bring
                    your vision to life.
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#4646ff] to-[#46ffa9] text-white px-6 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center w-full"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-[#4646ff] to-[#46ffa9] p-1 rounded-2xl group"
              >
                <div className="bg-[#2a2a2a] rounded-2xl p-8 h-full transition-transform group-hover:scale-[0.98]">
                  <Calendar className="w-12 h-12 mb-6 text-[#46ffa9]" />
                  <h3 className="text-2xl font-bold mb-4">Schedule a Call</h3>
                  <p className="text-gray-400 mb-6">
                    Let's discuss your needs and how we can help you achieve
                    your goals.
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center w-full"
                    >
                      Book Now
                      <Phone className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-xl text-gray-400 mb-6">
                Not sure where to start? We're here to help!
              </p>
              <Link href="/services">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(70, 70, 255, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#1C1C1C] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center"
                >
                  Explore Our Services
                  <Briefcase className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <NewsletterSection />
    </>
  );
};

export default AboutUs;
