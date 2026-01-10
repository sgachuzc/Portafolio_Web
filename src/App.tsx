import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { AboutSection, EducationSection, ExperienceSection, FeedbackSection, HeroSection, ProjectsSection, TechSection } from './sections';
import AOS from 'aos';
import { Toaster } from 'sonner';

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main>
        <HeroSection/>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <TechSection />
        <ProjectsSection />
        <FeedbackSection />
      </main>
      <Toaster position={isMobile ? 'top-center' : 'bottom-left'} className='w-min max-w-sm' />
      <Footer />
    </>
  )
}

export default App
