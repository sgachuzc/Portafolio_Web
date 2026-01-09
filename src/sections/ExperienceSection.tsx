import { Accordion } from "@/components/Accordion";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";
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
