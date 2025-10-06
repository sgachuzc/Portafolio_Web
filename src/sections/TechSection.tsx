import { Title } from "@/components/Title"
import { Badge } from "@/components/ui/badge"

export const TechSection = () => {

  const stack = [
    "Magento",
    "Laravel",
    "PHP",
    "MySQL",
    "NodeJs",
    "Express",
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "React",
    "Bootstrap",
    "TailwindCSS",
    "Git",
    "GitHub",
    "Gitlab",
    "Scrum"
  ]

  return(
    <section className='w-11/12 sm:w-2/4 flex min-h-0 flex-col gap-y-3 mx-auto my-10' id="technologies">
      <Title title="Tecnologías"/>
      <div className="flex flex-wrap gap-2">
        { 
          stack.map( tech => (
            <Badge key={tech} className="text-md hover:bg-primary/80">{ tech }</Badge>
          ))
        }
      </div>
    </section>
  )
}