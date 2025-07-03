const teamMembers = [
    {
      name: "Zubair Bashir",
      role: "CEO & Founder",
      image: "/images/zubair.jpg",
      bio: "Visionary leader with 15+ years in tech innovation.",
      bio1: "Zubair’s journey from a finance and accounting expert to a tech and AI enthusiast has been nothing short of transformative. With over 15 years of experience in financial management and a passion for cutting-edge technology, he now leads innovative AI-driven solutions that bridge the gap between finance and technology, helping businesses thrive in the digital age.",
      twitter: "https://twitter.com/zubairbashir",
      linkedin: "https://linkedin.com/in/zubairbashir",
      github: "https://github.com/zubairbashir",
    },
    {
      name: "Muhammad Abdullah",
      role: "CTO",
      image: "/images/abdullah1.jpg",
      bio: "Passionate about cutting-edge technologies and scalable solutions.",
      bio1: "A tech enthusiast with a deep passion for developing scalable, efficient, and high-performance systems. Abdullah thrives on solving complex problems and has a proven track record of leading successful projects that harness the latest advancements in technology.",
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
      github: "https://github.com/johnsmith",
    },
    {
      name: "Alice Johnson",
      role: "Design Lead",
      image: "/images/alice.jpg",
      bio: "Award-winning designer with a keen eye for user-centric experiences.",
      bio1: "An award-winning designer with a sharp eye for user-centric experiences and a deep understanding of the intersection between art and technology. Alice crafts intuitive, aesthetically pleasing designs that enhance the user experience and elevate brand identity.",
      twitter: "https://twitter.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
    {
      name: "Usman Rasheed",
      role: "Marketing Director",
      image: "/images/usman.jpg",
      bio: "Strategic thinker driving brand growth and customer engagement.",
      bio1: "A strategic marketing expert with a knack for creating powerful brand narratives and building meaningful customer relationships. Usman excels in turning data-driven insights into impactful marketing strategies that drive growth and engagement.",
      twitter: "https://twitter.com/bobwilliams",
      linkedin: "https://linkedin.com/in/bobwilliams",
      github: "https://github.com/bobwilliams",
    },
  ];
export const metadata = {
    title: 'About Digital Pulse 360 | Leading Digital Innovation Agency',
    description: 'Learn about Digital Pulse 360\'s journey in digital innovation. Discover our story, meet our expert team, and explore our core values in web development, mobile apps, SEO, and digital marketing.',
    keywords: [
      'Digital Pulse 360',
      'digital agency',
      'about us',
      'company history',
      'digital innovation',
      'tech team',
      'company values',
      'digital transformation experts',
      'web development team',
      'digital marketing agency'
    ],
    openGraph: {
      title: 'About Digital Pulse 360 - Innovation Meets Excellence',
      description: 'Meet the team behind Digital Pulse 360 and discover how we\'re transforming the digital landscape with innovative solutions and cutting-edge technology.',
      url: 'https://digitalpulse360.com/about',
      siteName: 'Digital Pulse 360',
      images: [
        {
          url: '/images/about-og.jpg', // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: 'Digital Pulse 360 Team'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Digital Pulse 360',
      description: 'Discover our journey in digital innovation and meet the team shaping the future of digital transformation.',
      images: ['/images/about-og.jpg'], // Replace with your actual Twitter card image
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
      canonical: 'https://digitalpulse360.com/about'
    },
    other: {
      'schema-org': {
        '@type': 'Organization',
        name: 'Digital Pulse 360',
        description: 'A leading digital innovation agency specializing in web development, mobile apps, SEO, and digital marketing solutions.',
        foundingDate: '2020',
        founders: [
          {
            '@type': 'Person',
            name: 'Zubair Bashir',
            jobTitle: 'CEO & Founder'
          }
        ],
        employees: teamMembers.map(member => ({
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role
        })),
        url: 'https://digitalpulse360.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://digitalpulse360.com/logo.png' // Replace with actual logo URL
        },
        sameAs: [
          'https://twitter.com/digitalpulse360',
          'https://linkedin.com/company/digitalpulse360',
          'https://github.com/digitalpulse360'
          // Add other social media profiles
        ]
      }
    }
  }
  
  export default function AboutLayout({ children }) {
    return (
      <>
        {children}
      </>
    )
  }