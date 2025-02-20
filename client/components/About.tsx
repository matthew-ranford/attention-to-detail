import { Container } from 'react-bootstrap'
import { animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import aboutImageMain from '../images/about-image.png'

import divider from '../images/line-divider.png'

function About() {
  const aboutText = useRef(null)
  const dividerImage = useRef(null)
  const aboutImage = useRef(null)

  const textInView = useInView(aboutText, { once: true })
  const dividerInView = useInView(dividerImage, { once: true })
  const aboutImageInView = useInView(aboutImage, { once: true })

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-text',
        { opacity: 1, y: 0 },
        { duration: 1, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-text', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [textInView])

  useEffect(() => {
    if (dividerInView) {
      animate(
        '.animate-divider',
        { opacity: 1, x: 0 },
        {
          duration: 1.2,
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-divider', { opacity: 0, x: 1000 }, { duration: 0 })
    }
  }, [dividerInView])

  useEffect(() => {
    if (aboutImageInView) {
      animate(
        '.animate-image',
        { opacity: 1, y: 0 },
        {
          duration: 1,
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-image', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [aboutImageInView])

  return (
    <>
      <section id="about" className="container relative pt-10 md:pt-44 pb-5">
        <Container fluid="lg">
          <div
            className="absolute left-0 lg:left-[34%] overflow-hidden"
            ref={dividerImage}
          >
            {' '}
            <img
              src={divider}
              alt="Attention To Detail Logo"
              width="100%"
              loading="eager"
              decoding="async"
              className="hidden md:block animate-divider"
            />
          </div>
          <div className="md:pt-20">
            <h1 className="header pb-10 text-black text-[3.2rem] md:text-6xl 2xl:text-7xl md:text-center">
              Who We Are
            </h1>{' '}
            <div
              className="z-50 absolute w-[230px] sm:w-[350px] lg:w-[500px] 2xl:w-[650px] left-[35%] md:left-[50%] top-[76%] md:top-[92%] lg:top-[105%] 2xl:top-[110%] roboto-paragraph text-lg md:text-xl 2xl:text-2xl"
              ref={aboutText}
            >
              <p className="animate-text">
                Our founder Corey Daken has been working in the industry for
                over 10 years bringing a range of experience with him. His work
                has involved collaborating with architects, interior designers,
                construction companies and home owners to meet the results that
                his clients desire.
              </p>
              <p className="animate-text">
                {' '}
                Whether you need a fresh coat of paint to spruce up your
                existing home or colour advice to shape your new one. Attention
                to Detail Decorators are here for all of your interior &
                exterior painting needs.
              </p>
            </div>
          </div>
          <div ref={aboutImage}>
            <img
              src={aboutImageMain}
              alt="Attention To Detail Logo"
              width=""
              loading="eager"
              decoding="async"
              className="absolute -left-[15%] md:left-0 animate-image"
            />
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
