import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Navigation from './Navbar'
import CarouselBackground from './Carousel'
import DelayedRender from './DelayedRender'

import logo from '../images/atd-logo.png'

function Loader() {
  const comp = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#intro-slider', {
        xPercent: '0',
        opacity: 0,
        duration: 0.05,
      })
        .from(['#title-logo'], {
          opacity: 0,
          scale: 2.5,
        })
        .to(['#title-logo'], {
          opacity: 0,
          scale: 1,
          x: '-=250',
          delay: 0.7,
          duration: 0.5,
        })
        .to('#intro-slider', { xPercent: '-100', duration: 0.15 })
        .from('#main-layout', {
          opacity: 1,
          duration: 0.15,
        })
    }, comp)
    return () => context.revert()
  }, [])

  return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-svh p-10 absolute z-10 w-full flex flex-col place-items-center pt-5"
          style={{ background: '#2b2b2b' }}
        >
          <img
            id="title-logo"
            src={logo}
            className="img-fluid pt-5"
            alt="Company logo"
            loading="eager"
            rel="preload"
            height={400}
            width={400}
          />
        </div>
        <DelayedRender delay={115}>
          <div className="navbar-container">
            <Navigation />
          </div>
          <CarouselBackground />
        </DelayedRender>
      </div>
    </>
  )
}

export default Loader
