import { ProjectCard } from "@/components/ProjectCard"
import { Section } from "@/components/Section"
import { Title } from "@/components/Title"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { Project } from "@/interfaces"

export const ProjectsSection = () => {

  const projects: Project[] = [
    {
      name: "Gestor de servicios para Consultora RPS",
      company: "Freelance",
      description: "Herramienta web elaborada para Risk Reduction & Problem Solving Consulting Services (RPS) para la administración de cursos y auditorias para empresas cliente, facilitando la gestión de inscripciones, seguimiento de progreso y generación de certificados.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Javascript"],
    },
    {
      name: "Portafolio Web",
      company: "Freelance",
      description: "Este proyecto fue desarrollado utilizando React, Typescript y Tailwind como parte de mi aprendizaje en dichas tecnologías. Fue una excelente oportunidad para poner en práctica mis conocimientos y habilidades en este framework, y me permitió profundizar en sus características y funcionalidades.",
      repoUrl: "https://github.com/sgachuzc/Portafolio_Web",
      technologies: ["React", "Typescript", "Tailwind"],
    },
    {
      name: "Gestor de Presupuesto Municipal",
      company: "Freelance",
      description: "Herramienta web de gestión financiera desarrollada para apoyar a la Presidencia Municipal de Celaya en la administración de sus recursos presupuestarios, facilitando la asignación, seguimiento y control de fondos para las diferentes direcciones y proyectos municipales.",
      technologies: ["NodeJS", "ExpressJS", "MySQL", "HTML", "CSS", "Javascript"],
    },
    {
      name: "Campus Virtual de Seguridad Vial",
      company: "Ayuntamiento de Celaya",
      description: "Plataforma web educativa diseñada para servir a la comunidad de aprendizaje de empleados municipales, proporcionándoles acceso a recursos pedagógicos especializados y herramientas de comunicación colaborativa, con el objetivo de fomentar la educación y concienciación en materia de seguridad vial.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "Javascript", "Bootstrap"],
    },
  ]
  return (
    <Section id="projects">
      <Title title="Proyectos" />
      <Carousel className="w-full" data-aos="zoom-in">
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
    </Section>
  )
}
