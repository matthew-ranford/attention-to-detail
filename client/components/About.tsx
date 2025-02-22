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
      <section className="container relative pt-10 md:pt-44 pb-5">
        <Container fluid="lg" id="about">
          <div
            className="absolute left-0 lg:left-[34%] overflow-hidden"
            ref={dividerImage}
          >
            {' '}
            <img
              src={divider}
              alt="Line divider"
              width="100%"
              loading="eager"
              decoding="async"
              className="hidden md:block animate-divider"
            />
          </div>
          <div className="md:pt-20">
            <h1 className="secondary-header pb-10 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-left lg:text-right lg:mx-32">
              Who We Are
            </h1>{' '}
            <div
              className="z-50 absolute w-[230px] sm:w-[350px] lg:w-[500px] 2xl:w-[650px] left-[40%] md:left-[55%] top-[76%] md:top-[92%] lg:top-[105%] xl:top-[100%] 2xl:top-[105%] roboto-paragraph text-lg md:text-xl 2xl:text-2xl"
              ref={aboutText}
            >
              <p className="animate-text pt-4 sm:pt-0 -mt-2 sm:-mt-2 md:-mt-1 lg:-mt-10 xl:-mt-2">
                Our founder Corey Daken has been working in the industry for
                over 10 years bringing a range of experience with him.{' '}
              </p>
              <p className="animate-text text-left pt-4 -mx-24 w-[370px] lg:w-[500px]  2xl:w-[650px] sm:-mt-4 sm:-mx-0">
                His work has involved collaborating with architects, interior
                designers, construction companies and home owners to meet the
                results that his clients desire.
              </p>
              <p className="animate-text -mx-24 w-[350px] lg:w-[500px] 2xl:w-[650px] sm:-mx-0">
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
              alt="Decorative exterior painting"
              width=""
              loading="lazy"
              decoding="async"
              className="absolute -left-[15%] md:left-0 overflow-hidden animate-image"
            />
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
