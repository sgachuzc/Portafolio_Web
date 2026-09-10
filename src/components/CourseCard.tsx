import type { Course } from "@/interfaces"
import { cn } from "@/lib/utils"

export const CourseCard: React.FC<Course> = ({ imageUrl, name, website }) => {
  return (
    <figure
      className={ cn(
            "relative h-full w-full cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-neutral-200 bg-white hover:border-[#F97316]",
            "hover:shadow-md hover:shadow-orange-500/10 hover:bg-orange-50 hover:transition-all hover:duration-200"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={ imageUrl } />
            <div className="flex flex-col">
              <figcaption className="text-xs font-medium dark:text-white">
                { name }
              </figcaption>
              <p className="text-xs dark:text-white/40"> { website }</p>
            </div>
          </div>
        </figure>
  )
}
