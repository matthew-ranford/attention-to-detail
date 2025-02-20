import { Container, Carousel } from 'react-bootstrap'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import galleryExteriorImages from '../galleryExteriorData'
import galleryInteriorImages from '../galleryInteriorData'

import divider from '../images/line-divider.png'

function Gallery() {
  const galleryText = useRef(null)
  const textInView = useInView(galleryText)

  const dividerImage = useRef(null)
  const dividerInView = useInView(dividerImage, { once: true })

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-gallery-text',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-gallery-text', { opacity: 0, y: -10 }, { duration: 0 })
    }
  }, [textInView])

  useEffect(() => {
    if (dividerInView) {
      animate(
        '.animate-divider-3',
        { opacity: 1, x: 0 },
        {
          duration: 1.2,
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-divider-3', { opacity: 0, x: 1000 }, { duration: 0 })
    }
  }, [dividerInView])

  return (
    <>
      <section id="gallery" className="container relative pt-10 md:pt-20 pb-5">
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
              className="hidden md:block animate-divider-3"
            />
          </div>
        </Container>
        <div className="md:pt-20" ref={galleryText}>
          <h1 className="secondary-header pb-2 text-black text-[3.2rem] md:text-6xl 2xl:text-7xl md:text-center animate-gallery-text">
            Our Gallery
          </h1>
          <p className="roboto-paragraph text-center text-lg md:text-xl 2xl:text-2xl animate-projects-text mx-auto pb-10 animate-gallery-text">
            Some more photos of work we have been proud to complete!
          </p>
        </div>
        <Container fluid="lg" className="pt-3">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <h1 className="secondary-header text-center text-4xl pb-4">
              Exterior Painting
            </h1>
            <Carousel
              data-bs-theme="dark"
              interval={null}
              fade={true}
              className="shadow-2xl"
            >
              {galleryExteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100 rounded-2xl shadow-2xl"
                      alt={'Exterior Painting Image' + image.id}
                      loading="lazy"
                      decoding="async"
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="pt-5"
          >
            <h1 className="secondary-header text-center text-4xl pt-10 pb-4">
              Interior Painting & Decorating
            </h1>
            <Carousel
              data-bs-theme="dark"
              interval={null}
              fade={true}
              className="shadow-2xl"
            >
              {galleryInteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100 rounded-2xl shadow-2xl"
                      alt={'Interior Painting & Decorating Image' + image.id}
                      loading="lazy"
                      decoding="async"
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

export default Gallery
