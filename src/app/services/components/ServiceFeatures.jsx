
export default function ServiceFeatures({ features }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 group"
          >
            <feature.icon className="w-12 h-12 text-blue-400 mb-4 transition-transform duration-300 transform group-hover:rotate-12" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    )
  }
  
  