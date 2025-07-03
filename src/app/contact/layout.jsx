export const metadata = {
    title: 'Contact | Digital Pulse 360 | Get in Touch for Digital Solutions',
    description: 'Connect with Digital Pulse 360 for web development, mobile apps, SEO, and digital marketing solutions. Let\'s discuss your next digital project and transform your online presence.',
    keywords: [
      'contact Digital Pulse 360',
      'digital agency contact',
      'web development consultation',
      'digital marketing inquiry',
      'SEO services contact',
      'mobile app development contact',
      'UI/UX design consultation',
      'digital transformation contact'
    ],
    openGraph: {
      title: 'Contact Digital Pulse 360',
      description: 'Ready to transform your digital presence? Get in touch with our team of experts for a consultation.',
      url: 'https://digitalpulse360.com/contact',
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: '/images/contact-og.jpg', // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: 'Contact Digital Pulse 360'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Digital Pulse 360',
      description: 'Transform your digital presence with Digital Pulse 360. Get in touch for a consultation.',
      images: ['/images/contact-og.jpg'], // Replace with your actual Twitter card image
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
      canonical: 'https://digitalpulse360.com/contact'
    },
    other: {
      'schema-org': {
        '@type': 'ContactPage',
        name: 'Contact Digital Pulse 360',
        description: 'Get in touch with Digital Pulse 360 for digital transformation solutions',
        url: 'https://digitalpulse360.com/contact',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-XXX-XXX-XXXX', // Replace with actual phone
          contactType: 'customer service',
          areaServed: 'Worldwide',
          availableLanguage: ['English'],
          email: 'contact@digitalpulse360.com' // Replace with actual email
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Your Street Address', // Replace with actual address
          addressLocality: 'Your City',
          addressRegion: 'Your State/Region',
          postalCode: 'Your Postal Code',
          addressCountry: 'Your Country'
        },
        sameAs: [
          'https://twitter.com/digitalpulse360',
          'https://linkedin.com/company/digitalpulse360',
          'https://instagram.com/digitalpulse360'
          // Add other social media profiles
        ]
      }
    }
  }
  
  export default function ContactLayout({ children }) {
    return (
      <>
        {children}
      </>
    )
  }