import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { motion } from 'framer-motion'

import logo from '../images/atd-logo.png'

// TODO:
// Look at changing the font-size of the li items

const listVariants = {
  hidden: {
    y: -10,
    opacity: 0,
    scale: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.8,
      type: 'tween',
      stiffness: 200,
      damping: 20,
    },
  },
}

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
                    duration: 2,
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
                  initial={{ y: -50, opacity: -1, scale: 0 }}
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
                  initial={{ y: -150, opacity: -1, scale: 0 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                    duration: 2.8,
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
            <motion.div
              transition={{ ease: 'backInOut', duration: 0.5 }}
              whileHover={{
                x: -3,
              }}
            >
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="px-4"
              >
                <i className="bi bi-justify display-6 text-light"></i>
              </Navbar.Toggle>
            </motion.div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: '100%' }}
            >
              <Navbar.Toggle closeButton>
                <Navbar.Brand>
                  <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1.8 }}
                    animate={{ opacity: 1 }}
                    style={{ backgroundColor: 'black' }}
                  >
                    <h1 className="text-end text-light display-6 pe-1">
                      Close
                    </h1>
                    <img
                      src={logo}
                      className="img-fluid"
                      style={{ height: '200px' }}
                      alt="Company Logo"
                    />
                  </motion.div>
                </Navbar.Brand>
              </Navbar.Toggle>
              <Offcanvas.Body className="text-center px-2 background">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#about" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">About</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#services" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Services</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#projects" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Projects</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#gallery" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Gallery</li>
                    </motion.div>
                  </Nav.Link>
                  <Nav.Link href="#contact" className="nav-link">
                    <motion.div
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <li className="text-light display-6">Contact</li>
                    </motion.div>
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
