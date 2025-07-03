"use client"
import { useParams } from "next/navigation"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Share2, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "../components/button"
import { Progress } from "../components/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
import { caseStudies } from "../data/case-studies"
import { ArrowUpRight } from "lucide-react"
import { GradientOrb } from "../components/gradient-orbit" // Import GradientOrb

export default function CaseStudyContent() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  if (!study) {
    return <div>Case study not found</div>
  }

  const handleCaseStudyDetails = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-[#1C1C1C] min-h-screen relative overflow-hidden">
      {" "}
      {/* Changed background to match case-study page */}
      {/* Background Effects - Gradient Orbs */}
      <GradientOrb className="top-20 left-[10%]" color="blue" /> {/* Added GradientOrbs - Adjusted positions */}
      <GradientOrb className="bottom-32 right-[20%]" color="purple" /> {/* Added GradientOrbs - Adjusted positions */}
      {/* Progress Bar - Keep as is */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 z-50"
        style={{ scaleX }}
      />
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0B0E18]/80 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/case-study"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors group"
          >
            <motion.div whileHover={{ x: -4 }} className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:transform" />
              Back to Case Studies
            </motion.div>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Share2 className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={study.image || "/placeholder.svg"}
            alt={study.title}
            fill
            unoptimized
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E18] via-[#0B0E18]/70 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <span className="text-purple-400">{study.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-white/60">Case Study</span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4338CA]" // Gradient text for title
              initial={{ opacity: 0, y: 20 }} // Added animation from case-study page
              animate={{ opacity: 1, y: 0 }} // Added animation from case-study page
              transition={{ duration: 0.8 }} // Added animation from case-study page
            >
              {study.title}
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {" "}
              {/* Changed text color to gray-400 */}
              {study.description}
            </p>
            <div className="flex items-center justify-center gap-4 pt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 h-12 px-8 text-lg"
                >
                  View Project <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button> */}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black border-white border hover:text-white hover:bg-white/5 h-12 px-8 text-lg"
                  onClick={handleCaseStudyDetails}
                >
                  Case Study Details <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 h-12 px-8 text-lg"
                  >
                    Start Your Project
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Scroll Indicator - Keep as is */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-full h-3 bg-white/50 rounded-full"
            />
          </div>
          <span className="text-white/50 text-sm">Scroll to explore</span>
        </motion.div>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {study.stats?.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-8 rounded-2xl bg-[#1C1C1C] border border-white/10 backdrop-blur-sm hover:bg-white/5 transition-colors">
                  {" "}
                  {/* Changed stat box background to match main bg and hover effect slightly different */}
                  <div className="text-3xl mb-4 text-white">{stat.icon}</div> {/* Changed icon color to white */}
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div> {/* Changed label color to gray-400 */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto justify-center p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white mb-16">
              {["Overview", "Process", "Results"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase()}
                  className="w-full rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-12">
                <TabsContent value="overview" className="space-y-12 mt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="prose prose-invert max-w-none"
                  >
                    <div className="space-y-8">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative p-8 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm">
                          {" "}
                          {/* Changed content box background to match main bg */}
                          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4338CA] mb-4">
                            {" "}
                            {/* Gradient text for section titles */}
                            {study.challenge?.title || "The Challenge"}
                          </h2>
                          <p className="text-xl text-gray-400 leading-relaxed">{study.challenge?.description}</p>
                        </div>
                      </div>
                      {/* Image Gallery */}
                      <div className="grid grid-cols-2 gap-8">
                        {study.images?.map((img, index) => (
                          <motion.div key={`image-${index}`} whileHover={{ y: -5 }} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <div className="relative rounded-lg overflow-hidden">
                              <Image
                                src={img.url || "/placeholder.svg"}
                                alt={img.alt || `Process image ${index + 1}`}
                                width={600}
                                height={400}
                                unoptimized
                                className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />{" "}
                              {/* Adjusted overlay gradient to match main bg */}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative p-8 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm">
                          {" "}
                          {/* Changed content box background to match main bg */}
                          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4338CA] mb-4">
                            {" "}
                            {/* Gradient text for section titles */}
                            {study.solution?.title || "The Solution"}
                          </h2>
                          <p className="text-xl text-gray-400 leading-relaxed">{study.solution?.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="process" className="space-y-12 mt-0">
                  {study.process?.map((phase, index) => (
                    <motion.div
                      key={`phase-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <div className="relative p-8 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm flex gap-6">
                        {" "}
                        {/* Changed process box background to match main bg */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                          {index + 1}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                          <p className="text-lg text-gray-400 leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="results" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {study.results?.metrics.map((item, index) => (
                      <motion.div
                        key={`metric-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative p-8 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm hover:bg-white/5 transition-colors">
                          {" "}
                          {/* Changed results box background to match main bg and hover effect slightly different */}
                          <h4 className="text-gray-400 font-medium">
                            {" "}
                            {/* Changed metric color to gray-400 */}
                            {item.metric}
                          </h4>
                          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4338CA] mt-2">
                            {" "}
                            {/* Gradient text for values */}
                            {item.value}
                          </div>
                          <p className="text-gray-400 mt-2">
                            {" "}
                            {/* Changed description color to gray-400 */}
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Testimonial */}
                  {study.testimonial && (
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative mt-16 group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <blockquote className="relative p-8 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm">
                        {" "}
                        {/* Changed testimonial box background to match main bg */}
                        <div className="flex gap-4 items-start">
                          <div className="text-6xl text-purple-500/20">"</div>
                          <div>
                            <p className="text-2xl text-gray-400 leading-relaxed">{study.testimonial.quote}</p>
                            <footer className="mt-6 flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                                <span className="text-white font-bold">{study.testimonial.author.initials}</span>
                              </div>
                              <div>
                                <div className="font-medium text-white">{study.testimonial.author.name}</div>
                                <div className="text-gray-400">{study.testimonial.author.title}</div>{" "}
                                {/* Changed position/company color to gray-400 */}
                              </div>
                            </footer>
                          </div>
                        </div>
                      </blockquote>
                    </motion.div>
                  )}
                </TabsContent>
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                {/* Project Progress */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm">
                    {" "}
                    {/* Changed sidebar box background to match main bg */}
                    <h3 className="text-lg font-semibold text-white mb-4">Project Progress</h3>
                    <Progress value={study.progress || 100} className="h-2 bg-white/5" />
                    <div className="flex items-center gap-2 mt-3">
                      <div
                        className={`w-2 h-2 rounded-full ${study.progress === 100 ? "bg-green-500" : "bg-yellow-500"}`}
                      />
                      <p className="text-white/80">{study.progress === 100 ? "Project Completed" : "In Progress"}</p>
                    </div>
                  </div>
                </div>
                {/* Services */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm">
                    {" "}
                    {/* Changed sidebar box background to match main bg */}
                    <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.services?.map((service, index) => (
                        <span
                          key={`service-${index}`}
                          className="px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer" /* Changed service text color to gray-400 */
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Technologies */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-lg bg-[#1C1C1C] border border-white/10 backdrop-blur-sm">
                    {" "}
                    {/* Changed sidebar box background to match main bg */}
                    <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies?.map((tech, index) => (
                        <span
                          key={`tech-${index}`}
                          className="px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer" /* Changed tech text color to gray-400 */
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Call to Action */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-8 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm space-y-6">
                    <div className="flex items-center gap-2">
                      {/* <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" /> */}
                      <h3 className="text-xl font-semibold text-white">Ready to start your project?</h3>
                    </div>
                    <p className="text-gray-400">Let's discuss how we can help you achieve similar results.</p>{" "}
                    {/* Changed CTA text color to gray-400 */}
                    <div className="space-y-3">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link href="/services">
                          <Button
                            variant="outline"
                            className="w-full h-12 text-lg text-black hover:text-white border-white border hover:bg-white/5"
                          >
                            {" "}
                            {/* Adjusted button style to match theme - removed gradient from outline button and adjusted hover */}
                            Discover Our Services <ExternalLink className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link href="/contact">
                          <Button className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
                            Schedule a Consultation <ArrowUpRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

