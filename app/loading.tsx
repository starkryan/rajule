import { Separator } from "@/components/ui/separator"

export default function Loading() {
  return (
    <div className="relative min-h-screen">
      {/* Navigation Skeleton */}
      <div className="h-16 border-b bg-muted/10 animate-pulse" />
      
      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-muted animate-pulse" />
          <div className="h-8 w-48 mt-8 bg-muted animate-pulse rounded-md" />
          <div className="h-6 w-36 mt-4 bg-muted animate-pulse rounded-md" />
          <div className="flex gap-2 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-20 bg-muted animate-pulse rounded-full" />
            ))}
          </div>
        </section>
        
        

        <Separator className="my-8" />

        {/* Skills Section Skeleton */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-6 w-6 bg-muted animate-pulse rounded" />
            <div className="h-8 w-48 bg-muted animate-pulse rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-lg border bg-card">
                <div className="h-6 w-24 bg-muted animate-pulse rounded-md mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-4 w-full bg-muted animate-pulse rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section Skeleton */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-6 w-6 bg-muted animate-pulse rounded" />
            <div className="h-8 w-48 bg-muted animate-pulse rounded-md" />
          </div>
          <div className="grid gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-lg border bg-card">
                <div className="h-6 w-48 bg-muted animate-pulse rounded-md mb-2" />
                <div className="h-4 w-32 bg-muted animate-pulse rounded mb-4" />
                <div className="h-16 w-full bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts Section Skeleton */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-6 w-6 bg-muted animate-pulse rounded" />
            <div className="h-8 w-48 bg-muted animate-pulse rounded-md" />
          </div>
          <div className="grid gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-lg border bg-card">
                <div className="h-6 w-64 bg-muted animate-pulse rounded-md mb-2" />
                <div className="flex gap-2 mb-4">
                  <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                </div>
                <div className="h-16 w-full bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
