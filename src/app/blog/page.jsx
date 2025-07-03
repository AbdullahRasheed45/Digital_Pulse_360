"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowRight, Search, Filter, Sparkles } from "lucide-react"
import { BlogPosts } from "./libs/BlogPosts"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown"

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // Get unique categories
  const categories = ["All", ...new Set(BlogPosts.map((post) => post.category))]

  // Filter posts based on search and category
  const filteredPosts = BlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#2C2C2C] relative">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#4646ff] origin-left z-50" style={{ scaleX }} />

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-[#1C1C1C] z-50 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Sparkles className="w-12 h-12 text-[#4646ff]" />
          </motion.div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4646ff]/10 backdrop-blur-3xl" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #4646ff1a 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #4646ff1a 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #4646ff1a 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4646ff] to-[#805ad5] mb-6"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
            >
              Explore Our Blog
            </motion.h1>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Discover insights, tutorials, and the latest updates from our team of experts.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 transition-colors group-hover:text-[#4646ff]" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-white/5 border-white/10 text-white transition-all duration-300 hover:bg-white/10 focus:bg-white/10 focus:border-[#4646ff]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#4646ff] transition-all duration-300"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900/95 backdrop-blur-lg border-white/10">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="text-white hover:text-[#4646ff] cursor-pointer"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={item}
              className="group relative cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href={`/blog/${post.slug}`}
                className="block absolute inset-0 z-10"
                aria-label={`Read more about ${post.title}`}
              />
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-[#4646ff] focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
                  onClick={(e) => {
                    // Prevent default if it's not a left click or if modifier keys are pressed
                    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
                      return
                    }
                    e.preventDefault()
                    window.location.href = `/blog/${post.slug}`
                  }}
                >
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 ease-out group-hover:scale-110"
                      unoptimized
                    />
                    <motion.div
                      className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} px-3 py-1 rounded-full text-xs font-semibold text-white`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {post.category}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                  </div>
                  <div className="p-6 relative">
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#4646ff] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                        <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/20">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author || "Author"}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </motion.div>
                      <motion.div
                        className="inline-flex items-center text-sm font-medium text-[#4646ff]"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4646ff]/20 rounded-lg transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

