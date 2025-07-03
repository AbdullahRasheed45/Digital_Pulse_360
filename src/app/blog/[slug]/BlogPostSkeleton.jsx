"use client"
import { Skeleton } from "../ui/skeleton";

export default function BlogPostSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button skeleton */}
          <Skeleton className="h-8 w-32 mb-8" />

          <header className="mb-12">
            {/* Category skeleton */}
            <Skeleton className="h-6 w-24 rounded-full mb-4" />

            {/* Title skeleton */}
            <div className="space-y-4 mb-6">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-3/4" />
            </div>

            {/* Author and metadata skeleton */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </header>

          {/* Featured image skeleton */}
          <Skeleton className="w-full aspect-video rounded-xl mb-12" />

          {/* Content skeleton */}
          <div className="space-y-4 mb-12">
            {/* Excerpt */}
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />

            {/* Main content */}
            <div className="space-y-4 mt-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-2/3" />
                </div>
              ))}
            </div>
          </div>

          {/* Interaction buttons skeleton */}
          <div className="flex items-center space-x-4 py-8 border-t border-border">
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-20" />
          </div>

          {/* Comments section skeleton */}
          <div className="mt-16 pt-16 border-t border-border">
            <Skeleton className="h-8 w-48 mb-8" />

            {/* Comment form skeleton */}
            <div className="mb-8">
              <Skeleton className="h-32 w-full mb-4" />
              <Skeleton className="h-10 w-32" />
            </div>

            {/* Comments list skeleton */}
            <div className="space-y-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-muted/5 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-20 w-full" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related posts skeleton */}
          <div className="mt-16 pt-16 border-t border-border">
            <Skeleton className="h-8 w-48 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="w-full aspect-video rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
