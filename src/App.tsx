import {
    AboutSection,
    ContactSection,
    EducationSection,
    ExperienceSection,
    FreelanceSection,
    HeroSection,
    ProjectsSection,
    TechSection
} from './sections';
import { Toaster } from 'sonner';
import { FloatingButton, Footer } from '@/components';
import { useAppHooks } from './hooks/useAppHooks';

function App() {
  const { visible, onScrollTop, isMobile } = useAppHooks();

  return (
    <div className="relative min-h-dvh">
      <div className="fixed inset-0 -z-10 flex h-full w-full items-center justify-center pointer-events-none opacity-100">
        <img
          alt="background"
          src="./images/square-alt-grid-dark.svg"
          className="h-full w-full object-cover [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
        />
      </div>
      <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <FreelanceSection />
          <EducationSection />
          <TechSection />
          <ProjectsSection />
          <ContactSection />
      </main>
      <FloatingButton visible={visible} onScrollTop={onScrollTop}/>
      <Toaster position={isMobile ? 'top-center' : 'bottom-left'} className='w-min max-w-sm' />
      <Footer />
    </div>
  )
}

export default App
