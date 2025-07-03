export const metadata = {
    title: 'Terms & Privacy Policy - Digital Pulse 360',
    description: 'Read our terms of service and privacy policy. Learn about how Digital Pulse 360 collects, uses, and protects your data, and understand our terms of use.',
    keywords: [
      'terms of service',
      'privacy policy',
      'legal terms',
      'data protection',
      'cookie policy',
      'user agreement',
      'Digital Pulse 360 terms',
      'privacy notice',
      'data collection',
      'user rights'
    ],
    openGraph: {
      title: 'Terms & Privacy Policy | Digital Pulse 360',
      description: 'Important information about your rights, our data practices, and terms of service.',
      url: 'https://digitalpulse360.com/terms',
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: '/images/legal-og.jpg', // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: 'Digital Pulse 360 Terms and Privacy Policy'
        }
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Terms & Privacy Policy - Digital Pulse 360',
      description: 'Important information about your rights and our data practices.',
      images: ['/images/legal-og.jpg'], // Replace with your actual Twitter card image
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: 'https://digitalpulse360.com/terms'
    },
    other: {
      'schema-org': {
        '@type': 'WebPage',
        name: 'Terms & Privacy Policy',
        description: 'Legal terms, privacy policy, and data protection information for Digital Pulse 360 users.',
        publisher: {
          '@type': 'Organization',
          name: 'Digital Pulse 360',
          logo: {
            '@type': 'ImageObject',
            url: 'https://digitalpulse360.com/logo.png' // Replace with actual logo URL
          }
        },
        dateModified: '2024-02-14', // Keep in sync with the "Last Updated" date in your terms
        isAccessibleForFree: true,
        license: 'https://digitalpulse360.com/terms'
      }
    }
  }
  
  export default function TermsLayout({ children }) {
    return (
      <>
        {children}
      </>
    )
  }