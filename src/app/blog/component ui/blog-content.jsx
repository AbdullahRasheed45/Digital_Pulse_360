"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "../libs/utils";

export function BlogContent({ post, likes, isLiked, comments, onLike, onScrollToComments }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative h-[500px] mb-12 rounded-xl overflow-hidden"
      >
        <Image src={post.image || "/placeholder.svg"} unoptimized alt={post.title} fill className="object-cover" priority />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="prose prose-lg prose-invert max-w-none"
      >
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
        <div className="text-muted-foreground leading-relaxed">{post.content}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-between mt-12 py-8 border-t border-border"
      >
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn("flex items-center space-x-2", isLiked ? "text-primary" : "text-muted-foreground")}
                  onClick={onLike}
                >
                  <ThumbsUp className="h-5 w-5" />
                  <span>{likes}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isLiked ? "Unlike this article" : "Like this article"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-muted-foreground"
                  onClick={onScrollToComments}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{comments.length}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </motion.div>
    </>
  );
}
