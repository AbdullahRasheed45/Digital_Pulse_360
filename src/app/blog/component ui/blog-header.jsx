"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "../libs/utils";

export function BlogHeader({ post, readingTime }) {
  return (
    <>
      <Link
        href="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span
            className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground",
              "bg-gradient-to-r",
              post.gradient,
              "mb-4"
            )}
          >
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10 border-2 border-muted">
              <AvatarImage
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
              />
              <AvatarFallback>{post.author?.[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm">Author</span>
              <span className="font-medium">{post.author}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date
                ? new Date(post.date).toLocaleDateString()
                : "Unknown Date"}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {readingTime} min read
            </span>
          </div>
        </motion.div>
      </header>
    </>
  );
}
