import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EducationSection, ExperienceSection, HeroSection, ProjectsSection, TechSection } from './sections';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection/>
        <ExperienceSection />
        <EducationSection />
        <TechSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
