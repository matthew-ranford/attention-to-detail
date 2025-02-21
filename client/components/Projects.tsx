import { Modal, Carousel, Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import { motion, animate, stagger, useInView } from 'framer-motion'

import mainProjectOneImage from '../images/atd-projects-project-one/main-image-project-one.png'
import projectOneImages from '../projectOneImageData'
import mainProjectTwoImage from '../images/atd-projects-project-two/main-image-project-two.png'
import projectTwoImages from '../projectTwoImageData'
import mainProjectThreeImage from '../images/atd-projects-project-three/main-image-project-three.png'
import projectThreeImages from '../projectThreeImageData'
import mainProjectFourImage from '../images/atd-projects-project-four/main-image-project-four.png'
import projectFourImages from '../projectFourImageData'
import mainProjectFiveImage from '../images/atd-projects-project-five/main-image-project-five.png'
import projectFiveImages from '../projectFiveImageData'
import mainProjectSixImage from '../images/atd-projects-project-six/main-image-project-six.png'
import projectSixImages from '../projectSixImageData'

import divider from '../images/line-divider.png'

function Projects() {
  const [showProjectOne, setShowProjectOne] = useState(false)
  const [showProjectTwo, setShowProjectTwo] = useState(false)
  const [showProjectThree, setShowProjectThree] = useState(false)
  const [showProjectFour, setShowProjectFour] = useState(false)
  const [showProjectFive, setShowProjectFive] = useState(false)
  const [showProjectSix, setShowProjectSix] = useState(false)

  const handleCloseProjectOne = () => setShowProjectOne(false)
  const handleShowProjectOne = () => setShowProjectOne(true)

  const handleCloseProjectTwo = () => setShowProjectTwo(false)
  const handleShowProjectTwo = () => setShowProjectTwo(true)

  const handleCloseProjectThree = () => setShowProjectThree(false)
  const handleShowProjectThree = () => setShowProjectThree(true)

  const handleCloseProjectFour = () => setShowProjectFour(false)
  const handleShowProjectFour = () => setShowProjectFour(true)

  const handleCloseProjectFive = () => setShowProjectFive(false)
  const handleShowProjectFive = () => setShowProjectFive(true)

  const handleCloseProjectSix = () => setShowProjectSix(false)
  const handleShowProjectSix = () => setShowProjectSix(true)

  const projectsText = useRef(null)
  const textInView = useInView(projectsText, { once: true })

  const images = useRef(null)
  const imagesInView = useInView(images, { once: true })

  const dividerImage = useRef(null)
  const dividerInView = useInView(dividerImage, { once: true })

  useEffect(() => {
    if (textInView) {
      animate(
        '.animate-projects-text',
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.2), ease: 'circOut' }
      )
    } else {
      animate('.animate-projects-text', { opacity: 0, y: -20 }, { duration: 0 })
    }
  }, [textInView])

  useEffect(() => {
    if (imagesInView) {
      animate(
        '.animate-project-images',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.35, { startDelay: 0.1 }),
          ease: 'circOut',
        }
      )
    } else {
      animate(
        '.animate-project-images',
        { opacity: 0, x: -10 },
        { duration: 0 }
      )
    }
  }, [imagesInView])

  useEffect(() => {
    if (dividerInView) {
      animate(
        '.animate-divider-2',
        { opacity: 1, x: 0 },
        {
          duration: 1.2,
          ease: 'circOut',
        }
      )
    } else {
      animate('.animate-divider-2', { opacity: 0, x: 1000 }, { duration: 0 })
    }
  }, [dividerInView])

  return (
    <>
      <section id="projects" className="container relative pt-10 md:pt-32 pb-5">
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
              className="hidden md:block animate-divider-2"
            />
          </div>
        </Container>
        <div className="md:pt-20  mx-4 md:mx-10" ref={projectsText}>
          <h1 className="secondary-header pb-2 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:text-left max-w-[480px] ml-auto animate-projects-text">
            Our Projects
          </h1>
          <p className="roboto-paragraph text-left text-lg md:text-xl 2xl:text-2xl animate-projects-text pb-10 max-w-[470px] ml-auto pt-4">
            Some of our favourite renovation and new build projects we have
            completed!
          </p>
        </div>
        <Container fluid="lg" className="pt-3">
          <Row
            className="justify-content-center align-items-center"
            ref={images}
          >
            {/* ----------- FIRST PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <motion.img
                onClick={handleShowProjectOne}
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
                src={mainProjectOneImage}
                className="img-fluid mb-5 animate-project-images"
                alt="Exterior painted home and fence"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              <Modal
                show={showProjectOne}
                onHide={handleCloseProjectOne}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: '#dfd4cea2',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header className="background" closeButton>
                    <Modal.Title className="">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl secondary-header">
                        Rangihiroa Street, Waikanae
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    {/* <p className="text-xl leading-7 text-secondary font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p> */}
                    <Carousel fade={true}>
                      {projectOneImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={
                                'Exterior & Interior painting renovation' +
                                image.id
                              }
                              loading="lazy"
                              decoding="async"
                              className="rounded-2xl shadow-2xl"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>

            {/* ----------- SECOND PROJECT INFO ----------- */}
            <Col xs={12} md={6}>
              <motion.img
                onClick={handleShowProjectTwo}
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
                src={mainProjectTwoImage}
                className="img-fluid mb-5 animate-project-images"
                alt="Exterior painted new build"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              <Modal
                show={showProjectTwo}
                onHide={handleCloseProjectTwo}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: '#dfd4cea2',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header className="background" closeButton>
                    <Modal.Title className="">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  secondary-header">
                        Oriental Bay, Wellington
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    {/* <p className="text-xl leading-7 text-secondary font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p> */}
                    <Carousel fade={true}>
                      {projectTwoImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={
                                'Exterior & Interior painting renovation' +
                                image.id
                              }
                              loading="lazy"
                              decoding="async"
                              className="rounded-2xl shadow-2xl"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>

            {/* ----------- THIRD PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <motion.img
                onClick={handleShowProjectThree}
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
                src={mainProjectThreeImage}
                className="img-fluid mb-5 animate-project-images"
                alt="Interior painted new build"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              <Modal
                show={showProjectThree}
                onHide={handleCloseProjectThree}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: '#dfd4cea2',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header className="background" closeButton>
                    <Modal.Title className="">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl secondary-header">
                        Huia Street, Waikanae
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    {/* <p className="text-xl leading-7 text-secondary font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p> */}
                    <Carousel fade={true}>
                      {projectThreeImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={
                                'Exterior & Interior painting renovation' +
                                image.id
                              }
                              loading="lazy"
                              decoding="async"
                              className="rounded-2xl shadow-2xl"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>
            {/* ----------- FOURTH PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <motion.img
                onClick={handleShowProjectFour}
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
                src={mainProjectFourImage}
                className="img-fluid mb-5 animate-project-images"
                alt="Exterior & Interior painted renovation"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              <Modal
                show={showProjectFour}
                onHide={handleCloseProjectFour}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: '#dfd4cea2',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header className="background" closeButton>
                    <Modal.Title className="">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  secondary-header">
                        Kohekohe Road, Waikanae
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    {/* <p className="text-xl leading-7 text-secondary font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p> */}
                    <Carousel fade={true}>
                      {projectFourImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={
                                'Exterior & Interior painting renovation' +
                                image.id
                              }
                              loading="lazy"
                              decoding="async"
                              className="rounded-2xl shadow-2xl"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>

            {/* ----------- FIFTH PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <motion.img
                onClick={handleShowProjectFive}
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
                src={mainProjectFiveImage}
                className="img-fluid mb-5 animate-project-images"
                alt="Exterior & Interior painted new build"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              <Modal
                show={showProjectFive}
                onHide={handleCloseProjectFive}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: '#dfd4cea2',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header className="background" closeButton>
                    <Modal.Title className="">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  secondary-header">
                        Huia Street, Waikanae
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    {/* <p className="text-xl leading-7 text-secondary font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p> */}
                    <Carousel fade={true}>
                      {projectFiveImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={
                                'Exterior & Interior painting renovation' +
                                image.id
                              }
                              loading="lazy"
                              decoding="async"
                              className="rounded-2xl shadow-2xl"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>

            {/* ----------- SIXTH PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <motion.img
                onClick={handleShowProjectSix}
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
                src={mainProjectSixImage}
                className="img-fluid mb-5 animate-project-images"
                alt="Interior painted renovation"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 2,
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true, amount: 0.5 }}
              />

              <Modal
                show={showProjectSix}
                onHide={handleCloseProjectSix}
                animation={true}
                centered={true}
                style={{
                  backgroundColor: '#dfd4cea2',
                }}
                data-bs-theme="dark"
                size="lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1.5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Modal.Header className="background" closeButton>
                    <Modal.Title className="">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  secondary-header">
                        The Crescent, Raumati
                      </h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    {/* <p className="text-xl leading-7 text-secondary font-medium">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p> */}
                    <Carousel fade={true}>
                      {projectSixImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={
                                'Exterior & Interior painting renovation' +
                                image.id
                              }
                              loading="lazy"
                              decoding="async"
                              className="rounded-2xl shadow-2xl"
                            />
                          </Carousel.Item>
                        )
                      })}
                    </Carousel>
                  </Modal.Body>
                </motion.div>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Projects
