"use client"
import ContactForm from "./ContactUs"
import { Mail, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import FAQSection from "./FAQSection"

export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#1C1C1C]">
        <div className="container mx-auto px-4 pt-40 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
          >
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContactInfoCard
              icon={<Mail className="w-6 h-6 text-[#4646ff]" />}
              title="Email"
              content="contact@yourcompany.com"
            />
            <ContactInfoCard
              icon={<Clock className="w-6 h-6 text-[#4646ff]" />}
              title="Business Hours"
              content="Monday - Friday: 9am - 5pm"
            />
            <ContactInfoCard
              icon={<MapPin className="w-6 h-6 text-[#4646ff]" />}
              title="Location"
              content="Remote - Worldwide"
            />
          </div>
          <ContactForm />
          <FAQSection />
        </div>
      </main>
    )
  }
  
  function ContactInfoCard({ icon, title, content }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#232323] p-6 rounded-lg shadow-lg"
      >
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-xl font-semibold text-white ml-2">{title}</h2>
        </div>
        <p className="text-gray-300">{content}</p>
      </motion.div>
    )
  }
  
  