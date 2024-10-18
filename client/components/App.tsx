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
      <DelayedRender delay={115}>
        <div className="background">
          <About />
          <div className="background-change">
            <Services />
          </div>
          <Projects />
          <div className="background-change">
            <Gallery />
          </div>
          <Contact />
          <Footer />
        </div>
      </DelayedRender>
    </>
  )
}

export default App
