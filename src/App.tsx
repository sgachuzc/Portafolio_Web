import { Navbar } from './components/Navbar';
import { ExperienceSection, HeroSection, TechSection } from './sections';

function App() {

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
