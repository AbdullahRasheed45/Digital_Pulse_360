export const metadata = {
    title: 'Digital Services - Digital Pulse 360 | Web, Mobile & Digital Marketing Solutions',
    description: 'Transform your digital presence with Digital Pulse 360\'s comprehensive services including web development, mobile app development, SEO, social media marketing, UI/UX design, and market analytics.',
    keywords: [
      'digital services',
      'web development',
      'mobile development',
      'SEO services',
      'social media marketing',
      'UI/UX design',
      'market analytics',
      'digital agency',
      'Digital Pulse 360',
      'digital transformation'
    ],
    openGraph: {
      title: 'Digital Services - Digital Pulse 360',
      description: 'Comprehensive digital services including web development, mobile apps, SEO, social media marketing, UI/UX design, and market analytics. Transform your digital presence with Digital Pulse 360.',
      url: 'https://digitalpulse360.com/services',
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: '/images/services-og.jpg', // Make sure to add your actual OG image
          width: 1200,
          height: 630,
          alt: 'Digital Pulse 360 Services'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Digital Services - Digital Pulse 360',
      description: 'Transform your digital presence with our comprehensive suite of digital services. Expert web development, mobile apps, SEO, and more.',
      images: ['/images/services-og.jpg'], // Make sure to add your actual Twitter card image
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
    verification: {
      google: 'your-google-verification-code', // Add your actual Google verification code
    },
    alternates: {
      canonical: 'https://digitalpulse360.com/services'
    }
  }
  
  export default function ServicesLayout({ children }) {
    return (
      <>
        {children}
      </>
    )
  }