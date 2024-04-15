import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { motion } from 'framer-motion'

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

  return (
    <>
      <section id="projects" className="container pb-5 mb-5">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-primary mt-3 pt-5">Projects</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <p className="lead text-light mb-4 pb-5 pt-4">
              Some of our favourite projects we have completed!
            </p>
          </motion.div>
        </div>
        <Container fluid="lg" className="pt-3">
          <Row className="justify-content-center align-items-center">
            {/* ----------- FIRST PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <h2 className="text-primary text-center pt-3 pb-3">
                  John Tocker
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectOne}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '8%' }}
                src={mainProjectOneImage}
                className="img-fluid"
                alt="first project"
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              <Modal
                show={showProjectOne}
                onHide={handleCloseProjectOne}
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
                      <h2 className="px-2">John Tocker</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade={true}>
                      {projectOneImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={'Project one image' + image.id}
                              style={{ borderRadius: '2%' }}
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
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <h2 className="text-primary text-center pt-3 pb-3">
                  Oriental Bay
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectTwo}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '8%' }}
                src={mainProjectTwoImage}
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              <Modal
                show={showProjectTwo}
                onHide={handleCloseProjectTwo}
                animation={true}
                centered={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                      <h2 className="px-2">Oriental Bay</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade={true}>
                      {projectTwoImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={'Project two image' + image.id}
                              style={{ borderRadius: '2%' }}
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
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <h2 className="text-primary text-center pt-3 pb-3">
                  Waikanae Hills
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectThree}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '8%' }}
                src={mainProjectThreeImage}
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              <Modal
                show={showProjectThree}
                onHide={handleCloseProjectThree}
                animation={true}
                centered={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                      <h2 className="px-2"> Waikanae Hills</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade={true}>
                      {projectThreeImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={'Project three image' + image.id}
                              style={{ borderRadius: '2%' }}
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
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <h2 className="text-primary text-center pt-3 pb-3">
                  John Allen
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectFour}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '8%' }}
                src={mainProjectFourImage}
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              <Modal
                show={showProjectFour}
                onHide={handleCloseProjectFour}
                animation={true}
                centered={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                      <h2 className="px-2">John Allen</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade={true}>
                      {projectFourImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={'Project four image' + image.id}
                              style={{ borderRadius: '2%' }}
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
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <h2 className="text-primary text-center pt-3 pb-3">Deano</h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectFive}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '8%' }}
                src={mainProjectFiveImage}
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              <Modal
                show={showProjectFive}
                onHide={handleCloseProjectFive}
                animation={true}
                centered={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                      <h2 className="px-2">Deano</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade={true}>
                      {projectFiveImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={'Project five image' + image.id}
                              style={{ borderRadius: '2%' }}
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
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1 }}
              >
                <h2 className="text-primary text-center pt-3 pb-3">Raumati</h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectSix}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '8%' }}
                src={mainProjectSixImage}
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
              />

              <Modal
                show={showProjectSix}
                onHide={handleCloseProjectSix}
                animation={true}
                centered={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                      <h2 className="px-2">Raumati</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade={true}>
                      {projectSixImages.map((image) => {
                        return (
                          <Carousel.Item key={image.id}>
                            <img
                              src={image.image}
                              alt={'Project six image' + image.id}
                              style={{ borderRadius: '2%' }}
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
