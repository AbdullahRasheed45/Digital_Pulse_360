export const metadata = {
    title: 'Portfolio - Digital Pulse 360 | Digital Transformation Success Stories',
    description: 'Explore Digital Pulse 360\'s portfolio of successful digital transformation projects. See how we help businesses achieve their goals through web development, mobile apps, SEO, and digital marketing solutions.',
    keywords: [
      'case studies',
      'portfolio',
      'digital transformation',
      'success stories', 
      'client projects',
      'Digital Pulse 360',
      'web development portfolio',
      'digital marketing cases',
      'SEO success stories',
      'mobile app portfolio'
    ],
    openGraph: {
      title: 'Digital Success Stories | Digital Pulse 360 Portfolio',
      description: 'Discover how Digital Pulse 360 transforms businesses through innovative digital solutions. Real results, real success stories.',
      url: 'https://digitalpulse360.com/case-study',
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: '/images/case-studies-og.jpg', // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: 'Digital Pulse 360 Case Studies'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Digital Success Stories - Digital Pulse 360',
      description: 'Explore our portfolio of successful digital transformation projects. See real results and client success stories.',
      images: ['/images/case-studies-og.jpg'], // Replace with your actual Twitter card image
      creator: '@digitalpulse360', // Replace with your actual Twitter handle
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
      canonical: 'https://digitalpulse360.com/case-study'
    },
    other: {
      'portfolio-type': 'Digital Services',
      'industry-focus': 'Cross-Industry',
      'schema-org': {
        '@type': 'CollectionPage',
        name: 'Digital Pulse 360 Case Studies',
        description: 'Portfolio of successful digital transformation projects by Digital Pulse 360',
        provider: {
          '@type': 'Organization',
          name: 'Digital Pulse 360',
          sameAs: [
            'https://twitter.com/digitalpulse360',
            'https://linkedin.com/company/digitalpulse360',
            // Add your other social media profiles
          ]
        }
      }
    }
  }
  
  export default function CaseStudyLayout({ children }) {
    return (
      <>
        {children}
      </>
    )
  }