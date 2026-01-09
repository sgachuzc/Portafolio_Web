import { Section } from "@/components/Section"
import { Title } from "@/components/Title"
import { Badge } from "@/components/ui/badge"
import { stack } from "@/mocks"

export const TechSection = () => {
  return(
    <Section id="technologies">
      <Title title="Tecnologías"/>
      <div className="flex flex-wrap gap-2">
        { 
          stack.map( tech => (
            <Badge key={tech} className="text-md hover:bg-primary/80" data-aos="zoom-in">{ tech }</Badge>
          ))
        }
      </div>
    </Section>
  )
}