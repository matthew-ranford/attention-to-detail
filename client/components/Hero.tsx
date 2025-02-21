import hero from '../images/hero-section-atd-test.png'
import logo from '../images/logo.png'

import { Container } from 'react-bootstrap'
import { animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Hero() {
  const heroText = useRef(null)
  const textInView = useInView(heroText, { once: true })

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-hero-text',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-hero-text', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [textInView])

  return (
    <>
      <section id="home" className="p-4">
        <div className="relative">
          <Container fluid="lg">
            <img
              src={logo}
              alt="Attention To Detail Logo"
              width=""
              loading="eager"
              decoding="async"
              className="w-[150px] md:w-[200px] absolute mt-2 md:mt-4 -mx-3 2xl:-mx-6"
            />
          </Container>
          <img
            src={hero}
            alt="Attention To Detail Logo"
            width="100%"
            loading="eager"
            decoding="async"
            className="h-[620px] md:h-[680px] 2xl:h-[1300px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-[#006cc1] bg-opacity-30 sm:hidden"></div>
        </div>
        <Container fluid="lg">
          <div
            className="absolute top-[17%] md:top-[25%] 2xl:top-[30%] mt-10"
            ref={heroText}
          >
            <h1 className="font-bold text-[#006cc1] header text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl -ml-1 max-w-[350px] md:max-w-[665px] 2xl:max-w-[1200px] animate-hero-text">
              Elevate your space{' '}
              <span className="secondary-header text-black block mt-2 md:mt-4 2xl:pt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-[3.9rem] animate-hero-text">
                with Attention to Detail.
              </span>
            </h1>
            <p className="roboto-paragraph text-md md:text-xl 2xl:text-2xl max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] 2xl:max-w-[700px] mt-4 2xl:pt-2 animate-hero-text">
              At Attention to Detail Painting & Decorating services, we take
              pride in making spaces look their best. Whether it&apos;s a small
              update or a big change, our team works carefully to bring your
              ideas to life. Let us help you create a space you&apos;ll love.
            </p>
            <div className="block sm:inline-block pt-4 animate-hero-text">
              <button className="text-white w-[280px] sm:w-[200px] rounded shadow-2xl bg-[#006cc1] transition-all duration-1000 hover:bg-[#006dc1a4] sm:mt-7 px-5 py-3">
                Get a quote
              </button>
            </div>
            <div className="block sm:inline-block mt-2 animate-hero-text">
              <button className="w-[280px] sm:w-[200px] border rounded shadow-2xl bg-[#C1C7C7] border-black transition-all duration-1000 hover:bg-[#a4a8a8] mt-2 sm:mt-7 sm:ml-5 px-5 py-3">
                Our services
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
