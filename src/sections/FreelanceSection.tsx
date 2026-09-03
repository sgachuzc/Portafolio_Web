import { Accordion, Section, Title } from "@/components";
import { freelances } from "@/mocks";

export const FreelanceSection = () => {
  return (
    <Section id="freelance">
      <Title title="Consultoría Externa"/>
      {
        freelances.map( job => (
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
