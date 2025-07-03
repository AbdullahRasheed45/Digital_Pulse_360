"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronUp, Search, Printer, Clock, Shield, Book, Mail, Lock, Cookie, Bell, FileText } from "lucide-react"
import { cn } from "../Components/ContactUs/lib/utils"
import { Input } from "../Components/ContactUs/ui/input"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: `Welcome to our website. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.`,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    content: `We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.`,
  },
  {
    id: "collection",
    title: "Information Collection",
    icon: Mail,
    content: `We collect information that you provide directly to us. For example, we collect information when you create an account, subscribe to our newsletter, or otherwise communicate with us.`,
  },
  {
    id: "usage",
    title: "Information Usage",
    icon: FileText,
    content: `We use the information we collect to operate and improve our website, products, and customer support. We may use your email address to send you newsletters, marketing materials, and other information about our products and services.`,
  },
  {
    id: "cookies",
    title: "Cookies Policy",
    icon: Cookie,
    content: `We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.`,
  },
  {
    id: "security",
    title: "Security",
    icon: Lock,
    content: `We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.`,
  },
  {
    id: "changes",
    title: "Changes to Terms",
    icon: Bell,
    content: `We may update our Terms and Privacy Policy from time to time. We will notify you of any changes by posting the new Terms and Privacy Policy on this page and updating the "Last Updated" date.`,
  },
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button after scrolling down 500px
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sectionElements = sections.map((section) => document.getElementById(section.id))

      const currentSection = sectionElements.find((element) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }

      // Calculate reading progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white print:bg-white print:text-black">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 print:hidden"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Header */}
      {/* <header className="fixed top-0 inset-x-0 h-20 bg-[#1C1C1C]/80 backdrop-blur-lg border-b border-white/10 z-50 print:hidden">
        <div className="container h-full flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            Your Logo
          </Link>
          <nav className="flex items-center gap-6">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
              Back to Home
            </Link>
          </nav>
        </div>
      </header> */}

      <div className="container pt-32 pb-20 px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar Navigation */}
          <div className="lg:sticky lg:top-32 h-fit space-y-6 print:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <Input
                type="search"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-white/70" />
                <h2 className="text-lg font-semibold">Table of Contents</h2>
              </div>
              <nav className="space-y-1">
                {filteredSections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "flex items-center gap-3 w-full text-left px-4 py-2 text-sm rounded-lg",
                        "transition-all duration-200",
                        activeSection === section.id
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {section.title}
                    </button>
                  )
                })}
              </nav>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Clock className="h-4 w-4" />
              Last Updated: February 14, 2024
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none print:prose-black">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Terms & Privacy Policy
            </h1>

            {sections.map((section) => {
              const Icon = section.icon
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "scroll-mt-32 mb-12 rounded-xl p-6 transition-colors duration-300",
                    activeSection === section.id ? "bg-white/5" : "hover:bg-white/[0.02]",
                  )}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn("p-2 rounded-lg", activeSection === section.id ? "bg-blue-500/20" : "bg-white/10")}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5 transition-colors",
                          activeSection === section.id ? "text-blue-400" : "text-white/70",
                        )}
                      />
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <p className="text-white/70 leading-relaxed">{section.content}</p>
                </section>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-3 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm transition-all duration-200 z-50 print:hidden",
          "transform",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        )}
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}

