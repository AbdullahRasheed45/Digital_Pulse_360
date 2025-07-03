import { BlogPosts } from "../libs/BlogPosts"
import BlogPost from "./BlogPost"

export async function generateStaticParams() {
  return BlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Page() {
  return <BlogPost />
}

