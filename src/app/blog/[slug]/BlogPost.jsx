"use client"

import { useParams } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { BlogPosts } from "../libs/BlogPosts"
import BlogPostSkeleton from "./BlogPostSkeleton"
import { ShareButton } from "../component ui/share-button"
import { BlogHeader } from "../component ui/blog-header"
import { BlogContent } from "../component ui/blog-content"
import { CommentsSection } from "../component ui/comment-section"
import { RelatedPosts } from "../component ui/related-post"

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [replyTo, setReplyTo] = useState(null)
  const [replyText, setReplyText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const commentsRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true)
      try {
        const foundPost = BlogPosts.find((p) => p.slug === params?.slug)
        if (foundPost) {
          setPost(foundPost)
          const storedLikes = localStorage.getItem(`blog-${foundPost.slug}-likes`)
          const isLikedStored = localStorage.getItem(`blog-${foundPost.slug}-isLiked`)
          const storedComments = localStorage.getItem(`blog-${foundPost.slug}-comments`)
          if (storedLikes) setLikes(Number.parseInt(storedLikes))
          if (isLikedStored) setIsLiked(isLikedStored === "true")
          if (storedComments) setComments(JSON.parse(storedComments))
        }
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPost()
  }, [params?.slug])

  const handleLike = () => {
    if (!post) return
    try {
      const newLikes = likes + (isLiked ? -1 : 1)
      setLikes(newLikes)
      setIsLiked(!isLiked)
      localStorage.setItem(`blog-${post.slug}-likes`, newLikes.toString())
      localStorage.setItem(`blog-${post.slug}-isLiked`, (!isLiked).toString())
    } catch (error) {
      console.error("Error updating likes:", error)
    }
  }

  const scrollToComments = () => {
    commentsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (isLoading) {
    return <BlogPostSkeleton />
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog" className="text-blue-400 hover:underline inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to blog list
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-blue-950 to-black text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />
      <ShareButton onShare={() => {}} />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <BlogHeader post={post} readingTime={Math.ceil(post.content?.split(/\s+/).length / 200)} />
          <article className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-gray-100">
            <BlogContent
              post={post}
              likes={likes}
              isLiked={isLiked}
              comments={comments}
              onLike={handleLike}
              onScrollToComments={scrollToComments}
            />
            <CommentsSection
              ref={commentsRef}
              comments={comments}
              comment={comment}
              replyTo={replyTo}
              replyText={replyText}
              isSubmitting={isSubmitting}
              onCommentChange={setComment}
              onReplyTextChange={setReplyText}
            />
          </article>
          <RelatedPosts
            posts={BlogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)}
          />
        </motion.div>
      </main>
    </div>
  )
}

