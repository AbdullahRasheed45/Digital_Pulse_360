
import Image from "next/image"
import Link from "next/link"

export default function CaseStudy({ caseStudy }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 group">
      <div className="relative">
        <Image
          src={caseStudy.image || "/placeholder.svg"}
          alt={caseStudy.title}
          width={600}
          height={400}
          unoptimized
          className="w-full object-cover h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
          {caseStudy.title}
        </h3>
        <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
          {caseStudy.description}
        </p>
        <Link
          href={caseStudy.link}
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

