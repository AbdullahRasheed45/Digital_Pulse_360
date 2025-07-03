import { BlogPosts } from '../libs/BlogPosts'

export async function generateMetadata({ params }) {
  // Await the params since they're a Promise in Next.js 15
  const { slug } = await params
  const post = BlogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found - Digital Pulse 360',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} - Digital Pulse 360 Blog`,
    description: post.excerpt || 'Read our latest insights on digital transformation, web development, SEO, and digital marketing.',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
      images: [
        {
          url: post.coverImage || '/images/default-blog-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || '/images/default-blog-image.jpg'],
    },
    authors: [{ name: post.author }],
    category: post.category,
    keywords: ['digital agency', 'web development', 'SEO', 'digital marketing', 'Digital Pulse 360', post.category],
  }
}

// Layout component also needs to handle async params
export default async function BlogLayout({ children, params }) {
  return (
    <>
      {children}
    </>
  )
}