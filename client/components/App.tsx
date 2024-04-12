import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Loader from './Loader'
import DelayedRender from './DelayedRender'

function App() {
  return (
    <>
      <Loader />

      <DelayedRender delay={3500}>
        <div className="background">
          <About />
          <Services />
          <Projects />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </DelayedRender>
    </>
  )
}

export default App
