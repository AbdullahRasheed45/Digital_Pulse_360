
import Link from "next/link"

export default function RelatedServices({ services }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Related Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-700 group"
          >
            <service.icon className="w-8 h-8 text-blue-400 mb-4 transition-transform duration-300 transform group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {service.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

