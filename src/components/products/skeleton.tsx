import { Skeleton } from '../ui/skeleton'

export const TabsSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="w-full h-10 rounded-lg" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {Array.from({ length: 6 }, (item, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="w-full h-32 rounded-lg" />
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-1/2 h-4 rounded-lg" />
            <Skeleton className="w-full h-8 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
