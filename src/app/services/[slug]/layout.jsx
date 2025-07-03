import { services } from "../lib/services"

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: 'Service Not Found - Digital Pulse 360',
      description: 'The requested service could not be found.',
    }
  }

  const title = `${service.title} Services - Digital Pulse 360`
  const description = service.longDescription || `Professional ${service.title} services tailored for your business needs. Expert solutions by Digital Pulse 360.`

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      'digital services',
      'Digital Pulse 360',
      ...service.features.map(f => f.title.toLowerCase()),
      'professional services',
      'digital agency',
      'business solutions'
    ],
    openGraph: {
      title,
      description,
      url: `https://digitalpulse360.com/services/${slug}`,
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: service.image || '/images/services/default-og.jpg', // Use service image or fallback
          width: 1200,
          height: 630,
          alt: `${service.title} Services by Digital Pulse 360`
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.image || '/images/services/default-og.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://digitalpulse360.com/services/${slug}`
    },
    other: {
      'service-category': service.category || 'Digital Services',
      'service-price-range': service.priceRange || 'Custom Quote',
    }
  }
}

export default function ServiceLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}