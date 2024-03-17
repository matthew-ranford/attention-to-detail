import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const [showProjectOne, setShowProjectOne] = useState(false)
  const [showProjectTwo, setShowProjectTwo] = useState(false)
  const [showProjectThree, setShowProjectThree] = useState(false)
  const [showProjectFour, setShowProjectFour] = useState(false)

  const handleCloseProjectOne = () => setShowProjectOne(false)
  const handleShowProjectOne = () => setShowProjectOne(true)

  const handleCloseProjectTwo = () => setShowProjectTwo(false)
  const handleShowProjectTwo = () => setShowProjectTwo(true)

  const handleCloseProjectThree = () => setShowProjectThree(false)
  const handleShowProjectThree = () => setShowProjectThree(true)

  const handleCloseProjectFour = () => setShowProjectFour(false)
  const handleShowProjectFour = () => setShowProjectFour(true)

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
                  Project One
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectOne}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '5%' }}
                src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                className="img-fluid"
                alt="first project"
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
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
                      <h2 className="px-2">Project One</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/80070375_105547584557182_8749752288730975304_n-c16d4d1680e2a1eda4456ca8877f04d2.jpeg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>{' '}
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
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
                  Project Two
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectTwo}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '5%' }}
                src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
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
                      <h2 className="px-2">Project Two</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/80070375_105547584557182_8749752288730975304_n-c16d4d1680e2a1eda4456ca8877f04d2.jpeg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>{' '}
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
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
                <h2 className="text-primary text-center pt-4 pb-4">
                  Project Three
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectThree}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '5%' }}
                src="https://atd-decorators.co.nz/static/20210423_113253-bb31cde6de68a21ab03924c7d2017bfa.jpg"
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
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
                      <h2 className="px-2">Project Three</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/80070375_105547584557182_8749752288730975304_n-c16d4d1680e2a1eda4456ca8877f04d2.jpeg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>{' '}
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
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
                <h2 className="text-primary text-center pt-4 pb-4">
                  Project Four
                </h2>
              </motion.div>
              <motion.img
                onClick={handleShowProjectFour}
                aria-hidden="true"
                style={{ cursor: 'pointer', borderRadius: '5%' }}
                src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                className="img-fluid"
                alt=""
                initial={{ opacity: 0, x: 20 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
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
                      <h2 className="px-2">Project Four</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="background">
                    <p className="lead text-light">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Exercitationem illo possimus quo expedita soluta similique
                      corporis itaque maxime neque ab.
                    </p>

                    <Carousel fade>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/80070375_105547584557182_8749752288730975304_n-c16d4d1680e2a1eda4456ca8877f04d2.jpeg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210422_142201-e03303898ede8ce2fe0d4811632af8b3.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>{' '}
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_151036-8ed556b3d31fbcc3362ca47516170222.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          src="https://atd-decorators.co.nz/static/20210316_153408-f71593f2203bcf6095c70c178f5dd80a.jpg"
                          className="img-fluid"
                          alt=""
                          style={{ borderRadius: '5%' }}
                        />
                      </Carousel.Item>
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
