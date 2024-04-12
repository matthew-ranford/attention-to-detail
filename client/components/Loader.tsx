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
        delay: 0.1,
      })
        .from(['#title-0', '#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '+=15',
          stagger: 0.5,
        })
        .to(['#title-0', '#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '-=15',
          delay: 0.3,
          stagger: 0.5,
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
          className="h-screen p-10 bg-zinc-800 absolute z-10 w-full flex flex-col place-items-center gap-15 tracking-tight"
        >
          <img
            id="title-0"
            src="client/images/atd-logo.png"
            className="img-fluid"
            alt="Company logo"
            height={200}
            width={200}
          />

          <h1 className="display-4 text-zinc-200 mt-20" id="title-1">
            Attention
          </h1>
          <h1 className="display-4 text-zinc-200" id="title-2">
            To
          </h1>
          <h1 className="display-4 text-zinc-200" id="title-3">
            Detail
          </h1>
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
