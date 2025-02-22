import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Navigation from './Navbar'

function App() {
  return (
    <>
      <div className="body">
        <div className="navbar-container">
          <Navigation />
        </div>
        <Hero />
        <div className="background">
          <About />
          <Services />
          <Projects />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
