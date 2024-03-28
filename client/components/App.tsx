import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Loader from './Loader'

function App() {
  return (
    <>
      <Loader />
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
