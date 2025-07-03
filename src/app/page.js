import Hero from "./Components/Hero/Hero"
import NewsletterPopup from "./Components/newsletter-popup"

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Replace with actual domain
  title: "Digital Pulse 360 | Full-Service Digital Agency",
  description:
    "Transform your business with Digital Pulse 360. Expert web development, mobile apps, SEO, social media marketing, analytics & UI/UX design services.",
  keywords: [
    "digital agency",
    "web development",
    "mobile development",
    "SEO services",
    "social media marketing",
    "market analytics",
    "UI/UX design",
    "Digital Pulse 360",
  ],
  openGraph: {
    title: "Digital Pulse 360 | Full-Service Digital Agency",
    description:
      "Transform your business with Digital Pulse 360. Expert web development, mobile apps, SEO, social media marketing, analytics & UI/UX design services.",
    type: "website",
    locale: "en_US",
    siteName: "Digital Pulse 360",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in your `public` folder
        width: 1200,
        height: 630,
        alt: "Digital Pulse 360 - Your Full-Service Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Pulse 360 | Full-Service Digital Agency",
    description:
      "Transform your business with Digital Pulse 360. Expert web development, mobile apps, SEO, social media marketing, analytics & UI/UX design services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function Home() {
  return (
    <div className="">
      <NewsletterPopup />
      <Hero />
    </div>
  )
}

