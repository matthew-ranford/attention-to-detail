import Navigation from './Navbar'
import About from './About'
import Services from './Services'

function App() {
  return (
    <>
      <Navigation />
      <div className="background">
        <About />
        <Services />
      </div>
    </>
  )
}

export default App
