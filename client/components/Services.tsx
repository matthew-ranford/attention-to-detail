import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

          <p className="text-3xl text-light mb-5 pb-5 pt-4 animate-service-text font-medium">
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
                  Painting new build homes is like adding the final brushstroke
                  to a blank canvas, bringing architectural dreams to life. With
                  each stroke, I imbue fresh structures with personality and
                  warmth, transforming bare walls into welcoming spaces. From
                  choosing the perfect palette to executing flawless finishes, I
                  ensure every corner reflects the vision and aspirations of its
                  future inhabitants. It is not just about painting walls; it is
                  about crafting havens where memories are born and cherished
                  for years to come.
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
                  Home renovations are my artistic playground, where walls
                  whisper tales of transformation. Armed with brushes and
                  palettes, I infuse each space with personality and vibrancy,
                  turning mundane rooms into captivating canvases. From soothing
                  neutrals to bold bursts of color, I wield my craft to evoke
                  emotions and elevate atmospheres. With meticulous precision
                  and boundless creativity, I bring dreams to life, one stroke
                  at a time.
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
                alt="Waterblasting deck"
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
                  Roof painting is like giving a crown to a home, protecting it
                  from the elements while enhancing its curb appeal. With
                  specialized coatings and meticulous application, I shield
                  roofs from weathering and UV damage, extending their lifespan
                  and preserving their integrity. Beyond functionality, I bring
                  aesthetic charm to every peak and slope, transforming dull
                  rooftops into focal points of architectural beauty. Its not
                  just about painting; its about safeguarding and elevating the
                  very essence of a home.
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
                  Waterblasting homes is like wielding natures power to unveil
                  their true essence. With high-pressure streams, I strip away
                  layers of grime and weathered memories, revealing pristine
                  surfaces beneath. It is not just about cleanliness, but
                  restoring dignity to each facade, breathing new vitality into
                  tired exteriors. With precision and care, I harness the force
                  of water to rejuvenate homes, leaving behind a refreshed
                  canvas ready for new stories to unfold.
                </p>
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.img
                aria-hidden="true"
                src={waterblastingImage}
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
        </Container>
      </section>
    </>
  )
}

export default Services
