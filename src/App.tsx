import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ExperienceSection, HeroSection, TechSection } from './sections';
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
        <TechSection />
      </main>
    </>
  )
}

export default App
