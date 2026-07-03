import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Projects from './components/Projects'
import Industries from './components/Industries'
import Career from './components/Career'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Industries />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
