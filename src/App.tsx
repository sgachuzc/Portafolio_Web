import { Navbar } from './components/Navbar';
import { ExperienceSection, HeroSection } from './sections';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection/>
        <ExperienceSection />
      </main>
    </>
  )
}

export default App
