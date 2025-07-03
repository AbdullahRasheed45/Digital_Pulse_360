import { caseStudies } from "../data/case-studies"

export async function generateMetadata({ params }) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return {
      title: 'Case Study Not Found - Digital Pulse 360',
      description: 'The requested case study could not be found.',
    }
  }

  return {
    title: `${study.title} Case Study - Digital Pulse 360`,
    description: study.description || 'Explore how Digital Pulse 360 delivered innovative digital solutions and achieved remarkable results for our client.',
    keywords: [
      study.title,
      ...study.services || [],
      ...study.technologies || [],
      'case study',
      'Digital Pulse 360',
      'digital transformation',
      'success story'
    ],
    openGraph: {
      title: `${study.title} - Client Success Story`,
      description: study.description,
      url: `https://digitalpulse360.com/case-study/${study.slug}`,
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: study.image || '/images/case-studies/default-og.jpg',
          width: 1200,
          height: 630,
          alt: study.title
        }
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: study.date,
      authors: [study.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} Case Study`,
      description: study.description,
      images: [study.image || '/images/case-studies/default-og.jpg'],
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
      canonical: `https://digitalpulse360.com/case-study/${study.slug}`
    },
    other: {
      'project-type': study.category,
      'project-status': study.progress === 100 ? 'Completed' : 'In Progress',
      'schema-org': {
        '@type': 'Article',
        headline: study.title,
        description: study.description,
        image: study.image,
        datePublished: study.date,
        author: {
          '@type': 'Organization',
          name: 'Digital Pulse 360'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Digital Pulse 360',
          logo: {
            '@type': 'ImageObject',
            url: 'https://digitalpulse360.com/logo.png' // Replace with actual logo URL
          }
        }
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