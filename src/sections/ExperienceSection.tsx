import { Accordion } from "@/components/Accordion";
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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia repudiandae quaerat nam quia accusantium in aperiam deserunt, vitae deleniti nihil, rerum cumque velit reprehenderit veniam sunt, fugiat minus ad."
    }
  ]

  return (
    <>
      <section className='w-11/12 sm:w-2/4 flex min-h-0 flex-col gap-y-3 mx-auto my-5' id="experience">
        <h2 className="text-xl font-bold">Experiencia Laboral</h2>
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
      </section>
      <section className='w-11/12 sm:w-2/4 flex min-h-0 flex-col gap-y-3 mx-auto my-5'>
        <h2 className="text-xl font-bold">Educación</h2>
        <Accordion
          key={"ITC"}
          logoUrl={"https://res.cloudinary.com/dksmbhbed/image/upload/v1759790278/PortafolioWeb/itc_d54hrq.png"}
          altText={"ITC"}
          title={"Instituto Tecnológico de Celaya"}
          subtitle={"Ingeniería en Sistemas Computacionales"}
          href={"https://celaya.tecnm.mx/"}
          period={"2014 - 2020"}
        />
      </section>
    </>
  )
}
