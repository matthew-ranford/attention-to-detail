import Navigation from './Navbar'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import CarouselBackground from './Carousel'

function App() {
  return (
    <>
      <div className="navbar-container">
        <Navigation />
      </div>
      <CarouselBackground />
      <div className="background">
        <About />
        <Services />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
