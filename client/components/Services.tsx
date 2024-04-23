import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import { motion, animate, stagger, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import newBuildImage from '../images/atd-services/services-0.png'
import renovationImage from '../images/atd-services/services-1.png'
import waterblastingImage from '../images/atd-services/services-2.png'
import renovationVideo from '../images/atd-services/spray-video.mp4'

function Services() {
  const [showRenovationModal, setShowRenovationModal] = useState(false)

  const handleCloseModal = () => setShowRenovationModal(false)
  const handleShowModal = () => setShowRenovationModal(true)

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
                onClick={handleShowModal}
                aria-hidden="true"
                src={renovationImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%', cursor: 'pointer' }}
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
              <Modal
                show={showRenovationModal}
                onHide={handleCloseModal}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: 'rgb(37, 37, 37, 0.95)',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="text-primary">
                      <h2 className="px-2">Spray unit in action</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <video controls autoPlay style={{ borderRadius: '5%' }}>
                      <track kind="captions" label="Spray Video" />
                      <source src={renovationVideo} type="video/mp4" />
                    </video>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center pt-5 mt-3">
            <Col xs={12} md={6}>
              <motion.img
                src={waterblastingImage}
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
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
