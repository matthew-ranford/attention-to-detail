import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { motion } from 'framer-motion'

function Gallery() {
  return (
    <>
      <section id="gallery" className="container pb-5 mb-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-primary mt-3 pt-5">Gallery</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="lead text-light mb-4 pb-5 pt-4">
              Some of our most recent work!
            </p>
          </motion.div>
        </div>
        <Container fluid="lg" className="pt-3">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
          >
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                  alt="First slide"
                  style={{ borderRadius: '5%' }}
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                  alt="Second slide"
                  style={{ borderRadius: '5%' }}
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                  alt="Third slide"
                  style={{ borderRadius: '5%' }}
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

export default Gallery
