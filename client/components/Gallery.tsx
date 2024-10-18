import { Container, Carousel } from 'react-bootstrap'
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
      <section id="gallery" className="container pt-3 pb-3">
        <div className="text-center" ref={galleryText}>
          <h1 className="text-primary animate-gallery-text text-6xl">
            Gallery
          </h1>
          <p className="text-2xl text-light mb-2 pb-2 pt-4 animate-gallery-text font-medium">
            Some more photos of work we have been proud to complete!
          </p>
        </div>
        <Container fluid="lg" className="pt-3">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <h1 className="text-primary pb-3 text-center text-4xl">
              Exterior Painting
            </h1>
            <Carousel data-bs-theme="dark" interval={null} fade={true}>
              {galleryExteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100"
                      style={{ borderRadius: '2%' }}
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
            <h1 className="text-primary pb-3 text-center text-4xl">
              Interior Painting & Decorating
            </h1>
            <Carousel data-bs-theme="dark" interval={null} fade={true}>
              {galleryInteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100"
                      style={{ borderRadius: '2%' }}
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
