import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Loader from './Loader'
import DelayedRender from './DelayedRender'
import CarouselBackground from './Carousel'
import Navigation from './Navbar'

function App() {
  return (
    <>
      {/* <Loader /> */}
      <div className="body">
        <div className="navbar-container">
          <Navigation />
        </div>
        <CarouselBackground />
        {/* <DelayedRender delay={0}> */}
        <div className="background">
          <About />
          <Services />
          <Projects />
          {/* <div className="background-change"> */}
          <Gallery />
          {/* </div> */}
          <div className="background-change">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
      {/* </DelayedRender> */}
    </>
  )
}

export default App
