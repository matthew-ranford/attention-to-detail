import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { motion } from 'framer-motion'

function Navigation() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="background p-3">
          <Container fluid="lg">
            <Navbar.Brand href="#">
              <h1 className="px-5 text-light">
                <motion.div
                  className="px-3"
                  initial={{ y: -70, opacity: 0, scale: 0 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.5,
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                  }}
                >
                  <motion.span
                    animate={{ y: 0, opacity: 1, color: '#f8cf40' }}
                    transition={{ duration: 3.5 }}
                  >
                    A
                  </motion.span>
                  ttention
                </motion.div>{' '}
                <motion.div
                  className="px-3"
                  initial={{ y: -120, opacity: -1, scale: 0 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2.5,
                  }}
                >
                  <motion.span
                    animate={{ y: 0, opacity: 1, color: '#f8cf40' }}
                    transition={{ duration: 5.5 }}
                  >
                    T
                  </motion.span>
                  o
                </motion.div>{' '}
                <motion.div
                  className="px-3"
                  initial={{ y: -180, opacity: -1, scale: 0 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 3.2,
                  }}
                >
                  <motion.span
                    animate={{ y: 0, opacity: 1, color: '#f8cf40' }}
                    transition={{ duration: 6.5 }}
                  >
                    D
                  </motion.span>
                  etail
                </motion.div>
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="px-4"
            >
              <i className="bi bi-justify display-6 text-light"></i>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: '100%' }}
            >
              <Offcanvas.Header closeButton className="background">
                <Navbar.Brand>
                  <img
                    src="client/images/atd-logo.png"
                    className="img-fluid"
                    style={{ height: '50px' }}
                    alt="Barber logo"
                  />
                </Navbar.Brand>
              </Offcanvas.Header>
              <Offcanvas.Body className="text-center px-2 background">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#about">
                    <h2 className="text-light">About</h2>
                  </Nav.Link>
                  <Nav.Link href="#services">
                    <h2 className="text-light">Services</h2>
                  </Nav.Link>
                  <Nav.Link href="#projects">
                    <h2 className="text-light">Projects</h2>
                  </Nav.Link>
                  <Nav.Link href="#gallery">
                    <h2 className="text-light">Gallery</h2>
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <h2 className="text-light">Contact</h2>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation
