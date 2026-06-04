import Starfield from './components/Starfield/Starfield'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ImpactStats from './components/ImpactStats/ImpactStats'
import TechStack from './components/TechStack/TechStack'
import WhyHire from './components/WhyHire/WhyHire'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app relative min-h-screen">
      <Starfield />
      <div className="bg-effect" />
      <div className="bg-noise" aria-hidden="true" />
      <div className="relative-z">
        <Navbar />
        <main>
          <Hero />
          <ImpactStats />
          <TechStack />
          <WhyHire />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
