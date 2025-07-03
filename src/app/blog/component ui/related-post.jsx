"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function RelatedPosts({ posts }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-16 pt-16 border-t border-border"
    >
      <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center text-primary mt-4 group-hover:translate-x-2 transition-transform">
              Read More
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}