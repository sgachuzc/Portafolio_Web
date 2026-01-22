import { Footer } from './components/Footer';
import { AboutSection, EducationSection, ExperienceSection, FeedbackSection, HeroSection, ProjectsSection, TechSection } from './sections';
import { Toaster } from 'sonner';
import { FloatingButton } from './components/FloatingButton';
import { useAppHooks } from './hooks/useAppHooks';

function App() {
  const { visible, isHighlighting, onScrollTop, isMobile } = useAppHooks();

  return (
    <>
      <main>
        <HeroSection isHighlighting={isHighlighting}/>
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
