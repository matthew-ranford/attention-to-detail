import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Navigation from './Navbar'
import CarouselBackground from './Carousel'

function Loader() {
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const comp = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#intro-slider', {
        xPercent: '0',
        opacity: 0,
        duration: 1,
      })
        .from(['#title-logo'], {
          opacity: 0,
          scale: 10,
        })
        .to(['#title-logo'], {
          opacity: 0,
          scale: 1,
          x: '-=250',
          delay: 1.2,
          duration: 0.7,
        })
        .to('#intro-slider', { xPercent: '-100', duration: 0.5 })
        .from('#main-layout', {
          opacity: 1,
          duration: 0.5,
        })
    }, comp)
    return () => context.revert()
  }, [])

  return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 absolute z-10 w-full flex flex-col place-items-center gap-15 tracking-tight pt-5"
          style={{ background: '#2b2b2b' }}
        >
          <img
            id="title-logo"
            src="client/images/atd-logo.png"
            className="img-fluid pt-5"
            alt="Company logo"
            height={400}
            width={400}
          />
        </div>
        {showApp && (
          <div className="navbar-container">
            <Navigation />
          </div>
        )}
        {showApp && <CarouselBackground />}
      </div>
    </>
  )
}

export default Loader
