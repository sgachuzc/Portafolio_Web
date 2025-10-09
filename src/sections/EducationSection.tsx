import { Accordion } from "@/components/Accordion"
import { CourseCard } from "@/components/CourseCard"
import { Section } from "@/components/Section"
import { Title } from "@/components/Title"
import { Marquee } from "@/components/ui/marquee"
import type { Course } from "@/interfaces"

export const EducationSection = () => {

  const courses: Course[] = [
    {
      imageUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759989799/PortafolioWeb/fundaciontelefonica_cyyrzz.jpg",
      name: "Programación con Javascript",
      website: "Fundación Telefónica"
    },
    {
      imageUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759989799/PortafolioWeb/udemy_logo_ac4kkg.jpg",
      name: "Node: De cero a experto",
      website: "Udemy"
    },
    {
      imageUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759989799/PortafolioWeb/udemy_logo_ac4kkg.jpg",
      name: "React: De cero a experto",
      website: "Udemy"
    },
    {
      imageUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759990179/PortafolioWeb/laracasts_lgrcd0.svg",
      name: "Laravel From Scratch",
      website: "Laracasts"
    },
    {
      imageUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759989799/PortafolioWeb/devtalles_logo_kv7lod.jpg",
      name: "TypeScript",
      website: "DevTalles"
    },

  ]

  return (
    <Section id="education">
      <Title title="Educación"/>
      <Accordion
        key={"ITC"}
        logoUrl={"https://res.cloudinary.com/dksmbhbed/image/upload/v1759790278/PortafolioWeb/itc_d54hrq.png"}
        altText={"ITC"}
        title={"Instituto Tecnológico de Celaya"}
        subtitle={"Ingeniería en Sistemas Computacionales"}
        href={"https://celaya.tecnm.mx/"}
        period={"2014 - 2020"}
      />
      <br />
      <Title title="Cursos y Certificaciones"/>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {
            courses.map( course => (
              <CourseCard key={course.name} {...course} />
            ))
          }      
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </Section>
  )
}
