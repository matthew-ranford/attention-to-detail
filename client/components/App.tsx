import Navigation from './Navbar'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'

function App() {
  return (
    <>
      <Navigation />
      <div className="background">
        <About />
        <Services />
        <Projects />
        <Gallery />
      </div>
    </>
  )
}

export default App
