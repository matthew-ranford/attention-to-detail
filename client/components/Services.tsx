import { Container, Row, Col } from 'react-bootstrap'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import newBuildImage from '../images/atd-services/services-0.jpg'
import renovationImage from '../images/atd-services/services-1.jpg'
import waterblastingImage from '../images/atd-services/services-2.jpg'
import roofPaintingImage from '../images/atd-services/services-3.jpg'

function Services() {
  const servicesText = useRef(null)
  const textInView = useInView(servicesText)

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-service-text',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-service-text', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [textInView])

  return (
    <>
      <section id="services" className="container pb-5 mb-5">
        <div className="text-center" ref={servicesText}>
          <h1 className="text-primary mt-5 pt-5 animate-service-text text-6xl">
            Services
          </h1>
          <p className="text-3xl text-light mb-4 pb-5 pt-4 animate-service-text font-medium">
            Checkout the services we offer before reaching out for a quote!
          </p>
        </div>
        <Container fluid="lg">
          <Row className="justify-content-center align-items-center pb-3 mb-5">
            <Col xs={12} md={6}>
              <motion.img
                src={newBuildImage}
                className="img-fluid mb-5"
                style={{ borderRadius: '8%' }}
                alt="Exterior painted new build home"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3 text-4xl">New Builds</h2>
                <p className="text-xl leading-7 text-secondary font-medium pb-5">
                  Whether you need a fresh coat of paint to spruce up your
                  exisiting home or colour advice to shape your new one.
                  Attention to Detail Decorators are here for all of your
                  interior & exterior painting needs.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center reverse-col pt-5 mt-3 mb-5">
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3 text-4xl">Renovations</h2>
                <p className="text-xl leading-7 text-secondary font-medium pb-3">
                  Whether renovating an existing space or adding square meters
                  to your home, Attention to Detail is here for all your
                  interior and exterior painting needs.
                </p>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.img
                aria-hidden="true"
                src={renovationImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%' }}
                alt="Exterior painted home being renovated"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center pt-5 mt-3">
            <Col xs={12} md={6}>
              <motion.img
                src={roofPaintingImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%' }}
                alt="Newly painted roof"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3 text-4xl">Roof Painting</h2>
                <p className="text-xl leading-7 text-secondary font-medium pb-3">
                  Transform your home&apos;s exterior with our professional roof
                  painting services. Say goodbye to dull weathered roofs and
                  hello to vibrant long-lasting colours. Whether you&apos;re
                  looking to refresh the look of your home, increase its value
                  before selling, or have it protected from the elements, roof
                  painting services are the perfect solution.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center reverse-col pt-5 mt-3 mb-5">
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3 text-4xl">Waterblasting</h2>
                <p className="text-xl leading-7 text-secondary font-medium pb-3">
                  Revitalize your surfaces with our water blasting services, and
                  say farewell to grime, mold, and slippery surfaces, whether
                  it&apos;s your driveway, patio, deck, or exterior of your
                  home, our water blasting services will have it looking brand
                  new.
                </p>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.img
                aria-hidden="true"
                src={waterblastingImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%' }}
                alt="Waterblasting deck"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.8,
                  type: 'spring',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
