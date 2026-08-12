import { Footer } from './components/Footer';
import { AboutSection, EducationSection, ExperienceSection, FeedbackSection, HeroSection, ProjectsSection, TechSection } from './sections';
import { Toaster } from 'sonner';
import { FloatingButton } from '@/components';
import { useAppHooks } from './hooks/useAppHooks';

function App() {
  const { visible, onScrollTop, isMobile } = useAppHooks();

  return (
    <>
      <main className="min-h-dvh bg-white">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <TechSection />
        <ProjectsSection />
        <FeedbackSection />
      </main>
      <FloatingButton visible={visible} onScrollTop={onScrollTop}/>
      <Toaster position={isMobile ? 'top-center' : 'bottom-left'} className='w-min max-w-sm' />
      <Footer />
    </>
  )
}

export default App
