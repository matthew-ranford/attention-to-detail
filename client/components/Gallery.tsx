import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import galleryExteriorImages from '../galleryExteriorData'
import galleryInteriorImages from '../galleryInteriorData'

function Gallery() {
  const galleryText = useRef(null)
  const textInView = useInView(galleryText)

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

  return (
    <>
      <section id="gallery" className="container pb-5 mb-5">
        <div className="text-center" ref={galleryText}>
          <h1 className="text-primary mt-3 pt-5 animate-gallery-text">
            Gallery
          </h1>

          <p className="lead text-light mb-4 pb-5 pt-4 animate-gallery-text">
            Some more photos of work we have been proud to complete!
          </p>
        </div>
        <Container fluid="lg" className="pt-3">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <h1 className="text-primary pt-3 pb-5 text-center">
              Exterior Painting
            </h1>
            <Carousel data-bs-theme="dark">
              {galleryExteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100"
                      style={{ borderRadius: '5%' }}
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
          >
            <h1 className="text-primary mt-5 pt-5 pb-5 text-center">
              Interior Painting & Decorating
            </h1>
            <Carousel data-bs-theme="dark">
              {galleryInteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100"
                      style={{ borderRadius: '5%' }}
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
