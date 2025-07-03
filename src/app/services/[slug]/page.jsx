import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AnimatedBackground from "../components/AnimatedBackground"
import { services } from "../lib/services"
import { caseStudies } from "../../case-study/data/case-studies"
import ServiceFeatures from "../components/ServiceFeatures"
import CaseStudy from "../components/CaseStudy"
import Testimonial from "../components/Testimonial"
import RelatedServices from "../components/RelatedServices"

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Fetch service data by slug
function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}

// Find matching case study for the service
function getCaseStudyForService(serviceSlug) {
  return caseStudies.find((cs) => cs.slug === serviceSlug) || caseStudies[0]
}

// ServicePage component
export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  // If no service is found, trigger a 404
  if (!service) {
    notFound()
  }

  // Get matching case study or default to first one
  const caseStudy = getCaseStudyForService(slug)

  // Filter related services
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div className="min-h-screen pt-10 bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <main className="container mx-auto px-4 py-24 relative z-10">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-400 hover:underline mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Services
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold py-6 mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {service.title}
        </h1>
        <p className="text-gray-400 max-w-3xl text-lg md:text-xl mb-12 leading-relaxed">{service.longDescription}</p>

        <ServiceFeatures features={service.features} />

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <CaseStudy
            caseStudy={{
              title: caseStudy.title,
              description: caseStudy.longDescription,
              image: caseStudy.image,
              link: `/case-study/${caseStudy.slug}`,
              results: caseStudy.results,
            }}
          />
          <Testimonial testimonial={caseStudy.testimonial} />
        </div>

        <RelatedServices services={relatedServices} />

        <div className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ready to Transform Your {service.title} Experience?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's collaborate to create a {service.title.toLowerCase()} solution that not only meets your expectations
            but drives your business goals forward.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Start Your {service.title} Project
            <ArrowLeft className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  )
}

