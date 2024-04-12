import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion } from 'framer-motion'

import newBuildImage from '../images/atd-services/services-0.png'
import renovationImage from '../images/atd-services/services-1.png'
import waterblastingImage from '../images/atd-services/services-2.png'

function Services() {
  return (
    <>
      <section id="services" className="container pb-5 mb-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-primary mt-3 pt-5">Services</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="lead text-light mb-4 pb-5 pt-4">
              Checkout the services we offer before reaching out for a quote!
            </p>
          </motion.div>
        </div>
        <Container fluid="lg">
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <motion.img
                src={newBuildImage}
                className="img-fluid mb-5"
                style={{ borderRadius: '8%' }}
                alt=""
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3">New Builds</h2>
                <p className="lead text-light pb-5">
                  Painting new build homes is like adding the final brushstroke
                  to a blank canvas, bringing architectural dreams to life. With
                  each stroke, I imbue fresh structures with personality and
                  warmth, transforming bare walls into welcoming spaces. From
                  choosing the perfect palette to executing flawless finishes, I
                  ensure every corner reflects the vision and aspirations of its
                  future inhabitants. It's not just about painting walls; it's
                  about crafting havens where memories are born and cherished
                  for years to come.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center reverse-col pt-5">
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3">Renovations</h2>
                <p className="lead text-light pb-3">
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
                src={renovationImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%' }}
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center pt-5">
            <Col xs={12} md={6}>
              <motion.img
                src={waterblastingImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%' }}
                alt=""
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="center-text"
              >
                <h2 className="text-primary pt-3">Waterblasting</h2>
                <p className="lead text-light pb-3">
                  Waterblasting homes is like wielding nature's power to unveil
                  their true essence. With high-pressure streams, I strip away
                  layers of grime and weathered memories, revealing pristine
                  surfaces beneath. It's not just about cleanliness, but
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
