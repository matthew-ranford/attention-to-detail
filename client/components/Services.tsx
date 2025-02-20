import { Container, Row, Col } from 'react-bootstrap'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import newBuildImage from '../images/atd-services/services-0.png'
import renovationImage from '../images/atd-services/services-1.png'
import roofPaintingImage from '../images/atd-services/services-2.png'
import waterblastingImage from '../images/atd-services/services-3.png'

import divider from '../images/line-divider.png'

function Services() {
  const servicesText = useRef(null)
  const textInView = useInView(servicesText, { once: true })

  const dividerImage = useRef(null)
  const dividerInView = useInView(dividerImage, { once: true })

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

  useEffect(() => {
    if (dividerInView) {
      animate(
        '.animate-divider-1',
        { opacity: 1, x: 0 },
        {
          duration: 1.2,
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-divider-1', { opacity: 0, x: 1000 }, { duration: 0 })
    }
  }, [dividerInView])

  return (
    <>
      <section
        id="services"
        className="container relative mt-[30rem] pt-10 md:pt-24 pb-5"
      >
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
              className="hidden md:block animate-divider-1"
            />
          </div>

          <div className="md:pt-20" ref={servicesText}>
            <h1 className="secondary-header pb-2 text-black text-[3.2rem] md:text-6xl 2xl:text-7xl md:text-center animate-service-text">
              Our Services
            </h1>
            <div className="roboto-paragraph max-w-[560px] text-lg md:text-xl 2xl:text-2xl animate-service-text mx-auto pb-10">
              <p className="animate-service-text">
                Attention to Detail Painting & Decorating services is located in
                the Hutt Valley region, and works all over the Greater
                Wellington region.
              </p>
              <p className="animate-service-text">
                {' '}
                We are here for all of your interior & exterior painting needs.{' '}
              </p>
            </div>
          </div>
          <Row className="justify-content-center align-items-center md:pt-10">
            <Col xs={12} md={6}>
              <motion.img
                src={newBuildImage}
                className="img-fluid"
                style={{ borderRadius: '6%' }}
                alt="Exterior painted new build home"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
                className="center-text"
              >
                <h2 className="secondary-header text-[#883E1B] text-[3.2rem] md:text-4xl 2xl:text-7xl mx-10">
                  New Builds
                </h2>
                <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl mx-10 pt-4">
                  Whether you need a fresh coat of paint to spruce up your
                  exisiting home or colour advice to shape your new one.
                  Attention to Detail Decorators are here for all of your
                  interior & exterior painting needs.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center reverse-col ">
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
                className="center-text"
              >
                <h2 className="secondary-header text-[#1281DD] text-[3.2rem] md:text-4xl 2xl:text-7xl mx-10">
                  Renovations
                </h2>
                <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl mx-10 pt-4">
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
                initial={{ opacity: 0, x: 10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
              />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center ">
            <Col xs={12} md={6}>
              <motion.img
                src={roofPaintingImage}
                className="img-fluid mt-5 mb-5"
                style={{ borderRadius: '8%' }}
                alt="Newly painted roof"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
              />
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
                className="center-text"
              >
                <h2 className="secondary-header text-[#273859] text-[3.2rem] md:text-4xl 2xl:text-7xl mx-10">
                  Roof Painting
                </h2>
                <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl mx-10 pt-4">
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
          <Row className="justify-content-center align-items-center reverse-col ">
            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
                className="center-text"
              >
                <h2 className="secondary-header text-[#A75239] text-[3.2rem] md:text-4xl 2xl:text-7xl mx-10">
                  Waterblasting
                </h2>
                <p className="roboto-paragraph text-lg md:text-xl 2xl:text-2xl mx-10 pt-4">
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
                initial={{ opacity: 0, x: 10 }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                  stiffness: 50,
                  damping: 8,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 'all' }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services
