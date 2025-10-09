import { Accordion } from "@/components/Accordion";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
import type { Job } from "@/interfaces";

export const ExperienceSection = () => {

  const jobs: Job[] = [
    {
      company: 'NTT Data',
      logoUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759783839/PortafolioWeb/nttdata_logo_mqeqhl.png",
      subtitle: "Desarrollador Web",
      href: "",
      badges: [],
      start: 'Febrero 2022',
      end: 'Presente',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia repudiandae quaerat nam quia accusantium in aperiam deserunt, vitae deleniti nihil, rerum cumque velit reprehenderit veniam sunt, fugiat minus ad."
    },
    {
      company: 'Ayuntamiento de Celaya',
      logoUrl: "https://res.cloudinary.com/dksmbhbed/image/upload/v1759785644/PortafolioWeb/celaya_b3peqq.png",
      subtitle: "Desarrollador Web",
      href: "",
      badges: [],
      start: 'Octubre 2020',
      end: 'Julio 2021',
      description: "Participación full-stack del desarrollo de una aplicación web para la capacitación y evaluación en términos de seguridad vial a los empleados municipales. Líder del equipo de sistemas delegando tareas para las diversas actividades dentro de la dependencia. Programación y soporte de video conferencias para las capacitaciones virtuales de los empleados."
    }
  ]

  return (
    <Section id="experience">
      <Title title="Experiencia Laboral"/>
      {
        jobs.map( job => (
          <Accordion
            key={job.company}
            logoUrl={job.logoUrl}
            altText={job.company}
            title={job.company}
            subtitle={job.subtitle}
            href={job.href}
            badges={job.badges}
            period={`${job.start} - ${job.end}`}
            description={job.description}
          />
        ))
      }
    </Section>
  )
}
