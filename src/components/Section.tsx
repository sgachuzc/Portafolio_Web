import type React from "react";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id}>
      <div className='w-11/12 sm:w-2/4 flex min-h-0 flex-col gap-y-3 mx-auto my-10' data-aos="fade-up">
        { children }
      </div>
    </section>
  );
}
