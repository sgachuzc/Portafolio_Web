import { Section, Title } from "@/components"
import { stack } from "@/mocks"

export const TechSection = () => {
    return (
        <Section id="technologies">
            <Title title="Tecnologías" />
            <div className="flex flex-wrap gap-2.5">
                {stack.map((tech) => (
                    <div
                        key={tech}
                        data-aos="zoom-in"
                        className="group relative inline-flex cursor-default items-center overflow-hidden rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 font-mono text-xs font-medium tracking-wide text-neutral-800 transition-all duration-300 hover:border-[#F97316] hover:text-[#F97316] hover:shadow-[0_0_12px_rgba(249,115,22,0.2)]"
                    >
                        {/* Haz de luz de escaneo HUD */}
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#F97316]/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                        {/* Micro-led / punto de retícula */}
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-neutral-300 transition-colors duration-200 group-hover:bg-[#F97316] group-hover:shadow-[0_0_6px_#F97316]" />

                        {/* Nombre de la tecnología */}
                        <span className="relative z-10 select-none uppercase">
              {tech}
            </span>
                    </div>
                ))}
            </div>
        </Section>
    )
}