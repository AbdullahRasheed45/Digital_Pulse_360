"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services tailored to meet your business needs. Our expertise includes web development, creating responsive and user-friendly websites, mobile app development for iOS and Android platforms, UI/UX design to enhance user experience, and digital marketing strategies to boost your online presence.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines can vary significantly depending on the scope, complexity, and specific requirements of each project. After our initial consultation, where we discuss your needs in detail, we provide a comprehensive project plan with estimated timelines. We always strive to deliver high-quality results within agreed-upon timeframes, keeping you informed of progress throughout the development process.",
  },
  {
    question: "Do you offer support after project completion?",
    answer:
      "We believe in building long-term relationships with our clients. After project completion, we offer ongoing support and maintenance packages to ensure your digital products continue to perform optimally. This includes regular updates, performance optimization, security patches, and technical support to address any issues that may arise post-launch.",
  },
  {
    question: "How do you ensure the security of my website or application?",
    answer:
      "Security is a top priority in all our development projects. We implement industry-standard security measures, including secure coding practices, regular security audits, and the use of HTTPS encryption. For web applications, we employ robust authentication systems and data encryption. We also provide guidance on best practices for maintaining the security of your digital assets after launch.",
  },
  {
    question: "Can you help with improving my website's SEO?",
    answer:
      "Yes, we offer comprehensive SEO services to improve your website's visibility in search engine results. Our approach includes on-page optimization, content strategy, technical SEO improvements, and off-page SEO techniques. We conduct thorough keyword research and implement SEO best practices to help your website rank higher for relevant search terms, driving more organic traffic to your site.",
  },
]

export default function FAQSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#232323] rounded-lg"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full p-6 text-left">
        <h3 itemProp="name" className="text-xl font-semibold text-white">
          {question}
        </h3>
        {isOpen ? <ChevronUp className="w-6 h-6 text-[#4646ff]" /> : <ChevronDown className="w-6 h-6 text-[#4646ff]" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <p itemProp="text" className="text-gray-300">
            {answer}
          </p>
        </div>
      )}
    </motion.div>
  )
}

