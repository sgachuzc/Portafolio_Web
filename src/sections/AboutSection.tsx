import { Section, Title } from "@/components"

export const AboutSection = () => {
  return (
    <Section id="about">
      <Title title="Acerca de Mí"/>
      <p className="text-justify">
          Soy Ingeniero en Sistemas egresado del TecNM en Celaya y Desarrollador Web
          Full Stack con más de 5 años y medio de experiencia, enfocado principalmente en el backend.
          Aunque me muevo con soltura en el frontend para construir interfaces funcionales y limpias,
          donde realmente disfruto estar es en la lógica detrás de escena: diseñando arquitecturas sólidas,
          optimizando bases de datos y creando APIs eficientes y escalables. Me motiva resolver problemas
          complejos con código limpio y aprender constantemente nuevas formas de mejorar cada sistema que
          construyo.
      </p>
    </Section>
  )
}
