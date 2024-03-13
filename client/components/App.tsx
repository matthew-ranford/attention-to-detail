import Navigation from './Navbar'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navigation />
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
