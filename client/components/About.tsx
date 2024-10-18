import { Container, Row, Col } from 'react-bootstrap'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import logo from '../images/ATD-logo.png'

function About() {
  const aboutText = useRef(null)
  const aboutImage = useRef(null)

  const textInView = useInView(aboutText)
  const imageInView = useInView(aboutImage)

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-text',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-text', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [textInView])

  useEffect(() => {
    if (imageInView) {
      animate(
        '.animate-image',
        { opacity: 1, x: 0 },
        {
          duration: 1,
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-image', { opacity: 0, x: 10 }, { duration: 0 })
    }
  }, [imageInView])

  return (
    <>
      <section id="about" className="container pt-5">
        <Container fluid="lg" className="pb-5">
          <Row className="justify-content-center align-items-center reverse-col">
            <Col
              xs={12}
              md={6}
              className="lead text-light pt-5"
              ref={aboutText}
            >
              <div>
                <p className="animate-text text-secondary leading-7 text-2xl font-medium">
                  Whether you need a fresh coat of paint to spruce up your
                  exisiting home or colour advice to shape your new one.
                  Attention to Detail Decorators are here for all of your
                  interior & exterior painting needs.
                </p>
                <p className="animate-text text-secondary leading-7 text-2xl pt-2 font-medium">
                  Our founder Corey Daken has been working in the industry for
                  over 10 years bringing a range of experience with him. His
                  work has involved collaboarting with architects, interior
                  designers, construction companies and home owners to meet the
                  results that his clients desire.
                </p>
                <p className="animate-text text-secondary leading-7 pt-2 text-2xl font-medium">
                  The ATD team work all across the Wellington region.
                </p>
              </div>
              <div className="pb-3">
                <motion.a
                  className="btn btn-primary px-3 py-2 mt-3 mb-3 animate-text"
                  href="#contact"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: '0px 0px 7px rgb(255, 255, 255)',
                    textShadow: '0px 0px 7px rgb(0, 0, 0)',
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <span className="text-xl font-medium">Get a Quote</span>
                </motion.a>
              </div>
            </Col>

            <Col xs={12} md={6} className="reverse-col" ref={aboutImage}>
              <motion.div className="animate-image">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Company logo"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About
