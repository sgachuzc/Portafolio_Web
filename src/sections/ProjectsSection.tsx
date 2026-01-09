import { useEffect, useState } from "react"
import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"
import { Title } from "@/components/Title"
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Proyecto {current} de {count}
      </div>
    </Section>
  )
}
