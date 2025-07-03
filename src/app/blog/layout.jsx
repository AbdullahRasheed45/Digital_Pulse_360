// app/blog/layout.tsx
export const metadata = {
    title: "Blog | Digital Pulse 360 - Insights & Tech Updates",
    description:
      "Explore expert insights, tutorials, and the latest updates in web development, mobile apps, SEO, UI/UX design, and digital marketing from Digital Pulse 360's team of professionals.",
    keywords: [
      "Digital Pulse 360 blog",
      "tech blog",
      "digital marketing insights",
      "web development tutorials",
      "SEO tips",
      "UI/UX design blog",
      "mobile development guides",
      "digital transformation",
      "tech industry updates",
    ],
    openGraph: {
      title: "Digital Pulse 360 Blog - Tech Insights & Digital Innovation",
      description:
        "Discover expert insights, tutorials, and updates in web development, mobile apps, SEO, UI/UX design, and digital marketing from industry leaders.",
      type: "website",
      url: "https://digitalpulse360.com/blog",
      siteName: "Digital Pulse 360",
      images: [
        {
          url: "/blog-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Digital Pulse 360 Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Digital Pulse 360 Blog - Tech Insights & Digital Innovation",
      description:
        "Discover expert insights, tutorials, and updates in web development, mobile apps, SEO, UI/UX design, and digital marketing from industry leaders.",
      images: ["/blog-og-image.jpg"],
    },
    alternates: {
      canonical: "https://digitalpulse360.com/blog",
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
  
  export default function BlogLayout({ children }) {
    return <>{children}</>;
  }
  