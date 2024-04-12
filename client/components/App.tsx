import { useState, useEffect } from 'react'

import About from './About'
import Services from './Services'
import Projects from './Projects'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'
import Loader from './Loader'

function App() {
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader />
      {showApp && (
        <div className="background">
          <About />
          <Services />
          <Projects />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
