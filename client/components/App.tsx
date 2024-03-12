import Navigation from './Navbar'
import About from './About'
import Services from './Services'
import Projects from './Projects'

function App() {
  return (
    <>
      <Navigation />
      <div className="background">
        <About />
        <Services />
        <Projects />
      </div>
    </>
  )
}

export default App
