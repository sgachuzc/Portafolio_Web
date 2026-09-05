import { useEffect, useState } from "react"
import { ProjectCard, Section, Title } from "@/components"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { projects } from "@/mocks"

export const ProjectsSection = () => {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState<number>(0)
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if(!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Section id="projects">
      <Title title="Proyectos" />
      <Carousel className="w-full" data-aos="zoom-in" opts={{align: "start", loop: true}} setApi={setApi}>
        <CarouselContent>
          {
            projects.map( project => (
              <CarouselItem key={project.name}>
                <ProjectCard {...project}/>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex h-10 w-10 rounded-lg border-neutral-200 bg-white text-neutral-600 shadow-sm transition-all duration-200 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white hover:shadow-md hover:shadow-orange-500/20 active:scale-95" />
        <CarouselNext className="hidden md:flex h-10 w-10 rounded-lg border-neutral-200 bg-white text-neutral-600 shadow-sm transition-all duration-200 hover:border-[#F97316] hover:bg-[#F97316] hover:text-white hover:shadow-md hover:shadow-orange-500/20 active:scale-95" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Proyecto {current} de {count}
      </div>
    </Section>
  )
}
