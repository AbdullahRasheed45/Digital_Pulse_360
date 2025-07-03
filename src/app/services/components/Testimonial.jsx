import { Quote } from "lucide-react"

export default function Testimonial({ testimonial }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl relative shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 group">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-blue-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      <p className="text-gray-400 mb-4 mt-8 italic group-hover:text-gray-300 transition-colors duration-300">
        {testimonial.quote}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-4 group-hover:from-blue-500 group-hover:to-purple-600 transition-colors duration-300"></div>
        <div>
          <p className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  )
}

