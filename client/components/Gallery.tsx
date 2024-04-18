import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { motion } from 'framer-motion'

import galleryExteriorImages from '../galleryExteriorData'
import galleryInteriorImages from '../galleryInteriorData'

function Gallery() {
  return (
    <>
      <section id="gallery" className="container pb-5 mb-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-primary mt-3 pt-5">Gallery</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="lead text-light mb-4 pb-5 pt-4">
              Some more photos of work we have been proud to complete!
            </p>
          </motion.div>
        </div>
        <Container fluid="lg" className="pt-3">
          <h1 className="text-primary pt-3 pb-5 text-center">
            Exterior Painting
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <Carousel data-bs-theme="dark">
              {galleryExteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100"
                      style={{ borderRadius: '8%' }}
                      alt={'Slide image' + image.id}
                    />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </motion.div>
          <h1 className="text-primary pt-5 pb-5 text-center">
            Interior Painting & Decorating
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <Carousel data-bs-theme="dark">
              {galleryInteriorImages.map((image) => {
                return (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.image}
                      className="d-block w-100"
                      style={{ borderRadius: '8%' }}
                      alt={'Slide image' + image.id}
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
