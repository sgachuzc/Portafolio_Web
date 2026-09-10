import { Accordion, CourseCard, Section, Title } from "@/components"
import { courses } from '@/mocks';

export const EducationSection = () => {
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
      <Title title="Cursos"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {
              courses.map( course => (
                  <CourseCard key={course.name} {...course} />
              ))
          }
      </div>
    </Section>
  )
}
