import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

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
      <section id="projects" className="container">
        <div className="text-center">
          <h1 className="text-primary mt-3">Projects</h1>
          <p className="lead text-light mb-4 pb-3 pt-4">
            Some of our favourite projects we have completed!
          </p>
        </div>
        <Container fluid="lg" className="pt-3">
          <Row className="justify-content-center align-items-center">
            {/* ----------- FIRST PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <h2 className="text-primary text-center pt-3 pb-3">
                Project One
              </h2>
              <img
                onClick={handleShowProjectOne}
                style={{ cursor: 'pointer' }}
                src="https://images.unsplash.com/photo-1614194076674-0598e6dd5703?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid"
                alt=""
              />

              <Modal
                show={showProjectOne}
                onHide={handleCloseProjectOne}
                animation={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseProjectOne}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>

            {/* ----------- SECOND PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <h2 className="text-primary text-center pt-3 pb-3">
                Project Two
              </h2>
              <img
                onClick={handleShowProjectTwo}
                style={{ cursor: 'pointer' }}
                src="https://images.unsplash.com/photo-1614194076674-0598e6dd5703?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid"
                alt=""
              />

              <Modal
                show={showProjectTwo}
                onHide={handleCloseProjectTwo}
                animation={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseProjectTwo}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>

            {/* ----------- THIRD PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <h2 className="text-primary text-center pt-4 pb-4">
                Project Three
              </h2>
              <img
                onClick={handleShowProjectThree}
                style={{ cursor: 'pointer' }}
                src="https://images.unsplash.com/photo-1614194076674-0598e6dd5703?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid"
                alt=""
              />

              <Modal
                show={showProjectThree}
                onHide={handleCloseProjectThree}
                animation={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseProjectThree}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>

            {/* ----------- FOURTH PROJECT INFO ----------- */}

            <Col xs={12} md={6}>
              <h2 className="text-primary text-center pt-4 pb-4">
                Project Four
              </h2>
              <img
                onClick={handleShowProjectFour}
                style={{ cursor: 'pointer' }}
                src="https://images.unsplash.com/photo-1614194076674-0598e6dd5703?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid"
                alt=""
              />

              <Modal
                show={showProjectFour}
                onHide={handleCloseProjectFour}
                animation={true}
                style={{ backgroundColor: 'rgb(37, 37, 37, 0.95)' }}
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
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseProjectFour}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Projects
