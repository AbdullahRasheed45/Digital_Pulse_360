"use client"
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Reply, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const CommentsSection = forwardRef(function CommentsSection(
  {
    comments,
    comment,
    replyTo,
    replyText,
    isSubmitting,
    onCommentChange,
    onReplyTextChange,
    onComment,
    onReply,
    onSetReplyTo,
  },
  ref
) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="mt-16 pt-16 border-t border-border"
    >
      <h3 className="text-2xl font-bold mb-8">Comments ({comments.length})</h3>

      <div className="mb-8">
        <Textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => onCommentChange(e.target.value)}
          className="min-h-[100px] bg-background/5 border-border mb-4"
        />
        <Button
          onClick={onComment}
          className="bg-primary hover:bg-primary/90"
          disabled={!comment.trim() || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Posting...
            </>
          ) : (
            "Post Comment"
          )}
        </Button>
      </div>

      <div className="space-y-8">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            replyTo={replyTo}
            replyText={replyText}
            isSubmitting={isSubmitting}
            onReplyTextChange={onReplyTextChange}
            onReply={onReply}
            onSetReplyTo={onSetReplyTo}
          />
        ))}
      </div>
    </motion.div>
  );
});

function CommentCard({
  comment,
  replyTo,
  replyText,
  isSubmitting,
  onReplyTextChange,
  onReply,
  onSetReplyTo,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background/5 rounded-lg p-6"
    >
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage src={comment.authorImage} />
          <AvatarFallback>{comment.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="font-medium">{comment.author}</span>
            <span className="text-sm text-muted-foreground">
              {new Date(comment.date).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 text-muted-foreground">{comment.text}</p>

          <div className="mt-4 flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => onSetReplyTo(comment.id)}
            >
              <Reply className="h-4 w-4 mr-2" />
              Reply
            </Button>
          </div>

          {replyTo === comment.id && (
            <div className="mt-4">
              <Textarea
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => onReplyTextChange(e.target.value)}
                className="min-h-[80px] bg-background/5 border-border mb-4"
              />
              <div className="flex space-x-2">
                <Button
                  onClick={() => onReply(comment.id)}
                  className="bg-primary hover:bg-primary/90"
                  disabled={!replyText.trim() || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Replying...
                    </>
                  ) : (
                    "Reply"
                  )}
                </Button>
                <Button variant="ghost" onClick={() => onSetReplyTo(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {comment.replies.length > 0 && (
            <div className="mt-4 space-y-4 pl-8 border-l-2 border-border">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src={reply.authorImage} />
                    <AvatarFallback>{reply.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{reply.author}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(reply.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{reply.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
