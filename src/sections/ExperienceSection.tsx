import { Accordion, Section, Title } from "@/components";
import { jobs } from "@/mocks";

export const ExperienceSection = () => {
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
